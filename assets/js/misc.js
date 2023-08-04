var features_swiper = new Swiper('#features-swiper', {
  // effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 'auto',
  loop: true,
  spaceBetween: -1000,
  // stretch: 0,
  on: {
    init: function() {
      updateSlideScales();
    },
    slideChange: function() {
      updateSlideScales();
    }
  }
  // coverflowEffect: {
  //   rotate: 0,
  //   stretch: 0,
  //   depth: 100,
  //   modifier: 5,
  //   slideShadows: false,
  // }
});

// const features_swiper_container = document.querySelector('#features-swiper');
// const features_wrapper = features_swiper_container.querySelector('.swiper-wrapper');
// const features_slide = features_wrapper.querySelectorAll('.swiper-slide');

// function findCenterSlideIndex() {
//   const slideItemRects = Array.from(features_slide).map(item => item.getBoundingClientRect());
//   const windowCenterX = window.innerWidth / 2;
//   let centerSlideIndex = 0;
//   let minDistance = Infinity;

//   slideItemRects.forEach((rect, index) => {
//     const slideCenterX = rect.left + rect.width / 2;
//     const distance = Math.abs(windowCenterX - slideCenterX);
//     if (distance < minDistance) {
//       minDistance = distance;
//       centerSlideIndex = index;
//     }
//   });
//   return centerSlideIndex;
// }

function updateSlideScales() {
  var swiperSlides = document.querySelectorAll('#features-swiper .swiper-slide');
  var centerSlideIndex = Math.floor(swiperSlides.length / 2);

  swiperSlides.forEach(function(slide, index) {
    var scale = (index === centerSlideIndex) ? 0.7 : 0.1;
    var distance = Math.abs(index - centerSlideIndex);
    var opacity = (distance === 2) ? 0 : 1;
    var translateY = (distance === 1) ? '2000px' : '0';
    var zIndex = (distance === 0) ? 2 : 1;

    slide.style.transform = 'scale(' + scale + ') translateY(' + translateY + ')';
    slide.style.opacity = opacity;
    slide.style.zIndex = zIndex;
  })
}