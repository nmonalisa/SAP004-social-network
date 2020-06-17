// Data da publicação:
const getData = () => {
  const data = new Date();
  return data.toLocaleDateString();
};

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