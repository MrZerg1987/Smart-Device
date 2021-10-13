const buttonSections = document.querySelector('.sections__button');
const buttonAddress = document.querySelector('.address__button');
const listSections = document.querySelector('.sections__list');
const listAddress = document.querySelector('.address__list');

const hideLists = () => {
  if (buttonSections.classList.contains('sections__button' || 'sections__button--close')) {
    buttonSections.classList.remove('sections__button' && 'sections__button--close');
    buttonSections.classList.add('sections__button--open');
  }
  if (listSections.classList.contains('sections__list')) {
    listSections.classList.add('sections__list--close');
  }

  if (buttonAddress.classList.contains('address__button' || 'address__button--close')) {
    buttonAddress.classList.remove('address__button' && 'address__button--close');
    buttonAddress.classList.add('address__button--open');
  }
  if (listAddress.classList.contains('address__list')) {
    listAddress.classList.add('address__list--close');
  }
};

const onButtonSectionsClick = () => {
  hideLists();
  if (buttonSections.classList.contains('sections__button--open')) {
    buttonSections.classList.remove('sections__button--open');
    buttonSections.classList.add('sections__button--close');
    listSections.classList.remove('sections__list--close');
  }
};

const onButtonAddressClick = () => {
  hideLists();
  if (buttonAddress.classList.contains('address__button--open')) {
    buttonAddress.classList.remove('address__button--open');
    buttonAddress.classList.add('address__button--close');
    listAddress.classList.remove('address__list--close');
  }
};

export const initAccordion = () => {
  hideLists();
  buttonSections.addEventListener('click', onButtonSectionsClick);
  buttonAddress.addEventListener('click', onButtonAddressClick);
};
