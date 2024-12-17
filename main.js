import './style.css';
import AOS from 'aos';
import { renderFeatures } from './src/components/Features.js';
import { renderHowItWorks } from './src/components/HowItWorks.js';
import { renderFAQ } from './src/components/FAQ.js';
import { renderDownload } from './src/components/Download.js';
import { renderSupport } from './src/components/Support.js';
import { renderFooter } from './src/components/Footer.js';

// Initialize AOS
AOS.init({
  duration: 800,
  once: true,
});

// Render all sections
document.querySelector('#features .container').innerHTML = renderFeatures();
document.querySelector('#how-it-works').innerHTML = renderHowItWorks();
document.querySelector('#download').innerHTML = renderDownload();
document.querySelector('#faq').innerHTML = renderFAQ();
document.querySelector('#support').innerHTML = renderSupport();
document.querySelector('footer .container').innerHTML = renderFooter();

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('#mobile-menu-btn');
const mobileMenu = document.querySelector('#mobile-menu');

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
}

// FAQ accordion
document.addEventListener('click', (e) => {
  if (e.target.closest('.faq-question')) {
    const question = e.target.closest('.faq-question');
    const answer = question.nextElementSibling;
    const icon = question.querySelector('.faq-icon');
    
    answer.classList.toggle('hidden');
    icon.classList.toggle('rotate-180');
  }
});