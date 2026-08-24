document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollToPlugin);

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Smooth scrolling between navigation anchors.
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = document.querySelector(link.getAttribute("href"));

      if (!target) {
        return;
      }

      event.preventDefault();

      if (reduceMotion) {
        target.scrollIntoView();
        return;
      }

      gsap.to(window, {
        duration: 1.05,
        scrollTo: {
          y: target,
          offsetY: 65
        },
        ease: "power3.inOut"
      });
    });
  });

  if (reduceMotion) {
    gsap.set(".reveal", { opacity: 1, y: 0 });
    return;
  }

  // Small entrance animation.
  gsap.utils.toArray(".reveal").forEach((element, index) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.75,
        delay: Math.min(index * 0.025, 0.3),
        ease: "power2.out"
      }
    );
  });

  // Minimal hover rotation for the four image slots.
  document.querySelectorAll(".tilt-image").forEach((frame) => {
    frame.addEventListener("mouseenter", () => {
      gsap.to(frame, {
        rotation: 0.8,
        duration: 0.25,
        ease: "power2.out"
      });
    });

    frame.addEventListener("mouseleave", () => {
      gsap.to(frame, {
        rotation: 0,
        duration: 0.3,
        ease: "power2.out"
      });
    });
  });



});

const formulario = document.querySelector("#formContacto")
formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  const modal = document.querySelector(".modal");
  console.log(modal);
  modal.classList.add("modal-visible");
  console.log(modal.classList);
  setTimeout(() => {
    modal.classList.remove("modal-visible");
    formulario.reset();
  }, 2000);
});