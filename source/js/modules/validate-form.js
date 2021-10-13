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

const checkInputsNameValidity = (inputs) => {
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

const checkInputsPhoneValidity = (inputs) => {
  let flag = true;
  inputs.forEach((input) => {
    if (input.value.length < 18) {
      input.classList.add('check-input');
      flag = false;
      return;
    }
    input.classList.remove('check-input');
  });
  return flag;
};

const checkInputsCheckboxValidity = (inputs) => {
  let flag = true;
  inputs.forEach((input) => {
    if (!input.checked) {
      input.classList.add('check-input');
      flag = false;
      return;
    }
    input.classList.remove('check-input');
  });
  return flag;
};

const addLocalStorage = () => {
  if (userNames) {
    userNames.forEach((userName) => {
      localStorage.setItem('name', userName.value);
    });
  }
  if (userPhones) {
    userPhones.forEach((userPhone) => {
      localStorage.setItem('phone', userPhone.value);
    });
  }
  if (userQuestions) {
    userQuestions.forEach((userQuestion) => {
      localStorage.setItem('text', userQuestion.value);
    });
  }
};

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const inputsName = evt.target.querySelectorAll('[name=name]');
  const inputsPhone = evt.target.querySelectorAll('[name=phone]');
  const inputsCheckbox = evt.target.querySelectorAll('[name=permission]');

  const checkInputsValidity = () => {
    checkInputsNameValidity(inputsName);
    checkInputsPhoneValidity(inputsPhone);
    checkInputsCheckboxValidity(inputsCheckbox);
  };

  if (checkInputsValidity()) {
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
