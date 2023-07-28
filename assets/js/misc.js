const icon = document.querySelector('.navigation-wrapper svg')
const menu = document.querySelector('.menu-list')

icon.addEventListener('click', function() {
    menu.classList.toggle('slide');
});

const menu_items = document.querySelectorAll('.menu-list li span a');
menu_items.forEach(item => {
  item.addEventListener('click', function() {
    const activeItem = document.querySelector('.menu-list li span.active');
    if (activeItem) {
      activeItem.classList.remove('active');
    }
    item.parentNode.classList.add('active');
    // item.querySelector('span').classList.add('active');
    // console.log(item.parentNode)
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute('href'));
      const headerOffset = 0; // Adjust the value based on your header height
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
});
