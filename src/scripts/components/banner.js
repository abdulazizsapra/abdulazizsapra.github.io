import { html, renderInto } from '../utils/dom.js';

export function renderBanner(personal) {
  renderInto('#work-banner .container', html`
    <p class="value-text">
      <strong>${personal.work_rights || 'Full work rights in Australia'}</strong>
      · ${personal.location || ''}, ${personal.country || ''}
    </p>
  `);
}
