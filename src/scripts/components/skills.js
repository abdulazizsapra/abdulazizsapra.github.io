import { html, renderInto } from '../utils/dom.js';

export function renderSkills(skills) {
  if (!skills.length) return;

  renderInto('#skills .container', html`
    <header class="section-header">
      <span class="section-label">Technical Skills</span>
      <h2>My Toolbox</h2>
      <p>The tools and systems I use to design, build, and deploy AI and automation infrastructure.</p>
    </header>
    <div class="skills-grid">
      ${skills.map(group => `
        <div class="skill-group">
          <h3>${group.group}</h3>
          <ul role="list">
            ${(group.items || []).map(item => `<li>${item}</li>`).join('')}
          </ul>
        </div>
      `)}
    </div>
  `);
}
