document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.getElementById('timer');
    const restContainer = document.querySelector('.rest-container');
    const timeButtons = document.querySelectorAll('.time-btn');

    // Proceed only if the timer element and container exist
    if (timerDisplay && restContainer) {
        let time = 20;
        const nextUrl = restContainer.getAttribute('data-next-url');

        // Loop through the "+ time" buttons and add click events
        timeButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Read how much time to add from the HTML data attribute
                const secondsToAdd = parseInt(btn.getAttribute('data-add'), 10);
                time += secondsToAdd;
                timerDisplay.innerText = time;
            });
        });

        // The automated countdown interval
        let t = setInterval(() => {
            time--;
            timerDisplay.innerText = time;

            if (time < 0) {
                clearInterval(t);
                window.location.href = nextUrl;
            }
        }, 1000); // 1000 ms = 1 second
    }
});