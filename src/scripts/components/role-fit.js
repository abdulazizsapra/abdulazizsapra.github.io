import { html, renderInto } from '../utils/dom.js';

export function renderRoleFit(personal) {
  const items = personal.how_i_work || [];

  renderInto('#role-fit .container', html`
    <header class="section-header">
      <span class="section-label">How I Work</span>
      <h2>How I Work</h2>
      <p>Pragmatic, outcome-focused engineering.</p>
    </header>
    <div class="rolefit-grid">
      <div class="snapshot-card snapshot-card--full">
        <ul role="list" class="card-list">
          ${items.map(item => `<li>${item}</li>`)}
        </ul>
      </div>
    </div>
  `);
}
