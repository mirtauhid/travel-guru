import React, { useContext } from 'react';
import { Button, Col, Container, Form, FormControl, Nav, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import { UserContext } from '../../App';
import Logo from '../../Images/Logo.png';

const Header = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleSignOut = () => {
        firebase.auth().signOut()
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    error: '',
                    success: false
                }
                setLoggedInUser(signedOutUser);
            })
            .catch(error => {
                const signedOutUser = {
                    error: error.message
                }
                setLoggedInUser(signedOutUser);
            });
    }


    return (
        <Container>
            <Row style={{ paddingTop: '10px' }}>
                <Col md={2}>
                    <img style={{ width: '120px', height: '55px' }} src={Logo} alt="" />
                </Col>
                <Col md={4}>
                    <Form inline>
                        <FormControl style={{ width: '370px', marginTop: '5px' }} type="text" placeholder="Search" className=" mr-sm-2" />
                    </Form>
                </Col>
                <Col md={6}>
                    <Nav fill>
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
                            {
                                loggedInUser.isSignedIn ? <Button onClick={handleSignOut} as={Link} to="/login" variant="warning" style={{ padding: '5px 15px' }}>Logout</Button> :
                                    <Button as={Link} to="/login" variant="warning" style={{ padding: '5px 15px' }}>Login</Button>
                            }
                        </Nav.Item>
                    </Nav>
                </Col>
            </Row>
        </Container>
    );
};

export default Header;