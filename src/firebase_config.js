import firebase from "firebase";
var firebaseConfig = {
    apiKey: "AIzaSyAOaDs8OY6rrdzwQUH6KgpZ72jxGTu2nL8",
    authDomain: "todoapp-fb90b.firebaseapp.com",
    projectId: "todoapp-fb90b",
    storageBucket: "todoapp-fb90b.appspot.com",
    messagingSenderId: "775491797483",
    appId: "1:775491797483:web:eb04a4a204fc1126bf19ae"
  };

  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  export {db};