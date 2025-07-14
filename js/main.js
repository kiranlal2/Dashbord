// components linking

function loadComponents(selecter, url) {
    fetch(url)
        .then(response => response.text())
        .then(html => document.querySelectorAll(selecter).innerHTML = html)
        .catch(error => console.error('Error loading components:', error));
}
loadComponents('.sidebar', './components/sidebar.html');
loadComponents('.header', './components/header.html');
loadComponents('.card', './components/card.html');