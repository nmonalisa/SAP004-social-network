export const register = (email, password) => firebase
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .then(() => {
    window.location.hash = ('#login');
  })
  .catch(error => error);
