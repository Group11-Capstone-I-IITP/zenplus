document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'card'
    const workoutCards = document.querySelectorAll('.card');

    // Loop through each card and attach a click event
    workoutCards.forEach(card => {
        card.addEventListener('click', () => {
            // Read the data attributes from the pure HTML
            const muscle = card.getAttribute('data-muscle');
            const level = card.getAttribute('data-level');

            // Navigate to the correct route, starting at exercise 0
            if (muscle && level) {
                window.location.href = `/workout/${muscle}/${level}/0`;
            }
        });
    });
});