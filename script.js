document.addEventListener('DOMContentLoaded', () => {

  // 1. DATA CONFIGURATION (4 LANGUAGES, 9 VOICES EACH, 9 STYLES, 9 BG TRACKS)
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
    ],
    'th': [
      { id: 'somchai', name: '1. Somchai (Thai Male)' },
      { id: 'ploy', name: '2. Ploy (Thai Female)' },
      { id: 'kitti', name: '3. Kitti (Thai Deep Story)' },
      { id: 'malee', name: '4. Malee (Thai Soft Voice)' },
      { id: 'arthit', name: '5. Arthit (Thai Dramatic)' },
      { id: 'chaya', name: '6. Chaya (Thai Energetic)' },
      { id: 'sunan', name: '7. Sunan (Thai Calming)' },
      { id: 'niran', name: '8. Niran (Thai Ghost Story)' },
      { id: 'daw', name: '9. Daw (Thai Commercial)' }
    ]
  };

  const styleOptions = [
    { id: 'none', name: '-- None (Default Pitch) --' },
    { id: 'plain', name: '1. Plain & Natural' },
    { id: 'emotional', name: '2. Emotional & Deep' },
    { id: 'dramatic', name: '3. Dramatic Movie Trailer' },
    { id: 'whispering', name: '4. Soft Whispering' },
    { id: 'horror', name: '5. Dark Horror Suspense' },
    { id: 'cinematic', name: '6. Cinematic Epic' },
    { id: 'storyteller', name: '7. Calm Storyteller' },
    { id: 'energetic', name: '8. High Energy Hype' },
    { id: 'soft', name: '9. Gentle Commercial' }
  ];

  const bgMusicOptions = [
    { id: 'none', name: '-- None (No Music) --' },
    { id: 'piano', name: '1. Soft Ambient Piano' },
    { id: 'lofi', name: '2. Lo-Fi Chill Beats' },
    { id: 'epic', name: '3. Epic Cinematic Drums' },
    { id: 'horror', name: '4. Dark Horror Atmosphere' },
    { id: 'acoustic', name: '5. Gentle Acoustic Guitar' },
    { id: 'meditation', name: '6. Deep Meditation Pad' },
    { id: 'jazz', name: '7. Smooth Midnight Jazz' },
    { id: 'cyberpunk', name: '8. Cyberpunk Synthwave' },
    { id: 'nature', name: '9. Calming Nature Water' }
  ];

  // DOM ELEMENTS
  const langSelect = document.getElementById('langSelect');
  const modalLangSelect = document.getElementById('modalLangSelect');
  const voiceActorSelect = document.getElementById('voiceActorSelect');
  const styleSelect = document.getElementById('styleSelect');
  const bgMusicSelect = document.getElementById('bgMusicSelect');
  const scriptInput = document.getElementById('scriptInput');
  const charCount = document.getElementById('charCount');
  const byteCount = document.getElementById('byteCount');
  const estDuration = document.getElementById('estDuration');
  const byteProgressBar = document.getElementById('byteProgressBar');
  const speedSlider = document.getElementById('speedSlider');
  const speedVal = document.getElementById('speedVal');
  const pitchSlider = document.getElementById('pitchSlider');
  const pitchVal = document.getElementById('pitchVal');
  const downloadDropdownBtn = document.getElementById('downloadDropdownBtn');
  const downloadMenu = document.getElementById('downloadMenu');

  // 2. DYNAMIC POPULATE OPTIONS
  function populateVoices(langKey) {
    voiceActorSelect.innerHTML = '';
    const list = voiceData[langKey] || voiceData['en-US'];
    list.forEach(v => {
      const opt = document.createElement('option');
      opt.value = v.id;
      opt.textContent = v.name;
      voiceActorSelect.appendChild(opt);
    });
  }

  function populateStaticSelects() {
    styleSelect.innerHTML = '';
    styleOptions.forEach(s => {
      const opt = document.createElement('option');
      opt.value = s.id;
      opt.textContent = s.name;
      styleSelect.appendChild(opt);
    });

    bgMusicSelect.innerHTML = '';
    bgMusicOptions.forEach(b => {
      const opt = document.createElement('option');
      opt.value = b.id;
      opt.textContent = b.name;
      bgMusicSelect.appendChild(opt);
    });
  }

  // 3. LANGUAGE SYNC SYSTEM
  langSelect.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    modalLangSelect.value = selectedLang;
    populateVoices(selectedLang);
  });

  modalLangSelect.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    langSelect.value = selectedLang;
    populateVoices(selectedLang);
  });

  // 4. AUTO-BYTE & DURATION CALCULATOR LOGIC
  scriptInput.addEventListener('input', updateByteInfo);
  speedSlider.addEventListener('input', () => {
    speedVal.textContent = speedSlider.value + 'x';
    updateByteInfo();
  });

  pitchSlider.addEventListener('input', () => {
    pitchVal.textContent = pitchSlider.value;
  });

  function updateByteInfo() {
    const text = scriptInput.value;
    const chars = text.length;
    const bytes = new Blob([text]).size;
    const kb = (bytes / 1024).toFixed(2);

    // Calculate Estimated Duration based on words/speed
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const speed = parseFloat(speedSlider.value) || 1.0;
    const seconds = ((words / 2.5) / speed).toFixed(1);

    charCount.textContent = chars;
    byteCount.textContent = kb + ' KB';
    estDuration.textContent = seconds + 's';

    // Update Progress Bar (Max 1000 chars standard limit)
    const pct = Math.min((chars / 1000) * 100, 100);
    byteProgressBar.style.width = pct + '%';
  }

  // 5. DOWNLOAD MENU TOGGLE
  downloadDropdownBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    downloadMenu.classList.toggle('hidden');
  });

  document.addEventListener('click', () => {
    downloadMenu.classList.add('hidden');
  });

  // 6. MODALS MANAGEMENT
  document.getElementById('openSettingsBtn').onclick = () => showModal('settingsModal');
  document.getElementById('openProjectsBtn').onclick = () => showModal('projectsModal');
  document.getElementById('openFavsBtn').onclick = () => showModal('favsModal');

  // PLAN TOGGLE LIVE SYNC
  const planToggleBtn = document.getElementById('planToggleBtn');
  const planText = document.getElementById('planText');
  planToggleBtn.addEventListener('click', () => {
    if (planToggleBtn.classList.contains('free-plan')) {
      planToggleBtn.classList.remove('free-plan');
      planToggleBtn.classList.add('pro-plan');
      planText.textContent = 'PREMIUM PRO';
    } else {
      planToggleBtn.classList.remove('pro-plan');
      planToggleBtn.classList.add('free-plan');
      planText.textContent = 'FREE PLAN';
    }
  });

  // INITIALIZE STUDIO
  populateVoices('en-US');
  populateStaticSelects();
  updateByteInfo();
});

// GLOBAL HELPER FUNCTIONS
function showModal(id) {
  document.getElementById(id).classList.remove('hidden');
}

function closeModal(id) {
  document.getElementById(id).classList.add('hidden');
}

function insertSSML(tag) {
  const textarea = document.getElementById('scriptInput');
  textarea.value += ' ' + tag + ' ';
  textarea.dispatchEvent(new Event('input'));
}

function clearScript() {
  const textarea = document.getElementById('scriptInput');
  textarea.value = '';
  textarea.dispatchEvent(new Event('input'));
}

function previewCurrentAudio(type) {
  alert(`🎧 Previewing current ${type.toUpperCase()} selection...`);
}
