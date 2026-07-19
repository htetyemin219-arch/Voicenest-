// 9-Item Mock Dataset with Lock Status & Previews
const voiceData = [
    { id: 'v1', name: 'Aung Aung', isPro: false },
    { id: 'v2', name: 'Su Su', isPro: false },
    { id: 'v3', name: 'Thura', isPro: false },
    { id: 'v4', name: 'Mya Mya', isPro: false },
    { id: 'v5', name: 'David (EN)', isPro: false },
    { id: 'v6', name: 'Emma (EN)', isPro: true },
    { id: 'v7', name: 'Kenshiro', isPro: true },
    { id: 'v8', name: 'Nisha', isPro: true },
    { id: 'v9', name: 'Somchai (TH)', isPro: true }
];

const styleData = [
    { id: 's1', name: 'Natural Story', isPro: false },
    { id: 's2', name: 'Emotional News', isPro: false },
    { id: 's3', name: 'Whisper Soft', isPro: false },
    { id: 's4', name: 'Dramatic Epic', isPro: true },
    { id: 's5', name: 'Calm Meditation', isPro: false },
    { id: 's6', name: 'Energetic Ad', isPro: true },
    { id: 's7', name: 'Horror Tale', isPro: true },
    { id: 's8', name: 'Childish Cute', isPro: false },
    { id: 's9', name: 'Radio Announcer', isPro: true }
];

const musicData = [
    { id: 'm1', name: 'Soft Piano', isPro: false },
    { id: 'm2', name: 'Cinematic Ambient', isPro: false },
    { id: 'm3', name: 'Lo-Fi Chill', isPro: false },
    { id: 'm4', name: 'Acoustic Guitar', isPro: false },
    { id: 'm5', name: 'Epic Drums', isPro: true },
    { id: 'm6', name: 'Sad Violin', isPro: true },
    { id: 'm7', name: 'Inspirational Pop', isPro: true },
    { id: 'm8', name: 'Nature Rain', isPro: false },
    { id: 'm9', name: 'Cyberpunk Synth', isPro: true }
];

// i18n Translations
const i18n = {
    en: { save_project: "Save Project", select_voice: "Voice Actors (9 Options)", generate: "Generate Audio" },
    mm: { save_project: "ပရောဂျက်သိမ်းရန်", select_voice: "အသံရှင် ရွေးချယ်ရန် (၉ မျိုး)", generate: "အသံထုတ်လုပ်မည်" },
    th: { save_project: "บันทึกโปรเจกต์", select_voice: "นักพากย์เสียง (9 ตัวเลือก)", generate: "สร้างเสียง" }
};

document.addEventListener('DOMContentLoaded', () => {
    
    // Render 9-Grids
    renderGrid('voiceGrid', voiceData);
    renderGrid('styleGrid', styleData);
    renderGrid('musicGrid', musicData);

    // Modal Control Setup
    setupModals();
    
    // Settings Tab Switcher
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.tab-btn, .tab-content').forEach(el => el.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Dynamic Language Switcher
    document.getElementById('langSelect').addEventListener('change', (e) => {
        const lang = e.target.value;
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.dataset.i18n;
            if (i18n[lang] && i18n[lang][key]) el.textContent = i18n[lang][key];
        });
    });

    // Save Project Button Event
    document.getElementById('saveProjectBtn').addEventListener('click', () => {
        alert("✅ Project Draft Saved Successfully! Check your Studio Dashboard Settings.");
    });
});

// Render Grid Helper Function
function renderGrid(containerId, items) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'grid-card';
        card.innerHTML = `
            ${item.isPro ? '<i class="fa-solid fa-lock lock-badge"></i>' : ''}
            <div class="card-title">${item.name}</div>
            <div class="card-actions">
                <button class="btn-mini play-preview" title="Preview"><i class="fa-solid fa-play"></i></button>
                <button class="btn-mini fav-btn" title="Favorite"><i class="fa-regular fa-heart"></i></button>
            </div>
        `;

        // Card Selection Logic
        card.addEventListener('click', (e) => {
            if (e.target.closest('.btn-mini')) return; // Ignore action button clicks
            
            if (item.isPro) {
                document.getElementById('lockModal').style.display = 'flex';
            } else {
                container.querySelectorAll('.grid-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
            }
        });

        // Favorite Toggle
        const favBtn = card.querySelector('.fav-btn');
        favBtn.addEventListener('click', () => {
            favBtn.querySelector('i').classList.toggle('fa-solid');
            favBtn.classList.toggle('active');
        });

        // Preview Play Button
        const playBtn = card.querySelector('.play-preview');
        playBtn.addEventListener('click', () => {
            alert(`▶️ Playing preview sample for: ${item.name}`);
        });

        container.appendChild(card);
    });
}

function setupModals() {
    const settingsModal = document.getElementById('settingsModal');
    const lockModal = document.getElementById('lockModal');

    document.getElementById('openSettingsBtn').onclick = () => settingsModal.style.display = 'flex';
    document.getElementById('closeSettings').onclick = () => settingsModal.style.display = 'none';
    document.getElementById('closeLock').onclick = () => lockModal.style.display = 'none';
    document.getElementById('saveSettingsBtn').onclick = () => {
        alert("✅ System Settings Updated!");
        settingsModal.style.display = 'none';
    };

    window.onclick = (event) => {
        if (event.target == settingsModal) settingsModal.style.display = 'none';
        if (event.target == lockModal) lockModal.style.display = 'none';
    };
}
