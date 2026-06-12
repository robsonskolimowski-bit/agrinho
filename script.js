// Menu Mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        const icon = mobileMenu.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const icon = mobileMenu.querySelector('i');
        if (icon && icon.classList.contains('fa-times')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// Scroll suave
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Navbar transparente ao scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animação de contagem dos números
function animateNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');
    const impactNumbers = document.querySelectorAll('.impact-number');
    const allNumbers = [...statNumbers, ...impactNumbers];

    allNumbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target'));
        if (target && !number.classList.contains('animated')) {
            number.classList.add('animated');
            let current = 0;
            const increment = target / 50;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    number.textContent = target.toLocaleString();
                    clearInterval(timer);
                } else {
                    number.textContent = Math.floor(current).toLocaleString();
                }
            }, 30);
        }
    });
}

// Observador para animar números quando entrarem na tela
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateNumbers();
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar a seção de estatísticas
const statsSection = document.querySelector('.hero-stats');
const impactSection = document.querySelector('.impact');
if (statsSection) observer.observe(statsSection);
if (impactSection) observer.observe(impactSection);

// Animação das barras de progresso
function animateProgressBars() {
    const progressBars = document.querySelectorAll('.progress-fill');
    progressBars.forEach(bar => {
        const progress = bar.getAttribute('data-progress');
        if (progress && !bar.classList.contains('animated')) {
            bar.classList.add('animated');
            setTimeout(() => {
                bar.style.width = `${progress}%`;
            }, 100);
        }
    });
}

// Observador para as barras de progresso
const practicesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateProgressBars();
            practicesObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

const practicesSection = document.querySelector('.practices');
if (practicesSection) practicesObserver.observe(practicesSection);

// Formulário de contato
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        const formMessage = document.getElementById('formMessage');
        
        if (name && email && message) {
            // Simular envio
            formMessage.innerHTML = '<div style="color: green; padding: 10px; background: #d4edda; border-radius: 5px;">✓ Mensagem enviada com sucesso! Entraremos em contato em breve.</div>';
            contactForm.reset();
            
            // Limpar mensagem após 5 segundos
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 5000);
        } else {
            formMessage.innerHTML = '<div style="color: red; padding: 10px; background: #f8d7da; border-radius: 5px;">✗ Por favor, preencha todos os campos.</div>';
            
            setTimeout(() => {
                formMessage.innerHTML = '';
            }, 3000);
        }
    });
}

// Newsletter
function subscribeNewsletter() {
    const emailInput = document.getElementById('newsEmail');
    const email = emailInput.value;
    
    if (email && email.includes('@')) {
        alert(`Obrigado por se inscrever! Enviaremos novidades para ${email}`);
        emailInput.value = '';
    } else if (email) {
        alert('Por favor, insira um e-mail válido.');
    } else {
        alert('Por favor, insira seu e-mail.');
    }
}

// Adicionar efeito de fade-in nos elementos ao scroll
const fadeElements = document.querySelectorAll('.info-card, .practice-item, .impact-card');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

fadeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    fadeObserver.observe(el);
});

// Relógio de contagem regressiva para metas (exemplo)
function updateCountdown() {
    const targetDate = new Date('December 31, 2025 23:59:59');
    const now = new Date();
    const difference = targetDate - now;
    
    if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (86400000)) / (3600000));
        
        const countdownElement = document.createElement('div');
        countdownElement.className = 'countdown-timer';
        countdownElement.innerHTML = `<p>🎯 Meta 2030: ${days} dias restantes para neutralidade de carbono</p>`;
        
        const heroContent = document.querySelector('.hero-content');
        if (heroContent && !document.querySelector('.countdown-timer')) {
            heroContent.appendChild(countdownElement);
        }
    }
}

// Iniciar contagem regressiva
setInterval(updateCountdown, 86400000); // Atualizar a cada dia
updateCountdown();

// Efeito parallax suave no hero
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.backgroundPositionY = `${scrolled * 0.5}px`;
    }
});

// Prevenir envio duplicado do formulário
let formSubmitted = false;
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        if (formSubmitted) {
            e.preventDefault();
            return;
        }
        formSubmitted = true;
        setTimeout(() => {
            formSubmitted = false;
        }, 5000);
    });
}

// Console log amigável
console.log('🌱 Site Agro Sustentável carregado! 🌍');
console.log('Junte-se a nós na construção de um futuro sustentável!');

// Tooltip para os cards (opcional)
const cards = document.querySelectorAll('.info-card, .practice-item');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.cursor = 'pointer';
    });
});