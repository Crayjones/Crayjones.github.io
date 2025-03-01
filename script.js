
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    console.log('clicked');
    document.querySelector('.topnav').classList.toggle('active');
    hamburger.querySelector("span").innerHTML = document.querySelector('.topnav').classList.contains('active') ? 'close' : 'menu';
});

document.documentElement.style.setProperty('color-scheme:', 'light');
