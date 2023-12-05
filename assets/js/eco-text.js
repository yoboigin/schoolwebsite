const observer2 = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const square = entry.target.querySelector('.eco-text');

    if (entry.isIntersecting) {
      square.classList.add('eco-text-animation');
	  return; // if we added the class, exit the function
    }

    // We're not intersecting, so remove the class!
    square.classList.remove('eco-text-animation');
  });
});

observer2.observe(document.querySelector('.eco-text-wrapper'));