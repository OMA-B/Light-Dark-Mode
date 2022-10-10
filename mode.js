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

// Dark Mode Style
const darkMode = () => {
    switchBox.style.background = 'rgb(150 65 255 / 80%)';
    changeImage('dark');
    // changing and customizing the icon to moon
    switchIcon.classList.replace('fa-sun', 'fa-moon');
    switchIcon.style.color = '#121212';
}

// Light Mode Style
const lightMode = () => {
    switchBox.style.background = 'rgb(0 0 0 / 50%)';
    changeImage('light');
    // changing and customizing the icon to sun
    switchIcon.classList.replace('fa-moon', 'fa-sun');
    switchIcon.style.color = '#FF5C5C';
}

// The switch event
const switchTheme = (event) => {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
        // remember switched state
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
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
        darkMode();
    }
}