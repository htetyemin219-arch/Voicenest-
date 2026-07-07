// 1. LOCALIZATION DATA & VOICE CONFIGURATIONS
const localizationData = {
    en: {
        voices: [
            { id: "e1", name: "Aria (Deep Narrative) 🇺🇸", allowedStyles: [{v:"normal", t:"Normal / Plain"}, {v:"emotional", t:"Emotional / Deep"}, {v:"whisper", t:"Whisper / Suspenseful"}] },
            { id: "e2", name: "Ethan (High Energy) 🇺🇸", allowedStyles: [{v:"energetic", t:"High Energy / Aggressive"}, {v:"normal", t:"Normal / Plain"}] },
            { id: "e3", name: "Oliver (Classic Reader) 🇺🇸", allowedStyles: [{v:"normal", t:"Normal / Plain"}, {v:"sad", t:"Melancholic / Sad"}] }
        ],
        ui: { home:"Home", projects:"My Projects", subtitle:"Create Stories", favorites:"Favorites", history:"History Log", settings:"Settings", welcomeSub:"Welcome to", tipsTitle:"Gemini's Pro Tips", t1:"Use 'Emotional Style' for ghost stories to get better tone.", t2:"Adjust Speech Speed to 0.8x for a more natural narration flow.", t3:"Ensure your script length is under 1500 words for the best quality.", generate:"Generate Voice", aspect:"Video Aspect Guide", ambient:"Ambient Music Mixer Panel", bgm:"Background Music", trackReady:"Ready", trackGen:"Generating...", trackDone:"Audio Completed", footerQuote:'"Make your stories come alive with AI voices."', placeholder:"Enter your story here...", focus:"Focus Mode", labelLang:"Language", labelVoice:"Voiceover Artist", labelStyle:"Narration Style", ghostBadge:"ghost story", recapBadge:"movie recap", btnScript:"Script", btnAudio:"Audio", premium:"Premium" }
    },
    th: {
        voices: [
            { id: "t1", name: "สมชาย (Somchai - Soft Male) 🇹🇭", allowedStyles: [{v:"normal", t:"ปกติ / Plain"}, {v:"emotional", t:"เน้นอารมณ์ / Deep"}] },
            { id: "t2", name: "พิม (Pim - Storyteller) 🇹🇭", allowedStyles: [{v:"emotional", t:"เล่าเรื่อง / Storytelling"}, {v:"whisper", t:"กระซิบ / Suspenseful"}, {v:"sad", t:"เศร้า / Sad"}] },
            { id: "t3", name: "กิตติ (Kitti - Radio Host) 🇹🇭", allowedStyles: [{v:"energetic", t:"ทรงพลัง / High Energy"}, {v:"normal", t:"ปกติ / Plain"}] }
        ],
        ui: { home:"หน้าแรก", projects:"โปรเจกต์ของฉัน", subtitle:"สร้างเรื่องราวอันน่าทึ่งของตัวเอง", favorites:"รายการโปรด", history:"ประวัติการใช้งาน", settings:"ตั้งค่า", welcomeSub:"ยินดีต้อนรับสู่", tipsTitle:"คำแนะนำจาก Gemini", t1:"ใช้ 'สไตล์อารมณ์' สำหรับเรื่องผีเพื่อให้ได้น้ำเสียงที่ดียิ่งขึ้น", t2:"ปรับความเร็วการพูดเป็น 0.8x เพื่อการบรรยายที่เป็นธรรมชาติ", t3:"ตรวจสอบให้แน่ใจว่าความยาวของสคริปต์น้อยกว่า 1500 คำ", generate:"สร้างเสียง", aspect:"คู่มืออัตราส่วนวิดีโอ", ambient:"มิกเซอร์เสียงบรรยากาศ", bgm:"เพลงพื้นหลัง", trackReady:"สถานะพร้อม", trackGen:"กำลังสร้างเสียง...", trackDone:"เสร็จสิ้น", footerQuote:'"ทำให้เรื่องราวของคุณ มีชีวิตด้วยเสียงแต่งเสียง AI"', placeholder:"กรอกเรื่องราวของคุณที่นี่...", focus:"โหมดโฟกัส", labelLang:"ภาษา", labelVoice:"นักพากย์เสียง", labelStyle:"สไตล์การบรรยาย", ghostBadge:"เรื่องผี", recapBadge:"สปอยหนัง", btnScript:"สคริปต์", btnAudio:"ออดิโอ", premium:"เกรดพรี" }
    },
    my: {
        voices: [
            { id: "m1", name: "ဦးမင်းခန့် (ကြည်လင်ပြတ်သား) 🇲🇲", allowedStyles: [{v:"normal", t:"ပုံမှန် / Plain"}, {v:"emotional", t:"ခံစားချက်အပြည့် / Deep"}, {v:"whisper", t:"တိုးတိုးဆိတ်ဆိတ် / Suspenseful"}] },
            { id: "m2", name: "မေသူဇာ (သဘာဝဆန်ဆန်) 🇲🇲", allowedStyles: [{v:"emotional", t:"ခံစားချက်အပြည့် / Deep"}, {v:"normal", t:"ပုံမှန် / Plain"}] },
            { id: "m3", name: "သော်ဇင် (ရုပ်ရှင်နောက်ခံသံ) 🇲🇲", allowedStyles: [{v:"whisper", t:"တိုးတိုးဆိတ်ဆိတ် / Suspenseful"}, {v:"energetic", t:"အားအင်အပြည့် / High Energy"}] }
        ],
        ui: { home:"ပင်မစာမျက်နှာ", projects:"ကျွန်ုပ်၏ ပရောဂျက်များ", subtitle:"ကိုယ်ပိုင် စိတ်ကူးယဉ်ပုံပြင်များ ဖန်တီးပါ", favorites:"အနှစ်သက်ဆုံးများ", history:"အသုံးပြုမှု မှတ်တမ်း", settings:"ဆက်တင်များ", welcomeSub:"မှ ကြိုဆိုပါ၏", tipsTitle:"Gemini ၏ အကြံပြုချက်များ", t1:"သရဲပြင်ပြင်ဇာတ်လမ်းများအတွက် ခံစားချက်အပြည့်စတိုင်ကို သုံးပါက ပိုကောင်းပါသည်။", t2:"ပိုမိုသဘာဝကျသော နောက်ခံစကားပြောဖြစ်ရန် အမြန်နှုန်းကို 0.8x သို့ ညှိပါ။", t3:"အကောင်းဆုံးအရည်အသွေးရရှိရန် စာသားအရှည်ကို စာလုံးရေ ၁၅၀၀ အောက်ထားပါ။", generate:"အသံဖန်တီးမည်", aspect:"ဗီဒီယို အချိုးအစား လမ်းညွှန်", ambient:"နောက်ခံတေးဂီတ မစ်ဆာပန်နယ်", bgm:"နောက်ခံတေးဂီတ", trackReady:"အဆင်သင့်", trackGen:"အသံဖန်တီးနေဆဲ...", trackDone:"အသံဖန်တီးမှု ပြီးမြောက်ပါပြီ", footerQuote:'"AI အသံများဖြင့် သင်၏ဇာတ်လမ်းများကို အသက်သွင်းလိုက်ပါ။"', placeholder:"သင်၏ ဇာတ်လမ်းကို ဤနေရာတွင် ရိုက်ထည့်ပါ...", focus:"အာရုံစိုက်မှု မုဒ်", labelLang:"ဘာသာစကား", labelVoice:"အသံရှင်", labelStyle:"နောက်ခံပြောစတိုင်", ghostBadge:"သရဲဇာတ်လမ်း", recapBadge:"ရုပ်ရှင်အကျဉ်းချုပ်", btnScript:"စာသား", btnAudio:"အော်ဒီယို", premium:"ပရီမီယံ" }
    }
};

// 2. DOM ELEMENTS SELECTORS
const langSelect = document.getElementById('lang-select');
const voiceSelect = document.getElementById('voice-select');
const styleSelect = document.getElementById('style-select');
const textInput = document.getElementById('text-input');
const wordCounter = document.getElementById('word-counter');

// 3. MULTI-LANGUAGE LIVE LOCALIZATION ENGINE
function handleLanguageChange() {
    const lang = langSelect.value;
    const currentData = localizationData[lang];

    document.getElementById('menu-home').textContent = currentData.ui.home;
    document.getElementById('menu-projects').textContent = currentData.ui.projects;
    document.getElementById('menu-sub-title').textContent = currentData.ui.subtitle;
    document.getElementById('menu-favorites').textContent = currentData.ui.favorites;
    document.getElementById('menu-history').textContent = currentData.ui.history;
    document.getElementById('menu-settings').textContent = currentData.ui.settings;
    document.getElementById('sidebar-footer-quote').textContent = currentData.ui.footerQuote;
    document.getElementById('welcome-sub').textContent = currentData.ui.welcomeSub;
    document.getElementById('badge-premium').textContent = currentData.ui.premium;
    document.getElementById('badge-ghost').textContent = currentData.ui.ghostBadge;
    document.getElementById('badge-recap').textContent = currentData.ui.recapBadge;
    document.getElementById('label-focus').textContent = currentData.ui.focus;
    document.getElementById('title-lang-select').textContent = currentData.ui.labelLang;
    document.getElementById('title-voice-select').textContent = currentData.ui.labelVoice;
    document.getElementById('title-style-select').textContent = currentData.ui.labelStyle;
    document.getElementById('label-aspect').textContent = currentData.ui.aspect;
    document.getElementById('label-ambient').textContent = currentData.ui.ambient;
    document.getElementById('label-bgm').textContent = currentData.ui.bgm;
    document.getElementById('opt-bgm-none').textContent = currentData.ui.bgmNone;
    document.getElementById('label-tips-title').textContent = currentData.ui.tipsTitle;
    document.getElementById('tip-1').textContent = currentData.ui.t1;
    document.getElementById('tip-2').textContent = currentData.ui.t2;
    document.getElementById('tip-3').textContent = currentData.ui.t3;
    document.getElementById('btn-generate').textContent = currentData.ui.generate;
    document.getElementById('track-ready').textContent = currentData.ui.trackReady;
    document.getElementById('track-gen').textContent = currentData.ui.trackGen;
    document.getElementById('track-done').textContent = currentData.ui.trackDone;
    document.getElementById('btn-script-txt').textContent = currentData.ui.btnScript;
    document.getElementById('btn-audio-txt').textContent = currentData.ui.btnAudio;
    textInput.placeholder = currentData.ui.placeholder;

    voiceSelect.innerHTML = '';
    currentData.voices.forEach(voice => {
        const option = document.createElement('option');
        option.value = voice.id;
        option.textContent = voice.name;
        voiceSelect.appendChild(option);
    });

    syncDefaultStyle();
    updateCounter();
}

// 4. SYNC VOICE TO DYNAMIC STYLE MAPPING
function syncDefaultStyle() {
    const lang = langSelect.value;
    const selectedVoiceId = voiceSelect.value;
    const currentVoice = localizationData[lang].voices.find(v => v.id === selectedVoiceId);

    styleSelect.innerHTML = '';
    if (currentVoice && currentVoice.allowedStyles) {
        currentVoice.allowedStyles.forEach(style => {
            const option = document.createElement('option');
            option.value = style.v;
            option.textContent = style.t;
            styleSelect.appendChild(option);
        });
    }
}

// 5. INTELLIGENT CHARACTERS & WORDS LIVE COUNTER
function updateCounter() {
    const text = textInput.value.trim();
    const lang = langSelect.value;
    let totalCount = 0;

    if (text === "") {
        totalCount = 0;
    } else if (lang === 'my') {
        totalCount = text.length; 
    } else {
        totalCount = text.split(/\s+/).length; 
    }

    wordCounter.textContent = `${totalCount} / 3000 words`;

    if (totalCount >= 1500 && totalCount < 3000) {
        wordCounter.style.color = '#eab308';
    } else if (totalCount >= 3000) {
        wordCounter.style.color = '#ef4444';
        if (lang === 'my') {
            textInput.value = text.substring(0, 3000);
        } else {
            textInput.value = text.split(/\s+/).slice(0, 3000).join(" ");
        }
    } else {
        wordCounter.style.color = '';
    }
}

// 6. DYNAMIC PRESET BUTTONS FOR AUTO-SYNC (TtShort, သရဲဇာတ်လမ်း၊ ရုပ်ရှင်အကျဉ်းချုပ် ခလုတ်များ Logic)
function applyPreset(type) {
    const lang = langSelect.value;
    
    if (type === 'tiktok') {
        if (lang === 'my') {
            textInput.value = "TtShort အတွက် ဗီဒီယိုတို ဖန်တီးမှု ပုံစံငယ် စာသား ဖြစ်ပါတယ်။";
        } else if (lang === 'th') {
            textInput.value = "ข้อความตัวอย่างสำหรับทำคลิปสั้น TtShort!";
        } else {
            textInput.value = "Welcome to TtShort editing preset text! Let's make a great short video.";
        }
        
        if (lang === 'en') { voiceSelect.value = "e3"; }
        else if (lang === 'th') { voiceSelect.value = "t1"; }
        else if (lang === 'my') { voiceSelect.value = "m1"; }
        
    } else if (type === 'ghost') {
        if (lang === 'my') {
            textInput.value = "ညဉ့်နက်သန်းခေါင်အချိန်... ပတ်ဝန်းကျင်တစ်ခုလုံး တိတ်ဆိတ်ခြောက်ခြားလို့နေတယ်။";
        } else if (lang === 'th') {
            textInput.value = "ในคืนที่มืดมิดและเงียบสงัด... มีบางสิ่งกำลังจ้องมองคุณอยู่";
        } else {
            textInput.value = "The house was perfectly dark, and the silence was deep and terrifying...";
        }
        
        if (lang === 'en') { voiceSelect.value = "e1"; }
        else if (lang === 'th') { voiceSelect.value = "t2"; }
        else if (lang === 'my') { voiceSelect.value = "m3"; } // သော်ဇင် (ရုပ်ရှင်နောက်ခံသံ) ပြောင်းပေးခြင်း
        
    } else if (type === 'recap') {
        if (lang === 'my') {
            textInput.value = "ဒီလူကတော့ ကမ္ဘာပေါ်မှာ အဆန်းပြားဆုံး စွမ်းအားတွေကို ပိုင်ဆိုင်ထားတဲ့သူပဲ ဖြစ်ပါတယ်။";
        } else if (lang === 'th') {
            textInput.value = "ชายคนนี้คือผู้ครอบครองพลังที่ทรงพลังที่สุดในโลก!";
        } else {
            textInput.value = "In a world where everything changed in just a single second...";
        }
        
        if (lang === 'en') { voiceSelect.value = "e2"; }
        else if (lang === 'th') { voiceSelect.value = "t3"; }
        else if (lang === 'my') { voiceSelect.value = "m3"; } 
    }
    
    syncDefaultStyle();
    
    if (type === 'ghost') {
        styleSelect.value = "whisper";
    } else if (type === 'recap') {
        styleSelect.value = "energetic";
    } else {
        styleSelect.value = "normal";
    }
    
    updateCounter();
}

// 7. SIMULATE VOICE GENERATION PROCESS (အသံဖန်တီးခြင်း လုပ်ဆောင်ချက် စနစ်)
function triggerVoiceProcess() {
    const text = textInput.value.trim();
    if (text === "") {
        alert(langSelect.value === 'my' ? "ကျေးဇူးပြု၍ စာသားအရင်ရိုက်ထည့်ပါဗျာ။" : "Please enter some text first!");
        return;
    }

    const stepReady = document.getElementById('step-ready');
    const stepGen = document.getElementById('step-gen');
    const stepDone = document.getElementById('step-done');

    stepReady.classList.remove('text-violet-400');
    stepReady.classList.add('text-gray-600');
    stepGen.classList.remove('text-gray-600');
    stepGen.classList.add('text-amber-400', 'animate-pulse');

    setTimeout(() => {
        stepGen.classList.remove('text-amber-400', 'animate-pulse');
        stepGen.classList.add('text-gray-600');
        
        stepDone.classList.remove('text-gray-600');
        stepDone.classList.add('text-green-400');
        
        alert(langSelect.value === 'my' ? "အော်ဒီယို အောင်မြင်စွာ ဖန်တီးပြီးပါပြီ ဆရာကြီး!" : "Audio Generation Completed!");
    }, 3000);
}

// INITIAL STARTUP EVENT TRIGGERS
langSelect.addEventListener('change', handleLanguageChange);
voiceSelect.addEventListener('change', syncDefaultStyle);
textInput.addEventListener('input', updateCounter);

// Run localization right away on screen boot
handleLanguageChange();
