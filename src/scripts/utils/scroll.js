export function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

export function initMobileMenu() {
  const navToggle = document.querySelector('.nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (!navToggle || !mobileNav) return;

  navToggle.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('active');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    mobileNav.setAttribute('aria-hidden', String(!isOpen));
  });

  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    });
  });

  document.addEventListener('click', (e) => {
    if (!mobileNav.contains(e.target) && !navToggle.contains(e.target)) {
      mobileNav.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    }
  });
}

export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

export function initScrollReveal() {
  const selectors = [
    '.snapshot-bar', '.snapshot-card', '.about-photo', '.about-text', '.exp-card', '.project-card',
    '.skill-group', '.faq-item', '.edu-card', '.contact-link',
  ];
  const elements = document.querySelectorAll(selectors.join(', '));
  if (!elements.length) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(20px)';
        entry.target.style.transition =
          `opacity 0.5s ease ${index * 0.05}s, transform 0.5s ease ${index * 0.05}s`;

        requestAnimationFrame(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        });

        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  elements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    observer.observe(el);
  });
}

export function initCounterAnimation() {
  const proofValues = document.querySelectorAll('.proof-value');
  if (!proofValues.length) return;

  function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const suffix = element.dataset.suffix || '';
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const current = Math.floor(progress * (end - start) + start);
      element.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        element.textContent = end + suffix;
      }
    };
    requestAnimationFrame(step);
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const text = el.textContent;
        if (/^\d+/.test(text)) {
          const num = parseInt(text);
          el.textContent = '0';
          animateValue(el, 0, num, 1500);
        }
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  proofValues.forEach(el => observer.observe(el));
}
