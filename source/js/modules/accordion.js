const accordion = document.querySelector('.accordion');
const accordionContents = document.querySelectorAll('.accordion__content');
const accordionButtons = document.querySelectorAll('.accordion__button');

const initJs = () => {
  accordionContents.forEach((accordionContent) => {
    accordionContent.classList.add('is-hidden');
  });
  accordionButtons.forEach((accordionButton) => {
    accordionButton.classList.add('is-js');
  });
};

export const initAccordion = () => {
  if (!accordion) {
    return;
  }
  initJs();
  const accordionItems = accordion.querySelectorAll('.accordion__item');
  accordion.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('accordion__button')) {
      const parent = evt.target.closest('.accordion__item');
      if (parent.classList.contains('is-active')) {
        parent.classList.remove('is-active');
        return;
      }
      accordionItems.forEach((el) => el.classList.remove('is-active'));
      parent.classList.add('is-active');
    }
  });
};
