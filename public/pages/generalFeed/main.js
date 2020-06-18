import {
  logOut,
  createPost,
  readPost,
  editPost,
} from './data.js';


// Funções auxiliares chamadas dentro das funções que criam a página e os posts
const setLogOutOnButton = () => {
  document.querySelector('.signOut').addEventListener('click', (event) => {
    event.preventDefault();
    logOut();
  });
};

const getTextToPublish = () => {
  document.querySelector('#publish-btn').addEventListener('click', () => createPost(document.querySelector('#postText').value));
};

const clearPostArea = () => {
  document.querySelector('#post-area').innerHTML = '';
};

const getChangesFromEditedPost = (listener, newText, postID) => listener.addEventListener('click', () => {
  editPost(newText, postID);
});

const resetPost = (postList) => {
  clearPostArea();
  postList.forEach(loadPostTemplate);
};

// ---------------------------

// Funções principais:
// Manipulação dos elementos da página (generalFeed) e das postagens (loadPostTemplate)

export const generalFeed = () => {
  document.querySelector('#root').innerHTML = '';
  const containerFeed = document.createElement('div');
  containerFeed.innerHTML = `
  <div class='general-container'>
  <header>
  <nav class='navbar'>
      <figure>
          <img class='icon-circle icon-logo' src="../../assets/logo_small.jpg" alt="Logotipo">
      </figure>
      <div>
        <button class='circle yellow'>
        <img class='icon-circle' src='../../assets/settings.png'>
        </button>
        <button class='circle signOut orange'>
        <img class='icon-circle' src='../../assets/logout.png'>
        </button>
      </div>
    </nav>
  </header>
  <div class='box-feed'>
    <section class='profile-area'>
      <figure>
        <img class='photo'>
      </figure>
      <div class='name-profile-area'>
        <h3>Fulane da Silva Sauro
        </h3>
        <h5>Descrição</h5>
      </div>
    </section>
    <div class='share-and-post'>
    <section class='share-area'>
      <textarea id='postText' placeholder='O que você quer compartilhar?'></textarea>
      <div class='share-area-buttons'>
        <button class='circle violet'><img class='icon-circle' src='../../assets/camera.png'></button>
        <button id='publish-btn' class='btn btn-small purple'>Publicar</button>    
      </div> 
    </section>
    <section id='post-area' class='posts-container'>
      </section>
    </div>
  </div>
  </div>
  
  
  `;
  document.querySelector('#root').appendChild(containerFeed);

  setLogOutOnButton();
  getTextToPublish();
  readPost(resetPost);
};


// Criar elementos de posts individuais
const loadPostTemplate = ({
  code,
  user,
  data,
  text,
}) => {
  // Tag <data> com código único de cada post no banco de dados.
  const postBox = document.createElement('div');
  postBox.innerHTML = `
  <data value=${code}></data>
  <header class='title-post-box green'>
    <div>${user}</div><div>${data}</div>
  </header>
  <input disabled class='text post-text' type='text' value='${text}'>
  <div class='save-btn-area display-none''>
    <button class='edit-save-btn' type='button'>Salvar</button>
  </div>
  <footer class='footer-post-box'>
    <div>Curtidas</div>
    <div>Comentários</div>
    <div><button class='edit-btn'>Editar<buttton></div>
    <div>Excluir</div>
  </footer>
  `;
  postBox.classList.add('post-area');
  document.querySelector('#post-area').appendChild(postBox);

  // Manipulação dos elementos do template para permitir edição das postagens:
  postBox.querySelector('.edit-btn').addEventListener('click', () => {
    postBox.querySelector('.text').removeAttribute('disabled');
    postBox.querySelector('.save-btn-area').classList.remove('display-none');
    getChangesFromEditedPost(postBox.querySelector('.edit-save-btn'), postBox.querySelector('.text').value, postBox.getElementsByTagName('data')[0].value);
  });
};