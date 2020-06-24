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
  if (postText.search('https://firebasestorage.googleapis.com') !== -1) {
    console.log('estou enviando uma imagem');
    firebase
      .firestore()
      .collection('posts')
      .add({
        user: `${firebase.auth().currentUser.email}`,
        text: '',
        data: getData(),
        url: postText,
        likes: [],
        comments: [],
      });
  } else {
    console.log('estou enviando um texto');
    firebase
      .firestore()
      .collection('posts')
      .add({
        user: `${firebase.auth().currentUser.email}`,
        text: postText,
        data: getData(),
        url: postText,
        likes: [],
        comments: [],
      });
  };
};

export const readPost = (callbackToManipulatePostList) => {
  firebase
    .firestore()
    .collection('posts')
    .orderBy('data', 'desc')
    .onSnapshot((snapshot) => {
      const post = [];
      snapshot.forEach((doc) => {
        const { user, data, text, likes, comments, url } = doc.data();
        post.push({
          code: doc.id,
          user,
          data,
          text,
          likes,
          comments,
          url,
        });
      });
      // a callback é substituída pela função resetPost na chamada da função
      callbackToManipulatePostList(post);
    });
};

export const editPost = (newText, postID) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(postID).update({ text: newText });
};

export const deletePost = (id) => {
  firebase.firestore().collection('posts').doc(id).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};

export const sendImageToDatabase = (file, showUrlOfImagesToPubish) => {
  const ref = firebase.storage().ref('publishedImages-repository');
  ref.child(file.name).put(file)
    .then(() => {
      ref.child(file.name).getDownloadURL()
        .then(url => showUrlOfImagesToPubish(url));
    });
};

export const changeProfileImage = (file, callbackToSetNewImage) => {
  const ref = firebase.storage().ref('profileImages-repository');
  ref.child(file.name).put(file)
    .then((image) => {
      console.log('enviei esse snapshot para o bd:', image.metadata.name);
      ref.child(file.name).getDownloadURL()
        .then((url) => {
          callbackToSetNewImage(url);
          firebase.auth().currentUser
            .updateProfile({
              photoURL: url,
            });
        });
    });
};

export const likePosts = (postID) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(postID)
    .update({ likes: firebase.firestore.FieldValue.arrayUnion(firebase.auth().currentUser.uid) });
};

export const commentPosts = (postID, textContent) => {
  firebase
    .firestore()
    .collection('posts')
    .doc(postID)
    .update({
      comments: firebase.firestore.FieldValue.arrayUnion({
        uid: firebase.auth().currentUser.uid,
        name: firebase.auth().currentUser.displayName,
        text: textContent,
      }),
    });
};