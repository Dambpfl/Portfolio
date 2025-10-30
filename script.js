// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Change navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.backgroundColor = window.scrollY > 50 
            ? 'rgba(10, 10, 10, 0.98)' 
            : 'rgba(10, 10, 10, 0.95)';
    }
});

// Remerciement apres submit
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

if (form && msg) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    try {
      await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      form.reset();
      form.style.display = 'none';
      msg.style.display = 'block';
      msg.classList.add('show');
    } catch (error) {
      console.error('Erreur lors de l’envoi du formulaire :', error);
      msg.textContent = 'Une erreur est survenue, merci de réessayer.';
      msg.style.display = 'block';
      msg.style.color = 'red';
    }
  });
}
