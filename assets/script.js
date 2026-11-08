// EDIT THESE CONTACT DETAILS BEFORE PUBLISHING.
const CONTACT = {
  whatsappNumber: "919033762894", // Country code + number, digits only, e.g. 919876543210
  email: "saunak.bhalsod@gmail.com",          // e.g. hello@yourstudio.com
};

const whatsapp = document.querySelector('#whatsapp-link');
const email = document.querySelector('#email-link');
if (CONTACT.whatsappNumber) {
  whatsapp.href = `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent('Hello! I would like to enquire about a photography session.')}`;
  whatsapp.target = '_blank'; whatsapp.rel = 'noopener noreferrer';
} else { whatsapp.textContent = 'ADD WHATSAPP NUMBER ↗'; whatsapp.title = 'Set whatsappNumber in assets/script.js'; }
if (CONTACT.email) {
  // Open Gmail Compose in the browser instead of relying on a configured mailto app.
  const subject = 'Photography Session Enquiry — STUDIO 24MP';
  const body = 'Hello STUDIO 24MP,\\n\\nI would like to enquire about a photography session.\\n\\nName: \\nPreferred date: \\nType of shoot: \\n\\nThank you!';
  email.href = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(CONTACT.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  email.target = '_blank';
  email.rel = 'noopener noreferrer';
  email.title = 'Open Gmail to compose your enquiry';
} else { email.textContent = 'ADD EMAIL ADDRESS ↗'; email.title = 'Set email in assets/script.js'; }

document.querySelector('#year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {const opened = nav.classList.toggle('open');toggle.setAttribute('aria-expanded', String(opened));toggle.setAttribute('aria-label', opened ? 'Close navigation' : 'Open navigation');});
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {nav.classList.remove('open');toggle.setAttribute('aria-expanded', 'false');toggle.setAttribute('aria-label', 'Open navigation');}));

document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  document.querySelectorAll('.filter').forEach(b => {const selected = b === button;b.classList.toggle('active', selected);b.setAttribute('aria-pressed', String(selected));});
  document.querySelectorAll('.work-card').forEach(card => {card.hidden = category !== 'all' && card.dataset.category !== category;});
}));

// Image paths are resolved relative to index.html, not the CSS or JS file.
// Keep filenames exactly as specified in index.html (case-sensitive on GitHub Pages).
document.querySelectorAll('[data-image]').forEach(element => {
  const filename = element.dataset.image;
  const img = document.createElement('img');
  img.src = `assets/images/${encodeURIComponent(filename)}`;
  img.alt = element.closest('.work-card')?.querySelector('h3')?.textContent || 'Portfolio photograph';
  img.loading = 'lazy';
  img.decoding = 'async';
  img.addEventListener('load', () => {
    element.style.backgroundImage = 'none';
    element.classList.remove('placeholder');
    element.querySelector('.placeholder-label')?.remove();
  });
  img.addEventListener('error', () => {
    console.error(`Could not load photograph: assets/images/${filename}`);
    img.remove();
  });
  element.appendChild(img);
});
