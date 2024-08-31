document.addEventListener('DOMContentLoaded', function () {
    // Inicializa una nueva instancia de Swiper en el contenedor con la clase '.swiper-container'
    const swiper = new Swiper('.swiper-container', {
        // Activa el bucle para que el slider se desplace de forma continua
        loop: true,
        
        // Configura la paginación
        pagination: {
            // Selecciona el elemento de paginación con la clase '.swiper-pagination'
            el: '.swiper-pagination',
            // Permite que los puntos de paginación sean clicables
            clickable: true,
        },
        
        // Configura el autoplay del slider
        autoplay: {
            // Define el intervalo de tiempo entre transiciones en ( 5 segundos)
            delay: 5000,
        },
        
        breakpoints: {
          // Para pantallas con un ancho mínimo de 320px
          320: {
            spaceBetween: 20,
          },
          // Para pantallas con un ancho mínimo de 640px
          640: {
              spaceBetween: 30,
          },
          // Para pantallas con un ancho mínimo de 768px
          768: {
              spaceBetween: 40,
          },
          // Para pantallas con un ancho mínimo de 1024px
          1024: {
              spaceBetween: 50,
          },
      },
    });
  });
  