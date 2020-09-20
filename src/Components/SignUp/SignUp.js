import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const SignUp = () => {
    firebase.initializeApp(firebaseConfig);


    return (
        <Container>
            <div className="sign-up-form">
                <h4>Create an account</h4>
                <form action="">
                    <input type="text" name="firstName" placeholder="First Name" />
                    <br />
                    <input type="text" name="lastName" placeholder="Last Name" />
                    <br />
                    <input type="text" name="email" placeholder="Username or Email" />
                    <br />
                    <input type="password" name="password" placeholder="Password" />
                    <br />
                    <input type="password" name="confirmPassword" placeholder="Confirm Password" />
                    <br />
                    <input type="submit" value="Create an account" />
                </form>
                <p><small>Already have an account? <span><a as={Link} href="/login">Login</a></span></small></p>
            </div>
        </Container>
    );
};

export default SignUp;