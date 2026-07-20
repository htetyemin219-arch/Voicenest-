document.addEventListener('DOMContentLoaded', () => {
    // 1. Grid Selection & Pro Lock Logic
    const gridItems = document.querySelectorAll('.grid-item');

    gridItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Check if user clicked on heart icon (Favorite toggle)
            if (e.target.classList.contains('fa-heart')) {
                e.stopPropagation();
                e.target.classList.toggle('fa-solid');
                e.target.classList.toggle('fa-regular');
                e.target.style.color = e.target.classList.contains('fa-solid') ? '#EF4444' : '';
                return;
            }

            // Check if item is locked (Pro Feature)
            if (item.classList.contains('locked')) {
                alert('🔒 This feature is locked in Free Version. Please upgrade to VoiceNest Pro!');
                return;
            }

            // Exclusive Selection within the same category
            const parent = item.parentElement;
            parent.querySelectorAll('.grid-item').forEach(i => i.classList.remove('active'));
            
            // Activate selected item
            item.classList.add('active');
        });
    });

    // 2. Audio Player Logic
    const playBtn = document.querySelector('.play-btn');
    const playIcon = playBtn.querySelector('i');
    const progressBar = document.querySelector('.progress');
    const timeDisplay = document.querySelector('.time');
    
    let isPlaying = false;
    let progressInterval = null;
    let currentPercent = 0;

    playBtn.addEventListener('click', () => {
        isPlaying = !isPlaying;

        if (isPlaying) {
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause');
            
            // Simulate Playback Progress
            progressInterval = setInterval(() => {
                if (currentPercent >= 100) {
                    resetPlayer();
                } else {
                    currentPercent += 1;
                    progressBar.style.width = `${currentPercent}%`;
                    
                    // Update Time Display (Demo 30 sec total)
                    const currentSec = Math.floor((currentPercent / 100) * 30);
                    const formattedSec = currentSec < 10 ? `0${currentSec}` : currentSec;
                    timeDisplay.textContent = `00:${formattedSec} / 00:30`;
                }
            }, 300);
        } else {
            pausePlayer();
        }
    });

    function pausePlayer() {
        isPlaying = false;
        playIcon.classList.remove('fa-pause');
        playIcon.classList.add('fa-play');
        clearInterval(progressInterval);
    }

    function resetPlayer() {
        pausePlayer();
        currentPercent = 0;
        progressBar.style.width = '0%';
        timeDisplay.textContent = '00:00 / 00:00';
    }

    // 3. Generate Audio Button Logic
    const generateBtn = document.querySelector('.btn-primary');
    const textArea = document.querySelector('textarea');

    generateBtn.addEventListener('click', () => {
        const text = textArea.value.trim();
        if (!text) {
            alert('⚠️ Please enter some text to generate audio!');
            return;
        }

        // Simulate Audio Generation Loading
        generateBtn.disabled = true;
        generateBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating...';

        setTimeout(() => {
            generateBtn.disabled = false;
            generateBtn.innerHTML = '<i class="fa-solid fa-wand-magic-sparkles"></i> Generate Audio';
            
            // Reset player for new audio
            resetPlayer();
            alert('✨ Audio generated successfully! Press Play to listen.');
        }, 1500);
    });
});
