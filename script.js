// Navegación móvil
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menú hamburguesa
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú al hacer click en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Efecto de navegación activa
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.nav-link');
        
        let currentSection = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= (sectionTop - 200)) {
                currentSection = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    // Smooth scroll para enlaces internos
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

    // Animación para las cards al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar elementos animables
    document.querySelectorAll('.service-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });

    // Efecto parallax suave en el hero
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero-background');
        const rate = scrolled * -0.5;
        
        if (hero) {
            hero.style.transform = `translateY(${rate}px)`;
        }
    });

    // Navbar transparente/sólida según scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Animación de typing para el título principal
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        
        let i = 0;
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.innerHTML = originalText.substring(0, i + 1);
                i++;
                setTimeout(typeWriter, 50);
            }
        }
        
        // Iniciar animación después de un pequeño delay
        setTimeout(typeWriter, 1000);
    }

    // Contador animado para estadísticas (si decides agregar)
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        function updateCounter() {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        updateCounter();
    }

    // Formulario de contacto (funcionalidad básica)
    const contactForms = document.querySelectorAll('form');
    contactForms.forEach(form => {
        // Evitar agregar handler genérico al formulario principal de contacto
        if (form.id === 'contactForm') return;
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn ? submitBtn.textContent : '';
            if (submitBtn) {
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
            }
            setTimeout(() => {
                if (submitBtn) {
                    submitBtn.textContent = '¡Enviado!';
                    submitBtn.style.background = '#4CAF50';
                }
                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.style.background = '';
                    }
                    form.reset();
                }, 2000);
            }, 1500);
        });
    });

    // Lazy loading para imágenes
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // Efecto de partículas en el background (opcional)
    function createParticles() {
        const hero = document.querySelector('.hero');
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles';
        particlesContainer.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
        `;
        
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 2px;
                height: 2px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                animation: float ${Math.random() * 3 + 2}s infinite linear;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation-delay: ${Math.random() * 2}s;
            `;
            particlesContainer.appendChild(particle);
        }
        
        if (hero) {
            hero.appendChild(particlesContainer);
        }
    }

    // Agregar CSS para la animación de partículas
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0; }
            10%, 90% { opacity: 1; }
            50% { transform: translateY(-20px) rotate(180deg); }
        }
    `;
    document.head.appendChild(style);

    // Inicializar partículas
    createParticles();

    // Efecto de hover mejorado para botones
    document.querySelectorAll('.cta-button, .whatsapp-btn').forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Función para cambiar tema (día/noche) - opcional
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Cargar tema guardado
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Manejo de errores
window.addEventListener('error', function(e) {
    console.log('Error capturado:', e.error);
});

// Performance monitoring
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`Página cargada en ${loadTime.toFixed(2)}ms`);
});

// Función para mostrar/ocultar loader
function showLoader() {
    const loader = document.createElement('div');
    loader.id = 'loader';
    loader.innerHTML = `
        <div style="
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        ">
            <div style="
                width: 50px;
                height: 50px;
                border: 3px solid #f3f3f3;
                border-top: 3px solid #ff8c00;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            "></div>
        </div>
    `;
    document.body.appendChild(loader);
    
    // CSS para la animación del loader
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(loaderStyle);
}

function hideLoader() {
    const loader = document.getElementById('loader');
    if (loader) {
        loader.remove();
    }
}

// ==============================
// Configuración de Envío Contacto
// ==============================
// Proveedor por defecto: formsubmit (no requiere claves)
window.CONTACT_CONFIG = Object.assign({
    provider: 'formsubmit', // 'formsubmit' | 'formspree' | 'emailjs' | 'mailto'
    targetEmail: 'miguelmipo04@gmail.com', // usado por formsubmit
    formspreeEndpoint: '', // p.ej: 'https://formspree.io/f/xxxxxxx'
    emailjs: { publicKey: '', serviceId: '', templateId: '' }
}, window.CONTACT_CONFIG || {});

// Funciones auxiliares de envío
async function sendViaFormSubmit(toEmail, payload) {
    const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(toEmail)}`;
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        let detail = '';
        try { const data = await res.json(); detail = data && (data.message || JSON.stringify(data)); } catch(_){}
        throw new Error(`Error FormSubmit ${res.status}: ${detail}`);
    }
    return true;
}

async function sendViaFormspree(endpoint, payload) {
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        let detail = '';
        try { const data = await res.json(); detail = data && (data.errors ? data.errors.map(e=>e.message).join(', ') : JSON.stringify(data)); } catch(_){}
        throw new Error(`Error Formspree ${res.status}: ${detail}`);
    }
    return true;
}

function loadScript(src) {
    return new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = src; s.async = true; s.onload = resolve; s.onerror = reject; document.head.appendChild(s);
    });
}

async function sendViaEmailJS(cfg, payload) {
    if (!cfg.publicKey || !cfg.serviceId || !cfg.templateId) {
        throw new Error('Config de EmailJS incompleta');
    }
    if (!window.emailjs) {
        await loadScript('https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js');
    }
    window.emailjs.init(cfg.publicKey);
    await window.emailjs.send(cfg.serviceId, cfg.templateId, payload);
    return true;
}

async function sendContact(payload) {
    const cfg = window.CONTACT_CONFIG || {};
    const provider = (cfg.provider || 'mailto').toLowerCase();
    if (provider === 'formsubmit') {
        return sendViaFormSubmit(cfg.targetEmail, payload);
    }
    if (provider === 'formspree' && cfg.formspreeEndpoint) {
        return sendViaFormspree(cfg.formspreeEndpoint, payload);
    }
    if (provider === 'emailjs') {
        return sendViaEmailJS(cfg.emailjs || {}, payload);
    }
    // Si no hay un proveedor válido, forzar error para manejo controlado (no abrir cliente de correo)
    throw new Error('Proveedor de envío no configurado correctamente. Configura CONTACT_CONFIG.provider = "formsubmit" | "formspree" | "emailjs"');
}

// Funcionalidad del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los datos del formulario
            const formData = {
                nombre: document.getElementById('nombre').value,
                email: document.getElementById('email').value,
                servicio: document.getElementById('servicio').value
            };
            
            // Validación básica
            if (!formData.nombre || !formData.email || !formData.servicio) {
                showNotification('Por favor, completa todos los campos', 'error');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showNotification('Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Enviar automáticamente según proveedor configurado
            showLoader();
            const servicioTexto = (document.getElementById('servicio') && document.getElementById('servicio').selectedOptions[0])
                ? document.getElementById('servicio').selectedOptions[0].text
                : formData.servicio;
            const payload = {
                // Campos del usuario
                nombre: formData.nombre,
                email: formData.email,
                servicio: servicioTexto,
                origen: location.href,
                fecha: new Date().toISOString(),
                // Opciones FormSubmit
                _subject: 'Nueva solicitud de servicio - EcoEnergia Inc.',
                _template: 'table',
                _replyto: formData.email,
                _captcha: 'false'
            };
            sendContact(payload)
                .then(() => {
                    hideLoader();
                    contactForm.reset();
                    // Redirigir a página de agradecimiento
                    window.location.href = 'gracias.html';
                })
                .catch((err) => {
                    console.error('Error enviando solicitud:', err);
                    hideLoader();
                    showNotification('No pudimos enviar tu solicitud automáticamente. Inténtalo de nuevo o escríbenos a miguelmipo04@gmail.com', 'error');
                });
        });
    }
});

// Función para mostrar notificaciones
function showNotification(message, type = 'info') {
    // Remover notificación existente si la hay
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Crear nueva notificación
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Estilos para la notificación
    const notificationStyles = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 10000;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            animation: slideInRight 0.5s ease-out;
        }
        
        .notification-success {
            background: linear-gradient(135deg, #4CAF50, #45A049);
            color: white;
        }
        
        .notification-error {
            background: linear-gradient(135deg, #f44336, #d32f2f);
            color: white;
        }
        
        .notification-info {
            background: linear-gradient(135deg, #2196F3, #1976D2);
            color: white;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            padding: 15px 20px;
            gap: 10px;
        }
        
        .notification-content i {
            font-size: 20px;
        }
        
        .notification-content span {
            flex: 1;
            font-weight: 500;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: inherit;
            font-size: 20px;
            cursor: pointer;
            padding: 0;
            margin-left: 10px;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOutRight {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    
    // Agregar estilos si no existen
    if (!document.querySelector('#notification-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'notification-styles';
        styleSheet.textContent = notificationStyles;
        document.head.appendChild(styleSheet);
    }
    
    // Agregar notificación al DOM
    document.body.appendChild(notification);
    
    // Cerrar notificación al hacer click en X
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.5s ease-out';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 500);
    });
    
    // Auto-cerrar después de 5 segundos
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOutRight 0.5s ease-out';
            setTimeout(() => {
                if (notification.parentNode) {
                    notification.remove();
                }
            }, 500);
        }
    }, 5000);
}

// Funcionalidad del botón Scroll to Top
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    // Mostrar/ocultar botón basado en scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
    
    // Scroll suave al top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});

// ===== ANIMACIONES DE ENTRADA POR SCROLL =====
// Intersection Observer para detectar elementos que entran en viewport
const observerOptions = {
    threshold: 0.2, // Se activa cuando el 20% del elemento es visible
    rootMargin: '0px 0px -50px 0px' // Margen inferior para activar antes
};

const scrollAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Obtener el delay del atributo data-delay si existe
            const delay = entry.target.getAttribute('data-delay') || 0;
            
            // Aplicar animación con delay
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, parseFloat(delay) * 1000);
            
            // Efecto especial para las hojas flotantes en misión/visión
            const leaves = entry.target.querySelectorAll('.leaf-mission, .leaf-vision');
            leaves.forEach((leaf, index) => {
                setTimeout(() => {
                    leaf.style.animationPlayState = 'running';
                    leaf.style.opacity = '1';
                }, index * 100);
            });
            
            // Efecto especial para hojas de valores
            const valoresLeaves = entry.target.querySelectorAll('.leaf-valor');
            valoresLeaves.forEach((leaf, index) => {
                setTimeout(() => {
                    leaf.style.animationPlayState = 'running';
                    leaf.style.opacity = '0.6';
                }, index * 50 + parseFloat(delay) * 1000);
            });
            
            // Desconectar el observer para este elemento (solo animar una vez)
            scrollAnimationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Función para inicializar las animaciones de scroll
function initScrollAnimations() {
    // Seleccionar todos los elementos que deben animarse
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');
    
    // Observar cada elemento
    elementsToAnimate.forEach(element => {
        scrollAnimationObserver.observe(element);
    });
    
    console.log(`Observando ${elementsToAnimate.length} elementos para animaciones de scroll`);
}

// Inicializar las animaciones cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Pequeño delay para asegurar que todo esté cargado
    setTimeout(initScrollAnimations, 200);
});

// También inicializar si la página ya está cargada
if (document.readyState !== 'loading') {
    setTimeout(initScrollAnimations, 200);
}

// Función adicional para reiniciar animaciones si es necesario
function resetScrollAnimations() {
    const elementsToReset = document.querySelectorAll('.animate-on-scroll');
    elementsToReset.forEach(element => {
        element.classList.remove('animate-in');
        scrollAnimationObserver.observe(element);
    });
}

// ===== SECCIÓN INTERACTIVA - CONTADORES Y ANIMACIONES =====
// Función para animar contadores
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    
    counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const increment = target / 100; // Dividir en 100 pasos
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            
            // Formatear números según el tipo
            if (target >= 1000) {
                counter.textContent = Math.floor(current).toLocaleString();
            } else if (target < 10) {
                counter.textContent = current.toFixed(1);
            } else {
                counter.textContent = Math.floor(current);
            }
            
            if (current >= target) {
                if (target >= 1000) {
                    counter.textContent = target.toLocaleString();
                } else if (target < 10) {
                    counter.textContent = target.toFixed(1);
                } else {
                    counter.textContent = target;
                }
                clearInterval(timer);
            }
        }, 30);
    });
}

// Función para animar barras de progreso
function animateProgressBars() {
    const electricityBar = document.querySelector('.electricity-progress');
    const fuelBar = document.querySelector('.fuel-progress');
    
    if (electricityBar) {
        setTimeout(() => electricityBar.style.width = '75%', 500);
    }
    if (fuelBar) {
        setTimeout(() => fuelBar.style.width = '85%', 800);
    }
}

// Función para scroll suave a sección
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Observer específico para la sección interactiva
const interactiveObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Iniciar animaciones de contadores
            setTimeout(() => {
                animateCounters();
                animateProgressBars();
            }, 300);
            
            // Activar animaciones de partículas
            const particles = entry.target.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                setTimeout(() => {
                    particle.style.animationPlayState = 'running';
                }, index * 200);
            });
            
            // Desconectar observer para esta sección
            interactiveObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

// Función para inicializar efectos interactivos
function initInteractiveEffects() {
    const interactiveSection = document.querySelector('.interactive-stats-container');
    if (interactiveSection) {
        interactiveObserver.observe(interactiveSection);
    }
    
    // Agregar efectos hover a las tarjetas
    const statCards = document.querySelectorAll('.interactive-stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Efecto de partículas al hover
            const particles = this.querySelectorAll('.particle');
            particles.forEach(particle => {
                particle.style.animationDuration = '1s';
            });
        });
        
        card.addEventListener('mouseleave', function() {
            // Restaurar velocidad normal
            const particles = this.querySelectorAll('.particle');
            particles.forEach((particle, index) => {
                particle.style.animationDuration = `${3 + index}s`;
            });
        });
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(initInteractiveEffects, 300);
});

// También inicializar si la página ya está cargada
if (document.readyState !== 'loading') {
    setTimeout(initInteractiveEffects, 300);
}

// ===== SECCIÓN OBJETIVOS INTERACTIVOS =====
// Función para animar progreso circular
function animateCircularProgress(element, percentage, duration = 2000) {
    const circumference = 2 * Math.PI * 15.9155;
    const progressPath = element.querySelector('.ring-progress');
    const percentageText = element.querySelector('.progress-percentage');
    
    let start = 0;
    const startTime = performance.now();
    
    function updateProgress(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const currentPercentage = start + (percentage - start) * progress;
        const offset = circumference - (currentPercentage / 100) * circumference;
        
        progressPath.style.strokeDasharray = `${circumference}`;
        progressPath.style.strokeDashoffset = offset;
        percentageText.textContent = `${Math.round(currentPercentage)}%`;
        
        if (progress < 1) {
            requestAnimationFrame(updateProgress);
        }
    }
    
    requestAnimationFrame(updateProgress);
}

// Función para animar items de objetivos
function animateObjectiveItems(card) {
    const items = card.querySelectorAll('.objective-item');
    items.forEach((item, index) => {
        const delay = parseFloat(item.getAttribute('data-delay')) || 0;
        setTimeout(() => {
            item.classList.add('animate-in');
        }, delay * 1000);
    });
}

// Función para expandir/contraer tarjetas
function expandCard(button) {
    const card = button.closest('.objective-card');
    const isExpanded = card.classList.contains('expanded');
    
    if (isExpanded) {
        card.classList.remove('expanded');
        button.innerHTML = '<span>Explorar Detalles</span><i class="fas fa-chevron-down"></i>';
    } else {
        card.classList.add('expanded');
        button.innerHTML = '<span>Ocultar Detalles</span><i class="fas fa-chevron-up"></i>';
        
        // Animar progreso circular cuando se expande
        const progress = card.querySelector('.circular-progress-obj');
        if (progress) {
            let percentage;
            if (card.classList.contains('access-card')) percentage = 75;
            else if (card.classList.contains('renewable-card')) percentage = 85;
            else if (card.classList.contains('efficiency-card')) percentage = 68;
            
            setTimeout(() => {
                animateCircularProgress(progress, percentage);
            }, 300);
        }
    }
}

// Observer para objetivos
const objectivesObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = parseFloat(entry.target.getAttribute('data-delay')) || 0;
            
            setTimeout(() => {
                entry.target.classList.add('animate-in');
                
                // Animar items si es una tarjeta de objetivo
                if (entry.target.classList.contains('objective-card')) {
                    setTimeout(() => {
                        animateObjectiveItems(entry.target);
                    }, 300);
                }
                
                // Animar contador de años si es timeline
                if (entry.target.classList.contains('timeline-2030')) {
                    setTimeout(() => {
                        animateYearsCounter();
                    }, 500);
                }
            }, delay * 1000);
            
            objectivesObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

// Función para animar contador de años restantes
function animateYearsCounter() {
    const counter = document.querySelector('.years-left');
    if (!counter) return;
    
    const target = parseInt(counter.getAttribute('data-target'));
    let current = 0;
    const increment = target / 50;
    
    const timer = setInterval(() => {
        current += increment;
        counter.textContent = Math.floor(current);
        
        if (current >= target) {
            counter.textContent = target;
            clearInterval(timer);
        }
    }, 50);
}

// Función para inicializar efectos de objetivos
function initObjectivesEffects() {
    // Observar elementos animables
    const animatableElements = document.querySelectorAll('.interactive-objectives-section .animate-on-scroll');
    animatableElements.forEach(element => {
        objectivesObserver.observe(element);
    });
    
    // Agregar efectos hover a tarjetas de implementación
    const implCards = document.querySelectorAll('.impl-interactive-card');
    implCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Efectos de partículas en hover para tarjetas de objetivos
    const objectiveCards = document.querySelectorAll('.objective-card');
    objectiveCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Crear efecto de partículas
            createParticleEffect(this);
        });
    });
}

// Función para crear efecto de partículas
function createParticleEffect(card) {
    const rect = card.getBoundingClientRect();
    const particles = [];
    
    for (let i = 0; i < 5; i++) {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            background: #4caf50;
            border-radius: 50%;
            pointer-events: none;
            z-index: 1000;
            left: ${rect.left + Math.random() * rect.width}px;
            top: ${rect.top + Math.random() * rect.height}px;
        `;
        
        document.body.appendChild(particle);
        
        // Animar partícula
        particle.animate([
            { transform: 'translateY(0) scale(1)', opacity: 1 },
            { transform: 'translateY(-50px) scale(0)', opacity: 0 }
        ], {
            duration: 1000,
            easing: 'ease-out'
        }).onfinish = () => {
            particle.remove();
        };
    }
}

// Función para scroll suave mejorado
function smoothScrollTo(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        const offsetTop = element.offsetTop - 100;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}

// Inicializar efectos de objetivos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initObjectivesEffects();
    }, 500);
});

// También inicializar si la página ya está cargada
if (document.readyState !== 'loading') {
    setTimeout(initObjectivesEffects, 500);
}

// Función global para expandir tarjetas (accesible desde HTML)
window.expandCard = expandCard;

// ========================= //
// ULTRA-INTERACTIVE RENEWABLES
// ========================= //

// Inicializar efectos de energías renovables
function initRenewableEnergyEffects() {
    // Animaciones de progreso circular
    initCircularProgress();
    
    // Control de filtros de energía
    initEnergyFilters();
    
    // Medidor global de energía
    initGlobalEnergyMeter();
    
    // Efectos de partículas renovables
    initRenewableParticles();
    
    // Observador de intersección para animaciones
    initRenewableObserver();
}

// Progreso circular animado
function initCircularProgress() {
    const progressRings = document.querySelectorAll('.progress-ring-circle');
    
    progressRings.forEach(ring => {
        const percent = ring.closest('.stat-circle').dataset.percent;
        const radius = ring.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;
        const strokeDasharray = `${(percent / 100) * circumference} ${circumference}`;
        
        ring.style.strokeDasharray = `0 ${circumference}`;
        
        // Animar después de un breve delay
        setTimeout(() => {
            ring.style.strokeDasharray = strokeDasharray;
        }, 1000);
    });
}

// Sistema de filtros de energía
function initEnergyFilters() {
    const controlButtons = document.querySelectorAll('.control-btn');
    const energyPlanets = document.querySelectorAll('.energy-planet');
    
    controlButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover clase activa de todos los botones
            controlButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase activa al botón clickeado
            button.classList.add('active');
            
            const filter = button.dataset.filter;
            
            energyPlanets.forEach(planet => {
                const planetType = planet.dataset.energy;
                
                if (filter === 'all' || planetType === filter) {
                    planet.style.display = 'block';
                    planet.style.animation = 'planetAppear 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
                } else {
                    planet.style.animation = 'planetDisappear 0.5s cubic-bezier(0.23, 1, 0.32, 1)';
                    setTimeout(() => {
                        if (planet.dataset.energy !== document.querySelector('.control-btn.active').dataset.filter && 
                            document.querySelector('.control-btn.active').dataset.filter !== 'all') {
                            planet.style.display = 'none';
                        }
                    }, 500);
                }
            });
            
            // Efecto visual en el botón
            createButtonEffect(button);
        });
    });
    
    // Agregar animaciones CSS dinámicamente
    if (!document.getElementById('renewable-animations')) {
        const style = document.createElement('style');
        style.id = 'renewable-animations';
        style.textContent = `
            @keyframes planetAppear {
                0% { 
                    opacity: 0; 
                    transform: scale(0.8) translateY(50px) rotateY(-180deg); 
                }
                100% { 
                    opacity: 1; 
                    transform: scale(1) translateY(0) rotateY(0deg); 
                }
            }
            
            @keyframes planetDisappear {
                0% { 
                    opacity: 1; 
                    transform: scale(1) translateY(0) rotateY(0deg); 
                }
                100% { 
                    opacity: 0; 
                    transform: scale(0.8) translateY(-50px) rotateY(180deg); 
                }
            }
            
            @keyframes buttonPulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.1); }
                100% { transform: scale(1); }
            }
        `;
        document.head.appendChild(style);
    }
}

// Efecto visual en botones
function createButtonEffect(button) {
    button.style.animation = 'buttonPulse 0.3s ease';
    
    // Crear ondas de energía
    const rect = button.getBoundingClientRect();
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createEnergyWave(rect.left + rect.width / 2, rect.top + rect.height / 2);
        }, i * 100);
    }
    
    setTimeout(() => {
        button.style.animation = '';
    }, 300);
}

// Crear ondas de energía
function createEnergyWave(x, y) {
    const wave = document.createElement('div');
    wave.className = 'energy-wave';
    wave.style.cssText = `
        position: fixed;
        left: ${x}px;
        top: ${y}px;
        width: 10px;
        height: 10px;
        border: 2px solid #4CAF50;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
    `;
    
    document.body.appendChild(wave);
    
    wave.animate([
        { 
            transform: 'translate(-50%, -50%) scale(0)', 
            opacity: 1,
            borderWidth: '2px'
        },
        { 
            transform: 'translate(-50%, -50%) scale(8)', 
            opacity: 0,
            borderWidth: '0px'
        }
    ], {
        duration: 800,
        easing: 'ease-out'
    }).onfinish = () => wave.remove();
}

// Medidor global de energía
function initGlobalEnergyMeter() {
    const energyFill = document.querySelector('.energy-fill');
    const targetWidth = energyFill.dataset.width;
    
    setTimeout(() => {
        energyFill.style.width = `${targetWidth}%`;
    }, 1500);
}

// Sistema de partículas renovables
function initRenewableParticles() {
    const particleContainer = document.querySelector('.renewable-particles-bg');
    
    // Crear partículas flotantes
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'renewable-particle';
        
        const size = Math.random() * 4 + 2;
        const colors = ['#4CAF50', '#FFD700', '#00BFFF', '#32CD32'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 ${size * 2}px ${color};
            left: ${Math.random() * 100}%;
            top: 100%;
        `;
        
        particleContainer.appendChild(particle);
        
        // Animación de la partícula
        particle.animate([
            { 
                transform: `translateY(0) translateX(0) rotate(0deg)`, 
                opacity: 0.8 
            },
            { 
                transform: `translateY(-${window.innerHeight + 100}px) translateX(${(Math.random() - 0.5) * 200}px) rotate(360deg)`, 
                opacity: 0 
            }
        ], {
            duration: Math.random() * 8000 + 5000,
            easing: 'linear'
        }).onfinish = () => particle.remove();
    }
    
    // Crear partículas periódicamente
    setInterval(createParticle, 800);
    
    // Crear partículas iniciales
    for (let i = 0; i < 5; i++) {
        setTimeout(createParticle, i * 200);
    }
}

// Observador de intersección para animaciones
function initRenewableObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Animar título
                const titleWords = section.querySelectorAll('.title-word');
                titleWords.forEach((word, index) => {
                    setTimeout(() => {
                        word.style.animation = 'wordFloat 2s ease-out';
                    }, index * 200);
                });
                
                // Animar planetas
                const planets = section.querySelectorAll('.energy-planet');
                planets.forEach((planet, index) => {
                    setTimeout(() => {
                        planet.style.opacity = '1';
                        planet.style.transform = 'translateY(0)';
                    }, index * 300);
                });
                
                // Inicializar efectos después de un delay
                setTimeout(() => {
                    initCircularProgress();
                    initGlobalEnergyMeter();
                }, 1000);
            }
        });
    }, {
        threshold: 0.1
    });
    
    const renewableSection = document.querySelector('.ultra-interactive-renewables');
    if (renewableSection) {
        observer.observe(renewableSection);
        
        // Configurar estado inicial
        const planets = renewableSection.querySelectorAll('.energy-planet');
        planets.forEach(planet => {
            planet.style.opacity = '0';
            planet.style.transform = 'translateY(50px)';
            planet.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.32, 1)';
        });
    }
}

// Efectos adicionales para planetas
function addPlanetInteractions() {
    const planets = document.querySelectorAll('.energy-planet');
    
    planets.forEach(planet => {
        // Efecto hover mejorado
        planet.addEventListener('mouseenter', () => {
            // Crear partículas de energía específicas
            const planetType = planet.dataset.energy;
            createPlanetParticles(planet, planetType);
        });
        
        // Efecto click
        planet.addEventListener('click', () => {
            // Expandir información
            planet.classList.toggle('expanded');
            
            // Efecto de onda
            const rect = planet.getBoundingClientRect();
            createEnergyExplosion(rect.left + rect.width / 2, rect.top + rect.height / 2);
        });
    });
}

// Crear partículas específicas por tipo de planeta
function createPlanetParticles(planet, type) {
    const rect = planet.getBoundingClientRect();
    const colors = {
        solar: ['#FFD700', '#FF8C00'],
        wind: ['#00BFFF', '#1E90FF'],
        hydro: ['#1E90FF', '#0064C8'],
        biomass: ['#32CD32', '#228B22']
    };
    
    const planetColors = colors[type] || ['#4CAF50'];
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            const color = planetColors[Math.floor(Math.random() * planetColors.length)];
            
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 10px ${color};
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 8) * Math.PI * 2;
            const distance = 100 + Math.random() * 50;
            const endX = rect.left + rect.width / 2 + Math.cos(angle) * distance;
            const endY = rect.top + rect.height / 2 + Math.sin(angle) * distance;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${endX - rect.left - rect.width / 2}px, ${endY - rect.top - rect.height / 2}px) scale(1)`, 
                    opacity: 0.8 
                },
                { 
                    transform: `translate(${endX - rect.left - rect.width / 2}px, ${endY - rect.top - rect.height / 2}px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }, i * 50);
    }
}

// Explosión de energía
function createEnergyExplosion(x, y) {
    for (let i = 0; i < 12; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 8px;
                height: 8px;
                background: #4CAF50;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 15px #4CAF50;
                left: ${x}px;
                top: ${y}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 12) * Math.PI * 2;
            const distance = 150 + Math.random() * 100;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1)`, 
                    opacity: 0.6 
                },
                { 
                    transform: `translate(${Math.cos(angle) * distance * 1.5}px, ${Math.sin(angle) * distance * 1.5}px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 1500,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }, i * 30);
    }
}

// Inicializar efectos de energías renovables cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initRenewableEnergyEffects();
        addPlanetInteractions();
    }, 1000);
});

// También inicializar si la página ya está cargada
if (document.readyState !== 'loading') {
    setTimeout(() => {
        initRenewableEnergyEffects();
        addPlanetInteractions();
    }, 1000);
}

// ========================= //
// ULTRA-INTERACTIVE ABOUT SECTION
// ========================= //

// Inicializar efectos de la sección Nosotros
function initAboutSectionEffects() {
    // Efectos de letras interactivas
    initInteractiveLetters();
    
    // Timeline de historia interactiva  
    initInteractiveStoryline();
    
    // Sistema de valores con órbitas
    initValuesConstellation();
    
    // Dashboard de estadísticas cristalinas
    initImpactDashboard();
    
    // Sistema de partículas específico
    initAboutParticles();
    
    // Observador de intersección para animaciones
    initAboutObserver();
}

// Letras interactivas del nombre de la empresa
function initInteractiveLetters() {
    const letters = document.querySelectorAll('.letter');
    
    letters.forEach((letter, index) => {
        // Efecto hover mejorado
        letter.addEventListener('mouseenter', () => {
            // Crear explosion de partículas de la letra
            createLetterExplosion(letter, index);
            
            // Efecto de ondas en letras vecinas
            const prevLetter = letters[index - 1];
            const nextLetter = letters[index + 1];
            
            if (prevLetter) {
                prevLetter.style.animation = 'letterFloat 0.5s ease-out';
            }
            if (nextLetter) {
                nextLetter.style.animation = 'letterFloat 0.5s ease-out';
            }
        });
        
        // Efecto click para palabras highlightadas
        letter.addEventListener('click', () => {
            createLetterWaveEffect(letter);
        });
    });
    
    // Efectos para palabras destacadas
    const highlightWords = document.querySelectorAll('.word-highlight');
    highlightWords.forEach(word => {
        word.addEventListener('mouseenter', () => {
            const color = word.dataset.color || '#4CAF50';
            word.style.setProperty('--word-color', color);
            createWordAura(word, color);
        });
        
        word.addEventListener('click', () => {
            createWordExplosion(word);
        });
    });
}

// Crear explosión de partículas desde una letra
function createLetterExplosion(letter, index) {
    const rect = letter.getBoundingClientRect();
    const colors = ['#4CAF50', '#66BB6A', '#81C784', '#FF6B35', '#00BCD4'];
    const color = colors[index % colors.length];
    
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 8px ${color};
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (Math.random() * 360) * (Math.PI / 180);
            const distance = 50 + Math.random() * 30;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px) scale(1)`, 
                    opacity: 0.8 
                },
                { 
                    transform: `translate(${Math.cos(angle) * distance * 1.5}px, ${Math.sin(angle) * distance * 1.5}px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 1200,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }, i * 20);
    }
}

// Crear efecto de onda para letras
function createLetterWaveEffect(letter) {
    const rect = letter.getBoundingClientRect();
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const wave = document.createElement('div');
            wave.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                width: 10px;
                height: 10px;
                border: 2px solid #4CAF50;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
            `;
            
            document.body.appendChild(wave);
            
            wave.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)', 
                    opacity: 0.8,
                    borderWidth: '2px'
                },
                { 
                    transform: 'translate(-50%, -50%) scale(10)', 
                    opacity: 0,
                    borderWidth: '0px'
                }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => wave.remove();
        }, i * 200);
    }
}

// Crear aura para palabras
function createWordAura(word, color) {
    const rect = word.getBoundingClientRect();
    
    const aura = document.createElement('div');
    aura.style.cssText = `
        position: fixed;
        left: ${rect.left - 10}px;
        top: ${rect.top - 10}px;
        width: ${rect.width + 20}px;
        height: ${rect.height + 20}px;
        background: radial-gradient(ellipse, ${color}20, transparent);
        border-radius: 10px;
        pointer-events: none;
        z-index: 9998;
    `;
    
    document.body.appendChild(aura);
    
    aura.animate([
        { opacity: 0, transform: 'scale(0.8)' },
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(1.2)' }
    ], {
        duration: 2000,
        easing: 'ease-out'
    }).onfinish = () => aura.remove();
}

// Timeline interactiva de la historia
function initInteractiveStoryline() {
    const chapters = document.querySelectorAll('.story-chapter');
    
    chapters.forEach((chapter, index) => {
        chapter.addEventListener('mouseenter', () => {
            // Activar capítulo
            chapter.style.transform = 'scale(1.05)';
            
            // Efecto de energía en el marcador
            const marker = chapter.querySelector('.chapter-marker');
            createMarkerPulse(marker);
        });
        
        chapter.addEventListener('mouseleave', () => {
            chapter.style.transform = 'scale(1)';
        });
        
        chapter.addEventListener('click', () => {
            // Efecto de activación completa del capítulo
            createChapterActivationEffect(chapter);
        });
    });
}

// Crear pulso en marcador de capítulo
function createMarkerPulse(marker) {
    const rect = marker.getBoundingClientRect();
    
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const pulse = document.createElement('div');
            pulse.style.cssText = `
                position: fixed;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                width: 60px;
                height: 60px;
                border: 3px solid #4CAF50;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
            `;
            
            document.body.appendChild(pulse);
            
            pulse.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(1)', 
                    opacity: 0.8,
                    borderWidth: '3px'
                },
                { 
                    transform: 'translate(-50%, -50%) scale(2)', 
                    opacity: 0,
                    borderWidth: '0px'
                }
            ], {
                duration: 800,
                easing: 'ease-out'
            }).onfinish = () => pulse.remove();
        }, i * 100);
    }
}

// Efecto de activación de capítulo
function createChapterActivationEffect(chapter) {
    const rect = chapter.getBoundingClientRect();
    
    // Crear múltiples partículas de energía
    for (let i = 0; i < 15; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 6px;
                height: 6px;
                background: #4CAF50;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 12px #4CAF50;
                left: ${rect.left + Math.random() * rect.width}px;
                top: ${rect.top + Math.random() * rect.height}px;
            `;
            
            document.body.appendChild(particle);
            
            particle.animate([
                { 
                    transform: 'scale(0)', 
                    opacity: 1 
                },
                { 
                    transform: `translateY(-100px) scale(1)`, 
                    opacity: 0.8 
                },
                { 
                    transform: `translateY(-200px) scale(0)`, 
                    opacity: 0 
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }, i * 50);
    }
}

// Constelación de valores interactiva
function initValuesConstellation() {
    const valueOrbits = document.querySelectorAll('.value-orbit');
    const connections = document.querySelectorAll('.connection');
    
    valueOrbits.forEach((orbit, index) => {
        orbit.addEventListener('mouseenter', () => {
            // Activar planeta
            const planet = orbit.querySelector('.value-planet');
            planet.style.animation = 'none';
            planet.style.transform = 'scale(1.2)';
            
            // Activar medidor de impacto
            const meter = orbit.querySelector('.meter-fill');
            const impact = orbit.querySelector('.impact-meter').dataset.impact;
            setTimeout(() => {
                meter.style.width = `${impact}%`;
            }, 200);
            
            // Crear efecto de conexión
            activateConnections(orbit.dataset.value);
            
            // Partículas orbitales
            createOrbitalParticles(orbit);
        });
        
        orbit.addEventListener('mouseleave', () => {
            const planet = orbit.querySelector('.value-planet');
            planet.style.animation = '';
            planet.style.transform = '';
        });
        
        orbit.addEventListener('click', () => {
            createValueExplosion(orbit);
        });
    });
}

// Activar conexiones específicas
function activateConnections(valueType) {
    const connection = document.querySelector(`.connection[data-target="${valueType}"]`);
    if (connection) {
        connection.style.boxShadow = '0 0 30px #4CAF50';
        connection.style.opacity = '1';
        
        setTimeout(() => {
            connection.style.boxShadow = '';
            connection.style.opacity = '';
        }, 2000);
    }
}

// Crear partículas orbitales
function createOrbitalParticles(orbit) {
    const rect = orbit.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: #4CAF50;
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 8px #4CAF50;
                left: ${centerX}px;
                top: ${centerY}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 8) * Math.PI * 2;
            const radius = 80;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%)',
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                    opacity: 0.8 
                },
                { 
                    transform: `translate(${Math.cos(angle) * radius * 1.5}px, ${Math.sin(angle) * radius * 1.5}px)`,
                    opacity: 0 
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }, i * 100);
    }
}

// Dashboard de estadísticas interactivo
function initImpactDashboard() {
    const crystals = document.querySelectorAll('.stat-crystal');
    
    crystals.forEach(crystal => {
        const numberElement = crystal.querySelector('.stat-number');
        const targetCount = parseInt(numberElement.dataset.count);
        
        crystal.addEventListener('mouseenter', () => {
            // Animación de conteo
            animateCounter(numberElement, targetCount);
            
            // Efecto cristalino
            createCrystalEffect(crystal);
        });
        
        crystal.addEventListener('click', () => {
            createCrystalExplosion(crystal);
        });
    });
}

// Animación de contador
function animateCounter(element, target) {
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (target - start) * easeOutQuart(progress));
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

function easeOutQuart(t) {
    return 1 - (1 - t) ** 4;
}

// Efecto cristalino
function createCrystalEffect(crystal) {
    const rect = crystal.getBoundingClientRect();
    
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const shard = document.createElement('div');
            shard.style.cssText = `
                position: fixed;
                width: 3px;
                height: 20px;
                background: linear-gradient(45deg, #4CAF50, #66BB6A);
                pointer-events: none;
                z-index: 9999;
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
                transform: translate(-50%, -50%) rotate(${i * 60}deg);
            `;
            
            document.body.appendChild(shard);
            
            shard.animate([
                { 
                    transform: `translate(-50%, -50%) rotate(${i * 60}deg) scale(0)`, 
                    opacity: 1 
                },
                { 
                    transform: `translate(-50%, -50%) rotate(${i * 60 + 180}deg) scale(1) translateY(-50px)`, 
                    opacity: 0.8 
                },
                { 
                    transform: `translate(-50%, -50%) rotate(${i * 60 + 360}deg) scale(0) translateY(-100px)`, 
                    opacity: 0 
                }
            ], {
                duration: 1500,
                easing: 'ease-out'
            }).onfinish = () => shard.remove();
        }, i * 100);
    }
}

// Sistema de partículas para la sección About
function initAboutParticles() {
    const particleContainer = document.querySelector('.about-particles-bg');
    
    function createAboutParticle() {
        const particle = document.createElement('div');
        particle.className = 'about-particle';
        
        const size = Math.random() * 3 + 1;
        const colors = ['#4CAF50', '#FF6B35', '#00BCD4', '#FFC107'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 ${size * 3}px ${color};
            left: ${Math.random() * 100}%;
            top: 100%;
        `;
        
        particleContainer.appendChild(particle);
        
        particle.animate([
            { 
                transform: `translateY(0) translateX(0) rotate(0deg)`, 
                opacity: 0.7 
            },
            { 
                transform: `translateY(-${window.innerHeight + 200}px) translateX(${(Math.random() - 0.5) * 300}px) rotate(720deg)`, 
                opacity: 0 
            }
        ], {
            duration: Math.random() * 10000 + 8000,
            easing: 'linear'
        }).onfinish = () => particle.remove();
    }
    
    // Crear partículas periódicamente
    setInterval(createAboutParticle, 1200);
    
    // Crear partículas iniciales
    for (let i = 0; i < 3; i++) {
        setTimeout(createAboutParticle, i * 400);
    }
}

// Observador de intersección para la sección About
function initAboutObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Animar elementos secuencialmente
                setTimeout(() => {
                    // Activar animaciones de letras
                    const letters = section.querySelectorAll('.letter');
                    letters.forEach((letter, index) => {
                        setTimeout(() => {
                            letter.style.opacity = '1';
                            letter.style.transform = 'translateY(0)';
                        }, index * 100);
                    });
                }, 500);
                
                setTimeout(() => {
                    // Activar timeline
                    const chapters = section.querySelectorAll('.story-chapter');
                    chapters.forEach((chapter, index) => {
                        setTimeout(() => {
                            chapter.style.opacity = '1';
                            chapter.style.transform = 'translateY(0)';
                        }, index * 300);
                    });
                }, 1000);
                
                setTimeout(() => {
                    // Activar constelación de valores
                    const orbits = section.querySelectorAll('.value-orbit');
                    orbits.forEach((orbit, index) => {
                        setTimeout(() => {
                            orbit.style.opacity = '1';
                            orbit.style.transform = 'scale(1)';
                        }, index * 200);
                    });
                }, 1500);
            }
        });
    }, {
        threshold: 0.2
    });
    
    const aboutSection = document.querySelector('.ultra-interactive-about');
    if (aboutSection) {
        observer.observe(aboutSection);
        
        // Configurar estado inicial
        const letters = aboutSection.querySelectorAll('.letter');
        const chapters = aboutSection.querySelectorAll('.story-chapter');
        const orbits = aboutSection.querySelectorAll('.value-orbit');
        
        letters.forEach(letter => {
            letter.style.opacity = '0';
            letter.style.transform = 'translateY(30px)';
            letter.style.transition = 'all 0.6s ease';
        });
        
        chapters.forEach(chapter => {
            chapter.style.opacity = '0';
            chapter.style.transform = 'translateY(50px)';
            chapter.style.transition = 'all 0.8s ease';
        });
        
        orbits.forEach(orbit => {
            orbit.style.opacity = '0';
            orbit.style.transform = 'scale(0.8)';
            orbit.style.transition = 'all 0.6s ease';
        });
    }
}

// Inicializar efectos de la sección About cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initAboutSectionEffects();
    }, 1500);
});

// También inicializar si la página ya está cargada
if (document.readyState !== 'loading') {
    setTimeout(() => {
        initAboutSectionEffects();
    }, 1500);
}

// ========================= //
// ULTRA-INFORMATIVE CHALLENGES SECTION
// ========================= //

// Inicializar efectos de la sección de desafíos
function initChallengesSectionEffects() {
    // Inicializar círculo de progreso global
    initGlobalProgressCircle();
    
    // Barras de severidad
    initSeverityBars();
    
    // Contadores de métricas
    initMetricCounters();
    
    // Barras de progreso de impacto
    initImpactProgressBars();
    
    // Sistema de expansión de módulos
    initModuleExpansion();
    
    // Efectos de partículas para desafíos
    initChallengesParticles();
    
    // Observador de intersección
    initChallengesObserver();
}

// Círculo de progreso global
function initGlobalProgressCircle() {
    const progressCircle = document.querySelector('.progress-circle-fill');
    if (progressCircle) {
        const percentage = 75;
        const circumference = 2 * Math.PI * 40;
        const strokeDashoffset = circumference - (percentage / 100) * circumference;
        
        progressCircle.style.strokeDasharray = circumference;
        progressCircle.style.strokeDashoffset = circumference;
        
        // Crear gradiente SVG
        const svg = progressCircle.closest('svg');
        const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
        
        gradient.id = 'challengesGradient';
        gradient.innerHTML = `
            <stop offset="0%" style="stop-color:#FF6B35;stop-opacity:1" />
            <stop offset="50%" style="stop-color:#FFD700;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#4CAF50;stop-opacity:1" />
        `;
        
        defs.appendChild(gradient);
        svg.insertBefore(defs, svg.firstChild);
        
        setTimeout(() => {
            progressCircle.style.strokeDashoffset = strokeDashoffset;
        }, 1000);
    }
}

// Barras de severidad
function initSeverityBars() {
    const severityBars = document.querySelectorAll('.severity-fill');
    
    severityBars.forEach(bar => {
        const level = bar.dataset.level;
        setTimeout(() => {
            bar.style.width = `${level}%`;
        }, Math.random() * 1000 + 500);
    });
}

// Contadores de métricas
function initMetricCounters() {
    const metricNumbers = document.querySelectorAll('.metric-number[data-count]');
    
    metricNumbers.forEach(number => {
        const target = parseInt(number.dataset.count);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateMetricCounter(entry.target, target);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(number);
    });
}

// Animación de contadores de métricas
function animateMetricCounter(element, target) {
    const duration = 2500;
    const start = 0;
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (target - start) * easeOutCubic(progress));
        element.textContent = current;
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    }
    
    requestAnimationFrame(updateCounter);
}

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

// Barras de progreso de impacto
function initImpactProgressBars() {
    const progressBars = document.querySelectorAll('.progress-bar[data-width]');
    
    progressBars.forEach(bar => {
        const width = bar.dataset.width;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        bar.style.width = `${width}%`;
                    }, 500);
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(bar);
    });
}

// Sistema de expansión de módulos
function initModuleExpansion() {
    const modules = document.querySelectorAll('.challenge-module');
    
    modules.forEach(module => {
        // Efectos hover avanzados
        module.addEventListener('mouseenter', () => {
            createModuleAura(module);
        });
        
        // Efecto click para expandir información
        module.addEventListener('click', () => {
            const challengeType = module.dataset.challenge;
            showDetailedInfo(challengeType, module);
        });
    });
}

// Crear aura del módulo
function createModuleAura(module) {
    const rect = module.getBoundingClientRect();
    const challengeType = module.dataset.challenge;
    
    const colors = {
        financing: '#FFD700',
        technology: '#FF6B35',
        policies: '#2196F3',
        infrastructure: '#4CAF50'
    };
    
    const color = colors[challengeType] || '#FF6B35';
    
    // Crear partículas orbitales
    for (let i = 0; i < 6; i++) {
        setTimeout(() => {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                width: 4px;
                height: 4px;
                background: ${color};
                border-radius: 50%;
                pointer-events: none;
                z-index: 9999;
                box-shadow: 0 0 10px ${color};
                left: ${rect.left + rect.width / 2}px;
                top: ${rect.top + rect.height / 2}px;
            `;
            
            document.body.appendChild(particle);
            
            const angle = (i / 6) * Math.PI * 2;
            const radius = 100 + Math.random() * 50;
            
            particle.animate([
                { 
                    transform: 'translate(-50%, -50%)',
                    opacity: 1 
                },
                { 
                    transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px)`,
                    opacity: 0.8 
                },
                { 
                    transform: `translate(${Math.cos(angle) * radius * 1.5}px, ${Math.sin(angle) * radius * 1.5}px)`,
                    opacity: 0 
                }
            ], {
                duration: 2000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }, i * 100);
    }
}

// Mostrar información detallada
function showDetailedInfo(challengeType, module) {
    // Crear overlay informativo
    const overlay = document.createElement('div');
    overlay.className = 'challenge-detail-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.3s ease;
    `;
    
    const detailPanel = document.createElement('div');
    detailPanel.className = 'challenge-detail-panel';
    detailPanel.style.cssText = `
        background: rgba(20, 30, 48, 0.95);
        backdrop-filter: blur(20px);
        border-radius: 25px;
        padding: 40px;
        max-width: 800px;
        max-height: 80vh;
        overflow-y: auto;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transform: scale(0.8) translateY(50px);
        transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    `;
    
    // Contenido específico por desafío
    const detailContent = getDetailedChallengeContent(challengeType);
    detailPanel.innerHTML = detailContent;
    
    overlay.appendChild(detailPanel);
    document.body.appendChild(overlay);
    
    // Animar entrada
    setTimeout(() => {
        overlay.style.opacity = '1';
        detailPanel.style.transform = 'scale(1) translateY(0)';
    }, 10);
    
    // Cerrar al hacer click fuera
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            closeDetailOverlay(overlay);
        }
    });
    
    // Crear efectos de partículas específicos
    createDetailPanelEffects(detailPanel, challengeType);
}

// Obtener contenido detallado por desafío
function getDetailedChallengeContent(challengeType) {
    const contents = {
        financing: `
            <div class="detail-header">
                <h2>🏦 Financiamiento para Energías Renovables</h2>
                <button class="close-detail-btn" onclick="closeDetailPanel(this)">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="detail-body">
                <h3>💰 Panorama de Inversión Global</h3>
                <p>El sector de energías renovables requiere una inversión anual de <strong>$1.7 billones</strong> para alcanzar los objetivos de cero emisiones netas para 2050.</p>
                
                <h4>📊 Estadísticas Clave:</h4>
                <ul>
                    <li>Inversión actual: $1.1 billones anuales</li>
                    <li>Brecha de financiamiento: $600 mil millones</li>
                    <li>ROI promedio: 7-12% en proyectos solares</li>
                    <li>Tiempo de recuperación: 5-8 años</li>
                </ul>
                
                <h4>🎯 Estrategias EcoEnergia:</h4>
                <div class="strategy-grid">
                    <div class="strategy-item">
                        <h5>Fondos Verdes</h5>
                        <p>Desarrollo de instrumentos financieros especializados para proyectos sostenibles</p>
                    </div>
                    <div class="strategy-item">
                        <h5>Alianzas Público-Privadas</h5>
                        <p>Colaboración estratégica con entidades gubernamentales</p>
                    </div>
                </div>
            </div>
        `,
        technology: `
            <div class="detail-header">
                <h2>⚙️ Innovación Tecnológica</h2>
                <button class="close-detail-btn" onclick="closeDetailPanel(this)">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="detail-body">
                <h3>🚀 Transferencia de Tecnología</h3>
                <p>La <strong>transferencia efectiva de tecnología</strong> es crucial para acelerar la adopción de energías renovables en mercados emergentes.</p>
                
                <h4>🔬 Áreas de Desarrollo:</h4>
                <ul>
                    <li>Eficiencia de paneles solares: +25% en 5 años</li>
                    <li>Almacenamiento en baterías: -70% costos</li>
                    <li>Turbinas eólicas: +40% capacidad</li>
                    <li>Redes inteligentes: 100% digitalización</li>
                </ul>
                
                <h4>🎓 Programas EcoEnergia:</h4>
                <div class="strategy-grid">
                    <div class="strategy-item">
                        <h5>Centro I+D+I</h5>
                        <p>Laboratorio propio de investigación y desarrollo</p>
                    </div>
                    <div class="strategy-item">
                        <h5>Capacitación Técnica</h5>
                        <p>2,500+ profesionales formados anualmente</p>
                    </div>
                </div>
            </div>
        `,
        policies: `
            <div class="detail-header">
                <h2>⚖️ Marco Regulatorio</h2>
                <button class="close-detail-btn" onclick="closeDetailPanel(this)">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="detail-body">
                <h3>📋 Políticas de Incentivos</h3>
                <p>Un <strong>marco regulatorio favorable</strong> es fundamental para acelerar la transición hacia energías limpias.</p>
                
                <h4>🏛️ Instrumentos de Política:</h4>
                <ul>
                    <li>Feed-in Tariffs (FIT): Tarifas garantizadas</li>
                    <li>Certificados verdes: Mercado de emisiones</li>
                    <li>Subastas competitivas: Menor costo energía</li>
                    <li>Incentivos fiscales: Reducciones tributarias</li>
                </ul>
                
                <h4>🤝 Participación EcoEnergia:</h4>
                <div class="strategy-grid">
                    <div class="strategy-item">
                        <h5>Advocacy Regulatorio</h5>
                        <p>Participación activa en mesas de trabajo gubernamentales</p>
                    </div>
                    <div class="strategy-item">
                        <h5>Propuestas de Ley</h5>
                        <p>Desarrollo de marcos normativos innovadores</p>
                    </div>
                </div>
            </div>
        `,
        infrastructure: `
            <div class="detail-header">
                <h2>🏗️ Infraestructura Inteligente</h2>
                <button class="close-detail-btn" onclick="closeDetailPanel(this)">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="detail-body">
                <h3>🔌 Redes Eléctricas del Futuro</h3>
                <p>El desarrollo de <strong>redes inteligentes</strong> es crítico para integrar fuentes renovables intermitentes.</p>
                
                <h4>🔋 Componentes Clave:</h4>
                <ul>
                    <li>Smart Grids: Redes bidireccionales</li>
                    <li>Microgrids: Sistemas autónomos</li>
                    <li>Almacenamiento: 500+ MWh capacidad</li>
                    <li>IoT: 10,000+ sensores conectados</li>
                </ul>
                
                <h4>🏢 Proyectos EcoEnergia:</h4>
                <div class="strategy-grid">
                    <div class="strategy-item">
                        <h5>Microredes Rurales</h5>
                        <p>850 Km de redes inteligentes instaladas</p>
                    </div>
                    <div class="strategy-item">
                        <h5>Sistemas BESS</h5>
                        <p>Battery Energy Storage Systems avanzados</p>
                    </div>
                </div>
            </div>
        `
    };
    
    return contents[challengeType] || '';
}

// Cerrar panel de detalles
function closeDetailPanel(button) {
    const overlay = button.closest('.challenge-detail-overlay');
    closeDetailOverlay(overlay);
}

function closeDetailOverlay(overlay) {
    const panel = overlay.querySelector('.challenge-detail-panel');
    panel.style.transform = 'scale(0.8) translateY(50px)';
    overlay.style.opacity = '0';
    
    setTimeout(() => {
        overlay.remove();
    }, 300);
}

// Efectos de partículas para panel de detalles
function createDetailPanelEffects(panel, challengeType) {
    const colors = {
        financing: '#FFD700',
        technology: '#FF6B35',
        policies: '#2196F3',
        infrastructure: '#4CAF50'
    };
    
    const color = colors[challengeType] || '#FF6B35';
    
    // Crear partículas flotantes
    function createFloatingParticle() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: absolute;
            width: 3px;
            height: 3px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 6px ${color};
            left: ${Math.random() * 100}%;
            top: 100%;
        `;
        
        panel.appendChild(particle);
        
        particle.animate([
            { 
                transform: 'translateY(0) translateX(0)', 
                opacity: 0.8 
            },
            { 
                transform: `translateY(-${panel.offsetHeight + 50}px) translateX(${(Math.random() - 0.5) * 100}px)`, 
                opacity: 0 
            }
        ], {
            duration: 4000 + Math.random() * 2000,
            easing: 'linear'
        }).onfinish = () => particle.remove();
    }
    
    // Crear partículas periódicamente
    const particleInterval = setInterval(createFloatingParticle, 800);
    
    // Limpiar al cerrar
    const observer = new MutationObserver((mutations) => {
        mutations.forEach(mutation => {
            mutation.removedNodes.forEach(node => {
                if (node.classList && node.classList.contains('challenge-detail-overlay')) {
                    clearInterval(particleInterval);
                    observer.disconnect();
                }
            });
        });
    });
    
    observer.observe(document.body, { childList: true });
}

// Sistema de partículas para la sección de desafíos
function initChallengesParticles() {
    const particleContainer = document.querySelector('.challenges-particles-bg');
    
    function createChallengeParticle() {
        const particle = document.createElement('div');
        particle.className = 'challenge-particle';
        
        const size = Math.random() * 2 + 1;
        const colors = ['#FFD700', '#FF6B35', '#2196F3', '#4CAF50'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            box-shadow: 0 0 ${size * 4}px ${color};
            left: ${Math.random() * 100}%;
            top: 100%;
        `;
        
        particleContainer.appendChild(particle);
        
        particle.animate([
            { 
                transform: `translateY(0) rotate(0deg)`, 
                opacity: 0.6 
            },
            { 
                transform: `translateY(-${window.innerHeight + 100}px) rotate(360deg)`, 
                opacity: 0 
            }
        ], {
            duration: Math.random() * 12000 + 8000,
            easing: 'linear'
        }).onfinish = () => particle.remove();
    }
    
    // Crear partículas periódicamente
    setInterval(createChallengeParticle, 1500);
    
    // Crear partículas iniciales
    for (let i = 0; i < 4; i++) {
        setTimeout(createChallengeParticle, i * 500);
    }
}

// Observador de intersección para desafíos
function initChallengesObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const section = entry.target;
                
                // Activar animaciones secuenciales
                setTimeout(() => {
                    initGlobalProgressCircle();
                    initSeverityBars();
                    initMetricCounters();
                    initImpactProgressBars();
                }, 500);
                
                // Efectos de entrada para módulos
                const modules = section.querySelectorAll('.challenge-module');
                modules.forEach((module, index) => {
                    setTimeout(() => {
                        module.style.animationPlayState = 'running';
                    }, index * 200);
                });
            }
        });
    }, {
        threshold: 0.3
    });
    
    const challengesSection = document.querySelector('.ultra-informative-challenges');
    if (challengesSection) {
        observer.observe(challengesSection);
    }
}

// Función global para expandir desafíos (accesible desde HTML)
window.expandChallenge = function(challengeType) {
    const module = document.querySelector(`.challenge-module.${challengeType}`);
    if (module) {
        showDetailedInfo(challengeType, module);
    }
};

// Inicializar efectos de desafíos cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        initChallengesSectionEffects();
    }, 2000);
});

// También inicializar si la página ya está cargada
if (document.readyState !== 'loading') {
    setTimeout(() => {
        initChallengesSectionEffects();
    }, 2000);
}

// ========================================
// FUNCIONES PARA MODALES INFORMATIVOS
// ========================================

// Función para abrir modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevenir scroll del fondo
        
        // Añadir animación a los elementos internos
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.animation = 'none';
        modalContent.offsetHeight; // Trigger reflow
        modalContent.style.animation = 'modalSlideIn 0.3s ease-out';
        
        // Animar elementos de lista con delay
        const listItems = modal.querySelectorAll('ul li, .stat-item, .case-study, .project-item');
        listItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            setTimeout(() => {
                item.style.transition = 'all 0.5s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 100 + (index * 100));
        });
    }
}

// Función para cerrar modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        const modalContent = modal.querySelector('.modal-content');
        modalContent.style.animation = 'modalSlideOut 0.3s ease-out';
        
        setTimeout(() => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaurar scroll
        }, 300);
    }
}

// Agregar animación de salida al CSS dinámicamente
const slideOutKeyframes = `
@keyframes modalSlideOut {
    from {
        transform: translateY(0);
        opacity: 1;
    }
    to {
        transform: translateY(-50px);
        opacity: 0;
    }
}`;

// Insertar la animación en el head
const styleSheet = document.createElement('style');
styleSheet.textContent = slideOutKeyframes;
document.head.appendChild(styleSheet);

// Cerrar modal al hacer click fuera de él
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            const modalId = modal.id;
            closeModal(modalId);
        }
    });
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal[style*="block"]');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});

// Funciones para los botones de descarga y participación
function downloadResources() {
    // Simular descarga
    const button = event.target;
    const originalText = button.textContent;
    
    button.textContent = '⏳ Preparando descarga...';
    button.disabled = true;
    
    setTimeout(() => {
        button.textContent = '✅ ¡Descarga iniciada!';
        setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
        }, 2000);
    }, 1500);
}

function registerCommunity() {
    alert('🏘️ ¡Gracias por tu interés!\n\nTe contactaremos en las próximas 48 horas para evaluar tu comunidad.\n\n📞 También puedes llamarnos al: +57 320 540 4514');
}

function investInWind() {
    alert('💨 ¡Excelente decisión!\n\nUn asesor especializado te contactará para explicar las opciones de inversión disponibles.\n\n📧 Envía tus datos a: inversiones@ecoenergia.co');
}

function applyFarm() {
    alert('🚜 ¡Perfecto!\n\nNuestro equipo técnico visitará tu finca sin costo para evaluar la viabilidad del proyecto.\n\n📱 WhatsApp: +57 320 540 4514');
}

// Agregar eventos a los botones cuando se cargan los modales
document.addEventListener('DOMContentLoaded', function() {
    // Esperar un momento para que los modales se carguen
    setTimeout(() => {
        // Botón de descarga
        const downloadBtn = document.querySelector('.download-btn');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', downloadResources);
        }
        
        // Botones de participación
        document.addEventListener('click', function(event) {
            if (event.target.textContent.includes('Registrar Mi Comunidad')) {
                registerCommunity();
            } else if (event.target.textContent.includes('Invertir Desde')) {
                investInWind();
            } else if (event.target.textContent.includes('Aplicar Mi Finca')) {
                applyFarm();
            }
        });
    }, 1000);
});

// ========================================
// FUNCIONES PARA MODALES DE PROYECTOS
// ========================================

// Función para abrir modales de proyectos (reutiliza la función existente)
function openProjectModal(modalId) {
    openModal(modalId);
}

// Función específica para cotización solar
function contactSolar() {
    alert('☀️ ¡Excelente decisión!\n\n' +
          '📋 Un técnico especializado te visitará GRATIS para:\n' +
          '• Evaluar tu techo y consumo energético\n' +
          '• Diseñar el sistema ideal para tu hogar/negocio\n' +
          '• Calcular ahorros exactos y opciones de financiamiento\n\n' +
          '📞 Llámanos: +57 320 540 4514\n' +
          '📧 Email: cotizaciones@ecoenergia.co\n' +
          '⏰ Respuesta en menos de 24 horas');
}

// Animaciones específicas para la sección de proyectos
document.addEventListener('DOMContentLoaded', function() {
    // Observador para animar elementos cuando entren en vista
    const projectObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animar estadísticas con conteo
                const statsNumbers = entry.target.querySelectorAll('.stat-number, .impact-number');
                statsNumbers.forEach(stat => {
                    const finalValue = stat.textContent;
                    let currentValue = 0;
                    const increment = finalValue.match(/\d+/) ? parseInt(finalValue.match(/\d+/)[0]) / 50 : 1;
                    
                    const counter = setInterval(() => {
                        if (currentValue < parseInt(finalValue.match(/\d+/)[0])) {
                            currentValue += increment;
                            stat.textContent = finalValue.replace(/\d+/, Math.floor(currentValue));
                        } else {
                            stat.textContent = finalValue;
                            clearInterval(counter);
                        }
                    }, 30);
                });
                
                // Animar aparición secuencial de tarjetas
                const projectCards = entry.target.querySelectorAll('.project-card');
                projectCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.animation = 'cardAppear 0.8s ease-out forwards';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.3 });

    // Observar sección de proyectos
    const projectsSection = document.querySelector('.projects-section');
    if (projectsSection) {
        projectObserver.observe(projectsSection);
    }

    // Efecto de paralaje suave en iconos flotantes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const projectIcons = document.querySelectorAll('.floating-project-icon');
        
        projectIcons.forEach((icon, index) => {
            const speed = 0.5 + (index * 0.1);
            const yPos = -(scrolled * speed);
            icon.style.transform = `translate3d(0, ${yPos}px, 0)`;
        });
    });

    // Hover effect en project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.animation = 'iconPulse 0.6s ease-in-out';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                setTimeout(() => {
                    icon.style.animation = 'iconPulse 2s ease-in-out infinite';
                }, 600);
            }
        });
    });
});

// ========================================
// CALCULADORA DE AHORROS SOLARES
// ========================================

function calculateSavings() {
    // Obtener valores del formulario
    const monthlyBill = parseFloat(document.getElementById('monthlyBill').value) || 0;
    const roofArea = parseFloat(document.getElementById('roofArea').value) || 0;
    const propertyType = document.getElementById('propertyType').value;
    const location = document.getElementById('location').value;
    
    // Validación básica
    if (monthlyBill <= 0) {
        alert('⚠️ Por favor ingresa el valor de tu factura mensual');
        return;
    }
    
    if (roofArea <= 0) {
        alert('⚠️ Por favor ingresa el área disponible de tu techo');
        return;
    }
    
    // Parámetros de cálculo para Córdoba
    const solarIrradiance = 5.2; // kWh/m²/día promedio en Córdoba
    const systemEfficiency = 0.85; // Eficiencia del sistema
    const panelWattsPerM2 = 200; // Watts por m² de panel
    const costPerWatt = 2800; // COP por Watt instalado
    
    // Factores por tipo de propiedad
    const typeFactors = {
        residential: { consumption: 0.7, savings: 0.65 },
        commercial: { consumption: 0.8, savings: 0.70 },
        industrial: { consumption: 0.85, savings: 0.75 }
    };
    
    const factor = typeFactors[propertyType];
    
    // Cálculos
    const annualConsumption = monthlyBill * 12 / 650; // kWh anuales estimados
    const maxSystemSize = Math.min((roofArea * panelWattsPerM2) / 1000, annualConsumption * factor.consumption / (solarIrradiance * 365 * systemEfficiency));
    const systemSize = Math.round(maxSystemSize * 10) / 10;
    
    const annualGeneration = systemSize * solarIrradiance * 365 * systemEfficiency;
    const coveragePercent = Math.min((annualGeneration / annualConsumption) * 100, 85);
    
    const monthlyGeneration = annualGeneration / 12;
    const monthlySavings = Math.round((monthlyBill * coveragePercent / 100) * factor.savings);
    const annualSavings = monthlySavings * 12;
    
    const totalInvestment = Math.round(systemSize * 1000 * costPerWatt);
    const paybackYears = Math.round((totalInvestment / annualSavings) * 10) / 10;
    
    const co2Reduction = Math.round(annualGeneration * 0.47); // kg CO2 por kWh en Colombia
    
    // Mostrar resultados con animación
    displayResults(monthlySavings, annualSavings, systemSize, totalInvestment, paybackYears, co2Reduction);
}

function displayResults(monthly, annual, systemSize, investment, payback, co2) {
    // Formatear números
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    };
    
    const formatNumber = (number) => {
        return new Intl.NumberFormat('es-CO').format(number);
    };
    
    // Actualizar elementos
    document.getElementById('monthlySavings').textContent = formatCurrency(monthly);
    document.getElementById('annualSavings').textContent = formatCurrency(annual);
    document.getElementById('systemSize').textContent = systemSize + ' kW';
    document.getElementById('totalInvestment').textContent = formatCurrency(investment);
    document.getElementById('paybackTime').textContent = payback + ' años';
    document.getElementById('co2Reduction').textContent = formatNumber(co2) + ' kg';
    
    // Animar resultados
    const resultItems = document.querySelectorAll('.result-item');
    resultItems.forEach((item, index) => {
        item.style.animation = 'none';
        item.offsetHeight; // Trigger reflow
        setTimeout(() => {
            item.style.animation = 'resultPop 0.5s ease-out forwards';
        }, index * 100);
    });
    
    // Scroll suave hacia los resultados
    document.getElementById('calculatorResults').scrollIntoView({
        behavior: 'smooth',
        block: 'nearest'
    });
}

function requestQuote() {
    const monthlyBill = document.getElementById('monthlyBill').value;
    const roofArea = document.getElementById('roofArea').value;
    const propertyType = document.getElementById('propertyType').value;
    const location = document.getElementById('location').value;
    
    const message = `🌞 *SOLICITUD DE COTIZACIÓN SOLAR*

📊 *Datos del Cliente:*
• Factura mensual: $${formatNumber(monthlyBill)} COP
• Área de techo: ${roofArea} m²
• Tipo: ${getPropertyTypeName(propertyType)}
• Ubicación: ${getLocationName(location)}

✅ *Calculadora completada*
Solicito cotización personalizada con visita técnica gratuita.

¡Estoy listo para ahorrar con energía solar! ☀️`;
    
    const whatsappUrl = `https://wa.me/573205404514?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}

function getPropertyTypeName(type) {
    const names = {
        residential: 'Residencial',
        commercial: 'Comercial', 
        industrial: 'Industrial'
    };
    return names[type] || type;
}

function getLocationName(location) {
    const names = {
        monteria: 'Montería',
        sahagun: 'Sahagún',
        cerete: 'Cereté',
        lorica: 'Lorica',
        other: 'Otra ciudad'
    };
    return names[location] || location;
}

function formatNumber(number) {
    return new Intl.NumberFormat('es-CO').format(number);
}

// Inicializar calculadora cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    // Auto-cálculo cuando cambian los valores
    const inputs = ['monthlyBill', 'roofArea', 'propertyType', 'location'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', () => {
                // Auto calcular después de un delay
                clearTimeout(window.calcTimeout);
                window.calcTimeout = setTimeout(() => {
                    if (document.getElementById('monthlyBill').value && 
                        document.getElementById('roofArea').value) {
                        calculateSavings();
                    }
                }, 1500);
            });
        }
    });
});

// ========================================
// DASHBOARD DE IMPACTO EN TIEMPO REAL
// ========================================

class DashboardManager {
    constructor() {
        this.baseData = {
            totalEnergy: 15420,
            solarEnergy: 8950,
            hydroEnergy: 4680,
            biomassEnergy: 1790,
            co2Avoided: 7215,
            treesEquivalent: 125840,
            waterSaved: 2345670,
            beneficiaryFamilies: 8640,
            jobsCreated: 247,
            communitiesReached: 45,
            activeProjects: 4,
            totalSavings: 4250000000,
            totalInvestment: 15800000000,
            averageROI: 18.5
        };
        
        this.updateInterval = 30000; // 30 segundos
        this.animationSpeed = 2000; // 2 segundos para animaciones
        this.isInitialized = false;
    }
    
    init() {
        if (this.isInitialized) return;
        
        this.updateLastUpdateTime();
        this.animateInitialValues();
        this.startRealTimeUpdates();
        this.setupInteractivity();
        
        this.isInitialized = true;
    }
    
    updateLastUpdateTime() {
        const now = new Date();
        const timeString = now.toLocaleTimeString('es-CO', {
            hour: '2-digit',
            minute: '2-digit'
        });
        
        const lastUpdateElement = document.getElementById('lastUpdate');
        if (lastUpdateElement) {
            lastUpdateElement.textContent = timeString;
        }
    }
    
    animateInitialValues() {
        // Energía total
        this.animateCounter('totalEnergyGenerated', 0, this.baseData.totalEnergy, 'MWh');
        
        // Energías por fuente
        setTimeout(() => {
            this.animateCounter('solarEnergy', 0, this.baseData.solarEnergy, 'MWh', (value) => {
                document.getElementById('solarEnergy').textContent = `${value} MWh`;
            });
        }, 500);
        
        setTimeout(() => {
            this.animateCounter('hydroEnergy', 0, this.baseData.hydroEnergy, 'MWh', (value) => {
                document.getElementById('hydroEnergy').textContent = `${value} MWh`;
            });
        }, 1000);
        
        setTimeout(() => {
            this.animateCounter('biomassEnergy', 0, this.baseData.biomassEnergy, 'MWh', (value) => {
                document.getElementById('biomassEnergy').textContent = `${value} MWh`;
            });
        }, 1500);
        
        // Impacto ambiental
        setTimeout(() => {
            this.animateCounter('co2Avoided', 0, this.baseData.co2Avoided);
            this.animateCounter('treesEquivalent', 0, this.baseData.treesEquivalent);
            this.animateCounter('waterSaved', 0, this.baseData.waterSaved);
        }, 2000);
        
        // Impacto social
        setTimeout(() => {
            this.animateCounter('beneficiaryFamilies', 0, this.baseData.beneficiaryFamilies);
            this.animateCounter('jobsCreated', 0, this.baseData.jobsCreated);
            this.animateCounter('communitiesReached', 0, this.baseData.communitiesReached);
            
            // Animar barras de progreso
            this.animateProgressBar('familiesProgress', 85);
            this.animateProgressBar('jobsProgress', 72);
            this.animateProgressBar('communitiesProgress', 90);
        }, 2500);
        
        // Proyectos activos
        setTimeout(() => {
            this.animateCounter('activeProjects', 0, this.baseData.activeProjects);
        }, 3000);
        
        // Impacto económico
        setTimeout(() => {
            this.animateCounter('totalSavings', 0, this.baseData.totalSavings, 'COP', (value) => {
                document.getElementById('totalSavings').textContent = this.formatCurrency(value);
            });
            
            this.animateCounter('totalInvestment', 0, this.baseData.totalInvestment, 'COP', (value) => {
                document.getElementById('totalInvestment').textContent = this.formatCurrency(value);
            });
            
            this.animateCounter('averageROI', 0, this.baseData.averageROI, '%', (value) => {
                document.getElementById('averageROI').textContent = `${value.toFixed(1)}%`;
            });
        }, 3500);
    }
    
    animateCounter(elementId, start, end, suffix = '', callback = null) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        const duration = this.animationSpeed;
        const increment = (end - start) / (duration / 50);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            
            if (callback) {
                callback(Math.floor(current));
            } else {
                element.textContent = this.formatNumber(Math.floor(current));
            }
        }, 50);
    }
    
    animateProgressBar(elementId, percentage) {
        const element = document.getElementById(elementId);
        if (!element) return;
        
        setTimeout(() => {
            element.style.width = `${percentage}%`;
        }, 100);
    }
    
    startRealTimeUpdates() {
        setInterval(() => {
            this.simulateRealTimeUpdate();
            this.updateLastUpdateTime();
        }, this.updateInterval);
    }
    
    simulateRealTimeUpdate() {
        // Simular pequeños incrementos en tiempo real
        const energyIncrement = Math.floor(Math.random() * 5) + 1;
        this.baseData.totalEnergy += energyIncrement;
        
        // Actualizar energía total
        document.getElementById('totalEnergyGenerated').textContent = 
            this.formatNumber(this.baseData.totalEnergy);
        
        // Incrementar CO2 evitado
        const co2Increment = Math.floor(Math.random() * 3) + 1;
        this.baseData.co2Avoided += co2Increment;
        document.getElementById('co2Avoided').textContent = 
            this.formatNumber(this.baseData.co2Avoided);
        
        // Incrementar ahorros
        const savingsIncrement = Math.floor(Math.random() * 50000) + 10000;
        this.baseData.totalSavings += savingsIncrement;
        document.getElementById('totalSavings').textContent = 
            this.formatCurrency(this.baseData.totalSavings);
        
        // Ocasionalmente incrementar familias beneficiadas
        if (Math.random() > 0.8) {
            this.baseData.beneficiaryFamilies += Math.floor(Math.random() * 3) + 1;
            document.getElementById('beneficiaryFamilies').textContent = 
                this.formatNumber(this.baseData.beneficiaryFamilies);
        }
        
        // Actualizar árboles equivalentes basado en CO2
        this.baseData.treesEquivalent = Math.floor(this.baseData.co2Avoided * 17.45);
        document.getElementById('treesEquivalent').textContent = 
            this.formatNumber(this.baseData.treesEquivalent);
        
        // Efecto visual de actualización
        this.flashUpdateIndicator();
    }
    
    flashUpdateIndicator() {
        const liveIndicator = document.querySelector('.live-indicator');
        if (liveIndicator) {
            liveIndicator.style.transform = 'scale(1.1)';
            setTimeout(() => {
                liveIndicator.style.transform = 'scale(1)';
            }, 200);
        }
    }
    
    setupInteractivity() {
        // Interactividad en regiones del mapa
        const mapRegions = document.querySelectorAll('.map-region');
        mapRegions.forEach(region => {
            region.addEventListener('click', () => {
                this.showRegionDetails(region.dataset.region);
            });
        });
        
        // Hover effects en paneles
        const panels = document.querySelectorAll('.dashboard-panel');
        panels.forEach(panel => {
            panel.addEventListener('mouseenter', () => {
                this.highlightPanel(panel);
            });
        });
    }
    
    showRegionDetails(regionName) {
        const regionData = {
            'Montería': {
                projects: 8,
                energy: 4520,
                families: 3200,
                investment: 5200000000
            },
            'Sahagún': {
                projects: 6,
                energy: 3180,
                families: 2400,
                investment: 3800000000
            },
            'Cereté': {
                projects: 5,
                energy: 2850,
                families: 1950,
                investment: 3100000000
            },
            'Lorica': {
                projects: 3,
                energy: 1690,
                families: 1200,
                investment: 2200000000
            }
        };
        
        const data = regionData[regionName];
        if (data) {
            alert(`📍 ${regionName}\n\n` +
                  `🏗️ Proyectos activos: ${data.projects}\n` +
                  `⚡ Energía generada: ${this.formatNumber(data.energy)} MWh\n` +
                  `👨‍👩‍👧‍👦 Familias beneficiadas: ${this.formatNumber(data.families)}\n` +
                  `💰 Inversión: ${this.formatCurrency(data.investment)}\n\n` +
                  `¿Te interesa conocer más sobre nuestros proyectos en ${regionName}?`);
        }
    }
    
    highlightPanel(panel) {
        // Efecto de brillo temporal en el panel
        panel.style.boxShadow = '0 0 30px rgba(0, 212, 255, 0.3)';
        setTimeout(() => {
            panel.style.boxShadow = '';
        }, 1000);
    }
    
    formatNumber(number) {
        return new Intl.NumberFormat('es-CO').format(number);
    }
    
    formatCurrency(amount) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(amount);
    }
}

// Inicializar dashboard cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    const dashboardManager = new DashboardManager();
    
    // Usar Intersection Observer para inicializar cuando sea visible
    const dashboardSection = document.querySelector('.dashboard-section');
    if (dashboardSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    dashboardManager.init();
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        observer.observe(dashboardSection);
    }
});