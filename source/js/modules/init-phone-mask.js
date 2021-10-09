const forms = document.querySelectorAll('form');
const COUNTRY_CODE = '+7';
const len = COUNTRY_CODE.length;

export const initPhonesMask = () => {
  forms.forEach((form) => {
    const phoneInputs = form.querySelectorAll('input[type="tel"]');

    const replacePhoneValue = (el) => {
      const matrix = `${COUNTRY_CODE} (___) ___-__-__`;
      const def = matrix.replace(/\D/g, '');
      const i = 0;
      const val = el.value.replace(/\D/g, '');
      if (def.length >= val.length) {
        val = def;
      }
      el.value = matrix.replace(/./g, (a) => {
        // eslint-disable-next-line no-nested-ternary
        return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
      });
    };

    const onInputPhoneInput = (evt) => {
      replacePhoneValue(evt.target);
    };

    const onFocusPhoneInput = (evt) => {
      if (!evt.target.value) {
        evt.target.value = COUNTRY_CODE;
        evt.target.addEventListener('input', onInputPhoneInput);
        evt.target.addEventListener('blur', onBlurPhoneInput);
        evt.target.addEventListener('keydown', onKeydownPhoneInput);
      }
    };

    const onKeydownPhoneInput = (evt) => {
      if (evt.target.selectionStart <= length && evt.keyCode !== 8 && evt.keyCode !== 46) {
        evt.target.setSelectionRange(len, len);
      }
      if ((evt.target.selectionStart === len || evt.target.selectionStart === 1) && evt.keyCode === 8) {
        evt.preventDefault();
      }
      if (evt.target.selectionStart === 1 && evt.keyCode === 46) {
        evt.preventDefault();
      }
    };

    const onBlurPhoneInput = (evt) => {
      if (evt.target.value === COUNTRY_CODE) {
        evt.target.value = '';
        evt.target.removeEventListener('input', onInputPhoneInput);
        evt.target.removeEventListener('blur', onBlurPhoneInput);
      }
    };

    const initPhoneMask = () => {
      if (phoneInputs.length) {
        phoneInputs.forEach((input) => {
          input.addEventListener('focus', onFocusPhoneInput);
          if (input.value) {
            replacePhoneValue(input);
            input.addEventListener('input', onInputPhoneInput);
            input.addEventListener('blur', onBlurPhoneInput);
            input.addEventListener('keydown', onKeydownPhoneInput);
          }
        });
      }
    };

    initPhoneMask();
  });
};
