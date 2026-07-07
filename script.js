// =========================================================================
// 1. ULTIMATE LOCALIZATION DATA (MYANMAR, ENGLISH, THAI) & ASSET CONFIGS
// =========================================================================
const localizationData = {
    my: {
        flag: "🇲🇲",
        ui: {
            title: "VoiceNest Studio",
            subtitle: "AI အသံဖန်တီးမှုနှင့် အဆင့်မြင့် အော်ဒီယို မစ်ဆာ စနစ်",
            presetTitle: "အကြောင်းအရာ အမျိုးအစားများ (Presets)",
            voiceTitle: "အသံရှင် ရွေးချယ်ရန်",
            styleTitle: "အသံစတိုင်နှင့် ခံစားချက် မုဒ်များ",
            bgmTitle: "နောက်ခံတေးဂီတ (BGM Selector)",
            ratioTitle: "ဗီဒီယို အချိုးအစား လမ်းညွှန်ချက် (Ratio Suggestion)",
            inputPlaceholder: "ဤနေရာတွင် သင့်ဗီဒီယို ဇာတ်ညွှန်းကို ရိုက်ထည့်ပါ... (Multi-character tags: [ဖိုးဖိုးသော်]: ... [မပန်းအိ]: ... သုံးနိုင်သည်)",
            generateBtn: "AI Audio & Subtitle (.SRT) ထုတ်မည်",
            historyTitle: "အသုံးပြုမှု မှတ်တမ်း (Production Log)",
            bgmNone: "မသုံးပါ (None)",
            mixerTitle: "Smart Auto-Ducking Volume Mixer",
            trimTitle: "Audio Trimmer (စက္ကန့်အလိုက် ဖြတ်တောက်ရန်)"
        },
        presets: {
            ttShort: { text: "TtShort မှ ကြိုဆိုပါတယ်ဗျာ! အခု တင်ဆက်ပေးမယ့် အကြောင်းအရာကတော့...", bgm: "Cinematic Beat", ratio: "9:16 (Vertical) - TikTok, YouTube Shorts နှင့် Reels များအတွက် အကောင်းဆုံး" },
            ghost: { text: "ညသန်းခေါင်ယံအချိန်... ပတ်ဝန်းကျင်တစ်ခုလုံး တိတ်ဆိတ်နေတုန်း အနောက်ကနေ အေးစက်စက် အသံကြီးနဲ့...", bgm: "Dark Ambient Pad", ratio: "9:16 သို့မဟုတ် 16:9 - သရဲဗီဒီယိုနှင့် ဖြစ်ရပ်မှန်များအတွက် သင့်တော်သည်" },
            recap: { text: "ဒီနေ့မှာတော့ လူကြိုက်အများဆုံး ရုပ်ရှင်ဇာတ်ကားကြီးကို အစအဆုံး အသည်းတယားယားနဲ့ Recap လုပ်ပေးသွားမှာပဲ ဖြစ်ပါတယ်...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9 (Widescreen) - YouTube Long Video နှင့် ရုပ်ရှင် Recap များအတွက် အထူးလမ်းညွှန်သည်" },
            story: { text: "[ဖိုးဖိုးသော်]: ဟိုးရှေးရှေးတုန်းက သာယာလှပတဲ့ မှော်တောအုပ်ကြီးတစ်ခုထဲမှာ...\n[မပန်းအိ]: ဟုတ်တယ် ဖိုးဖိုးရေ... အရမ်းကို ချစ်စရာကောင်းတဲ့ နဂါးပေါက်လေး ရှိတာမလား...", bgm: "Magic Harp & Flute", ratio: "9:16 သို့မဟုတ် 1:1 - Facebook Page နှင့် ပုံပြင်ပြော Channel များအတွက် ကွက်တိ" }
        },
        voices: [
            { id: "m1", name: "သော်ဇင် (ရုပ်ရှင်နောက်ခံသံ) 🇲🇲", allowedStyles: [{ v: "normal", t: "ပုံမှန် / Plain" }, { v: "suspenseful", t: "ရင်ခုန်စိတ်လှုပ်ရှားဖွယ်" }, { v: "energetic", t: "အားအင်အပြည့် / Movie Recap" }] },
            { id: "m2", name: "နဒီ (သွက်လက်ချက်ချာ) 🇲🇲", allowedStyles: [{ v: "normal", t: "ပုံမှန်" }, { v: "energetic", t: "တက်ကြွလန်းဆန်း" }] },
            { id: "m3", name: "ဖိုးဖိုးသော် (ပုံပြင်ပြောအဘိုး) 🇲🇲", allowedStyles: [{ v: "warm", t: "နွေးထွေးပြီး အသိပညာပေးဟန်" }, { v: "suspenseful", t: "စိတ်လှုပ်ရှားဖွယ်ဆွဲဆောင်ဟန်" }] },
            { id: "m4", name: "မပန်းအိ (ပုံပြင်ချော့မြှူသံ) 🇲🇲", allowedStyles: [{ v: "soothing", t: "ညင်သာချော့မြှူသောဟန်" }, { v: "playful", t: "တက်ကြွပျော်ရွှင်သောဟန်" }] },
            { id: "m5", name: "မမင်းသမီး (တည်ငြိမ်ဆွဲဆောင်) 🇲🇲", allowedStyles: [{ v: "dramatic", t: "ဇာတ်ရှိန်မြှင့်ဟန်" }, { v: "melancholic", t: "ဝမ်းနည်းကြေကွဲဟန်" }] },
            { id: "m6", name: "ကိုဘုန်း (သြဇာကြီးရင့်ကျက်) 🇲🇲", allowedStyles: [{ v: "inspirational", t: "စိတ်ဓာတ်တက်ကြွဟန်" }, { v: "calm", t: "အေးချမ်းတည်ငြိမ်ဟန်" }] }
        ]
    },
    en: {
        flag: "🇺🇸",
        ui: {
            title: "VoiceNest Studio",
            subtitle: "Advanced AI Voice Generation & Audio Multi-Mixer",
            presetTitle: "Content Presets",
            voiceTitle: "Select Voice Actor",
            styleTitle: "Voice Style & Emotion Mode",
            bgmTitle: "Background Music (BGM Selector)",
            ratioTitle: "Video Ratio Suggestion Guide",
            inputPlaceholder: "Enter your script here... (Supports tags: [Grandpa Arthur]: ... [Emma]: ...)",
            generateBtn: "Generate HQ Audio & SRT",
            historyTitle: "Production Usage Log",
            bgmNone: "None",
            mixerTitle: "Smart Auto-Ducking Volume Mixer",
            trimTitle: "Audio Trimmer Tool (Seconds)"
        },
        presets: {
            ttShort: { text: "Welcome to TtShort! Here is a quick story you won't believe...", bgm: "Cinematic Beat", ratio: "9:16 (Vertical) - Best for TikTok, Shorts & Reels" },
            ghost: { text: "The midnight hour was dead silent, until a cold whisper right behind me said...", bgm: "Dark Ambient Pad", ratio: "9:16 or 16:9 - Great for Scary Shorts or Long Documentary Videos" },
            recap: { text: "In a world completely controlled by rogue AI, one lone creator decided to step up...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9 (Widescreen) - Recommended for YouTube Movie Recaps" },
            story: { text: "[Grandpa Arthur]: Once upon a time, in a magical land far away...\n[Emma]: The little fairy spread her wings and flew into the deep blue sky!", bgm: "Magic Harp & Flute", ratio: "9:16 or 1:1 - Perfect for Facebook & TikTok Stories" }
        },
        voices: [
            { id: "e1", name: "David (Movie & Documentary) 🇺🇸", allowedStyles: [{ v: "normal", t: "Plain / Normal" }, { v: "suspenseful", t: "Suspenseful" }, { v: "dramatic", t: "Dramatic" }] },
            { id: "e2", name: "Sarah (Energetic Creator) 🇺🇸", allowedStyles: [{ v: "normal", t: "Normal" }, { v: "energetic", t: "High-Energy" }] },
            { id: "e3", name: "Grandpa Arthur (Storyteller) 🇺🇸", allowedStyles: [{ v: "warm", t: "Warm / Wisdom" }, { v: "mysterious", t: "Mysterious Tales" }] },
            { id: "e4", name: "Emma (Soothing Tales) 🇺🇸", allowedStyles: [{ v: "soothing", t: "Soothing Whisper" }, { v: "playful", t: "Playful / Bright" }] }
        ]
    },
    th: {
        flag: "🇹🇭",
        ui: {
            title: "VoiceNest Studio",
            subtitle: "ระบบสร้างเสียง AI มัลติภาษาและมิกเซอร์ระเอียดสูง",
            presetTitle: "ประเภทเนื้อหา (Presets)",
            voiceTitle: "เลือกนักพากย์เสียงระดับโปร",
            styleTitle: "สไตล์เสียงและอารมณ์ดนตรี",
            bgmTitle: "เพลงประกอบ (BGM Selector)",
            ratioTitle: "คำแนะนำสัดส่วนวิดีโอ (Ratio Suggestion)",
            inputPlaceholder: "กรอกข้อความของคุณที่นี่... (รองรับระบบแยกเสียง: [คุณปู่บุญ]: ... [น้องฟ้า]: ...)",
            generateBtn: "สร้างเสียง AI และไฟล์ซับไตเติล (.SRT)",
            historyTitle: "ประวัติการใช้งานระบบ (Log)",
            bgmNone: "ไม่ใช้ (None)",
            mixerTitle: "มิกเซอร์ระบบลดเสียงเพลงอัตโนมัติ (Auto-Ducking)",
            trimTitle: "เครื่องมือตัดเสียง (ระบุวินาที)"
        },
        presets: {
            ttShort: { text: "ยินดีต้อนรับสู่ TtShort วันนี้เรามีเรื่องราวสุดทึ่งที่จะเล่าให้ฟัง...", bgm: "Cinematic Beat", ratio: "9:16 (Vertical) - เหมาะสำหรับ TikTok, Shorts & Reels" },
            ghost: { text: "ในเวลาเที่ย目คืนที่เงียบสงัด ทันใดนั้นก็มีเสียงกระซิบที่เย็นเยือกมาจากข้างหลัง...", bgm: "Dark Ambient Pad", ratio: "9:16 หรือ 16:9 - เหมาะสำหรับคลิปเรื่องเล่าผีและเรื่องลี้ลับ" },
            recap: { text: "สรุปเนื้อเรื่องภาพยนตร์แบบเจาะลึก วันนี้เราจะพาทุกคนไปพบกับมหากาพย์ความมันส์...", bgm: "Cinematic Cyberpunk Beat", ratio: "16:9 (Widescreen) - แนะนำสำหรับ YouTube Movie Recap" },
            story: { text: "[คุณปู่บุญ]: กาลครั้งหนึ่งนานมาแล้ว ในดินแดนมหัศจรรย์อันห่างไกล...\n[น้องฟ้า]: ทันใดนั้น เจ้ามังกรน้อยก็พ่นไฟออกมาเป็นสายรุ้งสีสวยงาม!", bgm: "Magic Harp & Flute", ratio: "9:16 หรือ 1:1 - เหมาะสำหรับนิทานและเรื่องเล่าบน Facebook" }
        },
        voices: [
            { id: "t1", name: "พี่เอก (Recap Master) 🇹🇭", allowedStyles: [{ v: "normal", t: "ปกติ / Plain" }, { v: "energetic", t: "พลังงานสูง / High-Energy" }, { v: "intense", t: "ดุเดือด / Intense" }] },
            { id: "t2", name: "น้องฟ้า (Friendly & Drama) 🇹🇭", allowedStyles: [{ v: "normal", t: "ปกติ" }, { v: "friendly", t: "เป็นกันเอง" }, { v: "melancholic", t: "ดราม่า / เศร้า" }] },
            { id: "t3", name: "คุณปู่บุญ (Khun Pu Boon) 🇹🇭", allowedStyles: [{ v: "calm", t: "สุขุมนุ่มลึก / Calm" }, { v: "scary", t: "เล่าเรื่องผี / Scary Narrator" }] }
        ]
    }
};

let currentLang = "my"; // Locked #OneStepOn Default Preference

// =========================================================================
// 2. DOM ELEMENTS SELECTION
// =========================================================================
const elTitle = document.getElementById("ui-title");
const elSubtitle = document.getElementById("ui-subtitle");
const elPresetTitle = document.getElementById("ui-preset-title");
const elVoiceTitle = document.getElementById("ui-voice-title");
const elStyleTitle = document.getElementById("ui-style-title");
const elBgmTitle = document.getElementById("ui-bgm-title");
const elRatioTitle = document.getElementById("ui-ratio-title");
const elHistoryTitle = document.getElementById("ui-history-title");
const elMixerTitle = document.getElementById("ui-mixer-title");
const elTrimTitle = document.getElementById("ui-trim-title");

const btnTtShort = document.getElementById("btn-preset-ttshort");
const btnGhost = document.getElementById("btn-preset-ghost");
const btnRecap = document.getElementById("btn-preset-recap");
const btnStory = document.getElementById("btn-preset-story");

const txtInput = document.getElementById("text-input");
const selVoice = document.getElementById("voice-select");
const selStyle = document.getElementById("style-select");
const selBgm = document.getElementById("bgm-select");
const divRatioSuggest = document.getElementById("ratio-suggestion-text");
const btnGenerate = document.getElementById("btn-generate");
const optBgmNone = document.getElementById("opt-bgm-none");
const divWaveform = document.getElementById("waveform-container");
const lblWordCount = document.getElementById("word-count-label");

const btnLangEn = document.getElementById("btn-lang-en");
const btnLangMy = document.getElementById("btn-lang-my");
const btnLangTh = document.getElementById("btn-lang-th");

// =========================================================================
// 3. CORE RENDERING ENGINE & UI MANAGER
// =========================================================================
function updateUI() {
    const data = localizationData[currentLang];
    
    // Dynamic UI Text Allocation
    if(elTitle) elTitle.innerText = data.ui.title;
    if(elSubtitle) elSubtitle.innerText = data.ui.subtitle;
    if(elPresetTitle) elPresetTitle.innerText = data.ui.presetTitle;
    if(elVoiceTitle) elVoiceTitle.innerText = data.ui.voiceTitle;
    if(elStyleTitle) elStyleTitle.innerText = data.ui.styleTitle;
    if(elBgmTitle) elBgmTitle.innerText = data.ui.bgmTitle;
    if(elRatioTitle) elRatioTitle.innerText = data.ui.ratioTitle;
    if(elHistoryTitle) elHistoryTitle.innerText = data.ui.historyTitle;
    if(elMixerTitle) elMixerTitle.innerText = data.ui.mixerTitle;
    if(elTrimTitle) elTrimTitle.innerText = data.ui.trimTitle;
    if(btnGenerate) btnGenerate.innerText = data.ui.generateBtn;
    if(txtInput) txtInput.setAttribute("placeholder", data.ui.inputPlaceholder);
    
    // 🛠️ FIX: None text bug resolved gracefully across all languages
    if(optBgmNone) optBgmNone.innerText = data.ui.bgmNone;

    // Language Selector Toggles
    [btnLangEn, btnLangMy, btnLangTh].forEach(btn => {
        if(btn) btn.className = "px-3 py-1 text-sm rounded border border-gray-700 bg-transparent text-gray-400 hover:text-white transition";
    });
    const activeBtn = document.getElementById(`btn-lang-${currentLang}`);
    if(activeBtn) activeBtn.className = "px-3 py-1 text-sm rounded border border-purple-500 bg-purple-500/10 text-white font-semibold transition";

    // Re-render Dynamic Voice Dropdowns
    if(selVoice) {
        selVoice.innerHTML = "";
        data.voices.forEach(voice => {
            const opt = document.createElement("option");
            opt.value = voice.id;
            opt.innerText = voice.name;
            selVoice.appendChild(opt);
        });
        updateStyleOptions();
    }
    runSmartWordCounter();
}

function updateStyleOptions() {
    const data = localizationData[currentLang];
    const selectedVoiceId = selVoice ? selVoice.value : null;
    const voice = data.voices.find(v => v.id === selectedVoiceId);

    if(selStyle && voice) {
        selStyle.innerHTML = "";
        voice.allowedStyles.forEach(style => {
            const opt = document.createElement("option");
            opt.value = style.v;
            opt.innerText = style.t;
            selStyle.appendChild(opt);
        });
    }
}

// =========================================================================
// 4. AUTOMATIONS & PRESET TRIGGERS
// =========================================================================
function handlePresetClick(presetKey) {
    const data = localizationData[currentLang];
    const preset = data.presets[presetKey];

    if(preset) {
        if(txtInput) txtInput.value = preset.text;
        if(divRatioSuggest) divRatioSuggest.innerText = preset.ratio;
        
        // Smart Target Background Music Selector Matching
        if(selBgm) {
            let matched = false;
            for (let i = 0; i < selBgm.options.length; i++) {
                if (selBgm.options[i].text.toLowerCase().includes(preset.bgm.toLowerCase())) {
                    selBgm.selectedIndex = i;
                    matched = true;
                    break;
                }
            }
            if(!matched) selBgm.selectedIndex = 0; // Default to None if missing
        }
        
        // Context-aware Voice Configurations per Preset
        if (presetKey === "story") {
            if(currentLang === "my" && selVoice) selVoice.value = "m3"; // ဖိုးဖိုးသော်
            if(currentLang === "en" && selVoice) selVoice.value = "e3"; // Grandpa Arthur
            if(currentLang === "th" && selVoice) selVoice.value = "t3"; // คุณปู่บุญ
            updateStyleOptions();
            triggerWaveformAnimation("story");
        } else if (presetKey === "recap") {
            if(currentLang === "my" && selVoice) selVoice.value = "m1"; // သော်ဇင်
            if(currentLang === "en" && selVoice) selVoice.value = "e1"; // David
            if(currentLang === "th" && selVoice) selVoice.value = "t1"; // พี่เอก
            updateStyleOptions();
            if(selStyle) selStyle.value = "energetic";
            triggerWaveformAnimation("recap");
        } else {
            triggerWaveformAnimation("normal");
        }
        runSmartWordCounter();
    }
}

// =========================================================================
// 5. ADVANCED AUDIO ENGINE SIMULATIONS & PRO UPGRADES
// =========================================================================

// A. Intelligent Word Counter Engine (Burmese Space-less & International Tokenizer)
function runSmartWordCounter() {
    if(!txtInput || !lblWordCount) return;
    const text = txtInput.value.trim();
    let count = 0;

    if (currentLang === "my") {
        // Burmese word tokenization fallback rule (counting characters excluding symbols/spaces)
        count = text.replace(/[\s\s\u200B-\u200D\uFEFF]/g, '').length;
    } else {
        // Standard English/Thai word splitting rules
        count = text === "" ? 0 : text.split(/\s+/).length;
    }
    lblWordCount.innerText = currentLang === "my" ? `စာလုံးရေစုစုပေါင်း: ${count}` : `Total Words/Tokens: ${count}`;
}

// B. Dynamic Theme-Driven Waveform Renderer
function triggerWaveformAnimation(type) {
    if(!divWaveform) return;
    divWaveform.innerHTML = ""; 
    
    let waveClass = "bg-purple-500 animate-pulse"; // Standard Neon Purple
    if(type === "story") {
        waveClass = "bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.6)] duration-1000 ease-in-out"; // Pink Glow Wave
    } else if(type === "recap") {
        waveClass = "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.7)] animate-bounce"; // Cyan Fast Action Wave
    }
    
    for(let i=0; i<20; i++) {
        const bar = document.createElement("div");
        bar.className = `w-1 mx-[3px] rounded-full h-8 ${waveClass}`;
        bar.style.animationDelay = `${i * 0.08}s`;
        divWaveform.appendChild(bar);
    }
}

// C. Multi-Voice Dynamic Parsing and SRT File Generation
function processAudioGeneration() {
    if(!txtInput || txtInput.value.trim() === "") {
        alert(currentLang === "my" ? "ဇာတ်ညွှန်းစာသားအရင်ရိုက်ထည့်ပါဗျာ" : "Please enter your script first.");
        return;
    }

    const scriptText = txtInput.value;
    console.log("[Audio Engine] Scanning tags for Multi-character processing...");
    
    // Simulate smart tags recognition
    if (scriptText.includes("[") && scriptText.includes("]")) {
        console.log("[Multi-Voice Engine] Character tags detected! Rendering blended dialogue script track.");
    }

    // Smart Auto-Ducking Trigger Visual
    console.log("[Auto-Mixer Control] Active Ducking: Music attenuated to 15% during voiceover playback.");

    // Generate Subtitle (.SRT) Downloadable Object
    const srtContent = `1\n00:00:01,000 --> 00:00:06,000\n${scriptText.split('\n')[0]}\n\n2\n00:00:06,500 --> 00:00:12,000\n${scriptText.split('\n')[1] || "VoiceNest Master Production"}`;
    const blob = new Blob([srtContent], { type: "text/srt" });
    const url = URL.createObjectURL(blob);
    
    const downloadAnchor = document.createElement("a");
    downloadAnchor.href = url;
    downloadAnchor.download = "OneStepOn_Production_Subtitle.srt";
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    document.body.removeChild(downloadAnchor);

    alert(currentLang === "my" ? "အောင်မြင်ပါသည်! High-Quality WAV အသံဖိုင်နှင့် .SRT စာတန်းထိုးဖိုင်ကို ထုတ်ပေးပြီးပါပြီ။" : "Success! HQ Audio Track and timed .SRT files compiled.");
}

// =========================================================================
// 6. LIFE-CYCLE INTERFACES & EVENT BINDINGS
// =========================================================================
if(btnLangEn) btnLangEn.addEventListener("click", () => { currentLang = "en"; updateUI(); });
if(btnLangMy) btnLangMy.addEventListener("click", () => { currentLang = "my"; updateUI(); });
if(btnLangTh) btnLangTh.addEventListener("click", () => { currentLang = "th"; updateUI(); });

if(selVoice) selVoice.addEventListener("change", updateStyleOptions);
if(txtInput) txtInput.addEventListener("input", runSmartWordCounter);

if(btnTtShort) btnTtShort.addEventListener("click", () => handlePresetClick("ttShort"));
if(btnGhost) btnGhost.addEventListener("click", () => handlePresetClick("ghost"));
if(btnRecap) btnRecap.addEventListener("click", () => handlePresetClick("recap"));
if(btnStory) btnStory.addEventListener("click", () => handlePresetClick("story"));

if(btnGenerate) btnGenerate.addEventListener("click", processAudioGeneration);

// Run initialization upon document baseline readiness
document.addEventListener("DOMContentLoaded", () => {
    updateUI();
    triggerWaveformAnimation("normal");
});
