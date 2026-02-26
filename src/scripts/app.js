import { loadAllData } from './utils/data-loader.js';
import {
  initNavScroll,
  initMobileMenu,
  initSmoothScroll,
  initScrollReveal,
  initCounterAnimation,
} from './utils/scroll.js';

import { renderNav } from './components/nav.js';
import { renderHero } from './components/hero.js';
import { renderSnapshot } from './components/snapshot.js';
import { renderAbout } from './components/about.js';
import { renderRoleFit } from './components/role-fit.js';
import { renderBanner } from './components/banner.js';
import { renderExperience } from './components/experience.js';
import { renderSkills } from './components/skills.js';
import { renderProjects } from './components/projects.js';
import { renderEducation } from './components/education.js';
import { renderFaq } from './components/faq.js';
import { renderContact } from './components/contact.js';
import { renderFooter } from './components/footer.js';

async function init() {
  try {
    const data = await loadAllData();

    renderNav(data.personal);
    renderHero(data.personal);
    renderSnapshot(data.personal, data.education);
    renderAbout(data.personal);
    renderRoleFit(data.personal);
    renderBanner(data.personal);
    renderExperience(data.experience);
    renderSkills(data.skills);
    renderProjects(data.projects);
    renderEducation(data.education);
    renderFaq(data.faq);
    renderContact(data.personal);
    renderFooter(data.personal);

    initNavScroll();
    initMobileMenu();
    initSmoothScroll();
    initScrollReveal();
    initCounterAnimation();

    document.body.classList.add('loaded');
  } catch (err) {
    console.error('Failed to initialise site:', err);
    document.body.classList.add('loaded');
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
