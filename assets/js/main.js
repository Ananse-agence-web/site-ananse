// Ananse — menu mobile, en-tête au défilement, apparition des sections.
(() => {
  const bouton = document.querySelector(".menu-bouton");
  const menu = document.getElementById("menu");
  if (bouton && menu) {
    const fermer = () => { menu.classList.remove("ouvert"); bouton.setAttribute("aria-expanded", "false"); };
    bouton.addEventListener("click", () => {
      const ouvert = menu.classList.toggle("ouvert");
      bouton.setAttribute("aria-expanded", String(ouvert));
    });
    menu.addEventListener("click", (e) => { if (e.target.closest("a")) fermer(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") fermer(); });
  }

  const entete = document.querySelector(".entete");
  const surDefilement = () => entete && entete.classList.toggle("defile", window.scrollY > 8);
  surDefilement();
  window.addEventListener("scroll", surDefilement, { passive: true });

  const elements = document.querySelectorAll(".revele");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("vu"));
    return;
  }
  const obs = new IntersectionObserver((entrees) => {
    entrees.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("vu"); obs.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -8% 0px" });
  elements.forEach((el) => obs.observe(el));
})();
