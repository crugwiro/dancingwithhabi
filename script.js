document.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const sections = document.querySelectorAll('.side-section');
    const featuredProduct = document.querySelector('.featured-product');
  
    // Check if user is scrolling to the second page
    if (featuredProduct) {
      const featuredTop = featuredProduct.offsetTop;
  
      sections.forEach((section) => {
        const isLeft = section.classList.contains('left');
        const isRight = section.classList.contains('right');
  
        if (scrollPosition + windowHeight > featuredTop + 50) {
          // Slide sections out when on the second page
          if (isLeft) section.classList.add('appear-left');
          if (isRight) section.classList.add('appear-right');
          section.classList.remove('hidden-left', 'hidden-right');
        } else {
          // Slide sections back when returning to the first page
          if (isLeft) section.classList.add('hidden-left');
          if (isRight) section.classList.add('hidden-right');
          section.classList.remove('appear-left', 'appear-right');
        }
      });
    }
  });
  