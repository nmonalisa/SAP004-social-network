export const signIn = (email, password, mexirica) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((result) => {
      window.location.hash = '#generalFeed';
<<<<<<< HEAD
      return result;
=======
>>>>>>> 3f125599380b2363bc1b4b5cff43fc3ec9ef522f
    })
    .catch(error => mexirica(error));
};

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      window.location.hash = '#generalFeed';
      return result;
    }).catch(error => error);
};
