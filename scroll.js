document.addEventListener('DOMContentLoaded', function() {
    var sections = document.getElementsByTagName('section');
    var currentSection = 0;
    
    function scrollToSection(index) {
      if (sections[index]) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
      }
    }
    
    function scrollHandler(event) {
      event.preventDefault();
      var direction = event.deltaY > 0 ? 1 : -1;
      var nextSection = currentSection + direction;
      
      if (nextSection >= 0 && nextSection < sections.length) {
        scrollToSection(nextSection);
      }
    }
    
    function setScrollListener() {
      window.addEventListener('wheel', scrollHandler, { passive: false });
      window.addEventListener('touchmove', scrollHandler, { passive: false });
    }
    
    if (document.readyState === 'complete') {
      setScrollListener();
    } else {
      window.addEventListener('load', setScrollListener);
    }
    
    window.addEventListener('keydown', function(event) {
      if (event.key === 'ArrowUp') {
        event.preventDefault();
        var previousSection = currentSection - 1;
        if (previousSection >= 0) {
          scrollToSection(previousSection);
        }
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        var nextSection = currentSection + 1;
        if (nextSection < sections.length) {
          scrollToSection(nextSection);
        }
      }
    });
  });
  