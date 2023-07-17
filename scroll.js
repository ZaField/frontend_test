document.addEventListener('DOMContentLoaded', function() {
    var sections = document.getElementsByTagName('section');
    var currentSection = 0;
    var isScrolling = false;
    
    function scrollToSection(index) {
      if (sections[index]) {
        sections[index].scrollIntoView({ behavior: 'smooth' });
        currentSection = index;
      }
    }

    function debounce(func, delay) {
      var timeout;
      return function() {
        var context = this;
        var args = arguments;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
          func.apply(context, args);
        }, delay);
      };
    }
    
    function scrollHandler(event) {
      if (isScrolling) return;
      isScrolling = true;

      var direction = event.deltaY > 0 ? 1 : -1;
      var nextSection = currentSection + direction;
      
      if (nextSection >= 0 && nextSection < sections.length) {
        scrollToSection(nextSection);
      }

      setTimeout(function() {
        isScrolling = false;
      }, 1000);
    }
    
    function setScrollListener() {
      window.addEventListener('wheel', debounce(scrollHandler, 0), { passive: false });
      window.addEventListener('touchmove', debounce(scrollHandler, 0), { passive: false });
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
  