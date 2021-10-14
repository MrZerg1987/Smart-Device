import {isEscEvent} from '../utils/utils';

const buttonFeedback = document.querySelector('.header__link-feedback');
const overlay = document.querySelector('.popup-overlay');
const buttonClose = document.querySelector('.popup__button-close');
const userNames = document.querySelectorAll('[name=name]');
const userPhones = document.querySelectorAll('[name=phone]');
const userQuestions = document.querySelectorAll('[name=permission]');

let storage = localStorage.getItem('name');

const onButtonFeedbackClick = () => {
  if (!overlay.classList.contains('popup-active')) {
    overlay.classList.add('popup-active');
  }
  document.body.classList.add('scroll-lock');

  userNames.forEach((userName) => {
    userPhones.forEach((userPhone) => {
      userQuestions.forEach((userQuestion) => {
        if (storage) {
          userName.value = storage;
        } else if (storage) {
          userPhone.value = storage;
          userQuestion.focus();
        } else {
          userPhone.focus();
        }
        userName.focus();
      });
    });
  });
};


export const hidePopup = () => {
  if (overlay.classList.contains('popup-active')) {
    overlay.classList.remove('popup-active');
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

export const initPopup = () => {
  if (!overlay) {
    return;
  }
  buttonFeedback.addEventListener('click', onButtonFeedbackClick);
  buttonClose.addEventListener('click', onButtonCloseClick);
  document.addEventListener('keydown', onKeyEscKeydown);
  overlay.addEventListener('click', onOverlayClick);
};
