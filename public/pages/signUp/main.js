export const signUp = () => {

  const main = document.getElementById('root');
  main.innerHTML = '';

  const containerSignUp = document.createElement('div');

  containerSignUp.setAttribute('class', 'box');

  containerSignUp.innerHTML = `
  <div class='box-item'><h1>RAINBOW</h1>
  <img src='../../assets/logo_small.jpg' alt='Logotype' class='icon-large'>
  <h3>Seja bem-vinde!</h3>
  </div><br>

  <div class='box-item'>
  <form method='post'>

  <input type="text" placeholder="Insira seu nome" id="user-name" class='loginArea'><br>
 
  <input type="email" placeholder="Insira um e-mail" id="register-email" class="loginArea"><br>
  
  <input type="password" placeholder="Insira uma senha" id="register-passwrd" class="loginArea"><br><br>

  <button class="btn buttonArea">Cadastrar</button>
  <p>ou</p>
  <button class="btn buttonArea">Cadastrar com <img src='../../assets/google-icon.png' alt='Google' class='google-icon'></button>
  </form>
  </div>
  `;
  return main.appendChild(containerSignUp);
};