document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: 'smooth'
        });
    }

    // Scroll to top button
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = 'block';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Detect when sections are in view and add animation
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Initial animations for hero section text
    const welcomeText = document.getElementById('welcome-text');
    const heroSubtext = document.getElementById('hero-subtext');

    welcomeText.style.animation = 'fadeInWelcome 2s ease-out forwards';
    setTimeout(() => {
        heroSubtext.style.animation = 'fadeInSubtext 2s ease-out forwards';
    }, 2000);// Delay for second text animation
});