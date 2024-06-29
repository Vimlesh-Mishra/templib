document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function () {
            const content = toggle.nextElementSibling;
            const isOpen = content.style.display === 'block';
            closeAllDropdowns();
            if (!isOpen) {
                content.style.display = 'block';
            }
        });
    });

    document.addEventListener('click', function (event) {
        const isDropdown = event.target.closest('.dropdown');
        if (!isDropdown) {
            closeAllDropdowns();
        }
    });

    function closeAllDropdowns() {
        const dropdownContents = document.querySelectorAll('.content1');
        dropdownContents.forEach(content => {
            content.style.display = 'none';
        });
    }
});
