import { html, renderInto } from '../utils/dom.js';

export function renderFaq(faq) {
  if (!faq.length) return;

  renderInto('#faq .container', html`
    <header class="section-header">
      <span class="section-label">For Recruiters</span>
      <h2>Common Questions</h2>
      <p>Quick answers for hiring managers and recruiters.</p>
    </header>
    <div class="faq-grid">
      ${faq.map(item => `
        <details class="faq-item">
          <summary>${item.question}</summary>
          <p>${item.answer}</p>
        </details>
      `)}
    </div>
  `);
}
