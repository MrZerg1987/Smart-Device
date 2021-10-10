const move = new window.MoveTo({
  duration: 2000,
  easing: 'easeOutQuart',
});

export const initSmoothScroll = () => {
  const smoothLinks = document.querySelectorAll('.main-screen__link');
  if (smoothLinks.length) {
    smoothLinks.forEach((link) => {
      move.registerTrigger(link);
      document.activeElement.blur();
    });
  }
};
