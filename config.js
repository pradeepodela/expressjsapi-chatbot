const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyCFqM3evGIWDqLUACimTbJBqR7xtd-eNYs",
  authDomain: "chat-355017.firebaseapp.com",
  projectId: "chat-355017",
  storageBucket: "chat-355017.appspot.com",
  messagingSenderId: "891491354835",
  appId: "1:891491354835:web:8c959da408334f29696c26",
  measurementId: "G-58D85D74TQ"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("Users");
module.exports = User;
