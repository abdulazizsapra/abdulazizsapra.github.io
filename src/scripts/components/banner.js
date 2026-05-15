import { html, renderInto } from '../utils/dom.js';

export function renderBanner(personal) {
  renderInto('#work-banner .container', html`
    <p class="value-text">
      ${personal.location || ''}, ${personal.country || ''}
    </p>
  `);
}
