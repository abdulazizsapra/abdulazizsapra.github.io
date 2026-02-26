export function $(selector, parent = document) {
  return parent.querySelector(selector);
}

export function $$(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

export function html(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i];
    if (value === undefined || value === null) return result + str;
    if (Array.isArray(value)) return result + str + value.join('');
    return result + str + value;
  }, '');
}

export function escapeHtml(str) {
  if (!str) return '';
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function renderInto(selector, content) {
  const el = $(selector);
  if (el) el.innerHTML = content;
}
