/* ===============================
   script.js — RutaCero Games (versión final)
   =============================== */

// ======== MENÚ HAMBURGUESA (móviles) ========
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

// Crear overlay (fondo oscuro al abrir el menú)
const overlay = document.createElement('div');
overlay.classList.add('nav-overlay');
document.body.appendChild(overlay);

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('open');
  overlay.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('open');
    overlay.classList.remove('active');
  });
});

// Cerrar menú si se toca el fondo oscuro
overlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  menuToggle.classList.remove('open');
  overlay.classList.remove('active');
});

// ======== ANIMACIÓN DE APARICIÓN (fade-in) ========
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => appearOnScroll.observe(fader));

// ======== EFECTO DE DESPLAZAMIENTO SUAVE ========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: 'smooth'
      });
    }
  });
});
