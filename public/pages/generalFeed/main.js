import { logOut, createPost, readPost } from './data.js';

<<<<<<< HEAD
export const generalFeed = () => {
  document.querySelector('#root').innerHTML = '';
=======
const setLogOutOnButton = () => {
  document.querySelector('.signOut').addEventListener('click', (event) => {
    event.preventDefault();
    logOut();
  });
};

const getTextToPublish = () => {
  document.querySelector('#publish-btn').addEventListener('click', () => createPost(document.querySelector('#postText').value));
};

export const clearPostArea = () => {
  document.querySelector('#post-area').innerHTML = '';
};


export const loadPostTemplate = (text) => {
  const postBox = document.createElement('div');
  postBox.innerHTML = `${text}`;
  postBox.classList.add('post-area');
  document.querySelector('#post-area').appendChild(postBox);
};
>>>>>>> 3f125599380b2363bc1b4b5cff43fc3ec9ef522f

export const generalFeed = () => {
  document.querySelector('#root').innerHTML = '';
  const containerFeed = document.createElement('div');
  containerFeed.innerHTML = `
  <div class='boxFeed'>
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
    <section class='share-area'>
      <textarea id='postText' placeholder='O que você quer compartilhar?'></textarea>
      <div class='share-area-buttons'>
<<<<<<< HEAD
      <button class='circle violet'><img class='icon-circle' src='../../assets/camera.png'></button>
        <button class='btn btn-small  purple'>Publicar</button>
      </div>
=======
        <button class='circle violet'><img class='icon-circle' src='../../assets/camera.png'></button>
        <button id='publish-btn' class='btn btn-small purple'>Publicar</button>    
      </div> 
>>>>>>> 3f125599380b2363bc1b4b5cff43fc3ec9ef522f
    </section>

    <section id='post-area'>
      </section>
  </div>
  `;
  document.querySelector('#root').appendChild(containerFeed);

<<<<<<< HEAD
  containerFeed.querySelector('.signOut').addEventListener('click', (event) => {
    event.preventDefault();
    logOut();
  });

  return document.querySelector('#root').appendChild(containerFeed);
};
=======
  // Chamada das funções
  setLogOutOnButton();
  getTextToPublish();
  readPost();
};
>>>>>>> 3f125599380b2363bc1b4b5cff43fc3ec9ef522f
