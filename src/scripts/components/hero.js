import { html, renderInto } from '../utils/dom.js';

export function renderHero(personal) {
  const proof = personal.proof || [];
  const tags = personal.hero_tags || [];
  const subheadline = personal.subheadline || personal.summary || '';
  const supportingCopy = personal.supporting_copy || '';

  renderInto('#hero .container', html`
    <div class="hero-content">
      <div class="hero-badge">
        <span class="pulse"></span>
        ${personal.location || ''}, ${personal.country || ''}
      </div>
      <h1>
        <span class="hero-line">${personal.title || ''}</span>
        <span class="hero-line gradient">${personal.tagline || ''}</span>
      </h1>
      ${subheadline ? `<p class="hero-subheadline">${subheadline}</p>` : ''}
      ${supportingCopy ? `<p class="hero-lead">${supportingCopy}</p>` : ''}
      <div class="hero-proof">
        ${proof.map(p => `
          <div class="proof-item">
            <span class="proof-value">${p.value}</span>
            <span class="proof-label">${p.label}</span>
          </div>
        `)}
      </div>
      <div class="hero-cta">
        <a href="#contact" class="btn btn-primary">Get in touch</a>
        <a href="#projects" class="btn btn-ghost">View selected work</a>
      </div>
      <div class="hero-tags">
        ${tags.map(t => `<span>${t}</span>`)}
      </div>
    </div>
  `);
}
