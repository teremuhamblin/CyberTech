async function loadComponent(id, file) {
  const container = document.getElementById(id);
  const response = await fetch(`components/${file}`);
  container.innerHTML = await response.text();
}

loadComponent("header", "header.html");
loadComponent("footer", "footer.html");
