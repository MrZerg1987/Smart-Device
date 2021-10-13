const accordions = document.querySelectorAll('.accordion');
const accordionItems = document.querySelectorAll('.accordion-item');

const hideLists = () => {
  accordions.forEach((accordion) => {
    accordionItems.forEach((accordionItem) => {
      accordion.classList.add('accordion--plus');
      accordionItem.classList.add('accordion-item--hidden');
    });
  });
};

const onAccordionClick = ({target}) => {
  hideLists();
  const items = target.querySelectorAll('.accordion-item');
  items.forEach((item) => {
    if (target.classList.contains('accordion--plus')) {
      target.classList.remove('accordion--plus');
      target.classList.add('accordion--minus');
      item.classList.remove('accordion-item--hidden');
      return;
    }
    target.classList.remove('accordion--minus');
    target.classList.add('accordion--plus');
    item.classList.add('accordion-item--hidden');
  });
};

export const initAccordion = () => {
  if (!accordions && !accordionItems) {
    return;
  }
  hideLists();
  accordions.forEach((accordion) => {
    accordion.addEventListener('click', onAccordionClick);
  });
};
