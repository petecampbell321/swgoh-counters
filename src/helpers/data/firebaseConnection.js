import firebase from 'firebase/app';
import fbConfig from '../../setup/config/.firebase.config.json';

const firebaseApp = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(fbConfig);
  }
};

export default firebaseApp;
