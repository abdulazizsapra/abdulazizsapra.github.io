import { html, renderInto } from '../utils/dom.js';

export function renderBanner(personal) {
  renderInto('#work-banner .container', html`
    <p class="value-text">
      <strong>${personal.work_rights || 'Full working rights in Australia'}</strong>
      · ${personal.location || ''}, ${personal.country || ''}
      · ${personal.relocation || ''}
      · ${personal.work_mode || ''}
    </p>
  `);
}
