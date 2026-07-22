/* ==========================================================================
   VOICENEST STUDIO v3.5 PRO - JAVASCRIPT ENGINE & LOCALIZATION
   ================================================================---------- */

// Localization Dictionary (EN, MY, JA, TH)
const i18nDict = {
    en: {
        script_title: "Voice Script Workspace",
        pause: "Pause",
        emphasis: "Emphasis",
        clear: "Clear",
        chars: "Chars",
        voice_selection: "Voice Actor Selection (9-Scale Pro)",
        narration_style: "Narration Style & Emotion",
        ambient_music: "Ambient Background Music",
        bg_volume: "Background Vol:",
        speed: "Speed:",
        pitch: "Pitch:",
        generate_btn: "GENERATE STUDIO VOICE",
        engine_ready: "Voice Engine Ready",
        export: "Export"
    },
    my: {
        script_title: "အသံသွင်းစာသား လုပ်ငန်းခွင်",
        pause: "ခဏရပ်",
        emphasis: "အလေးပေး",
        clear: "ဖျက်မည်",
        chars: "စာလုံးရေ",
        voice_selection: "အသံရှင် ရွေးချယ်မှု (9-Scale Pro)",
        narration_style: "အသံနေအသံထားနှင့် ခံစားချက်",
        ambient_music: "နောက်ခံ တီးလုံးတေးသွား",
        bg_volume: "နောက်ခံအသံအကျယ်:",
        speed: "အမြန်နှုန်း:",
        pitch: "အသံအနိမ့်အမြင့်:",
        generate_btn: "စတူဒီယို အသံဖိုင် ဖန်တီးမည်",
        engine_ready: "အသံစနစ် အဆင်သင့်ဖြစ်ပါပြီ",
        export: "ထုတ်ယူမည်"
    },
    ja: {
        script_title: "音声スクリプト ワークスペース",
        pause: "一時停止",
        emphasis: "強調",
        clear: "クリア",
        chars: "文字",
        voice_selection: "声優選択 (9スケールプロ)",
        narration_style: "ナレーションスタイル＆感情",
        ambient_music: "アンビエントBGM",
        bg_volume: "BGM音量:",
        speed: "速度:",
        pitch: "ピッチ:",
        generate_btn: "スタジオ音声を生成",
        engine_ready: "音声エンジン準備完了",
        export: "エクスポート"
    },
    th: {
        script_title: "พื้นที่ทำงานสคริปต์เสียง",
        pause: "หยุดชั่วคราว",
        emphasis: "เน้นเสียง",
        clear: "ล้าง",
        chars: "ตัวอักษร",
        voice_selection: "เลือกนักพากย์ (9-Scale Pro)",
        narration_style: "สไตล์การเล่าเรื่องและอารมณ์",
        ambient_music: "เพลงประกอบรอบข้าง",
        bg_volume: "ระดับเสียง BG:",
        speed: "ความเร็ว:",
        pitch: "ระดับเสียงสูงต่ำ:",
        generate_btn: "สร้างเสียงสตูดิโอ",
        engine_ready: "เครื่องมือเสียงพร้อมใช้งาน",
        export: "ส่งออก"
    }
};

let currentTier = 'free'; // 'free' or 'premium'
let charLimits = { free: 2000, premium: 10000 };
let currentLang = 'my';
let isPlaying = false;

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
    updateScriptMetrics();
    switchLanguage('my');
});

// Update Script Metrics & Byte Progress
function updateScriptMetrics() {
    const text = document.getElementById('scriptInput').value;
    const charCount = text.length;
    const maxLimit = charLimits[currentTier];

    document.getElementById('charCounter').textContent = charCount.toLocaleString();
    document.getElementById('maxCharLimit').textContent = maxLimit.toLocaleString();
    
    // Size KB calculation
    const sizeKB = (new Blob([text]).size / 1024).toFixed(2);
    document.getElementById('sizeCounter').textContent = sizeKB + ' KB';

    // Estimated duration calculation (approx 15 chars per second)
    const estSec = (charCount / 14).toFixed(1);
    document.getElementById('durationCounter').textContent = estSec + 's';

    // Progress bar fill
    const percentage = Math.min((charCount / maxLimit) * 100, 100);
    const fillBar = document.getElementById('byteProgressBar');
    fillBar.style.width = percentage + '%';
    
    if (percentage > 85) {
        fillBar.style.background = 'var(--danger)';
    } else {
        fillBar.style.background = 'var(--accent-cyan)';
    }
}

// Clear Script
function clearScript() {
    document.getElementById('scriptInput').value = '';
    updateScriptMetrics();
}

// Insert SSML Tag
function insertSSMLTag(tag) {
    const textarea = document.getElementById('scriptInput');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const val = textarea.value;
    
    let tagText = tag === 'pause' ? '[pause: 1s]' : '[emphasis]';
    textarea.value = val.substring(0, start) + tagText + val.substring(end);
    textarea.focus();
    updateScriptMetrics();
}

// Story Presets
function applyPreset(type) {
    const textarea = document.getElementById('scriptInput');
    if (type === 'ghost') {
        textarea.value = "တိတ်ဆိတ်ခြောက်ခြားဖွယ် ညတစ်ည... ရွာစွန်ဘုန်းကြီးကျောင်းဟောင်းလေးဆီကနေ လူသူကင်းမဲ့နေချိန် တိုးညှင်းတဲ့ အသံတွေ ထွက်ပေါ်လာခဲ့တယ်...";
        document.getElementById('voiceActorSelect').value = "6"; // Hein Htet Ghost Story
        document.getElementById('narrationStyleSelect').value = "suspense";
        document.getElementById('ambientMusicSelect').value = "horror";
    } else if (type === 'recap') {
        textarea.value = "ဒီနေ့မှာတော့ ရုပ်ရှင်ဇာတ်ကားသစ်ကြီးရဲ့ အံ့သြဖွယ် အလှည့်အပြောင်းတွေကို တစ်ခုချင်းစီ ဆက်လက် တင်ဆက်ပေးသွားမှာ ဖြစ်ပါတယ်...";
        document.getElementById('voiceActorSelect').value = "1";
        document.getElementById('narrationStyleSelect').value = "energetic";
        document.getElementById('ambientMusicSelect').value = "cinematic";
    } else if (type === 'mystery') {
        textarea.value = "သိပ္ပံပညာရှင်တွေတောင် ယနေ့တိုင် အဖြေမရှာနိုင်သေးတဲ့ စကြာဝဠာရဲ့ လျှို့ဝှက်ဆန်းကြယ် ရေအောက် နက်နဲရာ အချက်ပြမှုများ...";
        document.getElementById('voiceActorSelect').value = "7"; // Mystery Deep Voice
        document.getElementById('narrationStyleSelect').value = "documentary";
        document.getElementById('ambientMusicSelect').value = "mystery";
    } else if (type === 'story') {
        textarea.value = "ရှေးဟောင်း ပုံပြင် ရာဇဝင်တစ်ပုဒ်ကို ပြန်လည်ပြောပြရမယ်ဆိုရင်ဖြင့် ကာလများစွာက စတင်ခဲ့ပါတယ်...";
        document.getElementById('voiceActorSelect').value = "3";
        document.getElementById('narrationStyleSelect').value = "dramatic";
        document.getElementById('ambientMusicSelect').value = "sciFi";
    } else if (type === 'none') {
        textarea.value = "";
        document.getElementById('ambientMusicSelect').value = "none";
    }
    updateScriptMetrics();
}

// Aspect Ratio Selector
function setAspectRatio(ratio, btn) {
    document.querySelectorAll('.ratio-chip').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
}

// Sliders Value Update
function updateSliderVal(type, val) {
    if (type === 'bgVol') {
        document.getElementById('bgVolVal').textContent = val + '%';
    } else if (type === 'speed') {
        document.getElementById('speedVal').textContent = val + 'x';
    } else if (type === 'pitch') {
        document.getElementById('pitchVal').textContent = (val > 0 ? '+' + val : val);
    }
}

// Settings Bottom Sheet Drawer Controls
function openSettingsDrawer() {
    document.getElementById('settingsDrawerOverlay').classList.add('show');
    document.getElementById('settingsBottomDrawer').classList.add('show');
}

function closeSettingsDrawer() {
    document.getElementById('settingsDrawerOverlay').classList.remove('show');
    document.getElementById('settingsBottomDrawer').classList.remove('show');
}

// Plan Tier Switcher
function setPlanTier(tier) {
    currentTier = tier;
    const badge = document.getElementById('planBadge');
    const badgeText = document.getElementById('planBadgeText');
    
    if (tier === 'premium') {
        badge.className = "plan-badge premium";
        badgeText.textContent = "PREMIUM PRO";
        document.getElementById('tierPremBtn').classList.add('active');
        document.getElementById('tierFreeBtn').classList.remove('active');
        document.getElementById('bitrateSelect').value = "320";
    } else {
        badge.className = "plan-badge free";
        badgeText.textContent = "FREE PLAN";
        document.getElementById('tierFreeBtn').classList.add('active');
        document.getElementById('tierPremBtn').classList.remove('active');
        document.getElementById('bitrateSelect').value = "128";
    }
    updateScriptMetrics();
}

function saveSettings() {
    closeSettingsDrawer();
    alert("Pro Settings successfully applied!");
}

// Language Switcher (Real-time i18n)
function switchLanguage(lang) {
    currentLang = lang;
    document.getElementById('mainLangSelector').value = lang;
    document.getElementById('settingsLangSelect').value = lang;

    const dict = i18nDict[lang];
    if (!dict) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.textContent = dict[key];
        }
    });
}

// Export Menu Toggle
function toggleExportMenu() {
    document.getElementById('exportMenu').classList.toggle('show');
}

// Play / Pause Simulation
function togglePlayPause() {
    isPlaying = !isPlaying;
    const btn = document.getElementById('playPauseBtn');
    btn.innerHTML = isPlaying ? '<i class="fa-solid fa-pause"></i>' : '<i class="fa-solid fa-play"></i>';
}

// Generate Voice Action
function generateStudioVoice() {
    const text = document.getElementById('scriptInput').value.trim();
    if (!text) {
        alert("ကျေးဇူးပြု၍ စာသားအနည်းဆုံး ရိုက်ထည့်ပါ!");
        return;
    }
    alert("Voice Engine မှ အသံဖိုင်ကို စတင် ထုတ်လုပ်နေပါပြီ... ခေတ္တစောင့်ဆိုင်းပေးပါ။");
    isPlaying = true;
    document.getElementById('playPauseBtn').innerHTML = '<i class="fa-solid fa-pause"></i>';
}

function previewAudio(type) {
    alert("Previewing " + type + " sample audio...");
}

function exportAudio(format) {
    toggleExportMenu();
    alert("Exporting audio in ." + format.toUpperCase() + " format successfully!");
}

function openProjectsModal() { alert("Projects modal opened."); }
function openFavoritesModal() { alert("Favorites modal opened."); }
