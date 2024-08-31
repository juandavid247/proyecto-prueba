document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.typing-title');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('typing-container');
                observer.unobserve(entry.target); 
            }
        });
    }, {
        threshold: 0.5 
    });

    elements.forEach(element => {
        observer.observe(element);
    });

    const typingContainer = document.querySelector('.typing-container');
    
    // Ajusta la duración en milisegundos según la duración de tu animación typing
    setTimeout(() => {
        typingContainer.classList.add('stop-caret-blink');
    }, 4000)
});