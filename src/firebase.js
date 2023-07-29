// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyAH70TKvIheDLIVEZIBkGOeWIShc3cRoKQ',
    authDomain: 'anugeo-52f18.firebaseapp.com',
    projectId: 'anugeo-52f18',
    storageBucket: 'anugeo-52f18.appspot.com',
    messagingSenderId: '727630167809',
    appId: '1:727630167809:web:2e880bacfaa509d7d0a500',
    measurementId: 'G-CLX23JZ6T1',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
