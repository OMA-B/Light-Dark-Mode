// Grabbing elements
const switchBtn = document.querySelector('.checkbox');
const images = document.querySelectorAll('.illustrations img');
const switchBox = switchBtn.parentElement;
const switchIcon = switchBtn.parentElement.children[1];

// image replacement
const changeImage = (color) => {
    images[0].setAttribute('src', `assets/img/undraw_code_review_${color}.svg`);
    images[1].setAttribute('src', `assets/img/undraw_code_thinking_${color}.svg`);
    images[2].setAttribute('src', `assets/img/undraw_version_control_${color}.svg`);
}

// to check for light or dark mode
const darkOrLightMode = (isItDark) => {
    switchBox.style.background = isItDark ? 'rgb(150 65 255 / 80%)' : 'rgb(0 0 0 / 50%)';
    isItDark ? changeImage('dark') : changeImage('light');
    // changing and customizing the icon to moon
    isItDark ? switchIcon.classList.replace('fa-sun', 'fa-moon') : switchIcon.classList.replace('fa-moon', 'fa-sun');
    isItDark ? switchIcon.style.color = '#121212' : switchIcon.style.color = '#FF5C5C';
}

// The switch event
const switchTheme = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkOrLightMode(true);
        // remember switched state
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        darkOrLightMode(false);
        // remember switched state
        localStorage.setItem('theme', 'light');
    }
}

// Switch Eventlistener
switchBtn.addEventListener('click', switchTheme);

// recollecting switched state
let currentTheme = localStorage.getItem('theme');

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        switchBtn.checked = true;
        darkOrLightMode(true);
    }
}