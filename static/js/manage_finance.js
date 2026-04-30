document.addEventListener("DOMContentLoaded", () => {
    // Simple script just to add commas to the raw numbers injected by Jinja
    const numberElements = document.querySelectorAll('.format-number');
    
    numberElements.forEach(el => {
        const num = parseFloat(el.innerText);
        if (!isNaN(num)) {
            // Formats the number with standard commas (e.g., 10000 -> 10,000)
            el.innerText = num.toLocaleString('en-IN');
        }
    });
});