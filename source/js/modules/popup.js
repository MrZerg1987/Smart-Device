import {isEscEvent} from '../utils/utils';

const buttonFeedback = document.querySelector('.header__feedback');
const overlay = document.querySelector('.popup-overlay');
const popup = document.querySelector('.popup');
const buttonClose = document.querySelector('.popup__button-close');
const userName = popup.querySelector('[name=name]');
const userPhone = popup.querySelector('[name=phone]');

let storage = localStorage.getItem('name');

const onButtonFeedbackClick = () => {
  if (!overlay.classList.contains('popup-active')) {
    overlay.classList.add('popup-active');
  }
  document.body.classList.add('scroll-lock');

  if (storage) {
    userName.value = storage;
    userPhone.focus();
    return;
  }
  userName.focus();
};

const openPopup = () => {
  buttonFeedback.addEventListener('click', onButtonFeedbackClick);
};

export const hidePopup = () => {
  if (overlay.classList.contains('popup-active')) {
    overlay.classList.remove('popup-active');
  }
  if (popup.classList.contains('popup-active')) {
    popup.classList.remove('popup-active');
  }
  document.body.classList.remove('scroll-lock');
};

const onButtonCloseClick = () => hidePopup();

const onKeyEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    hidePopup();
  }
};

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.popup')) {
    hidePopup();
  }
};

const closePopup = () => {
  buttonClose.addEventListener('click', onButtonCloseClick);
  document.addEventListener('keydown', onKeyEscKeydown);
  overlay.addEventListener('click', onOverlayClick);
};

export const initPopup = () => {
  openPopup();
  closePopup();
};
