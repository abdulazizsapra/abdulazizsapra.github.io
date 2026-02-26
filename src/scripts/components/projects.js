import { html, renderInto } from '../utils/dom.js';

function projectCard(project) {
  const nameHtml = project.url
    ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name}<span class="sr-only"> (opens in new tab)</span></a>`
    : project.name;

  return `
    <article class="project-card${project.featured ? ' project-featured' : ''}">
      ${project.featured ? '<div class="project-badge">Featured</div>' : ''}
      <h3>${nameHtml}</h3>
      <p class="project-type">${project.type || ''}</p>
      <p><strong>What:</strong> ${project.what || ''}</p>
      <p><strong>My Role:</strong> ${project.role || ''}</p>
      <div class="project-outcome">
        <strong>Stack:</strong> ${project.stack || ''}
      </div>
      <div class="project-outcome">
        <strong>Outcome:</strong> ${project.outcome || ''}
      </div>
      ${project.url ? `
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="project-link">
          Visit ${project.name} <span class="sr-only">(opens in new tab)</span> &rarr;
        </a>
      ` : ''}
    </article>
  `;
}

export function renderProjects(projects) {
  const featured = projects.featured || [];
  const additional = projects.additional || [];

  renderInto('#projects .container', html`
    <header class="section-header">
      <span class="section-label">Portfolio</span>
      <h2>Selected Projects</h2>
      <p>Real projects with real outcomes. Here's what I've shipped.</p>
    </header>
    <div class="projects-grid">
      ${featured.map(projectCard)}
    </div>
    ${additional.length ? `
      <div class="sites-showcase">
        <h3>Additional Shipped Projects</h3>
        <div class="sites-grid">
          ${additional.map(s => `
            <a href="${s.url}" target="_blank" rel="noopener noreferrer">${s.name}<span class="sr-only"> (opens in new tab)</span></a>
          `).join('')}
        </div>
      </div>
    ` : ''}
  `);
}
