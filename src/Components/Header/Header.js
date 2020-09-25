import React, { useContext } from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import Logo from '../../Images/Logo.png';
import firebaseConfig from '../AuthManager/firebase.config';
import './Header.css';



const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {};
                setLoggedInUser(signedOutUser);
            })
            .catch(error => {
                const signedOutUser = {
                    error: error.message
                }
                setLoggedInUser(signedOutUser);
            });
    }

    if (loggedInUser.name) {
        console.log(loggedInUser.name);
        var surname = loggedInUser.name.replace(/\s.*/, '');
        var surnameStyle = {
            marginLeft: '-17px',
            color: '#F9A51A',
        }
    } if (!loggedInUser.name) {
        surname = "";
    }


    return (
        <Container >
            <Row style={{ paddingTop: '10px' }}>
                <Col md={2}>
                    <Link to="/"><img style={{ width: '120px', height: '55px' }} src={Logo} alt="" /></Link>
                </Col>
                <Col md={4}>
                    <Form inline>
                        <FormControl style={{ width: '350px', marginTop: '6px' }} type="text" placeholder="Search" className=" mr-sm-2" />
                    </Form>
                </Col>
                <Col md={6}>
                    <Nav fill style={{ marginTop: '5px', color: 'black' }}>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/news">News</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link disabled style={surnameStyle} >{surname}</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {
                                loggedInUser.isSignedIn ? <Button onClick={handleSignOut} as={Link} to="/login" variant="warning" style={{ padding: '5px 15px', fontWeight: '500' }}>Logout</Button> :
                                    <Button as={Link} to="/login" variant="warning" style={{ padding: '5px 15px', fontWeight: '500' }}>Login</Button>
                            }
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;