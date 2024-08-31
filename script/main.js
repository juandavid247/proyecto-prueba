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
});