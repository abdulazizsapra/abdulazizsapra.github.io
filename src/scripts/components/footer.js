import { html, renderInto } from '../utils/dom.js';

export function renderFooter(personal) {
  const tags = personal.hero_tags || [];

  renderInto('#site-footer .container', html`
    <p>${personal.name || ''} | ${personal.title || ''} | ${personal.location || ''}, ${personal.country || ''}</p>
    <p class="footer-sub">${tags.join(' · ')} | ${personal.work_rights || ''}</p>
  `);
}
