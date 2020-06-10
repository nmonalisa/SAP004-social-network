export const logOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      alert('Deseja realmente sair da página?');
      window.location.hash = '#login';
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
};