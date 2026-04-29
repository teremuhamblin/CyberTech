/* ===========================
   CYBERTECH SPA ROUTER v1.0
   =========================== */

const routes = {
  "/": "views/home.html",
  "/dashboard": "views/dashboard.html",
  "/docs": "views/docs.html",
  "/modules": "views/modules.html",
};

/* Charger une vue */
async function loadView(path) {
  const target = document.getElementById("app-root");
  const url = routes[path] || routes["/"];
  const res = await fetch(url);
  const html = await res.text();
  target.innerHTML = html;

  updateActiveLink(path);
}

/* Gestion des liens SPA */
function onNavClick(e) {
  const link = e.target.closest("[data-route]");
  if (!link) return;

  e.preventDefault();
  const path = link.getAttribute("data-route");

  history.pushState({ path }, "", path);
  loadView(path);
}

/* Lien actif */
function updateActiveLink(path) {
  document.querySelectorAll(".nav-main__link").forEach((el) => {
    el.classList.toggle("nav-main__link--active", el.dataset.route === path);
  });
}

/* Popstate */
window.addEventListener("popstate", (e) => {
  const path = (e.state && e.state.path) || "/";
  loadView(path);
});

/* Injection header/footer */
async function injectLayout() {
  document.getElementById("header-root").innerHTML =
    await (await fetch("components/header.html")).text();

  document.getElementById("footer-root").innerHTML =
    await (await fetch("components/footer.html")).text();
}

/* Init */
window.addEventListener("DOMContentLoaded", async () => {
  await injectLayout();
  loadView(location.pathname || "/");
  document.addEventListener("click", onNavClick);
});
async function loadComponent(id, file) {
  const container = document.getElementById(id);
  const response = await fetch(`components/${file}`);
  container.innerHTML = await response.text();
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
