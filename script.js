// ==========================================
// VoiceNest Studio v2.3 - OneStepOn
// Core Script Configuration (Perfect Balanced Version)
// ==========================================

// 1. Fully Balanced Languages Data (8 Styles Each)
const languages = {
    mm: {
        welcome: "Welcome to",
        presetLabel: "CONTENT PRESETS",
        lblVoiceActor: "🗣️ အသံရှင် ရွေးချယ်ရန်",
        lblNarrationStyle: "🎭 အသံစတိုင်နှင့် ခံစားချက်ပုံစံများ",
        cardVoiceCtrl: "VOICE CONTROLS",
        lblSpeed: "Speech Speed",
        lblPitch: "Voice Pitch",
        cardAspect: "VIDEO ASPECT GUIDE",
        cardMixer: "AMBIENT MUSIC MIXER",
        lblMusicVol: "Music Volume",
        btnGenerate: "✨ AI Audio ထုတ်လုပ်မည်",
        lblAudioResult: "🎵 Generated Audio Results",
        btnDownload: "📥 Download Options",
        placeholder: "ဤနေရာတွင် သင့်ဗီဒီယိုဇာတ်ညွှန်းကို ရိုက်ထည့်ပါ...",
        tipsTitle: "💡 Gemini's Pro Tips",
        tips: [
            "သရုပ်ပြပြင် တာတ်လမ်းများအတွက် Emotional / Deep စတိုင်ကို သုံးပါက ပိုမိုကောင်းမွန်သော အသံထွက်ကို ရရှိနိုင်ပါသည်။",
            "ပိုမိုသဘာဝကျသော အပြောဟန် ရရှိစေရန် Speech Speed ကို 0.9x သို့မဟုတ် 1.0x တွင် ထားရှိပေးပါ။",
            "အသံထွက်အရည်အသွေး အကောင်းဆုံးဖြစ်စေရန် သင့်စာသားကို စာလုံးရေ ၁၅၀၀ အောက်သာ ထားရှိပေးပါ။"
        ]
    },
    en: {
        welcome: "Welcome to",
        presetLabel: "CONTENT PRESETS",
        lblVoiceActor: "🗣️ Select Voice Actor",
        lblNarrationStyle: "🎭 Narration Style & Emotions",
        cardVoiceCtrl: "VOICE CONTROLS",
        lblSpeed: "Speech Speed",
        lblPitch: "Voice Pitch",
        cardAspect: "VIDEO ASPECT GUIDE",
        cardMixer: "AMBIENT MUSIC MIXER",
        lblMusicVol: "Music Volume",
        btnGenerate: "✨ Generate AI Audio",
        lblAudioResult: "🎵 Generated Audio Results",
        btnDownload: "📥 Download Options",
        placeholder: "Type your video script here...",
        tipsTitle: "💡 Gemini's Pro Tips",
        tips: [
            "Use 'Emotional / Deep' style for storytelling to get better resonances.",
            "Keep Speech Speed at 0.9x or 1.0x for the most natural human-like flow.",
            "For optimal voice quality, keep your script under 1500 characters per batch."
        ]
    },
    th: {
        welcome: "ยินดีต้อนรับสู่",
        presetLabel: "CONTENT PRESETS",
        lblVoiceActor: "🗣️ เลือกนักพากย์เสียง",
        lblNarrationStyle: "🎭 สไตล์เสียงและอารมณ์",
        cardVoiceCtrl: "VOICE CONTROLS",
        lblSpeed: "ความเร็วเสียง",
        lblPitch: "ระดับเสียง",
        cardAspect: "VIDEO ASPECT GUIDE",
        cardMixer: "AMBIENT MUSIC MIXER",
        lblMusicVol: "ระดับเสียงเพลง",
        btnGenerate: "✨ สร้างเสียง AI",
        lblAudioResult: "🎵 ผลลัพธ์เสียงที่สร้างขึ้น",
        btnDownload: "📥 ตัวเลือกการดาวน์โหลด",
        placeholder: "พิมพ์สคริปต์วิดีโอของคุณที่นี่...",
        tipsTitle: "💡 Gemini's Pro Tips",
        tips: [
            "ใช้สไตล์ 'Emotional / Deep' สำหรับการเล่าเรื่องเพื่อความสมจริงยิ่งขึ้น",
            "ตั้งความเร็วเสียงไว้ที่ 0.9x หรือ 1.0x เพื่อให้ได้น้ำเสียงที่เป็นธรรมชาติที่สุด",
            "เพื่อคุณภาพเสียงที่ดีที่สุด ควรให้สคริปต์มีความยาวไม่เกิน 1500 ตัวอักษร"
        ]
    }
};

// 2. Presets Data
const presets = [
    { id: "ttshort", icon: "🎵", name: "TtShort" },
    { id: "ghost", icon: "👻", name: "Ghost Story" },
    { id: "recap", icon: "🎬", name: "Movie Recap" },
    { id: "story", icon: "📚", name: "Storyteller" }
];

// 3. Fixed 8 Pure Myanmar Voice Actors (4 Males, 4 Females)
const voiceActors = [
    { id: "v1", name: "ကိုမြတ်ကျော် (Ko Myat Kyaw)", gender: "Male", accent: "Burmese (Standard)", age: "Adult" },
    { id: "v2", name: "မသီရိမေ (Ma Thiri May)", gender: "Female", accent: "Burmese (Standard)", age: "Adult" },
    { id: "v3", name: "ကိုမင်းသန့် (Ko Min Thant)", gender: "Male", accent: "Burmese (Modern)", age: "Young" },
    { id: "v4", name: "မဆောင်းနှင်း (Ma Saung Hnin)", gender: "Female", accent: "Burmese (Soft)", age: "Young" },
    { id: "v5", name: "ဦးအောင်မင်း (U Aung Min)", gender: "Male", accent: "Burmese (Deep-Radio)", age: "Senior" },
    { id: "v6", name: "ဒေါ်နန်းဆု (Daw Nan Su)", gender: "Female", accent: "Burmese (Elegant)", age: "Senior" },
    { id: "v7", name: "မောင်စည်သူ (Maung Sithu)", gender: "Male", accent: "Burmese (Energetic)", age: "Youth" },
    { id: "v8", name: "မဖူးပွင့် (Ma Phue Pwint)", gender: "Female", accent: "Burmese (Cheerful)", age: "Youth" }
];

// 4. Complete 8 Narration Styles (Perfect Balanced for MM, EN, TH)
const narrationStyles = [
    { id: "plain", name: "ပုံမှန် / Plain / ทั่วไป" },
    { id: "deep", name: "Emotional / Deep / อารมณ์ลึกซึ้ง" },
    { id: "storytelling", name: "Storyteller / Narrative / เล่าเรื่อง" },
    { id: "recap", name: "Movie Recap / Review / สรุปหนัง" },
    { id: "energetic", name: "Energetic / Commercial / โฆษณาฮิต" },
    { id: "whisper", name: "Soft Whisper / กระซิบเบาๆ" },
    { id: "scary", name: "Horror / Suspense / สยองขวัญ" },
    { id: "happy", name: "Cheerful / Happy / สดใสสนุกสนาน" }
];

// 5. Ambient Music Data
const ambientMusic = [
    { id: "none", name: "မသုံးပါ (None)" },
    { id: "cyber", name: "Cinematic Cyberpunk Beat" },
    { id: "lofi", name: "Chill Lofi Aesthetic" },
    { id: "sad", name: "Emotional Piano & Violin" },
    { id: "epic", name: "Epic Cinematic Trailer" }
];

// DOM Elements
let currentLang = "mm";
let isPlaying = false;
let audioTimeout = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    initLanguageDropdown();
    initPresets();
    initVoiceDropdown();
    initStyleDropdown();
    initMusicDropdown();
    initEventListeners();
    updateUIStrings();
});

// Dropdown Helper Function
function setupCustomDropdown(triggerId, menuId, items, onSelect) {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    if (!trigger || !menu) return;

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        menu.classList.toggle("show");
    });

    menu.innerHTML = "";
    items.forEach(item => {
        const div = document.createElement("div");
        div.className = "dropdown-item";
        div.innerHTML = item.html || item.name;
        div.addEventListener("click", () => {
            onSelect(item);
            trigger.innerHTML = item.triggerHtml || item.name;
            menu.classList.remove("show");
        });
        menu.appendChild(div);
    });
}

function closeAllDropdowns() {
    document.querySelectorAll(".dropdown-menu-box").forEach(m => m.classList.remove("show"));
}

document.addEventListener("click", closeAllDropdowns);

// Dropdown Initializations
function initLanguageDropdown() {
    const langs = [
        { id: "mm", name: "🌐 မြန်မာ (MY) 🇲🇲" },
        { id: "en", name: "🌐 English (US) 🇺🇸" },
        { id: "th", name: "🌐 ไทย (TH) 🇹🇭" }
    ];
    setupCustomDropdown("langTriggerBtn", "langMenuBox", langs, (lang) => {
        currentLang = lang.id;
        updateUIStrings();
    });
}

function initPresets() {
    const container = document.getElementById("presetsContainer");
    if (!container) return;
    container.innerHTML = "";
    presets.forEach(p => {
        const btn = document.createElement("button");
        btn.className = "preset-btn";
        btn.innerHTML = `${p.icon} ${p.name}`;
        btn.addEventListener("click", () => {
            document.querySelectorAll(".preset-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
        });
        container.appendChild(btn);
    });
}

function initVoiceDropdown() {
    const items = voiceActors.map(v => ({
        id: v.id,
        name: v.name,
        html: `<div style="display:flex; justify-content:space-between; width:100%;">
                <strong>${v.name}</strong>
                <span style="font-size:11px; opacity:0.7;">${v.accent} (${v.gender})</span>
               </div>`,
        triggerHtml: `🗣️ ${v.name} (${v.accent})`
    }));
    setupCustomDropdown("voiceTriggerBtn", "voiceMenuBox", items, () => {});
}

function initStyleDropdown() {
    setupCustomDropdown("styleTriggerBtn", "styleMenuBox", narrationStyles, () => {});
}

function initMusicDropdown() {
    setupCustomDropdown("musicTriggerBtn", "musicMenuBox", ambientMusic, () => {});
}

// Event Listeners
function initEventListeners() {
    const textarea = document.getElementById("storyInput");
    const charCount = document.getElementById("charCountLabel");
    if (textarea && charCount) {
        textarea.addEventListener("input", () => {
            charCount.innerText = `${textarea.value.length} / 5000 စာလုံး`;
        });
    }

    const speed = document.getElementById("speedSlider");
    const speedVal = document.getElementById("speedVal");
    if (speed && speedVal) speed.addEventListener("input", () => speedVal.innerText = speed.value + "x");

    const pitch = document.getElementById("pitchSlider");
    const pitchVal = document.getElementById("pitchVal");
    if (pitch && pitchVal) pitch.addEventListener("input", () => pitchVal.innerText = (pitch.value > 0 ? "+" : "") + pitch.value);

    const musicVol = document.getElementById("musicVolSlider");
    const musicVolVal = document.getElementById("musicVolVal");
    if (musicVol && musicVolVal) musicVol.addEventListener("input", () => musicVolVal.innerText = musicVol.value + "%");

    document.querySelectorAll(".aspect-box").forEach(box => {
        box.addEventListener("click", () => {
            document.querySelectorAll(".aspect-box").forEach(b => b.classList.remove("active"));
            box.classList.add("active");
        });
    });

    const genBtn = document.getElementById("generateBtn");
    if (genBtn) genBtn.addEventListener("click", handleGeneration);

    const playBtn = document.getElementById("resultPlayBtn");
    if (playBtn) playBtn.addEventListener("click", toggleWaveformPlay);
}

// Language Translation Engine
function updateUIStrings() {
    const data = languages[currentLang];
    if (!data) return;

    document.getElementById("welcomeTxt").innerText = data.welcome;
    document.getElementById("presetLabel").innerText = data.presetLabel;
    document.getElementById("lblVoiceActor").innerText = data.lblVoiceActor;
    document.getElementById("lblNarrationStyle").innerText = data.lblNarrationStyle;
    document.getElementById("cardVoiceCtrl").innerText = data.cardVoiceCtrl;
    document.getElementById("lblSpeed").innerText = data.lblSpeed;
    document.getElementById("lblPitch").innerText = data.lblPitch;
    document.getElementById("cardAspect").innerText = data.cardAspect;
    document.getElementById("cardMixer").innerText = data.cardMixer;
    document.getElementById("lblMusicVol").innerText = data.lblMusicVol;
    document.getElementById("generateBtn").innerText = data.btnGenerate;
    document.getElementById("lblAudioResult").innerText = data.lblAudioResult;
    document.getElementById("downloadTriggerBtn").innerText = data.btnDownload;
    document.getElementById("storyInput").placeholder = data.placeholder;

    const tipsContainer = document.getElementById("tipsList");
    if (tipsContainer) {
        tipsContainer.innerHTML = "";
        data.tips.forEach(tip => {
            const li = document.createElement("li");
            li.innerText = tip;
            tipsContainer.appendChild(li);
        });
    }
}

// Timeline State Engine
function setTimelineStep(step) {
    document.querySelectorAll(".timeline-step").forEach(s => s.classList.remove("active"));
    const line = document.getElementById("timelineLine");
    
    if (step === 'ready') {
        document.getElementById("stepReady").classList.add("active");
        if (line) line.style.width = "0%";
    } else if (step === 'gen') {
        document.getElementById("stepReady").classList.add("active");
        document.getElementById("stepGen").classList.add("active");
        if (line) line.style.width = "50%";
    } else if (step === 'done') {
        document.getElementById("stepReady").classList.add("active");
        document.getElementById("stepGen").classList.add("active");
        document.getElementById("stepDone").classList.add("active");
        if (line) line.style.width = "100%";
    }
}

// Handle AI Voice Generation Process
function handleGeneration() {
    const text = document.getElementById("storyInput").value.trim();
    if (!text) {
        alert(currentLang === "mm" ? "ကျေးဇူးပြု၍ ဇာတ်ညွှန်းတစ်ခုခု အရင်ရိုက်ထည့်ပါဦးဗျာ။" : "Please enter some text script first!");
        return;
    }

    setTimelineStep('gen');
    const genBtn = document.getElementById("generateBtn");
    genBtn.disabled = true;
    genBtn.innerText = currentLang === "mm" ? "⏳ အသံထုတ်လုပ်နေပါသည်..." : "⏳ Generating Audio...";

    stopWaveformAnimation();
    document.getElementById("resultPlayBtn").disabled = true;
    document.getElementById("downloadTriggerBtn").disabled = true;

    setTimeout(() => {
        setTimelineStep('done');
        genBtn.disabled = false;
        genBtn.innerHTML = languages[currentLang].btnGenerate;

        document.getElementById("resultPlayBtn").disabled = false;
        document.getElementById("downloadTriggerBtn").disabled = false;
        initDownloadDropdown();

        alert(currentLang === "mm" ? "✨ AI အသံ ထုတ်လုပ်မှု အောင်မြင်စွာ ပြီးဆုံးပါပြီ။" : "✨ AI Audio successfully generated!");
    }, 3000);
}

// Waveform Animation Control
function toggleWaveformPlay() {
    const playBtn = document.getElementById("resultPlayBtn");
    if (!isPlaying) {
        isPlaying = true;
        playBtn.innerText = "⏸️";
        startWaveformAnimation();
        
        audioTimeout = setTimeout(() => {
            stopWaveformAnimation();
        }, 8000);
    } else {
        stopWaveformAnimation();
    }
}

function startWaveformAnimation() {
    document.querySelectorAll(".wave-bar").forEach((bar, index) => {
        bar.style.animation = `bounce 0.6s ease-in-out infinite alternate`;
        bar.style.animationDelay = `${index * 0.05}s`;
    });
}

function stopWaveformAnimation() {
    isPlaying = false;
    const playBtn = document.getElementById("resultPlayBtn");
    if (playBtn) playBtn.innerText = "▶️";
    document.querySelectorAll(".wave-bar").forEach(bar => {
        bar.style.animation = "none";
        bar.style.height = "8px";
    });
    if (audioTimeout) {
        clearTimeout(audioTimeout);
        audioTimeout = null;
    }
}

// Download Options Dropdown Initializer
function initDownloadDropdown() {
    const trigger = document.getElementById("downloadTriggerBtn");
    const menu = document.getElementById("downloadMenuBox");
    if (!trigger || !menu) return;

    trigger.onclick = (e) => {
        e.stopPropagation();
        menu.classList.toggle("show");
    };

    document.getElementById("dlMp3").onclick = () => alert("Downloading VoiceNest_Audio.mp3 ...");
    document.getElementById("dlSrt").onclick = () => alert("Downloading VoiceNest_Subtitles.srt ...");
}
