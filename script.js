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