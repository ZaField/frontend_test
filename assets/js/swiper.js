var swiper = new Swiper ('.swiper-container', {
    // If we need pagination
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