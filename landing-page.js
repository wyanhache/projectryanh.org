document.getElementById('menu-btn').addEventListener('click', function() {
    var menuDropdown = document.getElementById('menu-dropdown');
    if (menuDropdown.classList.contains('show')) {
        menuDropdown.classList.remove('show');
    } else {
        menuDropdown.classList.add('show');
    }
});