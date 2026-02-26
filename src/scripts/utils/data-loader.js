import jsyaml from 'https://cdn.jsdelivr.net/npm/js-yaml@4.1.0/+esm';

const cache = {};

function getBasePath() {
  const base = document.querySelector('base');
  if (base) return base.href;
  return window.location.origin + window.location.pathname.replace(/\/[^/]*$/, '/');
}

async function loadYaml(filename) {
  if (cache[filename]) return cache[filename];

  const basePath = getBasePath();
  const url = `${basePath}src/data/${filename}`;

  const response = await fetch(url);
  if (!response.ok) {
    console.warn(`Failed to load ${filename}: ${response.status}`);
    return null;
  }

  const text = await response.text();
  const data = jsyaml.load(text);
  cache[filename] = data;
  return data;
}

export async function loadAllData() {
  const files = [
    'personal.yaml',
    'experience.yaml',
    'projects.yaml',
    'education.yaml',
    'skills.yaml',
    'faq.yaml',
  ];

  const results = await Promise.all(files.map(loadYaml));

  return {
    personal: results[0] || {},
    experience: results[1] || [],
    projects: results[2] || {},
    education: results[3] || [],
    skills: results[4] || [],
    faq: results[5] || [],
  };
}
