```javascript
/* =========================================================
   LAPTOP MASTER V2.4
   Main JavaScript
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* =======================================================
     MOBILE NAVIGATION
     ======================================================= */

  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#site-nav");

  if (menuToggle && nav) {

    menuToggle.addEventListener("click", () => {

      const isOpen = nav.classList.toggle("open");

      menuToggle.setAttribute(
        "aria-expanded",
        isOpen ? "true" : "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu"
      );

      menuToggle.textContent = isOpen ? "✕" : "☰";

    });


    /* Close menu after clicking a navigation link */

    const navLinks = nav.querySelectorAll("a");

    navLinks.forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open menu"
        );

        menuToggle.textContent = "☰";

      });

    });


    /* Close menu when clicking outside */

    document.addEventListener("click", (event) => {

      const clickedInsideNav = nav.contains(event.target);
      const clickedMenu = menuToggle.contains(event.target);

      if (
        nav.classList.contains("open") &&
        !clickedInsideNav &&
        !clickedMenu
      ) {

        nav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open menu"
        );

        menuToggle.textContent = "☰";

      }

    });


    /* Close menu when pressing Escape */

    document.addEventListener("keydown", (event) => {

      if (
        event.key === "Escape" &&
        nav.classList.contains("open")
      ) {

        nav.classList.remove("open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Open menu"
        );

        menuToggle.textContent = "☰";

        menuToggle.focus();

      }

    });

  }


  /* =======================================================
     CURRENT YEAR
     ======================================================= */

  const yearElement = document.querySelector("#year");

  if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

  }


  /* =======================================================
     CLOSE MOBILE MENU ON RESIZE
     ======================================================= */

  window.addEventListener("resize", () => {

    if (
      window.innerWidth > 900 &&
      nav &&
      menuToggle
    ) {

      nav.classList.remove("open");

      menuToggle.setAttribute(
        "aria-expanded",
        "false"
      );

      menuToggle.setAttribute(
        "aria-label",
        "Open menu"
      );

      menuToggle.textContent = "☰";

    }

  });


  /* =======================================================
     SMOOTH INTERNAL LINKS
     ======================================================= */

  document
    .querySelectorAll('a[href^="#"]')
    .forEach((link) => {

      link.addEventListener("click", (event) => {

        const targetId = link.getAttribute("href");

        if (
          !targetId ||
          targetId === "#" ||
          targetId.length < 2
        ) {
          return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
          return;
        }

        event.preventDefault();

        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      });

    });


  /* =======================================================
     HEADER SCROLL EFFECT
     ======================================================= */

  const header = document.querySelector(".site-header");

  if (header) {

    const updateHeader = () => {

      if (window.scrollY > 20) {

        header.classList.add("scrolled");

      } else {

        header.classList.remove("scrolled");

      }

    };

    window.addEventListener(
      "scroll",
      updateHeader,
      { passive: true }
    );

    updateHeader();

  }


  /* =======================================================
     LAZY IMAGE FALLBACK
     ======================================================= */

  const images = document.querySelectorAll("img");

  images.forEach((image) => {

    image.addEventListener("error", () => {

      image.classList.add("image-error");

    });

  });


  /* =======================================================
     EXTERNAL LINKS
     ======================================================= */

  document
    .querySelectorAll('a[target="_blank"]')
    .forEach((link) => {

      link.setAttribute("rel", "noopener noreferrer");

    });


  /* =======================================================
     SIMPLE SCROLL REVEAL
     ======================================================= */

  const revealElements = document.querySelectorAll(
    ".service-card, .specialty-card, .pickup-card, .contact-line, .gallery-grid img"
  );


  if (
    "IntersectionObserver" in window &&
    revealElements.length
  ) {

    const observer = new IntersectionObserver(
      (entries, observerInstance) => {

        entries.forEach((entry) => {

          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("visible");

          observerInstance.unobserve(entry.target);

        });

      },
      {
        threshold: 0.12
      }
    );


    revealElements.forEach((element) => {

      element.classList.add("reveal");

      observer.observe(element);

    });

  }


  /* =======================================================
     WHATSAPP CLICK TRACKING
     ======================================================= */

  const whatsappLinks = document.querySelectorAll(
    'a[href*="wa.me"]'
  );


  whatsappLinks.forEach((link) => {

    link.addEventListener("click", () => {

      /*
       * Optional analytics hook.
       *
       * If Google Analytics is added later,
       * this can be connected to a conversion event.
       */

      if (typeof window.gtag === "function") {

        window.gtag(
          "event",
          "whatsapp_click",
          {
            event_category: "contact",
            event_label: "WhatsApp"
          }
        );

      }

    });

  });


  /* =======================================================
     PHONE CLICK TRACKING
     ======================================================= */

  const phoneLinks = document.querySelectorAll(
    'a[href^="tel:"]'
  );


  phoneLinks.forEach((link) => {

    link.addEventListener("click", () => {

      if (typeof window.gtag === "function") {

        window.gtag(
          "event",
          "phone_click",
          {
            event_category: "contact",
            event_label: "Phone"
          }
        );

      }

    });

  });


  /* =======================================================
     MAP / DIRECTIONS CLICK TRACKING
     ======================================================= */

  const mapLinks = document.querySelectorAll(
    'a[href*="google.com/maps"]'
  );

  mapLinks.forEach((link) => {

    link.addEventListener("click", () => {

      if (typeof window.gtag === "function") {

        window.gtag(
          "event",
          "map_click",
          {
            event_category: "contact",
            event_label: "Google Maps"
          }
        );

      }

    });

  });

  /* =======================================================
     CONSOLE MESSAGE
     ======================================================= */

  console.log(
    "LAPTOP MASTER V2.4 loaded successfully."
  );

});
```
