'use strict';

// Navigation remains simple and functional without a framework or server.
const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#nav-links');
function closeNavigation() {
  if (!navigation || !menuToggle) return;
  navigation.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open navigation');
}
if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeNavigation));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeNavigation(); });
  document.addEventListener('click', event => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) closeNavigation();
  });
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

// Two real application screenshots, no demo or fabricated project visuals.
const slides = [...document.querySelectorAll('[data-gallery-slide]')];
const galleryCounter = document.querySelector('.gallery-count');
let currentSlide = 0;
function showSlide(next) {
  if (!slides.length) return;
  currentSlide = (next + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    slide.hidden = i !== currentSlide;
    slide.classList.toggle('is-active', i === currentSlide);
  });
  if (galleryCounter) galleryCounter.innerHTML = `${String(currentSlide + 1).padStart(2, '0')} <span>/</span> ${String(slides.length).padStart(2, '0')}`;
}
document.querySelector('[data-gallery-prev]')?.addEventListener('click', () => showSlide(currentSlide - 1));
document.querySelector('[data-gallery-next]')?.addEventListener('click', () => showSlide(currentSlide + 1));

// Scroll progress and active section indicator; progressive enhancement.
const progressBar = document.querySelector('.reading-progress');
let framePending = false;
function onScroll() {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(() => {
    const height = document.documentElement.scrollHeight - window.innerHeight;
    if (progressBar) progressBar.style.width = `${height > 0 ? Math.min(100, 100 * window.scrollY / height) : 0}%`;
    framePending = false;
  });
}
window.addEventListener('scroll', onScroll, {passive: true});
onScroll();

if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];
  const activeObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
    if (!visible.length) return;
    const id = visible[0].target.id;
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-current', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }, {rootMargin:'-24% 0px -45% 0px',threshold:[0,.1,.25,.5]});
  sections.forEach(section => activeObserver.observe(section));

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const reveals = [...document.querySelectorAll('[data-reveal]')];
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, {threshold:0.08,rootMargin:'0px 0px -15px 0px'});
    reveals.forEach(el => { el.classList.add('reveal-ready'); revealObserver.observe(el); });
  }
}

// Avoid leaving a mobile popover expanded after viewport changes.
window.matchMedia('(min-width: 781px)').addEventListener('change', event => {
  if (event.matches) closeNavigation();
});
