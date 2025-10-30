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

// Remerciement après submit
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMessage');

if (form && msg) {
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        
        try {
            const response = await fetch(form.action, {
                method: form.method,
                body: formData,
                headers: { 'Accept': 'application/json' }
            });
            
            if (response.ok) {
                form.reset();
                form.style.display = 'none';
                msg.textContent = 'Merci ! Votre message a bien été envoyé.';
                msg.style.display = 'block';
                msg.style.color = '#00ff00';
                msg.classList.add('show');
            } else {
                throw new Error('Erreur lors de l\'envoi');
            }
            
        } catch (error) {
            console.error('Erreur lors de l\'envoi du formulaire :', error);
            msg.textContent = 'Une erreur est survenue, merci de réessayer.';
            msg.style.display = 'block';
            msg.style.color = 'red';
            msg.classList.add('show');
        }
    });
}

// Menu latéral
function sidebar(e) {
    const list = document.querySelector("ul.nav-links");
    
    if (!list) return;
    
    if (e.name === "menu-outline") {
        e.name = "close-outline";
        list.style.top = "80px";
        list.style.opacity = "1";
    } else {
        e.name = "menu-outline";
        list.style.top = "-400px";
        list.style.opacity = "0";
    }
}

// Navbar intelligente + changement de background
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        navbar.style.backgroundColor = scrollTop > 50 
            ? 'rgba(10, 10, 10, 0.98)' 
            : 'rgba(10, 10, 10, 0.95)';
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    });
}

// Fermer le menu au clic sur un lien
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function() {
        const menuIcon = document.querySelector('ion-icon[name="close-outline"]');
        const list = document.querySelector("ul.nav-links");
        
        if (menuIcon && list) {
            menuIcon.name = "menu-outline";
            list.style.top = "-400px";
            list.style.opacity = "0";
        }
    });
});