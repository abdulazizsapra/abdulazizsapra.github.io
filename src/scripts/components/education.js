import { html, renderInto } from '../utils/dom.js';

export function renderEducation(education) {
  if (!education.length) return;

  renderInto('#education .container', html`
    <header class="section-header">
      <span class="section-label">Education</span>
      <h2>Academic Background</h2>
      <p>Formal qualifications in Information Technology.</p>
    </header>
    <div class="education-grid">
      ${education.map(edu => `
        <article class="edu-card">
          <div class="edu-header">
            <div>
              <h3>${edu.degree}</h3>
              <p class="edu-school">${edu.institution} | ${edu.location}</p>
            </div>
            <span class="edu-date">${edu.date}</span>
          </div>
          <div class="edu-body">
            <p>${edu.description || ''}</p>
            ${(edu.achievements && edu.achievements.length) ? `
              <ul class="edu-achievements" role="list">
                ${edu.achievements.map(a => `<li>${a}</li>`).join('')}
              </ul>
            ` : ''}
        </article>
      `)}
    </div>
  `);
}
