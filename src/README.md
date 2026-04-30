# 📁 Dossier `src/`
Code source principal du projet **CyberTech v1.2**.

Ce dossier contient l’ensemble des fichiers nécessaires au fonctionnement de l’application : modules, composants, pages, scripts d’initialisation et logique SPA.

---

## 📌 Structure générale

- **main.js**  
  Point d’entrée de l’application. Initialise CyberTech, charge les modules, active les animations et la navigation SPA.

- **modules/**  
  Contient les modules fonctionnels du projet (logique, systèmes internes, artefacts CyberTech).  
  Exemple : `cyber-psionic-spork.js`.

- **components/**  
  Composants visuels et animations (GSAP, effets, interactions).  
  Exemple : `psionic-spork-visual.js`.

- **pages/**  
  Pages internes de la SPA, chargées dynamiquement via la navigation CyberTech.  
  Exemple : `spork-secret.html`.

---

## 🎯 Objectif du dossier

Centraliser toute la logique applicative CyberTech :

- Initialisation du noyau CyberTech  
- Gestion du thème et du design system  
- Modules avancés (IA, artefacts, systèmes internes)  
- Composants animés (GSAP, transitions, effets)  
- Pages de la SPA  
- Intégration du Cyber‑Psionic Spork  
- Navigation interne et interactions utilisateur  

---

## 🧩 Bonnes pratiques

- Garder chaque module **court, clair et autonome**  
- Placer les animations dans `components/`  
- Placer la logique dans `modules/`  
- Ne jamais mélanger logique et interface  
- Utiliser `main.js` comme **unique point d’entrée**  
- Respecter la structure pour maintenir la cohérence CyberTech  

---

## 🚀 Lancement

Depuis la racine du projet :

```bash
npm run dev
