    // Minimal JS for Count-Up Animation
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = Math.floor(progress * (end - start) + start);
            
            // Format with commas for professionalism
            obj.innerHTML = current.toLocaleString('en-US', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
            
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Initialize animation on load
    document.addEventListener("DOMContentLoaded", () => {
        const targetValue = {{ total | float }};
        const displayElement = document.getElementById("total-amount");
        animateValue(displayElement, 0, targetValue, 1200);
    });