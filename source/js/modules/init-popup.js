import {isEscEvent} from '../utils/utils.js';


const buttonFeedback = document.querySelector('.header__feedback');
const overlay = document.querySelector('.popup-overlay');
const popup = overlay.querySelector('.popup');
const buttonClose = popup.querySelector('.popup__button-close');

// Создаём функцию открытия Попапа с обратной связью

const onShowPopup = () => {
  if (!overlay.classList.contains('popup-active')) {
    overlay.classList.add('popup-active');
  }
  if (!popup.classList.contains('popup-active')) {
    popup.classList.add('popup-active');
  }
  document.body.classList.add('scroll-lock');
};

// Вешаем обработчик события на кнопку "Заказать звонок"

const openPopup = () => {
  buttonFeedback.addEventListener('click', onShowPopup);
};

// Создаём функцию закрытия Попапа с обратной связью

export const hidePopup = () => {
  if (overlay.classList.contains('popup-active')) {
    overlay.classList.remove('popup-active');
  }
  if (popup.classList.contains('popup-active')) {
    popup.classList.remove('popup-active');
  }
  document.body.classList.remove('scroll-lock');
};

// Создаём функцию закрытия Попапа с обратной связью с помощью "крестика"

const onHidePopupButtonClose = () => hidePopup();

// Создаём функцию закрытия Попапа с обратной связью с помощью "Esc"

const onHidePopupKeyEsc = (evt) => {
  if (isEscEvent(evt)) {
    hidePopup();
  }
};

// Создаём функцию закрытия Попапа при нажатии на Overlay

const onHidePopupClickOverlay = (evt) => {
  if (!evt.target.closest('.popup')) {
    hidePopup();
  }
};

// Вешаем обработчик события на все вышеперечисленные случаи

const closePopup = () => {
  buttonClose.addEventListener('click', onHidePopupButtonClose);
  document.addEventListener('keydown', onHidePopupKeyEsc);
  overlay.addEventListener('click', onHidePopupClickOverlay);
};

export const initPopup = () => {
  openPopup();
  closePopup();
};
