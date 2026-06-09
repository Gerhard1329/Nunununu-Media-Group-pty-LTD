// Mobile menu toggle
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });
  
  // Close menu when clicking a link
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });
}

// WhatsApp Toggle Interaction
const whatsappToggle = document.getElementById('whatsappToggle');
if (whatsappToggle) {
  whatsappToggle.addEventListener('click', (e) => {
    // The link opens WhatsApp directly via href
    console.log('Opening WhatsApp chat with Nunununu Media Group');
  });
}

// Competition Form Handler - Allow Formspree to submit
const compForm = document.getElementById('competitionForm');
const compFeedback = document.getElementById('compFeedback');

if (compForm) {
  compForm.addEventListener('submit', (e) => {
    // Get form values for client-side validation only
    const name = document.getElementById('compName')?.value.trim();
    const email = document.getElementById('compEmail')?.value.trim();
    const phone = document.getElementById('compPhone')?.value.trim();
    const age = document.getElementById('compAge')?.value.trim();
    const interest = document.getElementById('compInterest')?.value;
    const bio = document.getElementById('compBio')?.value.trim();
    
    // Validation
    if (!name || !email || !phone || !age || !interest || !bio) {
      e.preventDefault();
      compFeedback.innerHTML = '❌ Please fill in all required fields (*).';
      compFeedback.style.color = '#ffaa66';
      return;
    }
    
    if (!email.includes('@')) {
      e.preventDefault();
      compFeedback.innerHTML = '❌ Please enter a valid email address.';
      compFeedback.style.color = '#ffaa66';
      return;
    }
    
    // If validation passes, allow form to submit to Formspree
    console.log('Competition form validation passed, submitting to Formspree...');
  });
}

// Contact Form Handler - Allow Formspree to submit
const contactForm = document.getElementById('contactForm');
const contactFeedback = document.getElementById('contactFeedback');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    const name = document.getElementById('contactName')?.value.trim();
    const email = document.getElementById('contactEmail')?.value.trim();
    const message = document.getElementById('contactMsg')?.value.trim();
    
    if (!name || !email || !message) {
      e.preventDefault();
      contactFeedback.innerHTML = '❌ Please fill in all fields.';
      contactFeedback.style.color = '#ffaa66';
      return;
    }
    
    // If validation passes, allow form to submit to Formspree
    console.log('Contact form validation passed, submitting to Formspree...');
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href === '') return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Add active class to nav links on scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href').substring(1);
    if (href === current) {
      link.style.color = '#FFD966';
    } else {
      link.style.color = '#eee';
    }
  });
});

console.log('Website loaded successfully — Nuṅunuṅu Media Group');
