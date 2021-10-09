import {validateForms} from '../modules/form-validation.js';
import {initPopup} from '../modules/init-popup.js';
import {initPhonesMask} from '../modules/init-phone-mask.js';
// import {initSmoothScroll} from '../modules/init-smooth-scroll.js';

export const initJs = () => {
  // initSmoothScroll();
  initPhonesMask();
  validateForms();
  initPopup();
};
