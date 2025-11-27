/* Togle icon navbar */
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

/* SCROLL SECTION ACTIVE LIST */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((section) => {
    let top = window.scrollY;
    let offset = section.offsetTop - 150; // Restar 150 al valor de offsetTop
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*------ STICKY NAVBAR ------*/
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  /*------ REMOVE TOGGLE ICON AND NAVBAR WHEN CLICKING A LINK ------*/
  menuIcon.classList.remove("fa-xmark");
  navbar.classList.remove("active");
};

ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
  reset: true,
});

/* Reveal elements */
ScrollReveal().reveal(".home-content, h1", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portafolio-box, .contact form, .cards-container",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-contact h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".about-content p, .about-content", { origin: "right" });
ScrollReveal().reveal(
  ".stack-cards, .stack-cards h1, .stack-cards p, .stack-cards a",
  {
    origin: "bottom",
    distance: "40px",
    duration: 1000,
    interval: 50,
    easing: "ease-in-out",
  }
);

//Sobre mi 
// Animación de entrada desde abajo con suavidad
ScrollReveal().reveal('.card_sobremi-wrapper', {
  origin: 'bottom',
  distance: '60px',
  duration: 1200,
  delay: 100,
  easing: 'ease-out',
  reset: false
});

ScrollReveal().reveal('.card_sobremi-container', {
  origin: 'left',
  distance: '50px',
  duration: 1000,
  delay: 200
});

ScrollReveal().reveal('.card_sobremi-info', {
  origin: 'right',
  distance: '50px',
  duration: 1000,
  delay: 300
});

ScrollReveal().reveal('.habilidad', {
  interval: 150,
  origin: 'bottom',
  distance: '30px',
  duration: 800
});

//Servicios
ScrollReveal().reveal(
  ".stack-cards-section p, .stack-cards-section h2, ..stack-cards-section i",
  {
    origin: "top",
    distance: "40px",
    duration: 100,
    interval: 100,
    easing: "ease-in-out",
  }
);


ScrollReveal().reveal(
  ".habilidad-widget, .habilidad-widget h3, .habilidad-widget i, .habilidad-widget p",
  {
    origin: "top",
    distance: "40px",
    duration: 1000,
    interval: 100,
    easing: "ease-in-out",
  }
);

//Proyectos
ScrollReveal().reveal(
  ".card_proyects",
  {
    origin: "bottom",
    distance: "60px",
    duration: 1200,
    interval: 150,
    scale: 0.95,
    opacity: 0,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    reset: false,
    cleanup: true
  }
);

ScrollReveal().reveal(
  ".card_proyects h2, .card_proyects h3, .card_proyects p, .card_proyects a, .detail, .buttons",
  {
    origin: "bottom",
    distance: "20px",
    duration: 800,
    interval: 75,
    scale: 1,
    opacity: 0,
    easing: "ease-out",
    reset: false,
    cleanup: true
  }
);



ScrollReveal().reveal(".contact_wrapper, .section_contact h4, .section_contact p, .section_contact i", {
  origin: "bottom", // La animación viene desde abajo
  distance: "50px", // Distancia del desplazamiento
  duration: 1000, // Duración de la animación
  delay: 200, // Retardo antes de empezar la animación
  // No vuelve a ocultarse cuando sales del viewport
  easing: "ease-in-out", // Suavizado de la animación
});

ScrollReveal().reveal(".tecnologia", {
  origin: "bottom",
  distance: "40px",
  duration: 1000,
  interval: 100,
  easing: "ease-in-out",
});

// ✅ (opcional) Animar las categorías completas también
ScrollReveal().reveal(".tecnologias-categoria", {
  origin: "top",
  distance: "60px",
  duration: 1500,
  delay: 100,
});
ScrollReveal().reveal(".l-footer, .l-footer h4, .l-footer i, .l-footer p, .l-footer a, .footer-iconTop", {
  delay: 200,
  distance: "50px",
  origin: "bottom",
  interval: 100, // animación escalonada para cada ícono
  duration: 600,
  easing: "ease-out",
});

/*Typed JS */
const typed = new Typed(".text-multiplie", {
  strings: ["Future Backend Developer", "Web Desiger"],
  typeSpeed: 70,
  backSpeed: 70,
  backDelay: 1000,
  loop: true,
});


