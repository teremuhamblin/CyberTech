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
  if (!target) return console.error("❌ app-root introuvable");

  const url = routes[path] || routes["/"];

  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Erreur HTTP ${res.status}`);

    const html = await res.text();
    target.innerHTML = html;

    updateActiveLink(path);

  } catch (err) {
    console.error("❌ Erreur de chargement de vue :", err);
    target.innerHTML = `
      <div class="card">
        <h2>Erreur</h2>
        <p>Impossible de charger la vue <strong>${path}</strong>.</p>
      </div>
    `;
  }
}

/* Gestion des clics SPA */
function onNavClick(e) {
  const link = e.target.closest("[data-route]");
  if (!link) return;

  e.preventDefault();
  const path = link.dataset.route;

  history.pushState({ path }, "", path);
  loadView(path);
}

/* Mise à jour du lien actif */
function updateActiveLink(path) {
  document.querySelectorAll(".nav-main__link").forEach((el) => {
    el.classList.toggle("nav-main__link--active", el.dataset.route === path);
  });
}

/* Gestion du bouton retour navigateur */
window.addEventListener("popstate", (e) => {
  const path = (e.state && e.state.path) || "/";
  loadView(path);
});

/* Injection header/footer */
async function injectLayout() {
  try {
    const headerRoot = document.getElementById("header-root");
    const footerRoot = document.getElementById("footer-root");

    if (!headerRoot || !footerRoot) {
      return console.error("❌ header-root ou footer-root introuvable");
    }

    headerRoot.innerHTML = await (await fetch("components/header.html")).text();
    footerRoot.innerHTML = await (await fetch("components/footer.html")).text();

  } catch (err) {
    console.error("❌ Erreur d’injection layout :", err);
  }
}

/* Initialisation */
window.addEventListener("DOMContentLoaded", async () => {
  await injectLayout();
  loadView(location.pathname || "/");
  document.addEventListener("click", onNavClick);
});
