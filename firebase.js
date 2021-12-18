import * as firebase from "firebase";
import "firebase/au"

const firebaseConfig = {
    apiKey: "AIzaSyA-aGeoZBpdhIGDYbCUZqdXPvtwiTD0ay0",
    authDomain: "ideal-cleaning-573e0.firebaseapp.com",
    projectId: "ideal-cleaning-573e0",
    storageBucket: "ideal-cleaning-573e0.appspot.com",
    messagingSenderId: "496560778128",
    appId: "1:496560778128:web:7ed8d3f8eb49cdbdaee115"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;