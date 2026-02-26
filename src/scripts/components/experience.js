import { html, renderInto } from '../utils/dom.js';

export function renderExperience(experience) {
  if (!experience.length) return;

  renderInto('#experience .container', html`
    <header class="section-header">
      <span class="section-label">Experience</span>
      <h2>Where I've Delivered Results</h2>
      <p>5+ years of shipping production code across agencies, startups, and international teams.</p>
    </header>
    <div class="experience-list">
      ${experience.map(job => `
        <article class="exp-card">
          <div class="exp-header">
            <div>
              <h3>${job.title}</h3>
              <p class="exp-company">${job.company} | ${job.location}</p>
            </div>
            <span class="exp-date">${job.date}</span>
          </div>
          <div class="exp-body">
            <ul role="list">
              ${(job.achievements || []).map(a => `<li>${a}</li>`).join('')}
            </ul>
            <div class="exp-tech">
              ${(job.tech || []).map(t => `<span>${t}</span>`).join('')}
            </div>
          </div>
        </article>
      `)}
    </div>
  `);
}
