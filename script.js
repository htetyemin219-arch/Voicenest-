document.addEventListener('DOMContentLoaded', () => {
  // 1. 3 Languages & 9 Voice Actors System
  const voiceData = {
    'en-US': [
      { id: 'david', name: '1. David (US Male)' },
      { id: 'sarah', name: '2. Sarah (US Female)' },
      { id: 'michael', name: '3. Michael (US Deep Narration)' },
      { id: 'emily', name: '4. Emily (US Soft Storytelling)' },
      { id: 'james', name: '5. James (US Cinematic)' },
      { id: 'jessica', name: '6. Jessica (US Energetic)' },
      { id: 'robert', name: '7. Robert (US Dark Drama)' },
      { id: 'amanda', name: '8. Amanda (US Whisper)' },
      { id: 'brian', name: '9. Brian (US News Commercial)' }
    ],
    'my': [
      { id: 'aung', name: '1. Aung Aung (Myanmar Male)' },
      { id: 'susu', name: '2. Su Su (Myanmar Female)' },
      { id: 'thura', name: '3. Thura (Myanmar Soft Story)' },
      { id: 'kyaw', name: '4. Kyaw Kyaw (Myanmar Deep Voice)' },
      { id: 'mya', name: '5. Mya Mya (Myanmar Dramatic)' },
      { id: 'zaw', name: '6. Zaw Zaw (Myanmar Energetic)' },
      { id: 'hlahla', name: '7. Hla Hla (Myanmar Calming)' },
      { id: 'hein', name: '8. Hein Htet (Myanmar Ghost Story)' },
      { id: 'nilar', name: '9. Nilar (Myanmar Commercial)' }
    ],
    'ja': [
      { id: 'kenji', name: '1. Kenji (Japanese Male)' },
      { id: 'yuki', name: '2. Yuki (Japanese Female)' },
      { id: 'hiroshi', name: '3. Hiroshi (Japanese Anime Male)' },
      { id: 'sakura', name: '4. Sakura (Japanese Soft Female)' },
      { id: 'ryo', name: '5. Ryo (Japanese Deep Narrator)' },
      { id: 'hana', name: '6. Hana (Japanese Emotion)' },
      { id: 'taichi', name: '7. Taichi (Japanese Energetic)' },
      { id: 'mei', name: '8. Mei (Japanese Calm Whisper)' },
      { id: 'sora', name: '9. Sora (Japanese Commercial)' }
    ]
  };

  const langSelect = document.getElementById('langSelect');
  const voiceSelect = document.getElementById('voiceSelect');

  function updateVoices(lang) {
    if (!voiceSelect) return;
    voiceSelect.innerHTML = '';
    const voices = voiceData[lang] || voiceData['en-US'];
    voices.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.id;
      opt.textContent = v.name;
      voiceSelect.appendChild(opt);
    });
  }

  if (langSelect) {
    updateVoices(langSelect.value);
    langSelect.addEventListener('change', (e) => updateVoices(e.target.value));
  }

  // 2. Auto-Byte Calculator Logic
  const scriptInput = document.getElementById('scriptInput');
  const charCount = document.getElementById('charCount');
  const estTime = document.getElementById('estTime');
  const byteSize = document.getElementById('byteSize');
  const speedSlider = document.getElementById('speedSlider');

  function calculateAutoByte() {
    if (!scriptInput) return;
    const text = scriptInput.value;
    const len = text.length;
    const speed = parseFloat(speedSlider ? speedSlider.value : 1.0);

    // Estimation: ~15 chars per second adjusted by speech speed
    const seconds = len > 0 ? Math.ceil((len / 15) / speed) : 0;
    // Estimation: ~24 KB per second of 192kbps MP3 audio
    const kb = Math.ceil(seconds * 24);

    if (charCount) charCount.textContent = `${len} / 5000 chars`;
    if (estTime) estTime.textContent = seconds >= 60 ? `${Math.floor(seconds/60)}m ${seconds%60}s` : `${seconds}s`;
    if (byteSize) byteSize.textContent = `${kb} KB`;
  }

  if (scriptInput) scriptInput.addEventListener('input', calculateAutoByte);

  // 3. Sliders & Live Speed Sync
  const speedVal = document.getElementById('speedVal');
  if (speedSlider && speedVal) {
    speedSlider.addEventListener('input', (e) => {
      speedVal.textContent = `${parseFloat(e.target.value).toFixed(1)}x`;
      calculateAutoByte();
    });
  }

  const pitchSlider = document.getElementById('pitchSlider');
  const pitchVal = document.getElementById('pitchVal');
  if (pitchSlider && pitchVal) {
    pitchSlider.addEventListener('input', (e) => pitchVal.textContent = e.target.value);
  }

  const volSlider = document.getElementById('volSlider');
  const volVal = document.getElementById('volVal');
  if (volSlider && volVal) {
    volSlider.addEventListener('input', (e) => volVal.textContent = `${e.target.value}%`);
  }

  // 4. Plan Toggle (Free / Premium)
  const planToggleBtn = document.getElementById('planToggleBtn');
  const planText = document.getElementById('planText');
  if (planToggleBtn && planText) {
    planToggleBtn.addEventListener('click', () => {
      if (planToggleBtn.classList.contains('premium')) {
        planToggleBtn.classList.remove('premium');
        planText.textContent = 'FREE PLAN';
      } else {
        planToggleBtn.classList.add('premium');
        planText.textContent = 'PREMIUM PRO';
      }
    });
  }

  // 5. Download Options Menu Toggle (MP3 / SRT)
  const downloadBtn = document.getElementById('downloadBtn');
  const downloadMenu = document.getElementById('downloadMenu');
  const dlMp3 = document.getElementById('dlMp3');
  const dlSrt = document.getElementById('dlSrt');

  if (downloadBtn && downloadMenu) {
    downloadBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      downloadMenu.classList.toggle('hidden');
    });
    document.addEventListener('click', () => downloadMenu.classList.add('hidden'));
  }

  if (dlMp3) {
    dlMp3.addEventListener('click', () => alert('Downloading Generated .MP3 Audio file...'));
  }
  if (dlSrt) {
    dlSrt.addEventListener('click', () => alert('Downloading Generated .SRT Subtitle file...'));
  }

  // 6. Settings Modal connected to Home
  const navSettings = document.getElementById('navSettings');
  const settingsModal = document.getElementById('settingsModal');
  const closeSettings = document.getElementById('closeSettings');
  const saveSettingsBtn = document.getElementById('saveSettingsBtn');
  const defaultSpeedSelect = document.getElementById('defaultSpeedSelect');

  if (navSettings && settingsModal) {
    navSettings.addEventListener('click', () => settingsModal.classList.remove('hidden'));
  }
  if (closeSettings && settingsModal) {
    closeSettings.addEventListener('click', () => settingsModal.classList.add('hidden'));
  }
  if (saveSettingsBtn && settingsModal) {
    saveSettingsBtn.addEventListener('click', () => {
      if (defaultSpeedSelect && speedSlider) {
        speedSlider.value = defaultSpeedSelect.value;
        speedVal.textContent = `${parseFloat(defaultSpeedSelect.value).toFixed(1)}x`;
        calculateAutoByte();
      }
      alert('Settings Applied to Home Dashboard!');
      settingsModal.classList.add('hidden');
    });
  }

  // 7. Preview & Generation Controls
  const previewBtn = document.getElementById('previewBtn');
  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      alert(`Playing Audio Preview with Voice Actor: ${voiceSelect.options[voiceSelect.selectedIndex].text}`);
    });
  }

  const generateBtn = document.getElementById('generateBtn');
  const resultCard = document.getElementById('resultCard');
  if (generateBtn && resultCard) {
    generateBtn.addEventListener('click', () => {
      generateBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Processing Audio & Auto-Byte...';
      setTimeout(() => {
        generateBtn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate AI Audio';
        resultCard.classList.remove('hidden');
        alert('Audio Generated Successfully!');
      }, 1500);
    });
  }
});
