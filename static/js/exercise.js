document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. YouTube Video Embed Logic ---
    const videoWrapper = document.querySelector('.video-wrapper');
    
    if (videoWrapper) {
        const url = videoWrapper.getAttribute('data-youtube-url');
        
        if (url) {
            // This regular expression safely extracts the 11-character YouTube video ID
            const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\/]{11})/);
            
            if (match && match[1]) {
                const videoId = match[1];
                // Inject the responsive iframe into the HTML securely
                videoWrapper.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}?rel=0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            } else {
                // Fallback text if the link is not a valid YouTube URL
                videoWrapper.innerHTML = `<p style="color: white; text-align: center; margin-top: 25%; font-family: sans-serif;">Invalid Video Link</p>`;
            }
        }
    }

    // --- 2. Timer Countdown Logic ---
    const startBtn = document.getElementById('startBtn');
    const timerDisplay = document.getElementById('timer');

    if (startBtn && timerDisplay) {
        let time = parseInt(startBtn.getAttribute('data-time'), 10);
        const nextUrl = startBtn.getAttribute('data-next-url');
        let timerInterval;

        startBtn.addEventListener('click', () => {
            startBtn.disabled = true;
            startBtn.textContent = "Running...";
            startBtn.style.opacity = "0.7";
            startBtn.style.cursor = "not-allowed";

            timerInterval = setInterval(() => {
                time--;
                timerDisplay.innerText = time;

                if (time <= 0) {
                    clearInterval(timerInterval);
                    window.location.href = nextUrl;
                }
            }, 1000); 
        });
    }
});