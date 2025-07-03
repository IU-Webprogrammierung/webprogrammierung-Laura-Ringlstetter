async function loadComponent(id, url) {
  const res = await fetch(url);
  const html = await res.text();
  document.getElementById(id).innerHTML = html;

  // Nur wenn der Header geladen wurde
  if (id === "header") {
    initBurgerMenu(); // Direkt initialisieren
  }
}

loadComponent("header", "/components/header.html");
loadComponent("footer", "/components/footer.html");

// Burger-Menü-Logik (direkt in components.js oder alternativ importieren)
function initBurgerMenu() {
  const burger = document.querySelector(".burger");
  const mobileNav = document.querySelector(".modal");
  const closeButton = document.querySelector(".close-button");

  burger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  }
}
