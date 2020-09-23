import React from 'react';
import { Button, Container } from 'react-bootstrap';
import * as firebase from "firebase/app";
import "firebase/auth";

const SignOut = () => {
    const firebaseConfig = {
        apiKey: "AIzaSyD_-v4-NQKgYS6tthQSiQM_tEJWyPWL2T0",
        authDomain: "travel-guru-agency.firebaseapp.com",
        databaseURL: "https://travel-guru-agency.firebaseio.com",
        projectId: "travel-guru-agency",
        storageBucket: "travel-guru-agency.appspot.com",
        messagingSenderId: "121229455478",
        appId: "1:121229455478:web:9caec514b89d8d0e4cef57"
    };




    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    return (
        <Container>
            <Button>Logout</Button>
        </Container>
    );
};

export default SignOut;