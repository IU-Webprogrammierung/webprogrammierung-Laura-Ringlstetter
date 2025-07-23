//Für die fixe Navigationsleiste
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

//Animationseffekte
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".intro");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Optional: nur einmal beobachten
      }
    });
  }, {
    threshold: 0.1 // 10% des Elements muss sichtbar sein
  });

  elements.forEach(el => observer.observe(el));
});
