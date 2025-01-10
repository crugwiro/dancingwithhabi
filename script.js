document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const sections = document.querySelectorAll('.side-section');
  const featuredProduct = document.querySelector('.featured-product');

  if (featuredProduct) {
    const featuredTop = featuredProduct.offsetTop;
    const featuredHeight = featuredProduct.offsetHeight;

    sections.forEach((section) => {
      const isLeft = section.classList.contains('left');
      const isRight = section.classList.contains('right');

      // Only show sections when in the second page's viewport
      if (
        scrollPosition + (featuredHeight - 600) > featuredTop  
      ) {
        if (isLeft) section.classList.add('appear-left');
        if (isRight) section.classList.add('appear-right');
        section.classList.remove('hidden-left', 'hidden-right');
      } else {
        // Hide sections when not on the second page
        if (isLeft) section.classList.add('hidden-left');
        if (isRight) section.classList.add('hidden-right');
        section.classList.remove('appear-left', 'appear-right');
      }
    });
  }
});
