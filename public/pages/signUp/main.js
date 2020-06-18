import { register } from './data.js';
import { errorCodes } from '../constants.js';

export const signUp = () => {
  const main = document.getElementById('root');
  main.innerHTML = '';

  const containerSignUp = document.createElement('div');
  containerSignUp.setAttribute('class', 'box');
  containerSignUp.innerHTML = `
  <div class='box-item'><h1>RAINBOW</h1>
  <img src='../../assets/logo_small.jpg' alt='Logotype' class='icon-large'>
  
  </div><br>
  <div class='box-item'>
  <h3>Seja bem-vinde!</h3>
  <form method='post'>
  <input type="text" placeholder="Insira seu nome" id="username" class='loginArea'><br>
  <input type="email" placeholder="Insira um e-mail" id="register-email" class="loginArea"><br>
  <input type="password" placeholder="Insira uma senha" id="register-password" class="loginArea"><br><br>
  <div class="error-message" id="singup-error"></div>
  <button class="btn buttonArea" id="button-register">Cadastrar</button>
  </form>
  </div>
  `;
  const newRegister = containerSignUp.querySelector('#button-register');
  const inputEmail = containerSignUp.querySelector('#register-email');
  const inputPassword = containerSignUp.querySelector('#register-password');
  const inputError = containerSignUp.querySelector('#singup-error');

  const onError = (error) => {
    if (errorCodes[error.code]) {
      inputError.innerHTML = errorCodes[error.code];
    } else {
      inputError.innerHTML = errorCodes.DEFAULT_MESSAGE;
    }
  };

  const newUser = (event) => {
    event.preventDefault();
    return register(inputEmail.value, inputPassword.value, onError);
  };
  newRegister.addEventListener('click', newUser);
  return main.appendChild(containerSignUp);
};
