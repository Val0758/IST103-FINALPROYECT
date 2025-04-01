const themetoggle = document.querySelector('.theme');

const theme = localStorage.getItem('theme');
//check if theme is set in local storage
if (theme) document.body.classList.add(theme);
//toggle theme
themetoggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark-mode')
    } else {
        localStorage.removeItem('theme')
    }
});