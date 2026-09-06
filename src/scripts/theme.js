const root = document.documentElement;
const storageKey = "theme";
const button = document.getElementById("theme-toggle");
const sun = document.getElementById("icon-sun");
const moon = document.getElementById("icon-moon");

function preferred() {
  const saved = localStorage.getItem(storageKey);
  if (saved === "light" || saved === "dark") return saved;
  return "light";
}

function apply(theme) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  sun.classList.toggle("hidden", !dark);
  moon.classList.toggle("hidden", dark);
  button.setAttribute("aria-label", dark ? "Use light theme" : "Use dark theme");
}

apply(preferred());

button.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem(storageKey, next);
  apply(next);
});
