import { html, renderInto } from '../utils/dom.js';

export function renderRoleFit(personal) {
  const roles = personal.ideal_roles || [];
  const prefs = personal.work_preferences || [];
  const bring = personal.what_i_bring || [];

  renderInto('#role-fit .container', html`
    <header class="section-header">
      <span class="section-label">Role Fit</span>
      <h2>What I'm Looking For</h2>
      <p>Helping you assess if I'm the right fit for your team.</p>
    </header>
    <div class="rolefit-grid">
      <div class="snapshot-card">
        <h3>Ideal Roles</h3>
        <ul role="list" class="card-list">
          ${roles.map(r => `<li>${r}</li>`)}
        </ul>
      </div>
      <div class="snapshot-card">
        <h3>Work Preferences</h3>
        <ul role="list" class="card-list">
          ${prefs.map(p => `<li>${p}</li>`)}
        </ul>
      </div>
      <div class="snapshot-card">
        <h3>What I Bring</h3>
        <ul role="list" class="card-list">
          ${bring.map(b => `<li>${b}</li>`)}
        </ul>
      </div>
    </div>
  `);
}
