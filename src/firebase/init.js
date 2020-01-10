import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyBBDHcBhKS3sGGLcNK4S46pku1--ZJnCFs",
    authDomain: "chat-85609.firebaseapp.com",
    databaseURL: "https://chat-85609.firebaseio.com",
    projectId: "chat-85609",
    storageBucket: "chat-85609.appspot.com",
    messagingSenderId: "777753554218",
    appId: "1:777753554218:web:108e2091df30acb3004253"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()
