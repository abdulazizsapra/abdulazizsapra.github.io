import { html, renderInto } from '../utils/dom.js';

export function renderAbout(personal) {
  const paragraphs = personal.about || [];

  renderInto('#about .container', html`
    <header class="section-header">
      <span class="section-label">About Me</span>
      <h2>Who I Am</h2>
    </header>

    <div class="about-hero">
      <div class="about-photo">
        <div class="about-photo__ring about-photo__ring--1"></div>
        <div class="about-photo__ring about-photo__ring--2"></div>
        <div class="about-photo__ring about-photo__ring--3"></div>
        <div class="about-photo__glow"></div>
        <div class="about-photo__frame">
          <picture>
            <source srcset="src/assets/profile.webp" type="image/webp">
            <img src="src/assets/profile.png" alt="Abdul Aziz — Full Stack Developer" width="400" height="528">
          </picture>
        </div>
        <div class="about-photo__dots about-photo__dots--tl" aria-hidden="true"></div>
        <div class="about-photo__dots about-photo__dots--br" aria-hidden="true"></div>
        <span class="about-photo__tag about-photo__tag--1" aria-hidden="true">React</span>
        <span class="about-photo__tag about-photo__tag--2" aria-hidden="true">Laravel</span>
        <span class="about-photo__tag about-photo__tag--3" aria-hidden="true">AWS</span>
        <span class="about-photo__tag about-photo__tag--4" aria-hidden="true">Node.js</span>
        <span class="about-photo__tag about-photo__tag--5" aria-hidden="true">Shopify</span>
        <span class="about-photo__tag about-photo__tag--6" aria-hidden="true">PHP</span>
      </div>
    </div>

    <div class="about-text">
      ${paragraphs.map(p => `<p>${p}</p>`)}
    </div>
  `);
}
