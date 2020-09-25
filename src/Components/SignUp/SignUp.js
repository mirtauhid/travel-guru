import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import FbIcon from '../../Images/Icon/fb.png';
import GoogleIcon from '../../Images/Icon/google.png';
import { UserContext } from '../../App';
import { handleFbSignIn, handleGoogleSignIn, createUserWithEmailAndPassword, initializer } from '../AuthManager/AuthManager';
import './SignUp.css';


const SignUp = () => {

    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
    });


    // eslint-disable-next-line no-unused-vars
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    initializer();



    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };




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




    const handleSubmit = (event) => {
        if (user.email && user.password) {
            const fullName = document.getElementById('firstName') + ' ' +
                document.getElementById('lastName');
            createUserWithEmailAndPassword(fullName, user.email, user.password)
                .then(res => {
                    handleResponse(res);
                })
            event.preventDefault();
        }
    }



    const googleSignIn = (event) => {
        handleGoogleSignIn()
            .then(res => {
                handleResponse(res);
            })
        event.preventDefault();
    }





    const fbSignIn = (event) => {
        handleFbSignIn()
            .then(res => {
                handleResponse(res);
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
        <Container >
            <div className="form-container">
                <form onSubmit={handleSubmit} className="form">
                    <h4>Create an account</h4>
                    <br />
                    <input type="text" onBlur={handleBlur} name="firstName" id="firstName" placeholder="First Name" required />
                    <br />
                    <input type="text" onBlur={handleBlur} name="lastName" id="lastName" placeholder="Last Name" required />
                    <br />
                    <input type="text" onBlur={handleBlur} name="email" placeholder="Username or Email" required />
                    <br />
                    <input id="password" type="password" onBlur={handleBlur} name="password" placeholder="Password" required />
                    <br />
                    <input id="confirmPassword" type="password" onBlur={handleBlur} name="confirmPassword" placeholder="Confirm Password" required />
                    <br />
                    <input className="submit-button" type="submit" value="Create an account" />
                    <br />
                    <p className="alert"><small>Already have an account? <span><a as={Link} href="/login">Login</a></span> </small></p>
                </form>
                <div style={{textAlign: 'center'}}>
                    <p style={{ color: 'red' }}>{user.error}</p>
                    {user.success && <p style={{ color: 'green' }}>User created successfully</p>}
                </div>
            </div>
            <hr className="divider"/>
            <div className='socialLoginButton'>
                <button onClick={fbSignIn} ><img className='socialIcon' src={FbIcon} alt="" /> Continue with Facebook</button>
                <br />
                <button onClick={googleSignIn} ><img className='socialIcon' src={GoogleIcon} alt="" /> Continue with Google</button>
            </div>
        </Container>
    );
};

export default SignUp;