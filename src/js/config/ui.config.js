const UI = {
  navTab: document.getElementById('nav-tab'),
  tabLogin: document.getElementById('tab-login'),
  tabRegister: document.getElementById('tab-register'),
  loginContent: document.querySelector('.login-content'),
  registerContent: document.querySelector('.register-content'),
  formLogin: document.forms['loginForm'],
  inputEmail: document.getElementById('emailLog'),
  inputPassword: document.getElementById('passwordLog'),
  formReg: document.forms['registerForm'],
  inputRegEmail: document.getElementById('email'),
  inputRegPassword: document.getElementById('password'),
  nickname: document.getElementById('nickname'),
  first_name: document.getElementById('first_name'),
  last_name: document.getElementById('last_name'),
  phone: document.getElementById('phone'),
  country: document.getElementById('country'),
  city: document.getElementById('city'),
  date_of_birth: document.getElementById('date_of_birth'),
  gender: document.querySelector('.custom-select'),
};

export default UI;