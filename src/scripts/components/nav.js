import { html, renderInto } from '../utils/dom.js';

export function renderNav(personal) {
  const navLinks = [
    { href: '#snapshot', label: 'Overview' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  renderInto('#nav .nav-inner', html`
    <a href="#" class="nav-logo" aria-label="${personal.name || 'Home'} - Home">AA</a>
    <ul class="nav-links" role="list">
      ${navLinks.map(l => `<li><a href="${l.href}">${l.label}</a></li>`)}
    </ul>
    <a href="#contact" class="nav-cta">Let's Talk</a>
    <button type="button" class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>
  `);

  renderInto('#mobile-nav', html`
    ${navLinks.map(l => `<a href="${l.href}">${l.label}</a>`)}
    <a href="#contact" class="mobile-cta">Contact</a>
  `);
}
