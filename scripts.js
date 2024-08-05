document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation
    const navLinks = document.querySelectorAll('nav ul li a');
    for (const link of navLinks) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        // Calculate offsetTop accounting for fixed header height
        const headerOffset = 60; // Adjust according to your header height
        const elementPosition = target.offsetTop;
        const offsetPosition = elementPosition - headerOffset;

        window.scrollTo({
            top: offsetPosition,
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

    // Funny interactive elements
    const confettiButton = document.createElement('button');
    confettiButton.textContent = '🎉 Confetti Time!';
    confettiButton.style.position = 'fixed';
    confettiButton.style.bottom = '80px';
    confettiButton.style.right = '20px';
    confettiButton.style.background = '#ff416c';
    confettiButton.style.color = '#fff';
    confettiButton.style.border = 'none';
    confettiButton.style.padding = '0.5rem 1rem';
    confettiButton.style.cursor = 'pointer';
    document.body.appendChild(confettiButton);

    confettiButton.addEventListener('click', () => {
        for (let i = 0; i < 100; i++) {
            createConfetti();
        }
    });

    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.top = '-10px';
        confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confetti.style.position = 'fixed'; // Ensure confetti is above other elements
        confetti.style.zIndex = '9999';    // Maximize z-index to be on top
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.borderRadius = '50%';
        confetti.style.opacity = '0.8';
        confetti.style.animation = 'confetti-fall 3s linear infinite';

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }

    // Adding Confetti animation keyframes
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`
        @keyframes confetti-fall {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
    `, styleSheet.cssRules.length);
});
