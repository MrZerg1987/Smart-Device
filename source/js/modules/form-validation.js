export const validateForms = () => {
  const forms = document.querySelectorAll('form');

  forms.forEach((form) => {
    const inputs = form.querySelectorAll('input');

    const removeError = () => {
      const errors = form.querySelectorAll('.check-input');
      errors.forEach((error) => {
        error.classList.remove('check-input');
      });
    };

    const checkInputsValidity = () => {
      inputs.forEach((input) => {
        if (!input.value) {
          input.classList.add('check-input');
        } else {
          input.classList.remove('check-input');
        }
      });
    };

    const onValidateForm = (evt) => {
      evt.preventDefault();
      removeError();
      checkInputsValidity();
    };

    const validateForm = () => {
      if (!form) {
        return;
      }
      form.noValidate = true;
      form.addEventListener('submit', onValidateForm);
    };

    validateForm();
  });
};
