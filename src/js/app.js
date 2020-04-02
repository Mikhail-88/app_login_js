import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import UI from './config/ui.config';
import validate from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { login, register } from './services/auth.service';
import notify from './views/notifications';
import newsService from './services/news.service';
import { showLoader, removePreloader } from './helpers/preloader';
import renderNews from './helpers/renderNews';

const { navTab, tabLogin, tabRegister, loginContent, registerContent, formLogin, inputEmail, inputPassword, formReg, inputRegEmail, inputRegPassword, nickname, first_name, last_name, phone, country, city, date_of_birth,
gender, loginBlock, newsBlock, formNews, btnExit } = UI;
const inputsLogin = [inputEmail, inputPassword];
const inputsRegister = [inputRegEmail, inputRegPassword, nickname, first_name, last_name, phone, country, city];
const countrySelect = formNews.elements['country-news'];
const searchInput = formNews.elements['search'];

// Events
[...inputsLogin, ...inputsRegister].forEach(elem => elem.addEventListener('focus', () => removeInputError(elem)));

btnExit.addEventListener('click', () => {
  newsBlock.style.display = 'none';
  loginBlock.style.display = 'flex';
});

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

formNews.addEventListener('submit', (e) => {
  e.preventDefault();
  loadNews();
});

function loadNews() {
  const country = countrySelect.value;
  const searchText = searchInput.value;

  if (!searchText) {
    showLoader();
    newsService.topHeadlines(country)
      .then(data => {
        removePreloader();
        renderNews(data.articles);
      })
      .catch(err => {
        notify({ 
          msg: `Something wrong... ${err}`,
          className: 'alert-danger' });
        removePreloader();
      });
  } else {
    showLoader();
    newsService.everything(searchText)
      .then(data => {
        removePreloader();
        if (!data.articles.length) {
          notify({ 
            msg: 'Nothing found for this request.',
            className: 'alert-danger' });
          searchInput.value = '';
          return;
        }
        renderNews(data.articles);
        searchInput.value = '';
      })
      .catch(err => {
        notify({ 
          msg: `Something wrong... ${err}`,
          className: 'alert-danger' });
        removePreloader();
      });
    }
}

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
    formLogin.reset();
    notify({ 
      msg: 'Login success.',
      className: 'alert-success' });
    loginBlock.style.display = 'none';
    newsBlock.style.display = 'block';
    loadNews();
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