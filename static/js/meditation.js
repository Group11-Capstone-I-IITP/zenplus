// Ensure DOM is fully loaded before attaching event listeners
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Load saved dark mode preference
    if (localStorage.getItem("mode") === "dark") {
        document.body.classList.add("dark");
    }

    // 2. Add functionality to close the STAY FIT slider card
    const closeBtn = document.querySelector('.close');
    const fitCard = document.querySelector('.fit-card');
    
    if (closeBtn && fitCard) {
        closeBtn.addEventListener('click', function() {
            fitCard.style.display = 'none';
        });
    }
});

// 3. Toggle Mode Function (called globally by the button's onclick attribute)
function toggleMode() {
    document.body.classList.toggle("dark");

    // Save mode preference to local storage
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
}