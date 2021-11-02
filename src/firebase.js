import firebase from 'firebase/compat/app';

import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA3Cm2Emii-cjj0-Sbut_YYhplk8KcTQ8w",
    authDomain: "yt-krish.firebaseapp.com",
    projectId: "yt-krish",
    storageBucket: "yt-krish.appspot.com",
    messagingSenderId: "77918600587",
    appId: "1:77918600587:web:d2fb3e0fd28bc689df438e"
  };

  firebase.initializeApp(firebaseConfig);
  
  
  export default firebase.auth()
  