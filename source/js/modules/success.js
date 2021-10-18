import {isEscEvent} from '../utils/utils';

const overlaySuccess = document.querySelector('.success-overlay');
const buttonCloseSuccess = document.querySelector('.success__button-close');

export const openSuccess = () => {
  if (!overlaySuccess.classList.contains('success-active')) {
    overlaySuccess.classList.add('success-active');
  }
  document.body.classList.add('scroll-lock');
};


export const hideSuccess = () => {
  if (overlaySuccess.classList.contains('success-active')) {
    overlaySuccess.classList.remove('success-active');
  }
  document.body.classList.remove('scroll-lock');
};

const onButtonCloseSuccessClick = () => hideSuccess();

const onKeyEscKeydown = (evt) => {
  if (isEscEvent(evt)) {
    hideSuccess();
  }
};

const onOverlayClick = (evt) => {
  if (!evt.target.closest('.success')) {
    hideSuccess();
  }
};

export const initSuccess = () => {
  if (!overlaySuccess) {
    return;
  }
  buttonCloseSuccess.addEventListener('click', onButtonCloseSuccessClick);
  document.addEventListener('keydown', onKeyEscKeydown);
  overlaySuccess.addEventListener('click', onOverlayClick);
};
