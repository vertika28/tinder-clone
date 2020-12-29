import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBRTDxnt0JjZ1A8b-8r2cwOgjEw0kV0VxE",
    authDomain: "tinder-clone-verti.firebaseapp.com",
    projectId: "tinder-clone-verti",
    storageBucket: "tinder-clone-verti.appspot.com",
    messagingSenderId: "81091533292",
    appId: "1:81091533292:web:0ee3a2709acd83a88688c9",
    measurementId: "G-94NMVG8VZ3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;