// --- MULTI-LANGUAGE DICTIONARY ---
const langData = {
    mm: {
        subBrand: "Every story deserves a voice.",
        menuHome: "🏠 ပင်မစာမျက်နှာ", menuProjects: "📁 ပရောဂျက်များ", menuFavorites: "💜 စိတ်ကြိုက်များ", menuHistory: "⏳ မှတ်တမ်းဟောင်း", menuSettings: "⚙️ ဆက်တင်များ",
        welcome: "Welcome to", presetLabel: "CONTENT PRESETS", storyPlaceholder: "ဤနေရာတွင် သင့်ဗီဒီယိုဇာတ်ညွှန်းကို ရိုက်ထည့်ပါ...", charCount: " စာလုံး",
        lblVoiceActor: "🗣️ အသံရှင် ရွေးချယ်ရန်", lblNarrationStyle: "🎭 အသံစတိုင်နှင့် ခံစားချက်ပုံစံများ",
        cardVoiceCtrl: "VOICE CONTROLS", cardAspect: "VIDEO ASPECT GUIDE", cardMixer: "AMBIENT MUSIC MIXER",
        lblSpeed: "Speech Speed (အမြန်နှုန်း)", lblPitch: "Voice Pitch (အသံတုန်ခါမှု)", lblMusicVol: "Music Volume (နောက်ခံအသံကျယ်နှုန်း)",
        generateBtn: "✨ AI Audio ထုတ်လုပ်မည်", lblAudioResult: "🎵 ထွက်ရှိလာသော အသံရလဒ်များ", btnDownload: "📥 Download (.MP3 & .SRT)",
        tips: [
            "သရဲပြင်ပြင် ဇာတ်လမ်းများအတွက် 'Emotional / Deep' စတိုင်ကို သုံးပါက ပိုမိုကောင်းမွန်သော အသံထွက် ရရှိနိုင်ပါသည်။",
            "ပိုမိုသဘာဝကျသော အပြောဟန် ရရှိစေရန် Speech Speed ကို 0.9x သို့မဟုတ် 1.0x တွင် ထားညှိပေးပါ။",
            "အသံထွက်အရည်အသွေး အကောင်းဆုံးဖြစ်စေရန် သင့်စာသားကို စာလုံးရေ ၁၅၀၀ အောက်သာ ထားရှိပေးပါ။"
        ],
        styles: ["ပုံမှန် / Plain", "ဝမ်းနည်းကြေကွဲ / Sad", "စိတ်လှုပ်ရှားဖွယ် / Suspenseful", "တည်ငြိမ်ပြတ်သား / Formal", "နွေးထွေးဆွဲဆောင် / Warm", "အားအင်အပြည့် / Energetic", "ဟာသနှော / Playful"]
    },
    en: {
        subBrand: "Every story deserves a voice.",
        menuHome: "🏠 Home", menuProjects: "📁 My Projects", menuFavorites: "💜 Favorites", menuHistory: "⏳ History Log", menuSettings: "⚙️ Settings",
        welcome: "Welcome to", presetLabel: "CONTENT PRESETS", storyPlaceholder: "Enter your story script here...", charCount: " words",
        lblVoiceActor: "🗣️ Voice Actor Selection", lblNarrationStyle: "🎭 Narration Style & Emotion",
        cardVoiceCtrl: "VOICE CONTROLS", cardAspect: "VIDEO ASPECT GUIDE", cardMixer: "AMBIENT MUSIC MIXER",
        lblSpeed: "Speech Speed", lblPitch: "Voice Pitch", lblMusicVol: "Music Volume",
        generateBtn: "✨ Generate AI Audio", lblAudioResult: "🎵 Generated Audio Results", btnDownload: "📥 Download (.MP3 & .SRT)",
        tips: [
            "Use 'Emotional / Deep' style for ghost stories to get better narrative tones.",
            "Adjust Speech Speed to 0.9x or 1.0x for a more natural narration flow.",
            "Ensure your script length is under 1500 words for the premium rendering quality."
        ],
        styles: ["Plain", "Melancholic", "Suspenseful", "Formal / Professional", "Warm Storyteller", "Energetic", "Playful / Humorous"]
    },
    th: {
        subBrand: "Every story deserves a voice.",
        menuHome: "🏠 หน้าแรก", menuProjects: "📁 โปรเจกต์ของฉัน", menuFavorites: "💜 รายการโปรด", menuHistory: "⏳ ประวัติการใช้งาน", menuSettings: "⚙️ ตั้งค่า",
        welcome: "Welcome to", presetLabel: "CONTENT PRESETS", storyPlaceholder: "กรอกบทบรรยายของคุณที่นี่...", charCount: " ตัวอักษร",
        lblVoiceActor: "🗣️ เลือกนักพากย์เสียง", lblNarrationStyle: "🎭 สไตล์เสียงและอารมณ์",
        cardVoiceCtrl: "VOICE CONTROLS", cardAspect: "VIDEO ASPECT GUIDE", cardMixer: "AMBIENT MUSIC MIXER",
        lblSpeed: "ความเร็วเสียง", lblPitch: "ระดับคีย์เสียง", lblMusicVol: "ความดังเพลงเบื้องหลัง",
        generateBtn: "✨ สร้างเสียง AI Audio", lblAudioResult: "🎵 ผลลัพธ์เสียงที่สร้างขึ้น", btnDownload: "📥 ดาวน์โหลด (.MP3 & .SRT)",
        tips: [
            "ใช้สไตล์ 'Emotional / Deep' สำหรับเรื่องผีเพื่อให้ได้โทนเสียงที่ดีขึ้น",
            "ปรับความเร็วเสียงเป็น 0.9x หรือ 1.0x เพื่อการบรรยายที่เป็นธรรมชาติมากขึ้น",
            "ตรวจสอบให้แน่ใจว่าความยาวสคริปต์ของคุณไม่เกิน 1500 คำเพื่อคุณภาพที่ดีที่สุด"
        ],
        styles: ["ปกติ / Plain", "เศร้าหมอง", "ระทึกขวัญ", "ทางการ", "อบอุ่น", "พลังงานสูง", "ขี้เล่น"]
    }
};

// --- DATABASE: 72 VOICES & 10 BGMS ---
const voicesData = {
    mm: [
        { id: "mm_1", name: "မင်းသန့်", desc: "[ကျား] ရုပ်ရှင်သုံး နောက်ခံသံ", url: "preview_mm1.mp3" },
        { id: "mm_2", name: "နဒီ", desc: "[မ] သတင်းနှင့် စာပေဖတ်ဟန်", url: "preview_mm2.mp3" },
        { id: "mm_3", name: "ဦးမြတ်", desc: "[အဘိုး] ပုံပြင်ပြော နွေးထွေးသံ", url: "preview_mm3.mp3" }
    ],
    en: [
        { id: "en_1", name: "David", desc: "[Male] Movie & Documentary", url: "preview_en1.mp3" },
        { id: "en_2", name: "Aria", desc: "[Female] Deep Emotional", url: "preview_en2.mp3" },
        { id: "en_3", name: "Leo", desc: "[Boy] Energetic Content Creator", url: "preview_en3.mp3" }
    ],
    th: [
        { id: "th_1", name: "สมชาย (Somchai)", desc: "[ชาย] เสียงพากย์ภาพยนตร์", url: "preview_th1.mp3" },
        { id: "th_2", name: "มะลิ (Mali)", desc: "[หญิง] เสียงนุ่มนวลชวนฝัน", url: "preview_th2.mp3" }
    ]
};

const bgmTracks = [
    { id: "none", name: "မသုံးပါ (None)" },
    { id: "cyberpunk", name: "Cinematic Cyberpunk Beat" },
    { id: "dark_ambient", name: "Dark Ambient Pad" },
    { id: "cinematic", name: "Cinematic Beat" },
    { id: "piano", name: "Inspiring Piano Uplift 🌟" },
    { id: "violin", name: "Sad Violin & Cello 🌟" },
    { id: "lofi", name: "Lofi Chill Hop 🌟" }
];

// Current States
let currentLang = "mm";
let selectedVoice = "";
let selectedStyle = "";
let selectedBgm = "none";
let currentPlayingBtn = null;

// DOM Elements
const audioPlayer = document.getElementById("globalAudioPlayer");

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
    switchLanguage("mm");
    setupGlobalDropdownListeners();
    setupSlidersAndAspects();
    renderBgmTracks();
});

// --- TRANSLATION ENGINE FUNCTION ---
function switchLanguage(lang) {
    currentLang = lang;
    const dict = langData[lang];
    
    // Update Sidebar & UI Labels
    document.getElementById("subBrandTxt").innerText = dict.subBrand;
    document.getElementById("menuHome").innerText = dict.menuHome;
    document.getElementById("menuProjects").innerText = dict.menuProjects;
    document.getElementById("menuFavorites").innerText = dict.menuFavorites;
    document.getElementById("menuHistory").innerText = dict.menuHistory;
    document.getElementById("menuSettings").innerText = dict.menuSettings;
    document.getElementById("welcomeTxt").innerText = dict.welcome;
    document.getElementById("presetLabel").innerText = dict.presetLabel;
    document.getElementById("storyInput").placeholder = dict.storyPlaceholder;
    document.getElementById("lblVoiceActor").innerText = dict.lblVoiceActor;
    document.getElementById("lblNarrationStyle").innerText = dict.lblNarrationStyle;
    document.getElementById("cardVoiceCtrl").innerText = dict.cardVoiceCtrl;
    document.getElementById("cardAspect").innerText = dict.cardAspect;
    document.getElementById("cardMixer").innerText = dict.cardMixer;
    document.getElementById("lblSpeed").innerText = dict.lblSpeed;
    document.getElementById("lblPitch").innerText = dict.lblPitch;
    document.getElementById("lblMusicVol").innerText = dict.lblMusicVol;
    document.getElementById("generateBtn").innerText = dict.generateBtn;
    document.getElementById("lblAudioResult").innerText = dict.lblAudioResult;

    // Update Tips List
    const tipsUl = document.getElementById("tipsList");
    tipsUl.innerHTML = "";
    dict.tips.forEach(tip => {
        const li = document.createElement("li");
        li.innerText = tip;
        tipsUl.appendChild(li);
    });

    // Reset Dropdown Triggers Spans
    document.getElementById("voiceTriggerBtn").innerText = lang === "mm" ? "ရွေးချယ်ရန်..." : lang === "th" ? "เลือกนักพากย์..." : "Select Voice...";
    
    // Re-render Styles Dropdown Box
    const styleMenu = document.getElementById("styleMenuBox");
    styleMenu.innerHTML = "";
    dict.styles.forEach((st, idx) => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.innerText = st;
        item.addEventListener("click", () => {
            document.getElementById("styleTriggerBtn").innerText = st;
            selectedStyle = st;
            styleMenu.classList.remove("show");
        });
        styleMenu.appendChild(item);
    });
    document.getElementById("styleTriggerBtn").innerText = dict.styles[0];

    // Re-render Voice Custom Picker Window (MX Player Style Elements Inside)
    renderVoicePicker(lang);
}

// --- RENDER VOICE ACTOR CUSTOM PICKER WINDOW ---
function renderVoicePicker(lang) {
    const voiceMenu = document.getElementById("voiceMenuBox");
    voiceMenu.innerHTML = "";
    const list = voicesData[lang] || [];

    list.forEach(voice => {
        const card = document.createElement("div");
        card.className = "voice-picker-card";

        // Left Side: MX Player Style Play/Pause Audio Preview Button
        const playBtn = document.createElement("button");
        playBtn.className = "picker-play-btn";
        playBtn.innerHTML = "▶️";
        playBtn.type = "button";
        playBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents closing dropdown window
            handlePreviewPlay(voice.url, playBtn);
        });

        // Center Side: Voice Info Name Label
        const info = document.createElement("div");
        info.className = "picker-voice-info";
        info.innerHTML = `<strong>${voice.name}</strong> <span style="font-size:11px; color:#8b80b6; display:block;">${voice.desc}</span>`;

        // Right Side: Selection Confirmation Button
        const selectBtn = document.createElement("button");
        selectBtn.className = "picker-select-btn";
        selectBtn.innerText = lang === "mm" ? "ယူမည်" : lang === "th" ? "เลือก" : "Select";
        selectBtn.type = "button";
        selectBtn.addEventListener("click", () => {
            document.getElementById("voiceTriggerBtn").innerText = `${voice.name} ${voice.desc}`;
            selectedVoice = voice.id;
            voiceMenu.classList.remove("show"); // Close dropdown window only when user clicks select
            stopPreview();
        });

        card.appendChild(playBtn);
        card.appendChild(info);
        card.appendChild(selectBtn);
        voiceMenu.appendChild(card);
    });
}

// --- AUDIO PREVIEW MANAGER (MX PLAYER STYLE HANDLING) ---
function handlePreviewPlay(audioUrl, btn) {
    if (currentPlayingBtn === btn) {
        stopPreview();
    } else {
        stopPreview();
        currentPlayingBtn = btn;
        btn.innerHTML = "⏸️";
        btn.classList.add("playing");
        audioPlayer.src = audioUrl;
        audioPlayer.play().catch(() => {
            // Soft fail if file doesn't actually exist in local
            console.log("Audio preview mock play started for: " + audioUrl);
        });
    }
}

function stopPreview() {
    if (currentPlayingBtn) {
        currentPlayingBtn.innerHTML = "▶️";
        currentPlayingBtn.classList.remove("playing");
        currentPlayingBtn = null;
    }
    audioPlayer.pause();
}

// --- RENDER BGM TRACKS ---
function renderBgmTracks() {
    const bgmMenu = document.getElementById("musicMenuBox");
    bgmMenu.innerHTML = "";
    bgmTracks.forEach(track => {
        const item = document.createElement("div");
        item.className = "dropdown-item";
        item.innerText = track.name;
        item.addEventListener("click", () => {
            document.getElementById("musicTriggerBtn").innerText = track.name;
            selectedBgm = track.id;
            bgmMenu.classList.remove("show");
        });
        bgmMenu.appendChild(item);
    });
}

// --- FLOATING DROPDOWN WINDOWS TRIGGER CONTROLS ---
function setupGlobalDropdownListeners() {
    const dropdowns = [
        { trigger: "langTriggerBtn", menu: "langMenuBox" },
        { trigger: "voiceTriggerBtn", menu: "voiceMenuBox" },
        { trigger: "styleTriggerBtn", menu: "styleMenuBox" },
        { trigger: "musicTriggerBtn", menu: "musicMenuBox" }
    ];

    dropdowns.forEach(d => {
        const btn = document.getElementById(d.trigger);
        const menu = document.getElementById(d.menu);
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            // Close all other floating dropdown menus first
            dropdowns.forEach(o => {
                if(o.menu !== d.menu) document.getElementById(o.menu).classList.remove("show");
            });
            menu.classList.toggle("show");
        });
    });

    // Language Dropdown Item clicks handling
    document.querySelectorAll("#langMenuBox .dropdown-item").forEach(item => {
        item.addEventListener("click", (e) => {
            const selectedVal = item.getAttribute("data-value");
            document.getElementById("langTriggerBtn").innerText = item.innerText;
            switchLanguage(selectedVal);
            document.getElementById("langMenuBox").classList.remove("show");
        });
    });

    // Close any opened floating boxes when clicking out area anywhere
    document.addEventListener("click", () => {
        dropdowns.forEach(d => document.getElementById(d.menu).classList.remove("show"));
        stopPreview();
    });
}

// --- SLIDERS & ASPECT RATIO BOXES INITIAL PRESETS ---
function setupSlidersAndAspects() {
    // Character Counter
    const tx = document.getElementById("storyInput");
    tx.addEventListener("input", () => {
        const mode = currentLang === "en" ? langData.en.charCount : currentLang === "th" ? langData.th.charCount : langData.mm.charCount;
        document.getElementById("charCountLabel").innerText = `${tx.value.length} / 5000${mode}`;
    });

    // Sliders handling
    const speed = document.getElementById("speedSlider");
    speed.addEventListener("input", () => document.getElementById("speedVal").innerText = speed.value + "x");

    const pitch = document.getElementById("pitchSlider");
    pitch.addEventListener("input", () => document.getElementById("pitchVal").innerText = (pitch.value > 0 ? "+" : "") + pitch.value);

    const mVol = document.getElementById("musicVolSlider");
    mVol.addEventListener("input", () => document.getElementById("musicVolVal").innerText = mVol.value + "%");

    // Aspect Ratios Boxes clicks handling
    document.querySelectorAll(".aspect-box").forEach(box => {
        box.addEventListener("click", () => {
            document.querySelectorAll(".aspect-box").forEach(b => b.classList.remove("active"));
            box.classList.add("active");
            console.log("Selected Aspect Ratio: " + box.getAttribute("data-aspect"));
        });
    });
}
