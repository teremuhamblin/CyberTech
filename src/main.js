// -------------------------------------------------------------
// CyberTech v1.2 — Main Entry Point
// SPA • Animations • Modules • Design System • Psionic Engine
// -------------------------------------------------------------

import { CyberPsionicSpork } from "./modules/cyber-psionic-spork.js";
import { animatePsionicSpork } from "./components/psionic-spork-visual.js";

// -------------------------------------------------------------
// 1) Initialisation du système CyberTech
// -------------------------------------------------------------

console.log("⚡ CyberTech v1.2 — Initialisation du noyau…");

const CyberTech = {
  version: "1.2",
  theme: "dark",
  modules: {},
  init() {
    console.log("🧬 Chargement des modules CyberTech…");
    this.loadTheme();
    this.loadSpork();
    this.activateNavigation();
  },

  // -----------------------------------------------------------
  // 2) Gestion du thème CyberTech
  // -----------------------------------------------------------
  loadTheme() {
    document.documentElement.setAttribute("data-theme", this.theme);
    console.log(`🎨 Thème actif : ${this.theme}`);
  },

  // -----------------------------------------------------------
  // 3) Module Cyber‑Psionic Spork
  // -----------------------------------------------------------
  loadSpork() {
    const spork = new CyberPsionicSpork();
    this.modules.spork = spork;

    console.log(spork.scan("Initialisation mentale CyberTech"));
    console.log(spork.charge(25));

    const icon = document.querySelector("#psionic-spork");
    if (icon) {
      animatePsionicSpork("#psionic-spork");
      console.log("🔮 Animation psionique activée");
    }
  },

  // -----------------------------------------------------------
  // 4) Navigation SPA (simple & efficace)
  // -----------------------------------------------------------
  activateNavigation() {
    const links = document.querySelectorAll("[data-nav]");
    const pages = document.querySelectorAll("[data-page]");

    links.forEach(link => {
      link.addEventListener("click", () => {
        const target = link.getAttribute("data-nav");

        pages.forEach(p => p.classList.remove("active"));
        document.querySelector(`[data-page='${target}']`).classList.add("active");

        console.log(`📁 Page chargée : ${target}`);
      });
    });

    console.log("🛰️ Navigation SPA activée");
  }
};

// -------------------------------------------------------------
// 5) Lancement du système CyberTech
// -------------------------------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  CyberTech.init();
});
