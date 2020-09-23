import * as firebase from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyD_-v4-NQKgYS6tthQSiQM_tEJWyPWL2T0",
    authDomain: "travel-guru-agency.firebaseapp.com",
    databaseURL: "https://travel-guru-agency.firebaseio.com",
    projectId: "travel-guru-agency",
    storageBucket: "travel-guru-agency.appspot.com",
    messagingSenderId: "121229455478",
    appId: "1:121229455478:web:9caec514b89d8d0e4cef57"
};

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUserInfo = res.user;
            newUserInfo.error = '';
            newUserInfo.success = true;
            return newUserInfo;
        });
}
