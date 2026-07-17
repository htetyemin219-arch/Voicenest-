// ==========================================
// VoiceNest Studio v3.0 - OneStepOn
// Comprehensive Pro Edition Engine
// ==========================================

const languages = {
    mm: {
        welcome: "Welcome to",
        presetLabel: "CONTENT PRESETS",
        lblVoiceActor: "🗣️ အသံရှင် ရွေးချယ်ရန်",
        lblNarrationStyle: "🎭 အသံစတိုင်နှင့် ခံစားချက်ပုံစံများ",
        cardVoiceCtrl: "VOICE CONTROLS",
        lblSpeed: "အမြန်နှုန်း / Speech Speed",
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
        charUnit: "စာလုံး",
        txtNoProjects: "သိမ်းဆည်းထားသော ပရောဂျက်များ မရှိသေးပါ။",
        txtNoFavs: "အကြိုက်ဆုံးအဖြစ် သတ်မှတ်ထားသော အသံများ မရှိသေးပါ။",
        titleSettingsView: "⚙️ စနစ်ပိုင်းဆိုင်ရာ ဆက်တင်များ",
        lblThemeCtrl: "အသုံးပြုမှု ဦးစားပေး ဆက်တင်များ",
        tips: [
            "ဇာတ်လမ်းပြောဗီဒီယိုများအတွက် Emotional / Deep စတိုင်ကို သုံးပါက ပိုမိုကောင်းမွန်သော အသံထွက်ကို ရရှိနိုင်ပါသည်။",
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
        charUnit: "characters",
        txtNoProjects: "No saved projects found.",
        txtNoFavs: "No favorite audio configurations added yet.",
        titleSettingsView: "⚙️ System Settings",
        lblThemeCtrl: "Preference Configuration",
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
        lblSpeed: "ความเร็วเสียง / Speech Speed",
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
        charUnit: "ตัวอักษร",
        txtNoProjects: "ยังไม่มีโปรเจกต์ที่บันทึกไว้",
        txtNoFavs: "ยังไม่มีรายการเสียงที่ชื่นชอบ",
        titleSettingsView: "⚙️ ตั้งค่าระบบ",
        lblThemeCtrl: "การกำหนดค่าการตั้งค่า",
        tips: [
            "ใช้สไตล์ 'Emotional / Deep' สำหรับการเล่าเรื่องเพื่อความสมจริงยิ่งขึ้น",
            "ตั้งความเร็วเสียงไว้ที่ 0.9x หรือ 1.0x เพื่อให้ได้น้ำเสียงที่เป็นธรรมชาติที่สุด",
            "เพื่อคุณภาพเสียงที่ดีที่สุด ควรให้สคริปต์มีความยาวไม่เกิน 1500 ตัวอักษร"
        ]
    }
};

const presets = [
    { id: "ttshort", icon: "🎵", name: "TtShort" },
    { id: "ghost", icon: "👻", name: "Ghost Story" },
    { id: "recap", icon: "🎬", name: "Movie Recap" },
    { id: "story", icon: "📚", name: "Storyteller" }
];

const voiceActors = {
    mm: [
        { id: "mm_v1", name: "ကိုမြတ်ကျော်", gender: "Male", accent: "ဗမာ (စံနှုန်း)" },
        { id: "mm_v2", name: "မသီရိမေ", gender: "Female", accent: "ဗမာ (စံနှုန်း)" },
        { id: "mm_v3", name: "ကိုမင်းသန့်", gender: "Male", accent: "ဗမာ (ခေတ်ပေါ်)" },
        { id: "mm_v4", name: "မဆောင်းနှင်း", gender: "Female", accent: "ဗမာ (နူးညံ့)" }
    ],
    en: [
        { id: "en_v1", name: "James Connor", gender: "Male", accent: "US Standard" },
        { id: "en_v2", name: "Olivia Smith", gender: "Female", accent: "US Soft" },
        { id: "en_v3", name: "Liam Davies", gender: "Male", accent: "UK Standard" },
        { id: "en_v4", name: "Emma Wilson", gender: "Female", accent: "UK Elegant" }
    ],
    th: [
        { id: "th_v1", name: "สมชาย (Somchai)", gender: "Male", accent: "ไทยกลาง" },
        { id: "th_v2", name: "สมศรี (Somsri)", gender: "Female", accent: "ไทยกลาง" },
        { id: "th_v3", name: "ธนา (Thana)", gender: "Male", accent: "ไทยวัยรุ่น" },
        { id: "th_v4", name: "ลิซ่า (Lisa)", gender: "Female", accent: "ไทยนุ่มนวล" }
    ]
};

const narrationStyles = {
    mm: [
        { id: "plain", name: "ပုံမှန် / Plain" },
        { id: "deep", name: "Emotional / Deep (ခံစားချက်အပြည့်)" },
        { id: "storytelling", name: "Storyteller (ပုံပြောသူဟန်)" },
        { id: "recap", name: "Movie Recap (ဇာတ်လမ်းချုပ်ဟန်)" }
    ],
    en: [
        { id: "plain", name: "Plain / Normal Flow" },
        { id: "deep", name: "Emotional / Deep Resonance" },
        { id: "storytelling", name: "Storyteller / Narrative" },
        { id: "recap", name: "Movie Recap Style" }
    ],
    th: [
        { id: "plain", name: "ทั่วไป / Plain" },
        { id: "deep", name: "เน้นอารมณ์ / Deep" },
        { id: "storytelling", name: "นักเล่าเรื่อง / Storyteller" },
        { id: "recap", name: "สรุปเนื้อหา / Movie Recap" }
    ]
};

const ambientMusic = {
    mm: [{ id: "none", name: "မသုံးပါ (None)" }, { id: "lofi", name: "Chill Lofi Aesthetic" }, { id: "sad", name: "Emotional Piano" }],
    en: [{ id: "none", name: "None" }, { id: "lofi", name: "Chill Lofi Aesthetic" }, { id: "sad", name: "Emotional Piano" }],
    th: [{ id: "none", name: "ไม่ใช้เพลง (None)" }, { id: "lofi", name: "Chill Lofi Aesthetic" }, { id: "sad", name: "Emotional Piano" }]
};

// State
let currentLang = "mm";
let isPlaying = false;
let audioDuration = 45; // Simulated seconds
let currentTime = 0;
let playbackInterval = null;

document.addEventListener("DOMContentLoaded", () => {
    initLanguageDropdown();
    initPresets();
    initEventListeners();
    initSidebarNavigation();
    buildWaveformVisualizer();
    updateUIStrings();
});

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
        document.getElementById("langTriggerBtn").innerText = lang.name;
        updateUIStrings();
        updateCharCount();
    });
}

function initSidebarNavigation() {
    const tabs = [
        { menuId: "menuHome", viewId: "viewHome" },
        { menuId: "menuProjects", viewId: "viewProjects" },
        { menuId: "menuFavorites", viewId: "viewFavorites" },
        { menuId: "menuSettings", viewId: "viewSettings" }
    ];
    
    tabs.forEach(tab => {
        const menuBtn = document.getElementById(tab.menuId);
        if (menuBtn) {
            menuBtn.addEventListener("click", () => {
                document.querySelectorAll(".menu-item").forEach(m => m.classList.remove("active"));
                document.querySelectorAll(".app-view").forEach(v => v.classList.remove("active"));
                
                menuBtn.classList.add("active");
                document.getElementById(tab.viewId).classList.add("active");
            });
        }
    });
}

function buildWaveformVisualizer() {
    const container = document.getElementById("waveformContainer");
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < 45; i++) {
        const bar = document.createElement("div");
        bar.className = "wave-bar";
        container.appendChild(bar);
    }
}

function updateCharCount() {
    const textarea = document.getElementById("storyInput");
    const label = document.getElementById("charCountLabel");
    if (textarea && label) {
        label.innerText = `${textarea.value.length} / 5000 ${languages[currentLang].charUnit}`;
    }
}

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
    
    // View Strings Sync
    document.getElementById("txtNoProjects").innerText = data.txtNoProjects;
    document.getElementById("txtNoFavs").innerText = data.txtNoFavs;
    document.getElementById("titleSettingsView").innerText = data.titleSettingsView;
    document.getElementById("lblThemeCtrl").innerText = data.lblThemeCtrl;

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

function renderVoiceDropdown() {
    const items = voiceActors[currentLang].map(v => ({
        id: v.id, name: v.name,
        html: `<div style="display:flex; justify-content:space-between; width:100%;"><strong>${v.name}</strong><span style="font-size:11px; opacity:0.7;">${v.accent}</span></div>`,
        triggerHtml: `🗣️ ${v.name}`
    }));
    document.getElementById("voiceTriggerBtn").innerHTML = languages[currentLang].selectVoice;
    setupCustomDropdown("voiceTriggerBtn", "voiceMenuBox", items, () => {});
}

function renderStyleDropdown() {
    document.getElementById("styleTriggerBtn").innerHTML = languages[currentLang].selectStyle;
    setupCustomDropdown("styleTriggerBtn", "styleMenuBox", narrationStyles[currentLang], () => {});
}

function renderMusicDropdown() {
    document.getElementById("musicTriggerBtn").innerHTML = languages[currentLang].selectMusic;
    setupCustomDropdown("musicTriggerBtn", "musicMenuBox", ambientMusic[currentLang], () => {});
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

function initEventListeners() {
    document.getElementById("storyInput").addEventListener("input", updateCharCount);

    const speed = document.getElementById("speedSlider");
    if (speed) speed.addEventListener("input", () => document.getElementById("speedVal").innerText = speed.value + "x");

    const pitch = document.getElementById("pitchSlider");
    if (pitch) pitch.addEventListener("input", () => document.getElementById("pitchVal").innerText = (pitch.value > 0 ? "+" : "") + pitch.value);

    const musicVol = document.getElementById("musicVolSlider");
    if (musicVol) musicVol.addEventListener("input", () => document.getElementById("musicVolVal").innerText = musicVol.value + "%");

    document.querySelectorAll(".aspect-box").forEach(box => {
        box.addEventListener("click", () => {
            document.querySelectorAll(".aspect-box").forEach(b => b.classList.remove("active"));
            box.classList.add("active");
        });
    });

    document.getElementById("generateBtn").addEventListener("click", handleGeneration);
    document.getElementById("resultPlayBtn").addEventListener("click", toggleAudioPlayback);
    
    // Pro Timeline Range Slider (Manual Control Seek)
    const timelineSlider = document.getElementById("audioTimelineSlider");
    timelineSlider.addEventListener("input", () => {
        currentTime = (timelineSlider.value / 100) * audioDuration;
        formatTimeDisplay();
        renderActiveBars();
    });
}

function setTimelineStep(step) {
    document.querySelectorAll(".timeline-step").forEach(s => s.classList.remove("active"));
    const line = document.getElementById("timelineLine");
    if (step === 'ready') { line.style.width = "0%"; document.getElementById("stepReady").classList.add("active"); }
    else if (step === 'gen') { line.style.width = "50%"; document.getElementById("stepReady").classList.add("active"); document.getElementById("stepGen").classList.add("active"); }
    else if (step === 'done') { line.style.width = "100%"; document.getElementById("stepReady").classList.add("active"); document.getElementById("stepGen").classList.add("active"); document.getElementById("stepDone").classList.add("active"); }
}

function handleGeneration() {
    const text = document.getElementById("storyInput").value.trim();
    if (!text) {
        alert(currentLang === "mm" ? "ကျေးဇူးပြု၍ ဇာတ်ညွှန်းတစ်ခုခု အရင်ရိုက်ထည့်ပါဦးဗျာ။" : "Please enter script text first!");
        return;
    }
    setTimelineStep('gen');
    const genBtn = document.getElementById("generateBtn");
    genBtn.disabled = true;

    setTimeout(() => {
        setTimelineStep('done');
        genBtn.disabled = false;
        document.getElementById("resultPlayBtn").disabled = false;
        document.getElementById("audioTimelineSlider").disabled = false;
        document.getElementById("downloadTriggerBtn").disabled = false;
        initDownloadDropdown();
        
        currentTime = 0;
        document.getElementById("audioTimelineSlider").value = 0;
        formatTimeDisplay();
        resetWaveformBars();
        
        alert(currentLang === "mm" ? "✨ AI အသံ ထုတ်လုပ်မှု အောင်မြင်စွာ ပြီးဆုံးပါပြီ။" : "✨ AI Audio successfully generated!");
    }, 2500);
}

function toggleAudioPlayback() {
    const playBtn = document.getElementById("resultPlayBtn");
    if (!isPlaying) {
        isPlaying = true;
        playBtn.innerText = "⏸️";
        playbackInterval = setInterval(() => {
            currentTime += 0.5;
            if (currentTime >= audioDuration) {
                currentTime = audioDuration;
                clearInterval(playbackInterval);
                isPlaying = false;
                playBtn.innerText = "▶️";
            }
            document.getElementById("audioTimelineSlider").value = (currentTime / audioDuration) * 100;
            formatTimeDisplay();
            renderActiveBars();
        }, 500);
    } else {
        isPlaying = false;
        playBtn.innerText = "▶️";
        clearInterval(playbackInterval);
    }
}

function renderActiveBars() {
    const bars = document.querySelectorAll(".wave-bar");
    const percentDone = (currentTime / audioDuration) * 100;
    const barsToActive = Math.floor((percentDone / 100) * bars.length);
    
    bars.forEach((bar, index) => {
        if (index <= barsToActive) {
            bar.style.background = "#a855f7"; // Neon purple active color
            if (isPlaying) {
                bar.style.height = `${Math.floor(Math.random() * 28) + 12}px`;
            }
        } else {
            bar.style.background = "#6366f1";
            bar.style.height = "8px";
        }
    });
}

function resetWaveformBars() {
    document.querySelectorAll(".wave-bar").forEach(bar => {
        bar.style.background = "#6366f1";
        bar.style.height = "12px";
    });
}

function formatTimeDisplay() {
    const format = (time) => String(Math.floor(time)).padStart(2, '0');
    document.getElementById("audioTimeDisplay").innerText = `00:${format(currentTime)} / 00:${format(audioDuration)}`;
}

function initDownloadDropdown() {
    const trigger = document.getElementById("downloadTriggerBtn");
    const menu = document.getElementById("downloadMenuBox");
    if (!trigger || !menu) return;
    trigger.onclick = (e) => { e.stopPropagation(); menu.classList.toggle("show"); };
    document.getElementById("dlMp3").onclick = () => alert("Downloading Pro MP3...");
    document.getElementById("dlSrt").onclick = () => alert("Downloading SRT Subtitles...");
}
