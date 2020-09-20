import React from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Login = () => {
    firebase.initializeApp(firebaseConfig);

    return (
        <Container>
            <div className="login-form">
                <h4>Login</h4>
                <form action="">
                    <input type="text" name="email" placeholder="Username or Email" />
                    <br/>
                    <input type="password" name="password" placeholder="Password" />
                    <br/>
                    <input type="checkbox" name="remember" />
                    <p><small>Remember Me</small></p>
                    <p><small><a as={Link} href="*">Forgot Password</a></small></p>
                    <br/>
                    <input type="submit" value="Login"/>
                </form>
                <p><small>Don't have an account? <span><a as={Link} href="/signup">Create an account</a></span></small></p>
            </div>
        </Container>
    );
};

export default Login;