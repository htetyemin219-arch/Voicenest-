// ==========================================
// 1. MASTER DATA MATRIX (72 Voices & Settings)
// ==========================================
const voiceDatabase = {
    mm: {
        "m1_male": { name: "သော်ဇင် ([ကျား] ရုပ်ရှင်နောက်ခံသံ)", styles: ["ပုံမှန်", "ရင်ခုန်စိတ်လှုပ်ရှားဖွယ်", "အားအင်အပြည့်"], bgm: "cyberpunk" },
        "m1_female": { name: "ဆောင်းနှင်း ([မ] ရုပ်ရှင်နောက်ခံသံ)", styles: ["ပုံမှန်", "ရင်ခုန်စိတ်လှုပ်ရှားဖွယ်", "အားအင်အပြည့်"], bgm: "cyberpunk" },
        "m2_male": { name: "မင်းသန့် ([ကျား] သွက်လက်ချက်ချာ)", styles: ["ပုံမှန်", "တက်ကြွလန်းဆန်း"], bgm: "cinematic" },
        "m2_female": { name: "နဒီ ([မ] သွက်လက်ချက်ချာ)", styles: ["ပုံမှန်", "တက်ကြွလန်းဆန်း"], bgm: "cinematic" },
        "m3_male": { name: "ဖိုးဖိုးသော် ([ကျား] ပုံပြင်ပြောအဘိုး)", styles: ["နွေးထွေးပြီး အသိပညာပေးဟန်"], bgm: "harp_flute" },
        "m3_female": { name: "ဖွားဖွားမေ ([မ] ပုံပြင်ပြောအဘွား)", styles: ["နွေးထွေးပြီး အသိပညာပေးဟန်"], bgm: "harp_flute" },
        "m3_young_male": { name: "ထက်အောင် ([ကျား] လူငယ်ပုံပြင်ပြောသူ)", styles: ["နွေးထွေးပြီး အသိပညာပေးဟန်"], bgm: "harp_flute" },
        "m3_young_female": { name: "မေသက် ([မ] လူငယ်ပုံပြင်ပြောသူ)", styles: ["နွေးထွေးပြီး အသိပညာပေးဟန်"], bgm: "harp_flute" },
        "m4_male": { name: "မင်းခန့် ([ကျား] သတင်းနှင့် ဗဟုသုတ)", styles: ["တည်ငြိမ်ပြတ်သား", "စိတ်ဝင်စားဖွယ်"], bgm: "cinematic" },
        "m4_female": { name: "မြတ်နိုး ([မ] သတင်းနှင့် ဗဟုသုတ)", styles: ["တည်ငြိမ်ပြတ်သား", "စိတ်ဝင်စားဖွယ်"], bgm: "cinematic" },
        "m5_male": { name: "လင်းထက် ([ကျား] နူးညံ့သိမ်မွေ့)", styles: ["နူးညံ့ငြိမ်းအေး", "ဝမ်းနည်းကြေကွဲ"], bgm: "violin" },
        "m5_female": { name: "ပန်းအိ ([မ] နူးညံ့သိမ်မွေ့)", styles: ["နူးညံ့ငြိမ်းအေး", "ဝမ်းနည်းကြေကွဲ"], bgm: "violin" },
        "m6_male": { name: "ကောင်းကောင်း ([ကျား] ဂိမ်း Streamer)", styles: ["အလွန်တက်ကြွ", "ဟာသနှော"], bgm: "cyberpunk" },
        "m6_female": { name: "ချစ်စု ([မ] ဂိမ်း Streamer)", styles: ["အလွန်တက်ကြွ", "ဟာသနှော"], bgm: "cyberpunk" },
        "m7_male": { name: "ဆရာနေလင်း ([ကျား] စီးပွားရေးနှင့် သင်တန်း)", styles: ["ယုံကြည်မှုအပြည့်"], bgm: "piano" },
        "m7_female": { name: "ဆရာမသီရိ ([မ] စီးပွားရေးနှင့် သင်တန်း)", styles: ["ယုံကြည်မှုအပြည့်"], bgm: "piano" },
        "m8_male": { name: "မောင်မောင် ([ကျား] ကလေးသံ)", styles: ["ပုံမှန်", "ဟာသနှော"], bgm: "lofi" },
        "m8_female": { name: "မိမိ ([မ] ကလေးသံ)", styles: ["ပုံမှန်", "ဟာသနှော"], bgm: "lofi" },
        "m9_male": { name: "ဇေယျာ ([ကျား] ASMR ခပ်တိုးတိုး)", styles: ["နူးညံ့ငြိမ်းအေး"], bgm: "lofi" },
        "m9_female": { name: "ယမင်း ([မ] ASMR ခပ်တိုးတိုး)", styles: ["နူးညံ့ငြိမ်းအေး"], bgm: "lofi" },
        "m10_male": { name: "အယ်လ်ဖာ ([ကျား] AI စက်ရုပ်)", styles: ["တည်ငြိမ်ပြတ်သား"], bgm: "synthwave" },
        "m10_female": { name: "ဆိုင်ဘာ ([မ] AI စက်ရုပ်)", styles: ["တည်ငြိမ်ပြတ်သား"], bgm: "synthwave" },
        "m11_male": { name: "ရဲမန် ([ကျား] ဇာတ်လမ်းကြမ်း Fighter)", styles: ["အားအင်အပြည့်", "တည်ငြိမ်ပြတ်သား"], bgm: "orchestral" },
        "m11_female": { name: "ထက်ထက် ([မ] ဇာတ်လမ်းကြမ်း Fighter)", styles: ["အားအင်အပြည့်", "တည်ငြိမ်ပြတ်သား"], bgm: "orchestral" }
    },
    en: {
        "e1_male": { name: "David ([Male] Movie & Documentary)", styles: ["Plain", "Suspenseful", "Energetic"], bgm: "cyberpunk" },
        "e1_female": { name: "Rachel ([Female] Movie & Documentary)", styles: ["Plain", "Suspenseful", "Energetic"], bgm: "cyberpunk" },
        "e2_male": { name: "Justin ([Male] Energetic Creator)", styles: ["Plain", "High-Energy"], bgm: "cinematic" },
        "e2_female": { name: "Sarah ([Female] Energetic Creator)", styles: ["Plain", "High-Energy"], bgm: "cinematic" },
        "e3_male": { name: "Arthur ([Male] Storyteller Grandpa)", styles: ["Warm & Wisdom"], bgm: "harp_flute" },
        "e3_female": { name: "Martha ([Female] Storyteller Grandma)", styles: ["Warm & Wisdom"], bgm: "harp_flute" },
        "e3_young_male": { name: "Liam ([Male] Young Storyteller)", styles: ["Warm & Friendly"], bgm: "harp_flute" },
        "e3_young_female": { name: "Olivia ([Female] Young Storyteller)", styles: ["Warm & Friendly"], bgm: "harp_flute" },
        "e4_male": { name: "James ([Male] News & Knowledge)", styles: ["Formal", "Engaging"], bgm: "cinematic" },
        "e4_female": { name: "Emily ([Female] News & Knowledge)", styles: ["Formal", "Engaging"], bgm: "cinematic" },
        "e5_male": { name: "Oliver ([Male] Soft & Emotional)", styles: ["Soft", "Melancholic"], bgm: "violin" },
        "e5_female": { name: "Lily ([Female] Soft & Emotional)", styles: ["Soft", "Melancholic"], bgm: "violin" },
        "e6_male": { name: "Jack ([Male] Gaming Streamer)", styles: ["High-Energy", "Playful"], bgm: "cyberpunk" },
        "e6_female": { name: "Chloe ([Female] Gaming Streamer)", styles: ["High-Energy", "Playful"], bgm: "cyberpunk" },
        "e7_male": { name: "Robert ([Male] Business Coach)", styles: ["Confident Pro"], bgm: "piano" },
        "e7_female": { name: "Sophia ([Female] Business Coach)", styles: ["Confident Pro"], bgm: "piano" },
        "e8_male": { name: "Leo ([Male] Cute Boy)", styles: ["Normal", "Playful"], bgm: "lofi" },
        "e8_female": { name: "Lily_Kid ([Female] Cute Girl)", styles: ["Normal", "Playful"], bgm: "lofi" },
        "e9_male": { name: "Noah ([Male] ASMR Whisper)", styles: ["Soft & Calm"], bgm: "lofi" },
        "e9_female": { name: "Ava ([Female] ASMR Whisper)", styles: ["Soft & Calm"], bgm: "lofi" },
        "e10_male": { name: "Alpha ([Male] AI Robot)", styles: ["Flat Formal"], bgm: "synthwave" },
        "e10_female": { name: "Cyber ([Female] AI Robot)", styles: ["Flat Formal"], bgm: "synthwave" },
        "e11_male": { name: "Hunter ([Male] Aggressive Fighter)", styles: ["Bold & Fierce"], bgm: "orchestral" },
        "e11_female": { name: "Alex ([Female] Bold & Fierce)", styles: ["Bold & Fierce"], bgm: "orchestral" }
    },
    th: {
        "t1_male": { name: "พี่เอก ([ชาย] Recap Master)", styles: ["ปกติ", "พลังงานสูง", "ระทึกขวัญ"], bgm: "cyberpunk" },
        "t1_female": { name: "พี่ฟ้า ([หญิง] Recap Master)", styles: ["ปกติ", "พลังงานสูง", "ระทึกขวัญ"], bgm: "cyberpunk" },
        "t2_male": { name: "นัท ([ชาย] Friendly & ThShort)", styles: ["ปกติ", "ตื่นเต้น"], bgm: "cinematic" },
        "t2_female": { name: "เนเน่ ([หญิง] Friendly & ThShort)", styles: ["ปกติ", "ตื่นเต้น"], bgm: "cinematic" },
        "t3_male": { name: "คุณปู่บุญ ([ชาย] เล่านิทาน)", styles: ["อบอุ่นและมีสาระ"], bgm: "harp_flute" },
        "t3_female": { name: "คุณย่าดาว ([หญิง] เล่านิทาน)", styles: ["อบอุ่นและมีสาระ"], bgm: "harp_flute" },
        "t3_young_male": { name: "นนท์ ([ชาย] นักเล่าเรื่องรุ่นใหม่)", styles: ["อบอุ่นและเป็นกันเอง"], bgm: "harp_flute" },
        "t3_young_female": { name: "แก้ว ([หญิง] นักเล่าเรื่องรุ่นใหม่)", styles: ["อบอุ่นและเป็นกันเอง"], bgm: "harp_flute" },
        "t4_male": { name: "กิต ([ชาย] ข่าว & สาระ)", styles: ["ทางการ", "น่าสนใจ"], bgm: "cinematic" },
        "t4_female": { name: "ไหม ([หญิง] ข่าว & สาระ)", styles: ["ทางการ", "น่าสนใจ"], bgm: "cinematic" },
        "t5_male": { name: "วิน ([ชาย] นุ่มนวล & ดราม่า)", styles: ["นุ่มนวล", "เศร้าหมอง"], bgm: "violin" },
        "t5_female": { name: "ไหมแก้ว ([หญิง] นุ่มนวล & ดราม่า)", styles: ["นุ่มนวล", "เศร้าหมอง"], bgm: "violin" },
        "t6_male": { name: "เจมส์ ([ชาย] สายฮา Streamer)", styles: ["พลังงานสูง", "ขี้เล่น"], bgm: "cyberpunk" },
        "t6_female": { name: "แป้ง ([หญิง] สายฮา Streamer)", styles: ["พลังงานสูง", "ขี้เล่น"], bgm: "cyberpunk" },
        "t7_male": { name: "โค้ชแบงค์ ([ชาย] ธุรกิจ & การพัฒนา)", styles: ["มืออาชีพ"], bgm: "piano" },
        "t7_female": { name: "ครูพลอย ([หญิง] ธุรกิจ & การพัฒนา)", styles: ["มืออาชีพ"], bgm: "piano" },
        "t8_male": { name: "น้องก้อง ([ชาย] เสียงเด็ก)", styles: ["ปกติ", "ขี้เล่น"], bgm: "lofi" },
        "t8_female": { name: "น้องแก้ว_เด็ก ([หญิง] เสียงเด็ก)", styles: ["ปกติ", "ขี้เล่น"], bgm: "lofi" },
        "t9_male": { name: "แดน ([ชาย] เสียงกระซิบ ASMR)", styles: ["นุ่มนวลเบาสบาย"], bgm: "lofi" },
        "t9_female": { name: "ไหม_กระซิบ ([หญิง] เสียงกระซิบ ASMR)", styles: ["นุ่มนวลเบาสบาย"], bgm: "lofi" },
        "t10_male": { name: "บ็อต ([ชาย] หุ่นยนต์ไซไฟ)", styles: ["เสียงเรียบทางการ"], bgm: "synthwave" },
        "t10_female": { name: "ไซเบอร์ ([หญิง] หุ่นยนต์ไซไฟ)", styles: ["เสียงเรียบทางการ"], bgm: "synthwave" },
        "t11_male": { name: "เสือ ([ชาย] ดุดัน Fighter)", styles: ["ดุดันเด็ดขาด"], bgm: "orchestral" },
        "t11_female": { name: "ส้ม ([หญิง] ดุดัน Fighter)", styles: ["ดุดันเด็ดขาด"], bgm: "orchestral" }
    }
};

// ==========================================
// 2. DOM ELEMENTS INTERACTION
// ==========================================
const langSelect = document.getElementById('langSelect');
const voiceSelect = document.getElementById('voiceSelect');
const styleSelect = document.getElementById('styleSelect');
const musicSelect = document.getElementById('musicSelect');
const musicVolume = document.getElementById('musicVolume');
const volLabel = document.getElementById('volLabel');
const previewBtn = document.getElementById('previewBtn');
const previewIcon = document.getElementById('previewIcon');
const previewText = document.getElementById('previewText');
const previewAudioPlayer = document.getElementById('previewAudioPlayer');

let isPreviewPlaying = false;

// ==========================================
// 3. CORE LOGIC & SMART FUNCTIONS
// ==========================================

// Populate Voices based on Language
function updateVoiceDropdown() {
    const selectedLang = langSelect.value;
    const voices = voiceDatabase[selectedLang];
    
    voiceSelect.innerHTML = ''; // Clear previous options
    
    for (let voiceId in voices) {
        let opt = document.createElement('option');
        opt.value = voiceId;
        opt.textContent = voices[voiceId].name;
        voiceSelect.appendChild(opt);
    }
    
    // Auto trigger change to update styles and BGM mapping
    handleVoiceChange();
}

// Update Styles & Autolink BGM based on Selected Voice Actor
function handleVoiceChange() {
    const selectedLang = langSelect.value;
    const selectedVoiceId = voiceSelect.value;
    
    if (!selectedVoiceId) return;
    
    const voiceData = voiceDatabase[selectedLang][selectedVoiceId];
    
    // 1. Dynamic Narration Styles Setup
    styleSelect.innerHTML = '';
    voiceData.styles.forEach(style => {
        let opt = document.createElement('option');
        opt.value = style.toLowerCase();
        opt.textContent = style;
        styleSelect.appendChild(opt);
    });
    
    // 2. Smart Music Auto-Preset Mapping
    if (voiceData.bgm) {
        musicSelect.value = voiceData.bgm;
    }
    
    // Force stop preview if voice actor changes during preview play
    stopPreviewAudio();
}

// ==========================================
// 4. PLAYABLE AUDIO PREVIEW ENGINE (The "Anti-Oh-Shit" Feature)
// ==========================================
function togglePreviewAudio() {
    const selectedVoiceId = voiceSelect.value;
    if (!selectedVoiceId) return;

    if (isPreviewPlaying) {
        stopPreviewAudio();
    } else {
        startPreviewAudio(selectedVoiceId);
    }
}

function startPreviewAudio(voiceId) {
    // Dynamic Mock/Real Audio Source URL binding mapping
    // ဆရာကြီးရဲ့ Backend API သို့မဟုတ် Storage Link (ဥပမာ- /audio/previews/m1_male.mp3) နဲ့ ချိတ်ဆက်ရန်
    const audioUrl = `https://actions.google.com/sounds/v1/cartoon/slide_whistle_up.ogg?id=${voiceId}`; // Temporal CDN audio resource link placeholder for preview
    
    previewAudioPlayer.src = audioUrl;
    previewAudioPlayer.play()
        .then(() => {
            isPreviewPlaying = true;
            previewBtn.classList.add('playing');
            previewIcon.textContent = "⏱️";
            previewText.textContent = "Playing...";
        })
        .catch(err => {
            console.error("Audio preview failed to load:", err);
            alert("နမူနာအသံဖိုင် တင်မလာနိုင်ပါဗျာ။ Network ကို စစ်ဆေးပေးပါ။");
        });
}

function stopPreviewAudio() {
    previewAudioPlayer.pause();
    previewAudioPlayer.currentTime = 0;
    isPreviewPlaying = false;
    previewBtn.classList.remove('playing');
    previewIcon.textContent = "▶️";
    previewText.textContent = "Listen Preview";
}

// ==========================================
// 5. EVENT LISTENERS INITIALIZATION
// ==========================================
langSelect.addEventListener('change', updateVoiceDropdown);
voiceSelect.addEventListener('change', handleVoiceChange);
previewBtn.addEventListener('click', togglePreviewAudio);

// When Audio Preview ends naturally, reset button state
previewAudioPlayer.addEventListener('ended', stopPreviewAudio);

// Volume slider synchronization
musicVolume.addEventListener('input', (e) => {
    volLabel.textContent = e.target.value + "%";
});

// Initial boot step
document.addEventListener('DOMContentLoaded', () => {
    updateVoiceDropdown();
});

// Final Action trigger
document.getElementById('generateBtn').addEventListener('click', () => {
    alert(`🚀 [OneStepOn Engine v2.0] စနစ်မှ အသံရှင် ID: ${voiceSelect.value}၊ စတိုင်: ${styleSelect.value} နှင့် နောက်ခံတေးဂီတ: ${musicSelect.value} (Volume: ${musicVolume.value}%) တို့ကို အသုံးပြု၍ High-Quality Video အား အပြီးသတ် Generate လုပ်နေပါပြီဗျာ။`);
});
