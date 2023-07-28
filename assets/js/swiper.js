document.addEventListener("DOMContentLoaded", function() {
  var swiper = new Swiper ('#section-swiper', {
      direction: "vertical",
      slidesPerView: "auto",
      mousewheel: true,
      keyboard: true,
      speed: 1500,
      on: {
          slideChange: function () {
              const activeIndex = swiper.activeIndex;
              const activeItem = document.querySelector('.menu-list li span.active');
              if (activeItem) {
                activeItem.classList.remove('active');
              }
              const menuItems = document.querySelectorAll('.menu-list li span');
              menuItems[activeIndex].classList.add('active');
          }
      }
    })
      
    const icon = document.querySelector('.navigation-wrapper svg')
    const menu_list = document.querySelector('.menu-list')
    
    icon.addEventListener('click', function() {
        menu_list.classList.toggle('slide');
    });
    
    const menu_items = document.querySelectorAll('.menu-list li span a');
    menu_items.forEach((item, index)=> {
      item.addEventListener('click', function() {
        const activeItem = document.querySelector('.menu-list li span.active');
        if (activeItem) {
          activeItem.classList.remove('active');
        }
        item.parentNode.classList.add('active');
        swiper.slideTo(index);
      });
    });

// News Swiper
  const news_images = [
    'url(../images/news/1.jpg)',
    'url(../images/news/1.jpg)',
    'url(../images/news/1.jpg)',
    'url(../images/news/1.jpg)',
  ]

  const news_banner_container = document.querySelector('#news-banner');
  const news_wrapper = news_banner_container.querySelector(".swiper-wrapper");
  const news_slide = news_wrapper.querySelectorAll('.swiper-slide');
  news_slide.forEach((slide, index) => {
    
  })

  })

  var news_banner = new Swiper("#news-banner", {
    direction: "horizontal",
    autoplay: {
      delay: 3000,
    }
  })

