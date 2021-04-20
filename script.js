const swiper = new Swiper('.number1', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 1,

    pagination: {
      el: '.swiper-pagination1',
    },
    navigation: {
      nextEl: '.swiper-button-next1',
      prevEl: '.swiper-button-prev1',
    },
    scrollbar: {
      el: '.swiper-scrollbar1',
    },
  });

  const swiper2 = new Swiper('.number2', {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 1,
    pagination: {
      el: '.swiper-pagination2',
    },
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    scrollbar: {
      el: '.swiper-scrollbar2',
    },
  });

  const swiper3 = new Swiper('.number3', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: 1,
    pagination: {
      el: '.swiper-pagination3',
    },
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    scrollbar: {
      el: '.swiper-scrollbar3',
    },
  });
  AOS.init();
  let pswpElement = document.querySelectorAll('.pswp')[0];

lightGallery(document.getElementById('lightgallery')); 

дуе(".topleft--g1").lightGallery({
  thumbnail: true,
  hash: true,
  galleryId: "gallery1",
  selector: '.gallery1'
});

$(".topleft--g2").lightGallery({
  thumbnail: true,
  hash: true,
  galleryId: "gallery2",
  selector: '.gallery2'
});