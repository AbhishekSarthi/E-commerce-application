const express = require('express');
const router = express.Router();

const firebase = require('firebase/app');
// Add the Firebase products that you want to use
require('firebase/auth');
require('firebase/firestore');

let firebaseConfig = {
    apiKey: 'AIzaSyBtrL7Rw28QFJ6skKAXoHRc38DS9N-cLAk',
    authDomain: 'testing-9755c.firebaseapp.com',
    projectId: 'testing-9755c',
    storageBucket: 'testing-9755c.appspot.com',
    messagingSenderId: '354708519313',
    appId: '1:354708519313:web:2c7e3a9d22857dc77bc230',
    // measurementId: 'G-MJYCTT96LZ',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const email = 'abhi.sarthi9@gmail.com';
const pass = 'test@123';
let data;
router.get('/signup', async (req, res) => {
    const signUp = async () => {
        try {
            const cred = await auth.createUserWithEmailAndPassword(email, pass);

            console.log('User Created', cred.user);
            data = cred.user;
            res.send(data);
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    };
    signUp();
});

router.get('/login', (req, res) => {
    const login = async () => {
        const cred = await auth.signInWithEmailAndPassword(email, pass);
        console.log('User Logged in', cred.user);
        data = cred.user;
        res.send(data);
    };

    login();
});

router.get('/logout', async (req, res) => {
    const logout = async () => {
        try {
            await auth.signOut();
            console.log('user Logged Out');
            res.send('Logged Out');
        } catch (err) {
            console.log(err);
            res.send(err);
        }
    };
    logout();
});

module.exports = router;
