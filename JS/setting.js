// settings.js — linked ONLY on settings.html
const darkModeCheckbox = document.getElementById('dark-mode-setting');

darkModeCheckbox.checked = localStorage.getItem('theme') === 'dark';

darkModeCheckbox.addEventListener('change', () => {
    if (darkModeCheckbox.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
    }
});