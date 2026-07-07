// =========================================================================
// 1. DATA DICTIONARIES FOR MULTI-LANGUAGE LOCALIZATION
// =========================================================================
const localizationData = {
    my: {
        ui: {
            title: "VoiceNest Studio",
            subtitle: "AI အသံဖန်တီးမှုနှင့် အဆင့်မြင့် အော်ဒီယို မစ်ဆာ စနစ်",
            presetTitle: "အကြောင်းအရာ အမျိုးအစားများ (Presets)",
            voiceTitle: "အသံရှင် ရွေးချယ်ရန်",
            styleTitle: "အသံစတိုင်နှင့် ခံစားချက် မုဒ်များ",
            bgmTitle: "နောက်ခံတေးဂီတ (BGM Selector)",
            ratioTitle: "ဗီဒီယို အချိုးအစား လမ်းညွှန်ချက် (Ratio Suggestion)",
            inputPlaceholder: "ဤနေရာတွင် သင့်ဗီဒီယို ဇာတ်ညွှန်းကို ရိုက်ထည့်ပါ... (Multi-character tags သုံးနိုင်သည်)",
            generateBtn: "AI Audio & Subtitle (.SRT) ထုတ်မည်",
            historyTitle: "အသုံးပြုမှု မှတ်တမ်း (Production Log)",
            bgmNone: "မသုံးပါ (None)"
        },
        presets: {
            ttShort: { text: "TtShort မှ ကြိုဆိုပါတယ်ဗျာ! အခု တင်ဆက်ပေးမယ့် အကြောင်းအရာကတော့...", bgm: "Cinematic Beat", ratio: "9:16 (Vertical) - TikTok, YouTube Shorts နှင့် Reels များအတွက် အကောင်းဆုံး" },
            ghost: { text: "ညသန်းခေါင်ယံအချိန်... ပတ်ဝန်းကျင်တစ်ခုလုံး တိတ်ဆိတ်နေတုန်း အနောက်ကနေ အေးစက်စက် အသံကြီးနဲ့...", bgm: "Dark Ambient Pad", ratio: "9:16 သို့မဟုတ် 16:9 - သရဲဗီဒီယိုနှင့် ဖြစ်ရပ်မှန်များအတွက် သင့်တော်သည်" },
            recap: { text: "ဒီနေ့မှာတော့ လူကြိုက်အများဆုံး ရုပ်ရှင်ဇာတ်ကားကြီးကို အစအဆုံး အသည်းတယားယားနဲ့ Recap လုပ်ပေးသွားမှာပဲ ဖြစ်ပါတယ်...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9 (Widescreen) - YouTube Long Video နှင့် ရုပ်ရှင် Recap များအတွက် အထူးလမ်းညွှန်သည်" },
            story: { text: "[ဖိုးဖိုးသော်]: ဟိုးရှေးရှေးတုန်းက သာယာလှပတဲ့ မှော်တောအုပ်ကြီးတစ်ခုထဲမှာ...\n[မပန်းအိ]: ဟုတ်တယ် ဖိုးဖိုးရေ...", bgm: "Magic Harp & Flute", ratio: "9:16 သို့မဟုတ် 1:1 - Facebook Page နှင့် ပုံပြင်ပြော Channel များအတွက် ကွက်တိ" }
        },
        voices: [
            { id: "m1", name: "သော်ဇင် (ရုပ်ရှင်နောက်ခံသံ) 🇲🇲", allowedStyles: [{ v: "normal", t: "ပုံမှန် / Plain" }, { v: "suspenseful", t: "ရင်ခုန်စိတ်လှုပ်ရှားဖွယ်" }, { v: "energetic", t: "အားအင်အပြည့် / Movie Recap" }] },
            { id: "m2", name: "နဒီ (သွက်လက်ချက်ချာ) 🇲🇲", allowedStyles: [{ v: "normal", t: "ပုံမှန်" }, { v: "energetic", t: "တက်ကြွလန်းဆန်း" }] },
            { id: "m3", name: "ဖိုးဖိုးသော် (ပုံပြင်ပြောအဘိုး) 🇲🇲", allowedStyles: [{ v: "warm", t: "နွေးထွေးပြီး အသိပညာပေးဟန်" }] }
        ]
    },
    en: {
        ui: {
            title: "VoiceNest Studio 🇺🇸",
            subtitle: "Advanced AI Voice Generation & Audio Multi-Mixer",
            presetTitle: "Content Presets",
            voiceTitle: "Select Voice Actor",
            styleTitle: "Voice Style & Emotion Mode",
            bgmTitle: "Background Music (BGM Selector)",
            ratioTitle: "Video Ratio Suggestion Guide",
            inputPlaceholder: "Enter your script here...",
            generateBtn: "Generate HQ Audio & SRT",
            historyTitle: "Production Usage Log",
            bgmNone: "None"
        },
        presets: {
            ttShort: { text: "Welcome to TtShort! Here is a quick story you won't believe...", bgm: "Cinematic Beat", ratio: "9:16 (Vertical) - Best for TikTok, Shorts & Reels" },
            ghost: { text: "The midnight hour was dead silent, until a cold whisper right behind me said...", bgm: "Dark Ambient Pad", ratio: "9:16 or 16:9 - Great for Scary Shorts" },
            recap: { text: "In a world completely controlled by rogue AI, one lone creator decided to step up...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9 (Widescreen) - Recommended for Movie Recaps" },
            story: { text: "[Grandpa Arthur]: Once upon a time, in a magical land far away...", bgm: "Magic Harp & Flute", ratio: "9:16 or 1:1 - Perfect for Facebook Stories" }
        },
        voices: [
            { id: "e1", name: "David (Movie & Documentary) 🇺🇸", allowedStyles: [{ v: "normal", t: "Plain / Normal" }, { v: "suspenseful", t: "Suspenseful" }, { v: "dramatic", t: "Dramatic" }] },
            { id: "e2", name: "Sarah (Energetic Creator) 🇺🇸", allowedStyles: [{ v: "normal", t: "Normal" }, { v: "energetic", t: "High-Energy" }] },
            { id: "e3", name: "Grandpa Arthur (Storyteller) 🇺🇸", allowedStyles: [{ v: "warm", t: "Warm / Wisdom" }] }
        ]
    },
    th: {
        ui: {
            title: "VoiceNest Studio 🇹🇭",
            subtitle: "ระบบสร้างเสียง AI มัลติภาษาและมิกเซอร์ระเอียดสูง",
            presetTitle: "ประเภทเนื้อหา (Presets)",
            voiceTitle: "เลือกนักพากย์เสียงระดับโปร",
            styleTitle: "สไตล์เสียงและอารมณ์ดนตรี",
            bgmTitle: "เพลงประกอบ (BGM Selector)",
            ratioTitle: "คำแนะนำสัดส่วนวิดีโอ (Ratio Suggestion)",
            inputPlaceholder: "กรอกข้อความของคุณที่นี่...",
            generateBtn: "สร้างเสียง AI และไฟล์ซับไตเติล (.SRT)",
            historyTitle: "ประวัติการใช้งานระบบ (Log)",
            bgmNone: "ไม่ใช้ (None)"
        },
        presets: {
            ttShort: { text: "ยินดีต้อนรับสู่ TtShort วันนี้เรามีเรื่องราวสุดทึ่งที่จะเล่าให้ฟัง...", bgm: "Cinematic Beat", ratio: "9:16 (Vertical) - เหมาะสำหรับ TikTok, Shorts" },
            ghost: { text: "ในเวลาเที่ยงคืนที่เงียบสงัด ทันใดนั้นก็มีเสียงกระซิบที่เย็นเยือกมาจากข้างหลัง...", bgm: "Dark Ambient Pad", ratio: "9:16 หรือ 16:9 - เหมาะสำหรับคลิปเรื่องเล่าผี" },
            recap: { text: "สรุปเนื้อเรื่องภาพยนตร์แบบเจาะลึก วันนี้เราจะพาทุกคนไปพบกับมหากาพย์ความมันส์...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9 (Widescreen) - แนะนำสำหรับ Movie Recap" },
            story: { text: "[คุณปู่บุญ]: กาลครั้งหนึ่งนานมาแล้ว ในดินแดนมหัศจรรย์อันห่างไกล...", bgm: "Magic Harp & Flute", ratio: "9:16 หรือ 1:1 - เหมาะสำหรับนิทานบน Facebook" }
        },
        voices: [
            { id: "t1", name: "พี่เอก (Recap Master) 🇹🇭", allowedStyles: [{ v: "normal", t: "ปกติ / Plain" }, { v: "energetic", t: "พลังงานสูง / High-Energy" }] },
            { id: "t2", name: "น้องฟ้า (Friendly & Drama) 🇹🇭", allowedStyles: [{ v: "normal", t: "ปกติ" }, { v: "melancholic", t: "ดราม่า / เศร้า" }] },
            { id: "t3", name: "คุณปู่บุญ (Khun Pu Boon) 🇹🇭", allowedStyles: [{ v: "calm", t: "สุขุมนุ่มลึก / Calm" }] }
        ]
    }
};

let currentLang = "my";

// =========================================================================
// 2. FETCH DOM ELEMENTS CONTEXTUALLY
// =========================================================================
const selLang = document.getElementById("language-select");
const selVoice = document.getElementById("voice-select");
const selStyle = document.getElementById("style-select");
const txtInput = document.getElementById("text-input");
const divRatioSuggest = document.getElementById("ratio-suggestion-text");
const selBgm = document.getElementById("bgm-select");
const divWaveform = document.getElementById("waveform-container");
const lblWordCount = document.getElementById("word-count-label");

const elTitle = document.getElementById("ui-title");
const elSubtitle = document.getElementById("ui-subtitle");
const elPresetTitle = document.getElementById("ui-preset-title");
const elVoiceTitle = document.getElementById("ui-voice-title");
const elStyleTitle = document.getElementById("ui-style-title");
const elBgmTitle = document.getElementById("ui-bgm-title");
const elRatioTitle = document.getElementById("ui-ratio-title");
const elHistoryTitle = document.getElementById("ui-history-title");
const optBgmNone = document.getElementById("opt-bgm-none");
const btnGenerate = document.getElementById("btn-generate");

const btnTtShort = document.getElementById("btn-preset-ttshort");
const btnGhost = document.getElementById("btn-preset-ghost");
const btnRecap = document.getElementById("btn-preset-recap");
const btnStory = document.getElementById("btn-preset-story");

// =========================================================================
// 3. CORE CORE-LOGIC & SYNC CONTROLLERS
// =========================================================================
function syncStudioUI() {
    const data = localizationData[currentLang];
    if(!data) return;

    // A. Sync Dynamic UI Headers & Plain Text Labels
    if(elTitle) elTitle.innerText = data.ui.title;
    if(elSubtitle) elSubtitle.innerText = data.ui.subtitle;
    if(elPresetTitle) elPresetTitle.innerText = data.ui.presetTitle;
    if(elVoiceTitle) elVoiceTitle.innerText = data.ui.voiceTitle;
    if(elStyleTitle) elStyleTitle.innerText = data.ui.styleTitle;
    if(elBgmTitle) elBgmTitle.innerText = data.ui.bgmTitle;
    if(elRatioTitle) elRatioTitle.innerText = data.ui.ratioTitle;
    if(elHistoryTitle) elHistoryTitle.innerText = data.ui.historyTitle;
    if(btnGenerate) btnGenerate.innerText = data.ui.generateBtn;
    if(txtInput) txtInput.setAttribute("placeholder", data.ui.inputPlaceholder);
    if(optBgmNone) optBgmNone.innerText = data.ui.bgmNone;

    // B. Re-render Voice Dropdown list based on target active language
    if(selVoice) {
        selVoice.innerHTML = "";
        data.voices.forEach(voice => {
            const opt = document.createElement("option");
            opt.value = voice.id;
            opt.innerText = voice.name;
            selVoice.appendChild(opt);
        });
    }
    // C. Cascade down styles to match the newly generated primary active voice
    syncStyleDropdown();
    runSmartWordCounter();
}

function syncStyleDropdown() {
    const data = localizationData[currentLang];
    if(!data || !selVoice || !selStyle) return;

    const selectedVoiceId = selVoice.value;
    const voice = data.voices.find(v => v.id === selectedVoiceId);

    selStyle.innerHTML = "";
    if (voice && voice.allowedStyles) {
        voice.allowedStyles.forEach(style => {
            const opt = document.createElement("option");
            opt.value = style.v;
            opt.innerText = style.t;
            selStyle.appendChild(opt);
        });
    }
}

// =========================================================================
// 4. AUTOMATED PRESETS ENGINE & WAVEFORM SIMULATOR
// =========================================================================
function runPresetTrigger(presetKey) {
    const data = localizationData[currentLang];
    const preset = data.presets[presetKey];
    if(!preset) return;

    if(txtInput) txtInput.value = preset.text;
    if(divRatioSuggest) divRatioSuggest.innerText = preset.ratio;

    // Automatic BGM Selection logic matches strings intelligently
    if(selBgm) {
        for (let i = 0; i < selBgm.options.length; i++) {
            if (selBgm.options[i].text.toLowerCase().includes(preset.bgm.toLowerCase())) {
                selBgm.selectedIndex = i;
                break;
            }
        }
    }

    // Assign Context-aware ideal voice presets based on target platform goals
    if (presetKey === "story" && selVoice) {
        if(currentLang === "my") selVoice.value = "m3";
        if(currentLang === "en") selVoice.value = "e3";
        if(currentLang === "th") selVoice.value = "t3";
    } else if (presetKey === "recap" && selVoice) {
        if(currentLang === "my") selVoice.value = "m1";
        if(currentLang === "en") selVoice.value = "e1";
        if(currentLang === "th") selVoice.value = "t1";
    }
    
    syncStyleDropdown();
    if(presetKey === "recap" && selStyle) selStyle.selectedIndex = selStyle.options.length - 1; // pick energetic if possible
    
    triggerWaveformAnimation(presetKey);
    runSmartWordCounter();
}

function runSmartWordCounter() {
    if(!txtInput || !lblWordCount) return;
    const text = txtInput.value.trim();
    let count = 0;

    if (currentLang === "my") {
        count = text.replace(/[\s\u200B-\u200D\uFEFF]/g, '').length;
        lblWordCount.innerText = `စာလုံးရေစုစုပေါင်း: ${count}`;
    } else {
        count = text === "" ? 0 : text.split(/\s+/).length;
        lblWordCount.innerText = `Total Words/Tokens: ${count}`;
    }
}

function triggerWaveformAnimation(type) {
    if(!divWaveform) return;
    divWaveform.innerHTML = "";

    let themeClass = "bg-purple-500 animate-pulse";
    if(type === "story") themeClass = "bg-pink-400 shadow-[0_0_12px_rgba(244,114,182,0.5)]";
    if(type === "recap") themeClass = "bg-cyan-400 animate-bounce";

    for(let i=0; i<25; i++) {
        const block = document.createElement("div");
        block.className = `w-1 mx-[2px] rounded-full h-6 ${themeClass}`;
        block.style.animationDelay = `${i * 0.05}s`;
        divWaveform.appendChild(block);
    }
}

// =========================================================================
// 5. INTENT EVENT INTERFACES & INITIALIZATION
// =========================================================================
if(selLang) {
    selLang.addEventListener("change", (e) => {
        currentLang = e.target.value; // Correctly mutates state globally
        syncStudioUI();               // Refreshes the pipeline
    });
}
if(selVoice) selVoice.addEventListener("change", syncStyleDropdown);
if(txtInput) txtInput.addEventListener("input", runSmartWordCounter);

if(btnTtShort) btnTtShort.addEventListener("click", () => runPresetTrigger("ttShort"));
if(btnGhost) btnGhost.addEventListener("click", () => runPresetTrigger("ghost"));
if(btnRecap) btnRecap.addEventListener("click", () => runPresetTrigger("recap"));
if(btnStory) btnStory.addEventListener("click", () => runPresetTrigger("story"));

if(btnGenerate) {
    btnGenerate.addEventListener("click", () => {
        alert(currentLang === "my" ? "အောင်မြင်ပါသည်! ရွေးချယ်ထားသော စနစ်အတိုင်း Setup လုပ်ပြီးပါပြီ။" : "Success! Combined parameters matched successfully.");
    });
}

// Global Startup Initial Execution
document.addEventListener("DOMContentLoaded", () => {
    syncStudioUI();
    triggerWaveformAnimation("normal");
});
