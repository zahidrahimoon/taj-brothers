// Taj & Brothers Enterprises Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    window.addEventListener('load', function() {
        const preloader = document.querySelector('.preloader');
        preloader.style.opacity = '0';
        setTimeout(function() {
            preloader.style.display = 'none';
        }, 500);
    });

    // Initialize animations for timeline
    initTimelineAnimation();

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('active');
        });
    });

    // Dropdown Menu for Mobile
    const hasDropdown = document.querySelectorAll('.has-dropdown');

    hasDropdown.forEach(item => {
        const link = item.querySelector('a');

        // For mobile view only
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                dropdown.classList.toggle('active');
            }
        });
    });


    // Active Navigation Link
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', setActiveNavLink);


    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            if (href !== '#') {
                e.preventDefault();

                const targetElement = document.querySelector(href);
                if (targetElement) {
                    const headerOffset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Add animation on scroll
    const animatedElements = document.querySelectorAll('[data-aos]');

    function checkAnimation() {
        animatedElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 50) {
                const delay = element.getAttribute('data-aos-delay') || 0;
                setTimeout(() => {
                    element.classList.add('aos-animate');
                }, delay);
            }
        });
    }

    window.addEventListener('scroll', checkAnimation);
    checkAnimation(); // Check on initial load
});

// Add AOS animation class
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    animatedElements.forEach(element => {
        element.classList.add('aos-init');
    });
});

// Add CSS for AOS animations
const style = document.createElement('style');
style.textContent = `
    .aos-init {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.8s ease, transform 0.8s ease;
    }
    .aos-animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Declare Swiper
var Swiper = window.Swiper || {};





/**
 * Initialize timeline animation on scroll
 */
function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    if (timelineItems.length === 0) return;

    const options = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, options);

    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(30px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
}