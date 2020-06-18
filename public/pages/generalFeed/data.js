// Data da publicação:
const getData = () => {
  const data = new Date();
  return data.toLocaleString();
};

export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.hash = '#login';
    })
    .catch(error => error);
};

export const createPost = (postText) => {
  firebase
    .firestore()
    .collection('posts')
    .add({
      user: `${firebase.auth().currentUser.email}`,
      text: postText,
      data: getData(),
    })
    .then((doc) => {
      console.log('Document written with ID: ', doc.id);
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const readPost = (callback) => {
  firebase
    .firestore()
    .collection('posts')
    .orderBy('data', 'desc')
    .onSnapshot((snapshot) => {
      const post = [];
      snapshot.forEach((doc) => {
        const { user, data, text } = doc.data();
        post.push({
          user,
          data,
          text,
          code: doc.id,
        });
      });
      callback(post);
    });
};

export const editPost = (newText, postID) => {
  console.log(postID);
  firebase
    .firestore()
    .collection('posts')
    .doc(postID).update({ text: newText })
    .then(() => console.log('Postagem editada com sucesso'))
    .catch(() => console.log('Ops!Postagem não editada'));
};