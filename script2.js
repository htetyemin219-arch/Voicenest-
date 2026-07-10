// ==========================================
// VOICE NEST STUDIO v2.2 - CORE SCRIPT
// Brand: OneStepOn
// ==========================================

// 1. DATA CONFIGURATIONS
const PRESETS_DATA = [
    { id: "1tshort", name: "📱 1tShort", style: "Casual / Fast", desc: "Shorts & Reels ဗီဒီယိုများအတွက်" },
    { id: "ghost", name: "👻 Ghost Story", style: "Horror / Suspense", desc: "သရဲကမ္ဘာနှင့် ထိတ်လန့်စရာပုံပြင်များ" },
    { id: "recap", name: "🎬 Movie Recap", style: "Engaging / Narrative", desc: "ရုပ်ရှင်သုံးသပ်ချက် ဗီဒီယိုများအတွက်" },
    { id: "story", name: "📚 Storyteller", style: "Soft / Warm", desc: "ပုံပြင်နှင့် ဆောင်းပါးရှည်များအတွက်" },
    { id: "news", name: "📰 News Anchor", style: "Formal / Clear", desc: "သတင်းနှင့် ဗဟုသုတဖြစ်ဖွယ်များအတွက်" },
    { id: "motivation", name: "🔥 Motivation", style: "Energetic / Inspiring", desc: "စိတ်ဓာတ်ခွန်အားပေး ဗီဒီယိုများ" },
    { id: "documentary", name: "🌍 Documentary", style: "Deep / Cinematic", desc: "သဘာဝနှင့် သမိုင်းကြောင်းဆိုင်ရာများ" },
    { id: "commercial", name: "💡 Commercial", style: "Persuasive / Bright", desc: "ကြော်ငြာနှင့် Product ရောင်းချမှုများ" }
];

const VOICES_DATA = {
    mm: [
        { id: "mm-m1", name: "ဦးမင်းခန့် (Formal Male)", gender: "Male" },
        { id: "mm-m2", name: "ကိုစည်သူ (Casual Male)", gender: "Male" },
        { id: "mm-m3", name: "မောင်သက် (Deep Voice)", gender: "Male" },
        { id: "mm-m4", name: "ကိုနောင်နောင် (Energetic Male)", gender: "Male" },
        { id: "mm-f1", name: "ဒေါ်သန္တာ (Formal Female)", gender: "Female" },
        { id: "mm-f2", name: "မစုမြတ် (Sweet Female)", gender: "Female" },
        { id: "mm-f3", name: "နှင်းနုဝေ (Soft Female)", gender: "Female" },
        { id: "mm-f4", name: "ချိုပန်းမိုင် (Anime Style)", gender: "Female" }
    ],
    en: [
        { id: "en-m1", name: "James (US Professional)", gender: "Male" },
        { id: "en-m2", name: "Arthur (UK Deep/Narrator)", gender: "Male" },
        { id: "en-m3", name: "Ryan (Casual/Vlogger)", gender: "Male" },
        { id: "en-m4", name: "David (Cinematic Trailer)", gender: "Male" },
        { id: "en-f1", name: "Emma (US Friendly)", gender: "Female" },
        { id: "en-f2", name: "Olivia (UK Elegant)", gender: "Female" },
        { id: "en-f3", name: "Sophia (Soft/Story)", gender: "Female" },
        { id: "en-f4", name: "Lily (News Anchor)", gender: "Female" }
    ],
    th: [
        { id: "th-m1", name: "Somchai (Standard Male)", gender: "Male" },
        { id: "th-m2", name: "Kitti (News/Deep)", gender: "Male" },
        { id: "th-m3", name: "Chai (Casual Male)", gender: "Male" },
        { id: "th-f1", name: "Kanya (Sweet Female)", gender: "Female" },
        { id: "th-f2", name: "Priya (Soft Female)", gender: "Female" }
    ]
};

const STYLES_DATA = {
    mm: ["ပုံမှန် / Plain", "စိတ်လှုပ်ရှားဖွယ် / Excited", "လွမ်းဆွတ်ဖွယ် / Sad", "ထိတ်လန့်ဖွယ် / Scary", "တည်ကြည်သော / Serious"],
    en: ["Plain / Normal", "Excited / Energetic", "Sad / Emotional", "Scary / Whispering", "Professional / News"],
    th: ["ทั่วไป / Normal", "ตื่นเต้น / Excited", "เศร้า / Sad", "น่ากลัว / Scary", "ทางการ / Professional"]
};

const BGM_DATA = {
    mm: ["မသုံးပါ (None)", "စိတ်အေးချမ်းစရာ (Soft Cinematic)", "ထိတ်လန့်စရာ (Horror Ambient)", "တက်ကြွစရာ (Upbeat Inspiring)", "လွမ်းဆွတ်စရာ (Sad Piano)"],
    en: ["None (No BGM)", "Soft Cinematic", "Horror Ambient", "Upbeat Inspiring", "Sad Piano"],
    th: ["ไม่ใส่ (None)", "Cinematic เบาๆ", "สยองขวัญ (Horror)", "ตื่นเต้น (Upbeat)", "เศร้า (Sad Piano)"]
};

const TRANSLATIONS = {
    mm: {
        welcome: "Welcome to", presetLbl: "CONTENT PRESETS", inputPlh: "ဤနေရာတွင် သင့်ဗီဒီယိုဇာတ်ညွှန်းကို ရိုက်ထည့်ပါ...",
        charLbl: "စာလုံး", voiceLbl: "🗣️ အသံရှင် ရွေးချယ်ရန်", styleLbl: "🎭 အသံစတိုင်နှင့် ခံစားချက်ပုံစံများ",
        vCtrl: "VOICE CONTROLS", aspect: "VIDEO ASPECT GUIDE", mixer: "AMBIENT MUSIC MIXER",
        btnGen: "✨ AI Audio ထုတ်လုပ်မည်", audioRes: "🎵 Generated Audio Results",
        step1: "အဆင်သင့်", step2: "ထုတ်လုပ်နေသည်...", step3: "ပြီးပါပြီ", dlOpt: "📥 Download Options"
    },
    en: {
        welcome: "Welcome to", presetLbl: "CONTENT PRESETS", inputPlh: "Enter your story script here...",
        charLbl: "words", voiceLbl: "🗣️ Voice Actor Selection", styleLbl: "🎭 Narration Style & Emotion",
        vCtrl: "VOICE CONTROLS", aspect: "VIDEO ASPECT GUIDE", mixer: "AMBIENT MUSIC MIXER",
        btnGen: "✨ Generate AI Audio", audioRes: "🎵 Generated Audio Results",
        step1: "Ready", step2: "Generating...", step3: "Done", dlOpt: "📥 Download Options"
    },
    th: {
        welcome: "ยินดีต้อนรับสู่", presetLbl: "CONTENT PRESETS", inputPlh: "ใส่สคริปต์วิดีโอของคุณที่นี่...",
        charLbl: "ตัวอักษร", voiceLbl: "🗣️ เลือกนักพากย์เสียง", styleLbl: "🎭 สไตล์เสียงและอารมณ์",
        vCtrl: "VOICE CONTROLS", aspect: "VIDEO ASPECT GUIDE", mixer: "AMBIENT MUSIC MIXER",
        btnGen: "✨ สร้างเสียง AI", audioRes: "🎵 ผลลัพธ์เสียง AI",
        step1: "พร้อมใช้งาน", step2: "กำลังสร้างเสียง...", step3: "เสร็จสิ้น", dlOpt: "📥 Download Options"
    }
};

const PRO_TIPS = {
    mm: [
        "Ghost Story စတိုင်အတွက် 'ထိတ်လန့်ဖွယ်' စတိုင်ကို ရွေးချယ်ပါက ပိုမိုကောင်းမွန်သော ရလဒ်ရနိုင်ပါသည်။",
        "အသံထွက် ပိုမိုသဘာဝကျစေရန် Speech Speed ကို 0.9x သို့မဟုတ် 1.0x တွင် ထားပါ။",
        "အကောင်းဆုံး အရည်အသွေးရရှိရန် သင့်ဇာတ်ညွှန်းကို စာလုံးရေ ၁၅၀၀ အောက်သာ ထားရှိရန် အကြံပြုပါသည်း။"
    ],
    en: [
        "Use 'Scary / Whispering' style for ghost stories to get better narrative tones.",
        "Adjust Speech Speed to 0.9x or 1.0x for a more natural narration flow.",
        "Ensure your script length is under 1500 words for the premium rendering quality."
    ],
    th: [
        "ใช้สไตล์ 'น่ากลัว' สำหรับ Ghost Story เพื่อให้ได้โทนเสียงที่สมจริงยิ่งขึ้น",
        "ปรับ Speech Speed เป็น 0.9x หรือ 1.0x เพื่อให้เสียงพากย์ลื่นไหลเป็นธรรมชาติ",
        "แนะนำให้สคริปต์สั้นกว่า 1500 ตัวอักษร เพื่อคุณภาพการประมวลผลที่ดีที่สุด"
    }
};

// 2. DOM ELEMENTS
let currentLang = "mm";

document.addEventListener("DOMContentLoaded", () => {
    initApp();
    setupEventListeners();
    injectHeartbeatStyles(); // နှလုံးခုန်နှုန်း လှိုင်းအတွက် စတိုင်အသစ် ထည့်သွင်းခြင်း
});

// 3. INITIALIZATION
function initApp() {
    renderPresets();
    updateLanguageUI(currentLang);
}

function renderPresets() {
    const container = document.getElementById("presetsContainer");
    if (!container) return;
    container.innerHTML = PRESETS_DATA.map(p => `
        <div class="preset-card" data-id="${p.id}">
            <h4>${p.name}</h4>
            <span class="preset-style">${p.style}</span>
            <p class="preset-desc">${p.desc}</p>
        </div>
    `).join("");
}

function updateLanguageUI(lang) {
    const t = TRANSLATIONS[lang];
    
    // Core labels
    document.getElementById("welcomeTxt").innerText = t.welcome;
    document.getElementById("presetLabel").innerText = t.presetLbl;
    document.getElementById("storyInput").placeholder = t.inputPlh;
    document.getElementById("lblVoiceActor").innerText = t.voiceLbl;
    document.getElementById("lblNarrationStyle").innerText = t.styleLbl;
    document.getElementById("cardVoiceCtrl").innerText = t.vCtrl;
    document.getElementById("cardAspect").innerText = t.aspect;
    document.getElementById("cardMixer").innerText = t.mixer;
    document.getElementById("generateBtn").innerText = t.btnGen;
    document.getElementById("lblAudioResult").innerText = t.audioRes;
    document.getElementById("downloadTriggerBtn").innerText = t.dlOpt;

    // Timeline Steps
    document.getElementById("txtStepReady").innerText = t.step1;
    document.getElementById("txtStepGen").innerText = t.step2;
    document.getElementById("txtStepDone").innerText = t.step3;

    // Dropdowns & Data Lists Update
    renderVoiceDropdown(lang);
    renderStyleDropdown(lang);
    renderMusicDropdown(lang);
    renderTips(lang);
    
    // Character Counter
    updateCharCount();
}

function renderVoiceDropdown(lang) {
    const menu = document.getElementById("voiceMenuBox");
    const trigger = document.getElementById("voiceTriggerBtn");
    const voices = VOICES_DATA[lang];
    
    menu.innerHTML = voices.map(v => `
        <div class="dropdown-item" data-value="${v.id}">
            <span>${v.name}</span>
            <span class="badge-gender ${v.gender.toLowerCase()}">${v.gender}</span>
        </div>
    `).join("");
    
    trigger.innerText = voices[0].name;
}

function renderStyleDropdown(lang) {
    const menu = document.getElementById("styleMenuBox");
    const trigger = document.getElementById("styleTriggerBtn");
    const styles = STYLES_DATA[lang];
    
    menu.innerHTML = styles.map(s => `<div class="dropdown-item" data-value="${s}">${s}</div>`).join("");
    trigger.innerText = styles[0];
}

function renderMusicDropdown(lang) {
    const menu = document.getElementById("musicMenuBox");
    const trigger = document.getElementById("musicTriggerBtn");
    const bgms = BGM_DATA[lang];
    
    menu.innerHTML = bgms.map(b => `<div class="dropdown-item" data-value="${b}">${b}</div>`).join("");
    trigger.innerText = bgms[0];
}

function renderTips(lang) {
    const list = document.getElementById("tipsList");
    list.innerHTML = PRO_TIPS[lang].map(tip => `<li>${tip}</li>`).join("");
}

function updateCharCount() {
    const input = document.getElementById("storyInput");
    const label = document.getElementById("charCountLabel");
    const count = input.value.length;
    const suffix = TRANSLATIONS[currentLang].charLbl;
    label.innerText = `${count} / 5000 ${suffix}`;
}

// 4. EVENT LISTENERS & DROPDOWNS INTERACTION
function setupEventListeners() {
    // Dropdown Toggles (Fixing Download Options & Others)
    setupDropdownToggle("langTriggerBtn", "langMenuBox");
    setupDropdownToggle("voiceTriggerBtn", "voiceMenuBox");
    setupDropdownToggle("styleTriggerBtn", "styleMenuBox");
    setupDropdownToggle("musicTriggerBtn", "musicMenuBox");
    setupDropdownToggle("downloadTriggerBtn", "downloadMenuBox");

    // Language Selection
    document.getElementById("langMenuBox").addEventListener("click", (e) => {
        const item = e.target.closest(".dropdown-item");
        if (!item) return;
        currentLang = item.dataset.value;
        document.getElementById("langTriggerBtn").innerHTML = `🌐 ${item.innerText}`;
        updateLanguageUI(currentLang);
        document.getElementById("langMenuBox").classList.remove("show");
    });

    // General Dropdown Items Selection
    bindDropdownSelection("voiceMenuBox", "voiceTriggerBtn");
    bindDropdownSelection("styleMenuBox", "styleTriggerBtn");
    bindDropdownSelection("musicMenuBox", "musicTriggerBtn");

    // Textarea input
    document.getElementById("storyInput").addEventListener("input", updateCharCount);

    // Sliders
    setupSlider("speedSlider", "speedVal", "x");
    setupSlider("pitchSlider", "pitchVal", "");
    setupSlider("musicVolSlider", "musicVolVal", "%");

    // Aspect Ratio Selection
    document.querySelectorAll(".aspect-box").forEach(box => {
        box.addEventListener("click", () => {
            document.querySelectorAll(".aspect-box").forEach(b => b.classList.remove("active"));
            box.classList.add("active");
        });
    });

    // Preset Cards Click
    document.getElementById("presetsContainer").addEventListener("click", (e) => {
        const card = e.target.closest(".preset-card");
        if (!card) return;
        document.querySelectorAll(".preset-card").forEach(c => c.classList.remove("active"));
        card.classList.add("active");
    });

    // AI Generation Button Simulation (Timeline & Waveform Animation)
    document.getElementById("generateBtn").addEventListener("click", simulateAIGeneration);
}

function setupDropdownToggle(triggerId, menuId) {
    const trigger = document.getElementById(triggerId);
    const menu = document.getElementById(menuId);
    
    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        // Close all other dropdowns first
        document.querySelectorAll(".dropdown-menu-box").forEach(m => {
            if (m.id !== menuId) m.classList.remove("show");
        });
        menu.classList.toggle("show");
    });

    // Close when clicking outside
    document.addEventListener("click", () => menu.classList.remove("show"));
}

function bindDropdownSelection(menuId, triggerId) {
    const menu = document.getElementById(menuId);
    const trigger = document.getElementById(triggerId);
    
    menu.addEventListener("click", (e) => {
        const item = e.target.closest(".dropdown-item");
        if (!item) return;
        trigger.innerText = item.querySelector("span") ? item.querySelector("span").innerText : item.innerText;
        menu.classList.remove("show");
    });
}

function setupSlider(sliderId, valId, suffix) {
    const slider = document.getElementById(sliderId);
    const val = document.getElementById(valId);
    slider.addEventListener("input", () => {
        val.innerText = `${slider.value}${suffix}`;
    });
}

// 5. SMART TIMELINE & HEARTBEAT WAVEFORM SIMULATION
function simulateAIGeneration() {
    const stepReady = document.getElementById("stepReady");
    const stepGen = document.getElementById("stepGen");
    const stepDone = document.getElementById("stepDone");
    const timelineLine = document.getElementById("timelineLine");
    const genBtn = document.getElementById("generateBtn");
    const playBtn = document.getElementById("resultPlayBtn");
    const dlBtn = document.getElementById("downloadTriggerBtn");
    const waveform = document.getElementById("waveformContainer");

    // Reset UI
    genBtn.disabled = true;
    playBtn.disabled = true;
    dlBtn.disabled = true;
    stepGen.classList.remove("active");
    stepDone.classList.remove("active");
    timelineLine.style.width = "0%";
    waveform.classList.remove("heartbeat-playing");

    // Phase 1: Generating...
    setTimeout(() => {
        stepGen.classList.add("active");
        timelineLine.style.width = "50%";
    }, 1000);

    // Phase 2: Done
    setTimeout(() => {
        stepDone.classList.add("active");
        timelineLine.style.width = "100%";
        genBtn.disabled = false;
        playBtn.disabled = false;
        dlBtn.disabled = false; // အခုနှိပ်လို့ရပါပြီ
        
        // Render Smart Heartbeat Waveform Setup
        setupHeartbeatWaveform();
    }, 4000);
}

// 6. HEARTBEAT (နှလုံးခုန်နှုန်းလှိုင်း) CREATION
function setupHeartbeatWaveform() {
    const container = document.getElementById("waveformContainer");
    container.innerHTML = `
        <div class="heartbeat-graph">
            <svg viewBox="0 0 300 60" class="heartbeat-svg">
                <path class="heartbeat-path-bg" d="M0,30 L60,30 L70,10 L80,50 L90,30 L130,30 L135,20 L140,40 L145,30 L180,30 L190,5 L200,55 L210,30 L300,30" />
                <path class="heartbeat-path-pulse" d="M0,30 L60,30 L70,10 L80,50 L90,30 L130,30 L135,20 L140,40 L145,30 L180,30 L190,5 L200,55 L210,30 L300,30" />
            </svg>
        </div>
    `;

    // Play/Pause Interaction for Voice Preview
    const playBtn = document.getElementById("resultPlayBtn");
    playBtn.onclick = () => {
        const pulsePath = container.querySelector(".heartbeat-path-pulse");
        if (pulsePath.classList.contains("pulsing")) {
            pulsePath.classList.remove("pulsing");
            playBtn.innerText = "▶️";
        } else {
            pulsePath.classList.add("pulsing");
            playBtn.innerText = "⏸️";
        }
    };
}

// 7. INJECT ADVANCED STYLES FOR PREMIUM LOOK & HEARTBEAT
function injectHeartbeatStyles() {
    const style = document.createElement("style");
    style.innerHTML = `
        /* Professional Timeline Progress Glow Track */
        .timeline-container { position: relative; display: flex; justify-content: space-between; margin: 25px 0; background: #231d30; padding: 12px; border-radius: 30px; border: 1px solid #3d2d5a; }
        .timeline-progress-line { position: absolute; top: 50%; left: 10%; height: 4px; background: linear-gradient(90deg, #a855f7, #6366f1); transform: translateY(-50%); transition: width 0.5s ease; box-shadow: 0 0 10px #a855f7; z-index: 1; width: 0%; }
        
        /* Dropdown Show Logic */
        .dropdown-menu-box { display: none !important; }
        .dropdown-menu-box.show { display: block !important; opacity: 1; transform: translateY(0); }

        /* Heartbeat Graphics CSS */
        .heartbeat-graph { width: 100%; height: 60px; display: flex; align-items: center; justify-content: center; background: #130f22; border-radius: 8px; overflow: hidden; padding: 0 10px; border: 1px solid #2d1f4e; }
        .heartbeat-svg { width: 100%; height: 100%; }
        .heartbeat-path-bg { fill: none; stroke: #2d224e; stroke-width: 2; }
        .heartbeat-path-pulse { fill: none; stroke: #00ffcc; stroke-width: 3; stroke-linecap: round; stroke-linejoin: round; stroke-dasharray: 1000; stroke-dashoffset: 1000; }
        
        /* Animation when Play Audio Button is active */
        .heartbeat-path-pulse.pulsing { animation: dash 3s linear infinite; filter: drop-shadow(0 0 5px #00ffcc); }
        @keyframes dash { to { stroke-dashoffset: 0; } }
        
        /* Gender Badge Styles */
        .badge-gender { font-size: 10px; padding: 2px 6px; border-radius: 4px; font-weight: bold; }
        .badge-gender.male { background: #2563eb; color: #fff; }
        .badge-gender.female { background: #db2777; color: #fff; }
    `;
    document.head.appendChild(style);
}
