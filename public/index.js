import { home } from './pages/home/main.js';
// import { configurations } from './pages/configurations/main.js';
// import { personalFeed } from './pages/personalFeed/main.js';
import { generalFeed } from './pages/generalFeed/main.js';
import { signUp } from './pages/signUp/main.js';

const init = () => {
  window.addEventListener('hashchange', () => {
    switch (window.location.hash) {
      // case '#login':
      //   home();
      //   break;
      case '#signup':
        signUp();
        break;
        // case '#personalFeed':
        //   personalFeed();
        // break;
      case '#generalFeed':
        generalFeed();
        break;
        // case '#configurations':
        //   configurations();
        //   break;
      default:
        home();
    }
  });
};
init();

window.addEventListener('load', () => {
  switch (window.location.hash) {
    case '#login':
      home();
      break;
    case '#signup':
      signUp();
      break;
      // case '#personalFeed':
      //   personalFeed();
      // break;
    case '#generalFeed':
      generalFeed();
      break;
      // case '#configurations':
      //   configurations();
      //   break;
    default:
      home();
  }
});
