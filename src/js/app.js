import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config';
import validate from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login, register } from './services/auth.service';
import notify from './views/notifications';
import getNews from './services/news.service';
import { showLoader, removePreloader } from './helpers/preloader';

const { navTab, tabLogin, tabRegister, loginContent, registerContent, formLogin, inputEmail, inputPassword, formReg, inputRegEmail, inputRegPassword, nickname, first_name, last_name, phone, country, city, date_of_birth,
gender } = UI;
const inputsLogin = [inputEmail, inputPassword];
const inputsRegister = [inputRegEmail, inputRegPassword, nickname, first_name, last_name, phone, country, city];

// Events
inputsLogin.forEach(elem => elem.addEventListener('focus', () => removeInputError(elem)));
inputsRegister.forEach(elem => elem.addEventListener('focus', () => removeInputError(elem)));

navTab.addEventListener('click', (e) => {
  e.preventDefault();

  if (e.target.id === 'tab-login') {
    registerContent.classList.add('hidden-form');
    loginContent.classList.remove('hidden-form');
    tabLogin.classList.add('color');
    tabRegister.classList.remove('color');
  } else if (e.target.id === 'tab-register') {
    loginContent.classList.add('hidden-form');
    registerContent.classList.remove('hidden-form');
    tabLogin.classList.remove('color');
    tabRegister.classList.add('color');
  }
});

formLogin.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit();
});

formReg.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmitRegister();
});

// Handlers
async function onSubmit() {
  const isValidForm = inputsLogin.every(elem => {
    const isValidInput = validate(elem);

    if (!isValidInput) {
      showInputError(elem);
    }

    return isValidInput;
  });

  if (!isValidForm) return;

  try {
    showLoader();
    await login(inputEmail.value, inputPassword.value);
    removePreloader();
    await getNews();
    formLogin.reset();
    notify({ 
      msg: 'Login success.',
      className: 'alert-success' });
  } catch (err) {
    notify({ 
      msg: 'No user found. Please, register.',
      className: 'alert-danger' });
    removePreloader();
    formLogin.reset();
  }
}

async function onSubmitRegister() {
  const isValidForm = inputsRegister.every(elem => {
    const isValidInput = validate(elem);

    if (!isValidInput) {
      showInputError(elem);
    }

    return isValidInput;
  });

  if (!isValidForm) return;

  let userReg = {};

  inputsRegister.forEach(item => {
    userReg[item.id] = item.value;
  });
  userReg.gender_orientation = gender.value;
  let [birth_year, birth_month, birth_day] = date_of_birth.value.split('-');
  userReg.date_of_birth_day = birth_day;
  userReg.date_of_birth_month = birth_month;
  userReg.date_of_birth_year = birth_year;

  try {
    showLoader();
    let res = await register(userReg);
    removePreloader();
    formReg.reset();
    notify({ 
      msg: `${res.message}`,
      className: 'alert-success'
    });
  } catch (err) {
    notify({ 
      msg: 'Register faild',
      className: 'alert-danger' });
  }
}