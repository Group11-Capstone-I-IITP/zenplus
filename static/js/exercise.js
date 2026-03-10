document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const timerDisplay = document.getElementById('timer');

    // Only run this logic if we are on a timed workout page
    if (startBtn && timerDisplay) {
        
        // Grab the time and next URL from the HTML attributes
        let time = parseInt(startBtn.getAttribute('data-time'), 10);
        const nextUrl = startBtn.getAttribute('data-next-url');
        let timerInterval;

        startBtn.addEventListener('click', () => {
            // Disable the button and change text so they don't click twice
            startBtn.disabled = true;
            startBtn.textContent = "Running...";
            startBtn.style.opacity = "0.7";
            startBtn.style.cursor = "not-allowed";

            timerInterval = setInterval(() => {
                time--;
                timerDisplay.innerText = time;

                if (time <= 0) {
                    clearInterval(timerInterval);
                    // Redirect to the resting period
                    window.location.href = nextUrl;
                }
            }, 1000); // 1000 milliseconds = 1 second
        });
    }
});