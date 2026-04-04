document.addEventListener('DOMContentLoaded', () => {
    // Select only the main clickable rows
    const tableRows = document.querySelectorAll('.main-row');

    tableRows.forEach(row => {
        row.addEventListener('click', () => {
            // Get the ID of the hidden details row for this specific user
            const targetId = row.getAttribute('data-target');
            const detailRow = document.getElementById(targetId);

            // Check if the clicked row is already open
            const isCurrentlyOpen = detailRow.classList.contains('active');

            // 1. Close ALL detail rows and reset ALL main rows
            document.querySelectorAll('.details-row.active').forEach(r => r.classList.remove('active'));
            document.querySelectorAll('.main-row.active-main').forEach(r => r.classList.remove('active-main'));

            // 2. If the clicked row was NOT open, open it and highlight the main row
            if (!isCurrentlyOpen) {
                detailRow.classList.add('active'); // Shows the hidden data
                row.classList.add('active-main');  // Applies the blue highlight to the clicked row
            }
        });
    });
});