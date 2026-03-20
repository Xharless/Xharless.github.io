// Smooth scrolling para los links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Actualizar nav links activos
            updateActiveNavLink(this.getAttribute('href'));
        }
    });
});

// Actualizar nav link activo según scroll
function updateActiveNavLink(targetId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    const activeLink = document.querySelector(`a[href="${targetId}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Detección de scroll para actualizar nav links
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    if (current) {
        updateActiveNavLink(`#${current}`);
    }
});

// Envío del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulación de envío (en producción, conectar a un backend)
        const formData = new FormData(this);
        
        // Mostrar mensaje de éxito
        showSuccessMessage();
        
        // Limpiar formulario
        this.reset();
    });
}

// Mostrar mensaje de éxito
function showSuccessMessage() {
    const message = document.createElement('div');
    message.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #6366f1, #ec4899);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        font-weight: 600;
        z-index: 2000;
        animation: slideIn 0.3s ease;
    `;
    message.textContent = '¡Mensaje enviado exitosamente!';
    document.body.appendChild(message);

    // Agregar animación
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);

    // Remover mensaje después de 3 segundos
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Efecto de hover en skill cards
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Animación de entrada para elementos cuando aparecen en viewport
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Agregar estilos de animación
const animationStyle = document.createElement('style');
animationStyle.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(animationStyle);

// Observar elementos que deben animarse
document.querySelectorAll('.about-content, .skill-card, .project-card, .info-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Efecto de scroll parallax para el avatar
window.addEventListener('scroll', () => {
    const avatar = document.querySelector('.avatar');
    if (avatar) {
        const scrollPosition = window.scrollY;
        avatar.style.transform = `translateY(${scrollPosition * 0.3}px)`;
    }
});

// Validación mejorada del formulario
const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
inputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.value.trim() === '') {
            this.style.borderColor = '#ef4444';
        } else {
            this.style.borderColor = '#e2e8f0';
        }
    });

    input.addEventListener('focus', function() {
        this.style.borderColor = '#6366f1';
    });
});
