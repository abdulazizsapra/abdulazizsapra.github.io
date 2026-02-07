// === NAVIGATION ===
const nav = document.getElementById('nav');
const navToggle = document.querySelector('.nav-toggle');
const mobileNav = document.getElementById('mobile-nav');

// Scroll effect for nav
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (currentScroll > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);
});

// Close mobile menu on link click
mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        mobileNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
    });
});

// Close mobile menu on outside click
document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !navToggle.contains(e.target)) {
        mobileNav.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
    }
});

// === SMOOTH SCROLL ===
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// === SCROLL REVEAL ===
const revealElements = document.querySelectorAll('.impact-card, .approach-card, .timeline-card, .mistake-card, .exp-card, .project-card, .skill-group, .faq-item');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(20px)';
            entry.target.style.transition = `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;

            requestAnimationFrame(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            });

            revealObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    revealObserver.observe(el);
});

// === COUNTER ANIMATION ===
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const current = Math.floor(progress * (end - start) + start);
        element.textContent = current + (element.dataset.suffix || '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            element.textContent = end + (element.dataset.suffix || '');
        }
    };
    window.requestAnimationFrame(step);
}

// Observe proof values for counter animation
const proofValues = document.querySelectorAll('.proof-value');
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const el = entry.target;
            const text = el.textContent;

            // Only animate numeric values
            if (/^\d+/.test(text)) {
                const num = parseInt(text);
                el.textContent = '0';
                animateValue(el, 0, num, 1500);
            }

            counterObserver.unobserve(el);
        }
    });
}, { threshold: 0.5 });

proofValues.forEach(el => counterObserver.observe(el));
