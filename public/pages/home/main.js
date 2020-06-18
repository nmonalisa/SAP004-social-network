// Página de login
import { signIn, loginWithGoogle } from './data.js';
import { errorCodes } from '../constants.js';

export const home = () => {
  // Esconder cabeçalho da página
  document.getElementsByTagName('header')[0].style.display = 'none';

  // Template
  const main = document.getElementById('root');
  main.innerHTML = '';
  const containerLogin = document.createElement('div');
  containerLogin.setAttribute('class', 'box');
  containerLogin.innerHTML = `
  <div class='box-item'><h1>RAINBOW</h1>
  <img src='../../assets/logo_small.jpg' alt='Logotype' class='icon-large'>
  <h3 class='slogan-desktop'>A rede social da comunidade LGBTQI+</h3>
  </div><br>
  <div class='box-item'>
  <h3>Seja bem-vinde!</h3>
  <form method='post'>
  <input type='email' placeholder='e-mail' id='emailArea' class='loginArea'><br>
  <input type='password' placeholder='senha' id='passwordArea' class='loginArea'><br><br>
  </form>
  <div class="inerror-message" id="error-login"></div>
  <button class='buttonArea btn signIn'>Entrar</button>
  <p>ou</p>
  <button class='buttonArea btn btnGoogle'>Acesse com <img src='../../assets/google-icon.png' alt='Google' class='google-icon'></button><br><br><br>
  <p class='font-small'>Se não tem um conta, <a href='/#signup'>registre-se.</a></p>
  </div>
  `;

  const googleButton = containerLogin.querySelector('.btnGoogle');
  const signInButton = containerLogin.querySelector('.signIn');
  const errorLogin = containerLogin.querySelector('#error-login');

  const onError = (error) => {
    if (errorCodes[error.code]) {
      errorLogin.innerHTML = errorCodes[error.code];
    } else {
      errorLogin.innerHTML = errorCodes.DEFAULT_MESSAGE;
    }
  };

  signInButton.addEventListener('click', (event) => {
    event.preventDefault();
    signIn(containerLogin.querySelector('#emailArea').value, containerLogin.querySelector('#passwordArea').value, onError);
  });

  googleButton.addEventListener('click', () => {
    loginWithGoogle();
  });

  return main.appendChild(containerLogin);
};
