const footerInfoBlock = document.querySelector('.footer__info-block');
const accordions = footerInfoBlock.querySelectorAll('section');
const lists = footerInfoBlock.querySelectorAll('ul');
const buttons = footerInfoBlock.querySelectorAll('button');

const hideLists = () => {
  buttons.forEach((button) => {
    if (button.classList.contains('sections__button' || 'button-close')) {
      button.classList.remove('button' && 'button-close');
      button.classList.add('button-open');
    }
  });
  lists.forEach((list) => {
    if (list.classList.contains('show')) {
      list.classList.remove('show');
      list.classList.add('hidden');
    }
  });
};

export const initAccordion = () => {
  hideLists();

  accordions.forEach((accordion) => {
    const buttonOpen = accordion.querySelector('.button-open');
    const buttonClose = accordion.querySelector('.button-close');
    const button = accordion.querySelector('button');
    const list = accordion.querySelector('ul');

    const onButtonOpenClick = () => {
      hideLists();
      if (button.classList.contains('button-open')) {
        button.classList.remove('button-open');
        button.classList.add('button-close');
      }
      if (list.classList.contains('hidden')) {
        list.classList.remove('hidden');
        list.classList.add('show');
      }
    };


    const openList = () => {
      if (buttonOpen) {
        buttonOpen.addEventListener('click', onButtonOpenClick);
      }
    };

    const onButtonCloseClick = () => {
      hideLists();
    };

    const closeList = () => {
      if (buttonClose) {
        buttonClose.addEventListener('click', onButtonCloseClick);
      }
    };

    openList();
    closeList();
  });
};
