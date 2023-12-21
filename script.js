function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'flex';

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });

    closeNav();
}

function toggleNav() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('show');
}

function closeNav() {
    const nav = document.querySelector('nav');
    nav.classList.remove('show');
}

let prevScrollPos = window.pageYOffset;
window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
        document.querySelector('header').style.top = '0';
    } else {
        document.querySelector('header').style.top = '-70px';
    }
    prevScrollPos = currentScrollPos;
};

function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    targetSection.style.display = 'flex';

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });

    closeNav();
}