import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDZhllQeleel-tjfkpL-MNABdC3bABw4r0",
    authDomain: "stocktrader-fcc4e.firebaseapp.com",
    databaseURL: "https://stocktrader-fcc4e.firebaseio.com",
    projectId: "stocktrader-fcc4e",
    storageBucket: "stocktrader-fcc4e.appspot.com",
    messagingSenderId: "349941798776",
    appId: "1:349941798776:web:8bafca194c1ffe644d1a8d",
    measurementId: "G-MJ1KBH0D40"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseApp = firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({ timestampsInSnapshots: true})

export default firebaseApp.firestore()
