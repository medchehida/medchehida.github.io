const toggle = document.getElementById('switch');
const body = document.body;

const theme = localStorage.getItem('theme');
if (theme) {
    body.classList.add(theme);
}

dark = 1;
c = 0;
toggle.onclick = () => {
    if (dark == 1) {
        body.classList.replace('main-dark', 'main-light');
        localStorage.setItem('theme', 'main-light');
        dark = 0;
    } else {
        body.classList.replace('main-light', 'main-dark');
        localStorage.setItem('theme', 'main-dark');
        dark = 1;
    }
    c = c + 1
    if (c > 3) {
        alert("Don't fuck up my portfolio please haha 🤣")
    }
};