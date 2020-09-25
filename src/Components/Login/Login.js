import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import FbIcon from '../../Images/Icon/fb.png';
import GoogleIcon from '../../Images/Icon/google.png';
import { UserContext } from '../../App';
import { signInWithEmailAndPassword, handleGoogleSignIn, handleFbSignIn, initializer } from '../AuthManager/AuthManager';
import './Login.css';





const Login = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    });


    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    initializer();






    // Validator
    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value)
        } if (event.target.name === 'password') {
            const lengthTest = event.target.value.length >= 6;
            const numberTest = /\d{1}/.test(event.target.value);
            isFieldValid = lengthTest && numberTest;
        } if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }





    const handleSubmit = (event) => {
        if (user.email && user.password) {
            signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    handleResponse(res)
                })

        }
        event.preventDefault();
    }




    const googleSignIn = (event) => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res)
            })
        event.preventDefault();
    }





    const fbSignIn = (event) => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res)
            })
        event.preventDefault();
    }



    const handleResponse = (res) => {

        if (res.success) {
            setUser(res);
            setLoggedInUser(res);
            history.replace(from);

        } if (!res.success) {
            setUser(res);
            setLoggedInUser(res);
        }

    }





    return (
        <Container>
            <div className="form-container">
                <form onSubmit={handleSubmit} className="login-form">
                    <h4>Login</h4>
                    <br />
                    <input type="text" onBlur={handleBlur} name="email" placeholder="Username or Email" required />
                    <br />
                    <input id="password" type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                    <br />
                    <input className="submit-button" type="submit" value="Login" />
                    <br />
                    <p className="alert"><small>Don't have any account? <span><a as={Link} href="/signup">Create an account</a></span> </small></p>
                </form>
                <div style={{textAlign: 'center'}}>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User logged in successfully</p>}
                </div>
            </div>
            <hr className="divider"/>
            <div className='socialLoginButton'>
                <button onClick={fbSignIn} ><img className='socialIcon'  src={FbIcon} alt="" /> Continue with Facebook</button>
                <br />
                <button onClick={googleSignIn} ><img className='socialIcon'  src={GoogleIcon} alt="" /> Continue with Google</button>
            </div>
        </Container>
    );
};

export default Login;