

if ($('div').hasClass("slider-cities")) {
    var swiper = new Swiper(".slider-cities", {
      loop: true,
      centeredSlides: true,
      grabCursor: true,
      spaceBetween: 25,
      observer: true,
      observeParents: true,
      speed: 800,
      effect: 'coverflow',
      coverflowEffect: {
        rotate: 15,
        stretch: 0,
        depth: 150,
        modifier: 1.5,
        slideShadows: true,
      },
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".cities-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      },
    });
  }
  

  if ($('.tag-carousel').length) {
    new Swiper('.tag-carousel', {
      slidesPerView: 'auto',
      spaceBetween: 20,
      loop: true,
      speed: 2500,
      autoplay: {
        delay: 0,
        disableOnInteraction: false,
      },
      freeMode: true,
      grabCursor: true,
    });
  }
  
  