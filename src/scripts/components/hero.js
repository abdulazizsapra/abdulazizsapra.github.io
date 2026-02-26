import { html, renderInto } from '../utils/dom.js';

export function renderHero(personal) {
  const proof = personal.proof || [];
  const tags = personal.hero_tags || [];

  renderInto('#hero .container', html`
    <div class="hero-content">
      <div class="hero-badge">
        <span class="pulse"></span>
        Available now | ${personal.work_rights || ''} | ${personal.availability || ''}
      </div>
      <h1>
        <span class="hero-line">${personal.title || ''}</span>
        <span class="hero-line gradient">${personal.tagline || ''}</span>
      </h1>
      <p class="hero-lead">${personal.summary || ''}</p>
      <div class="hero-proof">
        ${proof.map(p => `
          <div class="proof-item">
            <span class="proof-value">${p.value}</span>
            <span class="proof-label">${p.label}</span>
          </div>
        `)}
      </div>
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Contact Me</a>
        <a href="#experience" class="btn btn-ghost">View Experience</a>
      </div>
      <div class="hero-tags">
        ${tags.map(t => `<span>${t}</span>`)}
      </div>
    </div>
  `);
}
