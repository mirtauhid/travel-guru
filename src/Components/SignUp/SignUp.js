import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FbIcon from '../../Images/Icon/fb.png';
import GoogleIcon from '../../Images/Icon/google.png';
import * as firebase from "firebase/app";
import "firebase/auth";



const SignUp = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD_-v4-NQKgYS6tthQSiQM_tEJWyPWL2T0",
        authDomain: "travel-guru-agency.firebaseapp.com",
        databaseURL: "https://travel-guru-agency.firebaseio.com",
        projectId: "travel-guru-agency",
        storageBucket: "travel-guru-agency.appspot.com",
        messagingSenderId: "121229455478",
        appId: "1:121229455478:web:9caec514b89d8d0e4cef57"
    };

    const [user, setUser] = useState({
        newUser: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        success: false,
    });

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // Validator
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
        } if (event.target.name === 'password') {
            const lengthTest = event.target.value.length >= 6;
            const numberTest = /\d{1}/.test(event.target.value);
            isFieldValid = lengthTest && numberTest;
        } if (event.target.name === 'confirmPassword') {
            isFieldValid = document.getElementById("password").value ===
                document.getElementById("confirmPassword").value;
        } if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        if (user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    setUser(newUserInfo);
                    updateUserInfo(user.firstName + ' ' + user.lastName);
                })
                .catch(error => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    newUserInfo.success = false;
                    setUser(newUserInfo);
                });

        }
        e.preventDefault();
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


    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        firebase.auth().signInWithPopup(googleProvider)
            .then(res => {
                console.log(res)
                const { displayName, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    error: false,
                    success: true
                }
                setUser(signedInUser);
                console.log(user.name);
                const token = res.credential.accessToken;

            }).catch(error => {
                console.log(error);
                const signedInUser = {
                    error: true,
                    success: false
                }
                setUser(signedInUser);
            })
    }



    const FbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbSignIn = () => {
        firebase.auth().signInWithPopup(FbProvider)
            .then(res => {
                console.log(res)
                const { displayName, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    error: false,
                    success: true
                }
                setUser(signedInUser);
                console.log(user.name);
                const token = res.credential.accessToken;

            }).catch(error => {
                console.log(error);
                const signedInUser = {
                    error: true,
                    success: false
                }
                setUser(signedInUser);
            })
    }


    return (
        <Container style={{ textAlign: 'center' }}>
            <div style={{ border: '1px solid gray', padding: '2px' }}>
                <form onSubmit={handleSubmit}>
                    <h4>Create an account</h4>
                    <br />
                    <input type="text" onBlur={handleBlur} name="firstName" placeholder="First Name" required />
                    <br />
                    <input type="text" onBlur={handleBlur} name="lastName" placeholder="Last Name" required />
                    <br />
                    <input type="text" onBlur={handleBlur} name="email" placeholder="Username or Email" required />
                    <br />
                    <input id="password" type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                    <br />
                    <input id="confirmPassword" type="password" onBlur={handleBlur} name="confirmPassword" placeholder="Confirm Password" required />
                    <br />
                    <input type="submit" value="Create Account" />
                </form>
                <p><small>Already have an account? <span><a as={Link} href="/login">Login</a></span> </small></p>
                <p style={{ color: 'red' }}>{user.error}</p>
                {user.success && <p style={{ color: 'green' }}>User created successfully</p>}
            </div>
            <div style={{ marginTop: '26px' }}>
                <button onClick={handleFbSignIn} ><img style={{ width: '26px', height: '26px' }} src={FbIcon} alt="" /> Continue with Facebook</button>
                <br />
                <button onClick={handleGoogleSignIn} ><img style={{ width: '26px', height: '26px' }} src={GoogleIcon} alt="" /> Continue with Google</button>
            </div>
        </Container>
    );
};

export default SignUp;