//Für die fixe Navigationsleiste
window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    document.body.classList.add('scrolled');
  } else {
    document.body.classList.remove('scrolled');
  }
});

document.addEventListener("DOMContentLoaded", function () {
  if (!document.querySelector(".hero")) {
    document.body.classList.add("no-hero");
  }
});

//Animationseffekte
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".teaser .teaser-item, #about-image, .location-image, .timeline-item");

  const observer = new IntersectionObserver((entries, observer) => {
    let delay = 0;

    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, delay);

        delay += 700; 
        observer.unobserve(entry.target); 
      }
    });
  }, {
    threshold: 0.5
  });

  elements.forEach(el => observer.observe(el));
});

