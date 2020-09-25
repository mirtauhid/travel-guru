import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";



export const initializer = () => {
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}




export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                error: '',
                success: true
            }
            return signedInUser;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}




export const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            // eslint-disable-next-line no-unused-vars
            const token = res.credential.accessToken;
            const { displayName, email } = res.user;
            console.log(res);
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                error: '',
                success: true
            }
            return signedInUser;

        }).catch(error => {
            console.log(error);
            console.log(error.message);
        });
}



export const handleFbSignIn = () => {
    const FbProvider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(FbProvider)
        .then(res => {
            // eslint-disable-next-line no-unused-vars
            const token = res.credential.accessToken;
            const { displayName, email } = res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                error: '',
                success: true
            }
            return signedInUser;
        })
        .catch(error => {
            console.log(error);
            console.log(error.message);
        })
}



export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            const { displayName, email } = res.user;
            const signedUpUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                error: '',
                success: true
            }
            updateUserInfo(name);
            return signedUpUser;
        })
        .catch(error => {
            const newUserInfo = {};
            newUserInfo.error = error.message;
            newUserInfo.success = false;
            return newUserInfo;
        });
}



const updateUserInfo = name => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    }).then(res => {
        console.log('Profile updated successfully');
    })
        .catch(error => {
            console.log(error);
        });
}




