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

// Active section indicator; no scroll progress indicator or scroll-linked width updates.
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll('.nav-link')];
  const sections = [...document.querySelectorAll('main section[id]')];
  function setCurrentSection(id) {
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-current', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  // Direct navigation should immediately update the highlighted item.
  navLinks.forEach(link => link.addEventListener('click', () => {
    setCurrentSection(link.getAttribute('href').slice(1));
  }));
  setCurrentSection(location.hash ? location.hash.slice(1) : 'home');
  const activeObserver = new IntersectionObserver(entries => {
    const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
    if (!visible.length) return;
    setCurrentSection(visible[0].target.id);
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

// Accessible certificate tabs, keeps the section screen-sized on desktop.
const certTabs = [...document.querySelectorAll('#certificates [role="tab"]')];
function selectCertificateTab(nextTab, moveFocus = false) {
  certTabs.forEach(tab => {
    const active = tab === nextTab;
    tab.setAttribute('aria-selected', String(active));
    tab.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(tab.getAttribute('aria-controls'));
    if (panel) panel.hidden = !active;
  });
  if (moveFocus) nextTab.focus();
}
certTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectCertificateTab(tab));
  tab.addEventListener('keydown', event => {
    let next = -1;
    if (event.key === 'ArrowRight') next = (index + 1) % certTabs.length;
    if (event.key === 'ArrowLeft') next = (index - 1 + certTabs.length) % certTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = certTabs.length - 1;
    if (next >= 0) { event.preventDefault(); selectCertificateTab(certTabs[next], true); }
  });
});
