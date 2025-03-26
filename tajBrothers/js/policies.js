// Policies Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Animate policy cards on scroll
    const policyCards = document.querySelectorAll('.policy-card, .documentation-card');

    // Function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }

    // Function to add animation class when element is in viewport
    function animateOnScroll() {
        policyCards.forEach(card => {
            if (isInViewport(card)) {
                card.classList.add('animate');
            } else {
                card.classList.remove('animate');
            }
        });
    }

    // Initial check on page load
    animateOnScroll();

    // Check on scroll
    window.addEventListener('scroll', animateOnScroll);

    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    })
})