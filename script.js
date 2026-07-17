// ==========================================
// VoiceNest Studio v2.4 - OneStepOn
// Core Script Configuration (Dynamic Language Sync)
// ==========================================

// 1. Fully Balanced Languages Data
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
        selectVoice: "ရွေးချယ်ရန်...",
        selectStyle: "ပုံမှန် / Plain",
        selectMusic: "မသုံးပါ (None)",
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
        selectVoice: "Select Voice...",
        selectStyle: "Plain / Normal",
        selectMusic: "None",
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
        selectVoice: "เลือกนักพากย์...",
        selectStyle: "ทั่วไป / Plain",
        selectMusic: "ไม่ใช้เพลง (None)",
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

// 3. Multilingual Balanced Voice Actors Data
const voiceActors = {
    mm: [
        { id: "mm_v1", name: "ကိုမြတ်ကျော်", gender: "Male", accent: "ဗမာ (စံနှုန်း)", age: "Adult" },
        { id: "mm_v2", name: "မသီရိမေ", gender: "Female", accent: "ဗမာ (စံနှုန်း)", age: "Adult" },
        { id: "mm_v3", name: "ကိုမင်းသန့်", gender: "Male", accent: "ဗမာ (ခေတ်ပေါ်)", age: "Young" },
        { id: "mm_v4", name: "မဆောင်းနှင်း", gender: "Female", accent: "ဗမာ (နူးညံ့)", age: "Young" },
        { id: "mm_v5", name: "ဦးအောင်မင်း", gender: "Male", accent: "ဗမာ (ရေဒီယိုအသံ)", age: "Senior" },
        { id: "mm_v6", name: "ဒေါ်နန်းဆု", gender: "Female", accent: "ဗမာ (ယဉ်ကျေး)", age: "Senior" },
        { id: "mm_v7", name: "မောင်စည်သူ", gender: "Male", accent: "ဗမာ (တက်ကြွ)", age: "Youth" },
        { id: "mm_v8", name: "မဖူးပွင့်", gender: "Female", accent: "ဗမာ (ရွှင်လန်း)", age: "Youth" }
    ],
    en: [
        { id: "en_v1", name: "James Connor", gender: "Male", accent: "US Standard", age: "Adult" },
        { id: "en_v2", name: "Olivia Smith", gender: "Female", accent: "US Soft", age: "Adult" },
        { id: "en_v3", name: "Liam Davies", gender: "Male", accent: "UK Standard", age: "Young" },
        { id: "en_v4", name: "Emma Wilson", gender: "Female", accent: "UK Elegant", age: "Young" },
        { id: "en_v5", name: "Robert Miller", gender: "Male", accent: "US Deep-Anchor", age: "Senior" },
        { id: "en_v6", name: "Sophia Taylor", gender: "Female", accent: "US Professional", age: "Senior" },
        { id: "en_v7", name: "Ethan Brown", gender: "Male", accent: "AU Accent", age: "Youth" },
        { id: "en_v8", name: "Mia Johnson", gender: "Female", accent: "US Cheerful", age: "Youth" }
    ],
    th: [
        { id: "th_v1", name: "สมชาย (Somchai)", gender: "Male", accent: "ไทยกลาง", age: "Adult" },
        { id: "th_v2", name: "สมศรี (Somsri)", gender: "Female", accent: "ไทยกลาง", age: "Adult" },
        { id: "th_v3", name: "ธนา (Thana)", gender: "Male", accent: "ไทยวัยรุ่น", age: "Young" },
        { id: "th_v4", name: "ลิซ่า (Lisa)", gender: "Female", accent: "ไทยนุ่มนวล", age: "Young" },
        { id: "th_v5", name: "ผู้ใหญ่หาญ (Harn)", gender: "Male", accent: "ไทยสุขุม", age: "Senior" },
        { id: "th_v6", name: "แม่นภา (Napa)", gender: "Female", accent: "ไทยอาวุโส", age: "Senior" },
        { id: "th_v7", name: "ก้อง (Kong)", gender: "Male", accent: "ไทยพลังงานสูง", age: "Youth" },
        { id: "th_v8", name: "พลอย (Ploy)", gender: "Female", accent: "ไทยสดใส", age: "Youth" }
    ]
};

// 4. Multilingual Balanced Narration Styles
const narrationStyles = {
    mm: [
        { id: "plain", name: "ပုံမှန် / Plain" },
        { id: "deep", name: "Emotional / Deep (ခံစားချက်အပြည့်)" },
        { id: "storytelling", name: "Storyteller / Narrative (ပုံပြောသူဟန်)" },
        { id: "recap", name: "Movie Recap / Review (ဇာတ်လမ်းချုပ်ဟန်)" },
        { id: "energetic", name: "Energetic / Commercial (ကြော်ငြာဟန်)" },
        { id: "whisper", name: "Soft Whisper (တိုးတိုးလေးပြော)" },
        { id: "scary", name: "Horror / Suspense (သည်းထိတ်ရင်ဖို)" },
        { id: "happy", name: "Cheerful / Happy (ပျော်ပျော်ရွှင်ရွှင်)" }
    ],
    en: [
        { id: "plain", name: "Plain / Normal Flow" },
        { id: "deep", name: "Emotional / Deep Resonance" },
        { id: "storytelling", name: "Storyteller / Narrative" },
        { id: "recap", name: "Movie Recap / Review Style" },
        { id: "energetic", name: "Energetic / Commercial Promo" },
        { id: "whisper", name: "Soft Whisper / ASMR" },
        { id: "scary", name: "Horror / Suspense Thriller" },
        { id: "happy", name: "Cheerful / Happy Tone" }
    ],
    th: [
        { id: "plain", name: "ทั่วไป / Plain" },
        { id: "deep", name: "เน้นอารมณ์ / Deep" },
        { id: "storytelling", name: "นักเล่าเรื่อง / Storyteller" },
        { id: "recap", name: "สรุปเนื้อหา / Movie Recap" },
        { id: "energetic", name: "พลังงานสูง / Commercial" },
        { id: "whisper", name: "เสียงกระซิบ / Whisper" },
        { id: "scary", name: "สยองขวัญ / Horror" },
        { id: "happy", name: "สดใสสนุกสนาน / Happy" }
    ]
};

// 5. Ambient Music Data
const ambientMusic = {
    mm: [
        { id: "none", name: "မသုံးပါ (None)" },
        { id: "cyber", name: "Cinematic Cyberpunk Beat" },
        { id: "lofi", name: "Chill Lofi Aesthetic" },
        { id: "sad", name: "Emotional Piano & Violin" },
        { id: "epic", name: "Epic Cinematic Trailer" }
    ],
    en: [
        { id: "none", name: "None" },
        { id: "cyber", name: "Cinematic Cyberpunk Beat" },
        { id: "lofi", name: "Chill Lofi Aesthetic" },
        { id: "sad", name: "Emotional Piano & Violin" },
        { id: "epic", name: "Epic Cinematic Trailer" }
    ],
    th: [
        { id: "none", name: "ไม่ใช้เพลง (None)" },
        { id: "cyber", name: "Cinematic Cyberpunk Beat" },
        { id: "lofi", name: "Chill Lofi Aesthetic" },
        { id: "sad", name: "Emotional Piano & Violin" },
        { id: "epic", name: "Epic Cinematic Trailer" }
    ]
};

// DOM Elements & State
let currentLang = "mm";
let isPlaying = false;
let audioTimeout = null;

// Initialize App
document.addEventListener("DOMContentLoaded", () => {
    initLanguageDropdown();
    initPresets();
    initEventListeners();
    updateUIStrings(); // This will auto-render voice, style and music options
});

// Dropdown Helper Function
function setupCustomDropdown(triggerId, menuId, items, onSelect) {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    if (!trigger || !menu) return;

    trigger.onclick = (e) => {
        e.stopPropagation();
        closeAllDropdowns();
        menu.classList.toggle("show");
    };

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

// DYNAMIC RE-RENDER ENGINES
function renderVoiceDropdown() {
    const currentActors = voiceActors[currentLang];
    const items = currentActors.map(v => ({
        id: v.id,
        name: v.name,
        html: `<div style="display:flex; justify-content:space-between; width:100%;">
                <strong>${v.name}</strong>
                <span style="font-size:11px; opacity:0.7;">${v.accent} (${v.gender})</span>
               </div>`,
        triggerHtml: `🗣️ ${v.name} (${v.accent})`
    }));
    
    document.getElementById("voiceTriggerBtn").innerHTML = languages[currentLang].selectVoice;
    setupCustomDropdown("voiceTriggerBtn", "voiceMenuBox", items, () => {});
}

function renderStyleDropdown() {
    const currentStyles = narrationStyles[currentLang];
    document.getElementById("styleTriggerBtn").innerHTML = languages[currentLang].selectStyle;
    setupCustomDropdown("styleTriggerBtn", "styleMenuBox", currentStyles, () => {});
}

function renderMusicDropdown() {
    const currentMusic = ambientMusic[currentLang];
    document.getElementById("musicTriggerBtn").innerHTML = languages[currentLang].selectMusic;
    setupCustomDropdown("musicTriggerBtn", "musicMenuBox", currentMusic, () => {});
}

// Language Update Orchestrator
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

    // Trigger Re-rendering lists for dropdowns dynamically
    renderVoiceDropdown();
    renderStyleDropdown();
    renderMusicDropdown();

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
