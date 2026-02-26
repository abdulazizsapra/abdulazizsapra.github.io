import { html, renderInto } from '../utils/dom.js';

export function renderContact(personal) {
  const links = personal.links || {};

  renderInto('#contact .container', html`
    <div class="contact-card">
      <header class="section-header">
        <span class="section-label">Contact</span>
        <h2>Let's Talk</h2>
        <p>Seeking full-time permanent roles. Based on the ${personal.location || 'Gold Coast'}, open to relocation anywhere in ${personal.country || 'Australia'}.</p>
      </header>
      <div class="contact-grid">
        ${links.email ? `
          <a href="mailto:${links.email}" class="contact-link">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span>${links.email}</span>
          </a>
        ` : ''}
        ${links.phone ? `
          <a href="tel:${links.phone}" class="contact-link">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>${links.phone_display || links.phone}</span>
          </a>
        ` : ''}
        ${links.linkedin ? `
          <a href="${links.linkedin}" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LinkedIn <span class="sr-only">(opens in new tab)</span></span>
          </a>
        ` : ''}
        ${links.github ? `
          <a href="${links.github}" target="_blank" rel="noopener noreferrer" class="contact-link">
            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
            </svg>
            <span>GitHub <span class="sr-only">(opens in new tab)</span></span>
          </a>
        ` : ''}
      </div>
      <p class="contact-note">
        <strong>Work Rights:</strong> ${personal.work_rights || 'Full working rights in Australia'}<br>
        ${personal.contact_note || ''}
      </p>
    </div>
  `);
}
