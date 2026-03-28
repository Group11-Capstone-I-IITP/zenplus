document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // MODIFIED: Added a quick comment. The logic here is perfect for frontend testing!
    // We will wire this up to the Flask backend later.
    console.log("Logging in with:", email);
    alert("crushing it! Redirecting to your dashboard...");
});