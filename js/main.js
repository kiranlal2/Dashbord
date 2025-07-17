// components linking

function loadComponents(selector, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => document.querySelector(selector).innerHTML = html)
        .catch(error => console.error('Error loading components:', error));
}
loadComponents('.sidebar', './components/sidebar.html');
loadComponents('.header', './components/header.html');
loadComponents('.card', './components/card.html');

// profile dropdown
function profileDropdown() {
    const dropdown = document.querySelector('.dropdown-menu');
    dropdown.classList.toggle('show');
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        dropdowns.forEach(dropdown => {
            if (dropdown.classList.contains('show')) {
                dropdown.classList.remove('show');
            }
        });
    }
}