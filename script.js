// Scroll logic for navbar (Royal Enfield style shrink)
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll Spy Logic
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100; // Offset for sticky navbar
        const sectionId = current.getAttribute('id');
        const navItem = document.querySelector('.nav-links a[href*="' + sectionId + '"]');

        if (navItem) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navItem.classList.add('active');
            } else {
                navItem.classList.remove('active');
            }
        }
    });
});

// Mobile Navigation Toggle
const burger = document.querySelector('.burger'); // Note: You might need to add a burger div in HTML if not present
const navLinksContainer = document.querySelector('.nav-links');

if (burger) {
    burger.addEventListener('click', () => {
        navLinksContainer.classList.toggle('nav-active');
    });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links li a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinksContainer.classList.remove('nav-active');
    });
});

// Scroll Reveal Animations using Intersection Observer
const faders = document.querySelectorAll('.fade-in, .fade-up, .reveal-stagger');

const appearOptions = {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        }
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Initial load animations
window.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('appear');
    }
});