// main.js

document.addEventListener('DOMContentLoaded', () => {
    // Dark mode toggle
    const darkModeToggle = document.getElementById('darkmode-toggle');
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const hero = document.querySelector('#hero');
        hero.style.backgroundPositionY = scrollPosition * 0.7 + 'px';
    });

});