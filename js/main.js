const navSwiper = new Swiper(".banner .swiper", {
    slidesPerView : "auto",
    spaceBetween : 20,
    freeMode : true,
});

const sellerSwiper = new Swiper(".sec-2 .sellers", {
    slidesPerView : 2.3,
    spaceBetween : 10,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },

});


const lstestSwiper = new Swiper(".sec-4 .latest", {
    slidesPerView : 2.3,
    spaceBetween : 10,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },

});


const seriesSwiper = new Swiper(".sec-5 .series", {
    slidesPerView : 1.2,
    spaceBetween : 10,
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.4,
          spaceBetween: 20,
        },
      },

});
