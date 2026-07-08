// =========================================================================
// 1. DATA DICTIONARIES (မနေ့က ဒေတာတွေ လုံးဝ မဖျက်ဘဲ အပြည့်အစုံ ထိန်းသိမ်းထားပါတယ်)
// =========================================================================
const localizationData = {
    my: {
        ui: {
            title: "VoiceNest", subtitle: "STUDIO ENGINE", presetTitle: "Content Presets",
            voiceTitle: "🎙️ အသံရှင် ရွေးချယ်ရန်", styleTitle: "🎭 အသံစတိုင်နှင့် ขံစားချက် မုဒ်များ",
            bgmTitle: "Ambient Music Mixer", ratioTitle: "Video Aspect Guide",
            inputPlaceholder: "ဤနေရာတွင် သင့်ဗီဒီယို ဇာတ်ညွှန်းကို ရိုက်ထည့်ပါ...", generateBtn: "✨ AI Audio ထုတ်လုပ်မည်",
            historyTitle: "📜 အသုံးပြုမှု မှတ်တမ်း", bgmNone: "မသုံးပါ (None)"
        },
        presets: {
            ttShort: { text: "TtShort မှ ကြိုဆိုပါတယ်ဗျာ! အခု တင်ဆက်ပေးမယ့် အကြောင်းအရာကတော့...", bgm: "Cinematic Beat", ratio: "9:16", voice: "m2" },
            ghost: { text: "ညသန်းခေါင်ယံအချိန်... ပတ်ဝန်းကျင်တစ်ခုလုံး တိတ်ဆိတ်နေတုန်း အနောက်ကနေ အေးစက်စက် အသံကြီးနဲ့...", bgm: "Dark Ambient Pad", ratio: "9:16", voice: "m1" },
            recap: { text: "ဒီနေ့မှာတော့ လူကြိုက်အများဆုံး ရုပ်ရှင်ဇาတ်ကားကြီးကို အစအဆုံး အသည်းတယားယားနဲ့ Recap လုပ်ပေးသွားမှာပဲ ဖြစ်ပါတယ်...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9", voice: "m1" },
            story: { text: "[ဖိုးဖိုးသော်]: ဟိုးရှေးရှေးတုန်းက သာယာလှပတဲ့ မှော်တောအုပ်ကြီးတစ်ခုထဲမှာ...\n[မပန်းအိ]: ဟုတ်တယ် ဖိုးဖိုးရေ...", bgm: "Magic Harp & Flute", ratio: "9:16", voice: "m3" }
        },
        voices: [
            { id: "m1", name: "သော်ဇင် (ရုပ်ရှင်နောက်ခံသံ) 🇲🇲", allowedStyles: [{ v: "normal", t: "ပုံမှန် / Plain" }, { v: "suspenseful", t: "ရင်ခုန်စိတ်လှုပ်ရှားဖွယ်" }, { v: "energetic", t: "အားအင်အပြည့် / Movie Recap" }] },
            { id: "m2", name: "နဒီ (သွက်လက်ချက်ချာ) 🇲🇲", allowedStyles: [{ v: "normal", t: "ပုံမှန်" }, { v: "energetic", t: "တက်ကြွလန်းဆန်း" }] },
            { id: "m3", name: "ဖိုးဖိုးသော် (ပုံပြင်ပြောအဘိုး) 🇲🇲", allowedStyles: [{ v: "warm", t: "နွေးထွေးပြီး အသိပညာပေးဟန်" }] }
        ]
    },
    en: {
        ui: {
            title: "VoiceNest", subtitle: "STUDIO ENGINE", presetTitle: "Content Presets",
            voiceTitle: "🎙️ Select Voice Actor", styleTitle: "🎭 Voice Style & Emotion",
            bgmTitle: "Ambient Music Mixer", ratioTitle: "Video Aspect Guide",
            inputPlaceholder: "Enter your script here...", generateBtn: "✨ Generate Voice",
            historyTitle: "📜 Production Log", bgmNone: "None"
        },
        presets: {
            ttShort: { text: "Welcome to TtShort! Here is a quick story you won't believe...", bgm: "Cinematic Beat", ratio: "9:16", voice: "e2" },
            ghost: { text: "The midnight hour was dead silent, until a cold whisper right behind me said...", bgm: "Dark Ambient Pad", ratio: "16:9", voice: "e1" },
            recap: { text: "In a world completely controlled by rogue AI, one lone creator decided to step up...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9", voice: "e1" },
            story: { text: "[Grandpa Arthur]: Once upon a time, in a magical land far away...", bgm: "Magic Harp & Flute", ratio: "9:16", voice: "e3" }
        },
        voices: [
            { id: "e1", name: "David (Movie & Documentary) 🇺🇸", allowedStyles: [{ v: "normal", t: "Plain / Normal" }, { v: "suspenseful", t: "Suspenseful" }, { v: "dramatic", t: "Dramatic" }] },
            { id: "e2", name: "Sarah (Energetic Creator) 🇺🇸", allowedStyles: [{ v: "normal", t: "Normal" }, { v: "energetic", t: "High-Energy" }] },
            { id: "e3", name: "Grandpa Arthur (Storyteller) 🇺🇸", allowedStyles: [{ v: "warm", t: "Warm / Wisdom" }] }
        ]
    },
    th: {
        ui: {
            title: "VoiceNest", subtitle: "STUDIO ENGINE", presetTitle: "Content Presets",
            voiceTitle: "🎙️ เลือกนักพากย์เสียงระดับโปร", styleTitle: "🎭 สไตล์เสียงและอารมณ์ดนตรี",
            bgmTitle: "Ambient Music Mixer", ratioTitle: "Video Aspect Guide",
            inputPlaceholder: "กรอกข้อความของคุณที่นี่...", generateBtn: "✨ สร้างเสียง AI",
            historyTitle: "📜 ประวัติการใช้งานระบบ", bgmNone: "ไม่ใช้ (None)"
        },
        presets: {
            ttShort: { text: "ยินดีต้อนรับสู่ TtShort วันนี้เรามีเรื่องราวสุดทึ่งที่จะเล่าให้ฟัง...", bgm: "Cinematic Beat", ratio: "9:16", voice: "t1" },
            ghost: { text: "ในเวลาเที่ยงคืนที่เงียบสงัด ทันใดนั้นก็มีเสียงกระซิบที่เย็นเยือกมาจากข้างหลัง...", bgm: "Dark Ambient Pad", ratio: "9:16", voice: "t2" },
            recap: { text: "สรุปเนื้อเรื่องภาพยนตร์แบบเจาะลึก วันนี้เราจะพาทุกคนไปพบกับมหากาพย์ความมันส์...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9", voice: "t1" },
            story: { text: "[คุณปู่บุญ]: กาลครั้งหนึ่งนานมาแล้ว ในดินแดนมหัศจรรย์อันห่างไกล...", bgm: "Magic Harp & Flute", ratio: "9:16", voice: "t3" }
        },
        voices: [
            { id: "t1", name: "พี่เอก (Recap Master) 🇹🇭", allowedStyles: [{ v: "normal", t: "ปกติ / Plain" }, { v: "energetic", t: "พลังงานสูง / High-Energy" }] },
            { id: "t2", name: "น้องฟ้า (Friendly & Drama) 🇹🇭", allowedStyles: [{ v: "normal", t: "ปกติ" }, { v: "melancholic", t: "ดราม่า / เศร้า" }] },
            { id: "t3", name: "คุณปู่บุญ (Khun Pu Boon) 🇹🇭", allowedStyles: [{ v: "calm", t: "สุขุมนุ่มลึก / Calm" }] }
        ]
    }
};

let currentLang = "my";

// Fetching Elements
const selLang = document.getElementById("language-select");
const selVoice = document.getElementById("voice-select");
const selStyle = document.getElementById("style-select");
const txtInput = document.getElementById("text-input");
const divRatioSuggest = document.getElementById("ratio-suggestion-text");
const selBgm = document.getElementById("bgm-select");
const divWaveform = document.getElementById("waveform-container");
const lblWordCount = document.getElementById("word-count-label");

// Range Sliders
const sSpeed = document.getElementById("slider-speed"); const vSpeed = document.getElementById("val-speed");
const sPitch = document.getElementById("slider-pitch"); const vPitch = document.getElementById("val-pitch");
const sVol = document.getElementById("slider-vol"); const vVol = document.getElementById("val-vol");

// Ratio Buttons
const r916 = document.getElementById("ratio-916");
const r169 = document.getElementById("ratio-169");
const r11 = document.getElementById("ratio-11");

// =========================================================================
// 2. CORE ENGINE SYNC WITH DYNAMIC INTERFACE LOCALIZATION
// =========================================================================
function syncStudioUI() {
    const data = localizationData[currentLang];
    if(!data) return;

    // UI Text Updates
    document.getElementById("ui-title").innerText = data.ui.title;
    document.getElementById("ui-subtitle").innerText = data.ui.subtitle;
    document.getElementById("ui-preset-title").innerText = data.ui.presetTitle;
    document.getElementById("ui-voice-title").innerText = data.ui.voiceTitle;
    document.getElementById("ui-style-title").innerText = data.ui.styleTitle;
    document.getElementById("ui-bgm-title").innerText = data.ui.bgmTitle;
    document.getElementById("ui-ratio-title").innerText = data.ui.ratioTitle;
    document.getElementById("ui-history-title").innerText = data.ui.historyTitle;
    document.getElementById("btn-generate").innerText = data.ui.generateBtn;
    txtInput.setAttribute("placeholder", data.ui.inputPlaceholder);
    document.getElementById("opt-bgm-none").innerText = data.ui.bgmNone;

    // Sync Voice List
    selVoice.innerHTML = "";
    data.voices.forEach(voice => {
        const opt = document.createElement("option");
        opt.value = voice.id;
        opt.innerText = voice.name;
        selVoice.appendChild(opt);
    });

    syncStyleDropdown();
    runSmartWordCounter();
}

function syncStyleDropdown() {
    const data = localizationData[currentLang];
    const voice = data.voices.find(v => v.id === selVoice.value);
    selStyle.innerHTML = "";
    if (voice) {
        voice.allowedStyles.forEach(style => {
            const opt = document.createElement("option");
            opt.value = style.v;
            opt.innerText = style.t;
            selStyle.appendChild(opt);
        });
    }
}

// =========================================================================
// 3. SMART AUTOMATION LOGIC (လူကြိုက်များမယ့်ပုံစံကို အကြံပေးရုံပဲ၊ အသေမသတ်မှတ်ပါ)
// =========================================================================
function runPresetTrigger(presetKey) {
    const data = localizationData[currentLang];
    const preset = data.presets[presetKey];
    if(!preset) return;

    // ၁။ စာသားကို ဖြည့်ပေးတယ်
    txtInput.value = preset.text;

    // ၂။ (အကြံပြုချက်) အသံရှင်ကို Auto ရွေးပေးတယ် (ဒါပေမယ့် အသုံးပြုသူက ပြန်ပြောင်းလို့ရတယ်)
    selVoice.value = preset.voice;
    syncStyleDropdown();

    // ၃။ (အကြံပြုချက်) BGM ကို Auto ချိန်ပေးတယ် (ဒါပေမယ့် စိတ်ကြိုက်ပြန်ပြောင်းခွင့်ရှိတယ်)
    for (let i = 0; i < selBgm.options.length; i++) {
        if (selBgm.options[i].text.toLowerCase().includes(preset.bgm.toLowerCase())) {
            selBgm.selectedIndex = i;
            break;
        }
    }

    // ၄။ (အကြံပြုချက်) ဗီဒီယိုအချိုးအစားကို Auto Active ပြပေးတယ် + စာသားနဲ့ အကြံပြုချက် ရှင်းပြတယ်
    highlightRatioButton(preset.ratio);
    divRatioSuggest.innerText = `💡 Recommended: ${preset.ratio} based on preset.`;

    triggerWaveformAnimation(presetKey);
    runSmartWordCounter();
}

function highlightRatioButton(ratio) {
    // ခလုတ်အားလုံးကို ပုံမှန်အရောင်ပြန်ပြောင်း
    [r916, r169, r11].forEach(btn => btn.className = "p-2 bg-white/5 border border-white/5 rounded-xl hover:border-purple-500/40 transition");
    
    // ရွေးချယ်ထားတဲ့ ခလုတ်ကို နီယွန် Glow အရောင် လင်းပေးလိုက်တယ်
    if(ratio === "9:16") r916.className = "p-2 bg-purple-600/20 border border-purple-500 text-white rounded-xl shadow-lg shadow-purple-500/20 transition";
    if(ratio === "16:9") r169.className = "p-2 bg-purple-600/20 border border-purple-500 text-white rounded-xl shadow-lg shadow-purple-500/20 transition";
    if(ratio === "1:1") r11.className = "p-2 bg-purple-600/20 border border-purple-500 text-white rounded-xl shadow-lg shadow-purple-500/20 transition";
}

// =========================================================================
// 4. AUXILIARY UTILITIES & WAVEFORMS
// =========================================================================
function runSmartWordCounter() {
    const text = txtInput.value.trim();
    let count = currentLang === "my" ? text.replace(/[\s\u200B-\u200D\uFEFF]/g, '').length : (text === "" ? 0 : text.split(/\s+/).length);
    lblWordCount.innerText = currentLang === "my" ? `${count} / 5000 စာလုံး` : `${count} / 5000 words`;
}

function triggerWaveformAnimation(type) {
    if(!divWaveform) return;
    divWaveform.innerHTML = "";
    let color = "bg-purple-500";
    if(type === "ghost") color = "bg-red-500";
    if(type === "recap") color = "bg-cyan-400 animate-bounce";

    for(let i=0; i<35; i++) {
        const bar = document.createElement("div");
        bar.className = `w-1 mx-[1px] rounded-full h-6 ${color} opacity-70`;
        bar.style.height = `${Math.floor(Math.random() * 30) + 10}px`;
        divWaveform.appendChild(bar);
    }
}

// Sliders Event Updating
sSpeed.addEventListener("input", (e) => vSpeed.innerText = e.target.value + "x");
sPitch.addEventListener("input", (e) => vPitch.innerText = e.target.value > 0 ? "+" + e.target.value : e.target.value);
sVol.addEventListener("input", (e) => vVol.innerText = e.target.value + "%");

// Aspect Ratio Manual Click Overrides (အသုံးပြုသူက မကြိုက်ရင် နှိပ်ပြီး ကိုယ်တိုင်ပြောင်းလဲခွင့် ပေးထားခြင်း)
r916.addEventListener("click", () => { highlightRatioButton("9:16"); divRatioSuggest.innerText = "Custom choice: 9:16 Shorts Mode"; });
r169.addEventListener("click", () => { highlightRatioButton("16:9"); divRatioSuggest.innerText = "Custom choice: 16:9 Cinema Mode"; });
r11.addEventListener("click", () => { highlightRatioButton("1:1"); divRatioSuggest.innerText = "Custom choice: 1:1 Square Mode"; });

// Global Initialization
selLang.addEventListener("change", (e) => { currentLang = e.target.value; syncStudioUI(); });
selVoice.addEventListener("change", syncStyleDropdown);
txtInput.addEventListener("input", runSmartWordCounter);

document.getElementById("btn-preset-ttshort").addEventListener("click", () => runPresetTrigger("ttShort"));
document.getElementById("btn-preset-ghost").addEventListener("click", () => runPresetTrigger("ghost"));
document.getElementById("btn-preset-recap").addEventListener("click", () => runPresetTrigger("recap"));
document.getElementById("btn-preset-story").addEventListener("click", () => runPresetTrigger("story"));

document.addEventListener("DOMContentLoaded", () => { syncStudioUI(); triggerWaveformAnimation("normal"); });
