import React from 'react';
import { Container } from 'react-bootstrap';
import errorImg from '../../Images/404-Pages.jpg';

const NotFound = () => {
    return (
        <div>
            <img style={{ height: "502px", width: "100%", marginTop: "10px"}} src={errorImg} alt=""/>
        </div>
    );
};

export default NotFound;