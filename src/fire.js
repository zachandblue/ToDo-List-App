import firebase from 'firebase';

var config = { apiKey: "AIzaSyChI8CB6f4rapR85HX0uCevbAH00i6GoS8",
    authDomain: "todo-3a42f.firebaseapp.com",
    databaseURL: "https://todo-3a42f.firebaseio.com",
    projectId: "todo-3a42f",
    storageBucket: "todo-3a42f.appspot.com",
    messagingSenderId: "959407242105"
  };

firebase.initializeApp(config);

export default firebase;
