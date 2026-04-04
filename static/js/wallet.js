document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('addMoneyForm');
    const submitBtn = document.getElementById('submitBtn');

    // Optional UI enhancement: Show a processing state when the form is submitted
    if (form) {
        form.addEventListener('submit', function(e) {
            // We don't prevent default here because we want the form to actually submit to your Flask backend
            
            // Change button appearance to show it's processing
            submitBtn.textContent = 'Processing...';
            submitBtn.style.backgroundColor = '#666';
            submitBtn.style.cursor = 'not-allowed';
            submitBtn.disabled = true; 
        });
    }

    // Optional: Format the card number to always have spaces (if you ever pull it dynamically)
    const cardElement = document.getElementById('cardNumber');
    if (cardElement) {
        let rawNumber = cardElement.innerText.replace(/\s+/g, ''); // strip existing spaces
        let formattedNumber = rawNumber.replace(/(\d{4})/g, '$1 ').trim(); // add space every 4 digits
        cardElement.innerText = formattedNumber;
    }
});