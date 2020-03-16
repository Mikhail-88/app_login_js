import axios from '../plugins/axios';

async function login(email, password) {
  try {
    const response = await axios.post(`/auth/login`, JSON.stringify({
      email,
      password
    }));
    
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

async function register(obj) {
  try {
    const response = await axios.post(`/auth/signup`, JSON.stringify(obj));
    
    console.log(response);
    return response;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export { login, register };