async function loadComponent(id, url) {
  // Holt die HTML-Komponente von der angegebenen URL
  const res = await fetch(url);

  // Liest den Inhalt als Text (also HTML-Quelltext)
  const html = await res.text();

  // Fügt den HTML-Inhalt in das Element mit der entsprechenden ID ein
  document.getElementById(id).innerHTML = html;
}

// Lädt den Header und Footer beim Laden der Seite
loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");