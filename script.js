document.addEventListener('DOMContentLoaded', () => {
  // Character Counter logic
  const textarea = document.getElementById('scriptInput');
  const charCount = document.querySelector('.char-count');

  if (textarea && charCount) {
    textarea.addEventListener('input', (e) => {
      const len = e.target.value.length;
      charCount.textContent = `${len} / 5000 characters`;
    });
  }

  // Sliders Dynamic Value Updates
  const speedSlider = document.getElementById('speedSlider');
  const speedVal = document.getElementById('speedVal');
  if (speedSlider && speedVal) {
    speedSlider.addEventListener('input', (e) => {
      speedVal.textContent = `${parseFloat(e.target.value).toFixed(1)}x`;
    });
  }

  const pitchSlider = document.getElementById('pitchSlider');
  const pitchVal = document.getElementById('pitchVal');
  if (pitchSlider && pitchVal) {
    pitchSlider.addEventListener('input', (e) => {
      pitchVal.textContent = e.target.value;
    });
  }

  const volSlider = document.getElementById('volSlider');
  const volVal = document.getElementById('volVal');
  if (volSlider && volVal) {
    volSlider.addEventListener('input', (e) => {
      volVal.textContent = `${e.target.value}%`;
    });
  }

  // Aspect Box Selection Logic
  const aspectBoxes = document.querySelectorAll('.aspect-box');
  aspectBoxes.forEach(box => {
    box.addEventListener('click', () => {
      aspectBoxes.forEach(b => b.classList.remove('active'));
      box.classList.add('active');
    });
  });

  // Content Presets Selection
  const tags = document.querySelectorAll('.preset-tags .tag');
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');
    });
  });
});
