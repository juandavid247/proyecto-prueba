document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 6000,
        },
        on: {
            init: function () {
                // Aplicar el efecto al slide activo al iniciar
                efectoEscribirSlideActivo();
            },
            slideChange: function () {
                // Aplicar el efecto al slide activo cuando cambia
                efectoEscribirSlideActivo();
            },
        },
    });

    function efectoEscribirSlideActivo() {
        // Primero, quitar la animación de escritura de todos los slides
        document.querySelectorAll('.swiper-slide .typing-container').forEach((element) => {
            element.style.animation = 'none'; // Desactiva la animación
            element.offsetHeight; // Forza el reflujo para reiniciar la animación
            element.style.animation = ''; // Reactiva la animación
        });

        // Luego, aplicar la animación solo al slide activo
        const activeSlide = document.querySelector('.swiper-slide-active .typing-container');
        if (activeSlide) {
            activeSlide.style.animation = ''; // Reactiva la animación para el slide activo
        }
    }
});
