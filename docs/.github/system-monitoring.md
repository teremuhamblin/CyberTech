>Système de logs + un mode debug en deux fichiers Markdown, prêts à placer dans ton projet CyberTech v1.0.

Ils suivent ton style :  
✔ clair  
✔ structuré  
✔ cyber/tech  
✔ utilisable immédiatement  
✔ cohérent avec ta SPA et ton design system  

---

📁 1. /doc/system-monitoring.md

Système de Logs — CyberTech v1.0

`markdown

🧩 CyberTech — Système de Logs v1.0

Le système de logs CyberTech permet de suivre l’activité interne de la SPA, des modules, du router et des erreurs système.

---

🎯 Objectifs

- Suivre les actions internes (navigation, chargement de vues, modules)
- Détecter les erreurs (404, 500, fetch, injection)
- Faciliter le debug et l’évolution du projet
- Fournir une base pour un futur système d’analytics (v1.1)

---

📦 Structure des logs

Les logs sont stockés dans un tableau interne :

`js
window.CyberTechLogs = [];
`

Chaque entrée suit ce format :

`js
{
  time: "2026-04-30T00:00:00.000Z",
  type: "info" | "warn" | "error" | "system",
  source: "router" | "view" | "module" | "layout" | "system",
  message: "Description de l’événement"
}
`

---

📝 Exemple de log

`json
{
  "time": "2026-04-30T00:12:10.221Z",
  "type": "info",
  "source": "router",
  "message": "Navigation vers /dashboard"
}
`

---

⚙️ API de logging

Ajouter un log

`js
CyberTech.log("info", "router", "Navigation vers /dashboard");
`

Types disponibles

- info — action normale
- warn — comportement inattendu
- error — erreur bloquante
- system — événements internes (SPA, injection, modules)

---

📊 Visualisation (v1.1)

La v1.1 ajoutera :

- un panneau de logs dans le dashboard  
- un filtre par type/source  
- export JSON  

---

🔒 Sécurité & confidentialité

- Aucun log n’est envoyé en externe  
- Tout reste en mémoire locale  
- Peut être vidé via :  

`js
CyberTechLogs.length = 0;
`

---

🚀 Intégration dans script.js

Ajouter en haut :

`js
window.CyberTechLogs = [];

window.CyberTech = {
  log(type, source, message) {
    CyberTechLogs.push({
      time: new Date().toISOString(),
      type,
      source,
      message
    });
    if (window.CYBERTECH_DEBUG) console.log([${type}] ${source}: ${message});
  }
};
`

---

🧪 Exemple d’utilisation

`js
CyberTech.log("info", "router", "Chargement de la vue /docs");
CyberTech.log("error", "view", "Impossible de charger home.html");
CyberTech.log("system", "layout", "Header injecté");
`

---

📌 Notes

- Le système est volontairement simple pour la v1.0  
- La v1.1 ajoutera un UI de logs dans le dashboard  
`

---

📁 2. /docs/debug-mode.md

Mode Debug — CyberTech v1.0

`markdown

🐞 CyberTech — Mode Debug v1.0

Le mode debug permet d’activer des informations supplémentaires pour le développement, sans impacter la version de production.

---

🎯 Objectifs

- Afficher les logs en temps réel dans la console
- Activer des messages supplémentaires dans le router
- Détecter les erreurs silencieuses
- Faciliter le développement des modules

---

🔧 Activation du mode debug

Ajouter dans script.js :

`js
window.CYBERTECH_DEBUG = true;
`

Pour désactiver :

`js
window.CYBERTECH_DEBUG = false;
`

---

🧩 Fonctionnement

Lorsque CYBERTECH_DEBUG = true, chaque log est aussi envoyé dans la console :

`js
if (window.CYBERTECH_DEBUG)
  console.log([${type}] ${source}: ${message});
`

---

🛠️ Debug du router

Exemples de logs :

`
[info] router: Navigation vers /dashboard
[system] router: popstate détecté
[error] router: Erreur HTTP 404 pour views/docs.html
`

---

🛠️ Debug de l’injection layout

`
[system] layout: Header injecté
[system] layout: Footer injecté
[error] layout: Impossible de charger components/header.html
`

---

🛠️ Debug des vues

`
[info] view: Chargement de home.html
[warn] view: Vue vide détectée
[error] view: Exception lors du parsing HTML
`

---

🧪 Mode debug étendu (optionnel)

Ajouter :

`js
window.CYBERTECHDEBUGVERBOSE = true;
`

Cela active :

- logs de performance  
- logs de temps de chargement  
- logs de mémoire (si supporté)  

---

🧹 Nettoyage des logs

`js
CyberTechLogs.length = 0;
`

---

🚀 Roadmap Debug v1.1

- Panneau debug dans le dashboard  
- Visualisation des logs en temps réel  
- Mode “profiling” pour le router  
- Analyse des erreurs 404/500  
`

---

🎉 Les deux fichiers sont prêts :

📁 /docs/system-monitoring.md  
