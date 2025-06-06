  // Barra de progresso
window.onscroll = function() {
    updateProgressBar();
    toggleBackToTop();
};

function updateProgressBar() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
}

// Botão de voltar ao topo
function toggleBackToTop() {
    const backToTop = document.getElementById("backToTop");
    if (window.pageYOffset > 300) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
}

// Formulário de contato
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de envio
    const submitBtn = this.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    
    // Simular tempo de envio
    setTimeout(() => {
        submitBtn.innerHTML = '<i class="fas fa-check"></i> Mensagem Enviada!';
        
        // Resetar formulário
        setTimeout(() => {
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Mostrar mensagem de sucesso
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
        }, 1500);
    }, 2000);
});

// Animações ao rolar
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.about-content, .project-card, .skill-category, .contact-info, .contact-form');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        
        if (elementPosition < screenPosition) {
            element.classList.add('fade-in');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);