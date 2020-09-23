import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <Container>
            <Header></Header>
            <Slider></Slider>
        </Container>
    );
};

export default Home;