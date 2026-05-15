import { html, renderInto } from '../utils/dom.js';

export function renderSnapshot(personal, education) {
  const proof = personal.proof || [];
  const industries = personal.industries || [];
  const firstEdu = education[0] || {};
  const secondEdu = education[1] || {};

  const chips = [
    { label: 'Role', value: personal.title || '' },
    { label: 'Experience', value: `${(personal.proof || [])[0]?.value || '5+'} years` },
    { label: 'Location', value: personal.location || '' },
  ];

  renderInto('#snapshot .container', html`
    <header class="section-header">
      <span class="section-label">Profile Snapshot</span>
      <h2>At a Glance</h2>
      <p>Key details at a glance.</p>
    </header>

    <div class="snapshot-bar" role="list" aria-label="Profile details">
      ${chips.map(c => `
        <span class="snapshot-chip" role="listitem">
          <strong>${c.label}</strong> ${c.value}
        </span>
      `)}
    </div>

    <div class="snapshot-grid">
      <article class="snapshot-card snapshot-card--accent-1">
        <div class="snapshot-icon" aria-hidden="true">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
        </div>
        <h3>By the Numbers</h3>
        <div class="snapshot-proof">
          ${proof.map(p => `
            <div class="snapshot-proof__item">
              <span class="snapshot-proof__value">${p.value}</span>
              <span class="snapshot-proof__label">${p.label}</span>
            </div>
          `).join('')}
        </div>
      </article>
      <article class="snapshot-card snapshot-card--accent-2">
        <div class="snapshot-icon" aria-hidden="true">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
          </svg>
        </div>
        <h3>Industries</h3>
        <ul class="snapshot-list" role="list">
          ${industries.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </article>
      <article class="snapshot-card snapshot-card--accent-3">
        <div class="snapshot-icon" aria-hidden="true">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
        <h3>Education</h3>
        <div class="snapshot-edu">
          <p>
            <strong>${firstEdu.degree ? firstEdu.degree.replace(/Master of Information and Communications Technology/, 'Master of ICT') : ''}</strong><br>
            ${firstEdu.institution?.split('&')[0]?.trim() || ''}<br>
            <span class="snapshot-edu__date">${firstEdu.date || ''}</span>
          </p>
          <p>
            <strong>${secondEdu.degree ? secondEdu.degree.replace(/Bachelor of Science in Information Technology/, 'Bachelor of IT') : ''}</strong><br>
            <span class="snapshot-edu__date">${secondEdu.date || ''}</span><br>
            <span class="snapshot-edu__award">Gold Medal, Highest GPA</span>
          </p>
        </div>
      </article>
    </div>
  `);
}
