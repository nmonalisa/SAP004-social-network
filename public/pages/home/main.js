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
  <h3>Seja bem-vinde!</h3>
  </div><br>

  <div class='box-item'>
  <form method='post'>
  <input type='email' placeholder='e-mail' id='emailArea' class='loginArea'><br>
  <input type='password' placeholder='senha' id='passwordArea' class='loginArea'><br><br>
  <button class='buttonArea btn'>Entrar</button>
  <p>ou</p>
  <button  class='buttonArea btn'>Acesse com <img src='../../assets/google-icon.png' alt='Google' class='google-icon'></button><br><br><br>
    <p class='font-small'>Se não tem um conta, <a href='/#signup'>registre-se.</a></p>
  </form>
  </div>
  `;
  return main.appendChild(containerLogin);
};