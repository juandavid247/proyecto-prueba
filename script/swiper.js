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
          spaceBetween: 20,
      },
        640: {
            spaceBetween: 30,
        },
        768: {
            spaceBetween: 40,
        },
        1024: {
            spaceBetween: 50,
        },
    },
  });
});