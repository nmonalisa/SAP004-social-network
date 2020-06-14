import { loadPostTemplate, clearPostArea } from './main.js'

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.hash = '#login';
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};

export const createPost = (text) => {
  firebase
    .firestore()
    .collection('posts')
    .add({
      user: `${firebase.auth().currentUser.email}`,
      text: `${text}`,
      data: '18/02/2020',
      likes: 0,
    })
    .then((doc) => {
      console.log('Document written with ID: ', doc.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const readPost = () => {
  firebase
    .firestore()
    .collection('posts')
    .onSnapshot((snapshot) => {
      const postList = [];
      snapshot.forEach(doc => postList.push(doc.data().text));

      // Carregar postagem no documento
      clearPostArea();
      postList.forEach(post => loadPostTemplate(post));
    });
};