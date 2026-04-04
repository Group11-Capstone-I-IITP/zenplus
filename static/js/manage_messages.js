document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Delete Confirmation Logic
    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.addEventListener("click", function (e) {
            if (!confirm("Delete this message?")) {
                e.preventDefault();
            }
        });
    });

    // 2. Accordion Logic
    const tableRows = document.querySelectorAll('.main-row');

    tableRows.forEach(row => {
        row.addEventListener('click', (e) => {
            // Prevent the row from expanding if the admin clicked a button
            if (e.target.tagName.toLowerCase() === 'button' || e.target.tagName.toLowerCase() === 'form') {
                return;
            }

            const targetId = row.getAttribute('data-target');
            const detailRow = document.getElementById(targetId);
            const isCurrentlyOpen = detailRow.classList.contains('active');

            // Close all currently open detail rows and remove highlights
            document.querySelectorAll('.details-row.active').forEach(r => r.classList.remove('active'));
            document.querySelectorAll('.main-row.active-main').forEach(r => r.classList.remove('active-main'));

            // If the clicked row was NOT open, open it
            if (!isCurrentlyOpen) {
                detailRow.classList.add('active');
                row.classList.add('active-main');
            }
        });
    });
});