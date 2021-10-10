import {hidePopup} from './popup';

const userNames = document.querySelectorAll('[name=name]');
const userPhones = document.querySelectorAll('[name=phone]');
const userQuestions = document.querySelectorAll('textarea');

const removeError = (form) => {
  const errors = form.querySelectorAll('.check-input');
  errors.forEach((error) => {
    error.classList.remove('check-input');
  });
};

const checkInputsValidity = (inputs) => {
  let flag = true;
  inputs.forEach((input) => {
    if (!input.value) {
      input.classList.add('check-input');
      flag = false;
      return;
    }
    input.classList.remove('check-input');
  });
  return flag;
};

const addLocalStorage = () => {
  userNames.forEach((userName) => {
    localStorage.setItem('name', userName.value);
  });
  userPhones.forEach((userPhone) => {
    localStorage.setItem('phone', userPhone.value);
  });
  userQuestions.forEach((userQuestion) => {
    localStorage.setItem('text', userQuestion.value);
  });
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const inputs = evt.target.querySelectorAll('input');
  if (checkInputsValidity(inputs)) {
    removeError(evt.target);
    addLocalStorage();
    setTimeout(() => {
      evt.target.reset();
      hidePopup();
    }, 1000);
  }
};

export const initValidateForms = () => {
  const forms = document.querySelectorAll('form');
  forms.forEach((form) => {
    form.noValidate = true;
    form.addEventListener('submit', onFormSubmit);
  });
};
