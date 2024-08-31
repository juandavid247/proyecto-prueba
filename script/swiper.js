document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper-container', {
      loop: true,
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },
      autoplay: {
          delay: 5000,
      },
      breakpoints: {
        320: {
          spaceBetween: 120,
      },
        640: {
            spaceBetween: 140,
        },
        768: {
            spaceBetween: 160,
        },
        1024: {
            spaceBetween: 10,
        },
    },
  });
});