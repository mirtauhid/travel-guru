import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Slider from '../Slider/Slider';
import './Home.css';
import bgImg from '../../Images/Image/Rectangle 1.png';

const Home = () => {
    const [location, setLocation] = useState([]);

    useEffect(() => {
        fetch('https://www.json-generator.com/api/json/get/cejvNtryYy?indent=2')
            .then(res => res.json())
            .then(data => {
                setLocation(data);
                console.log(data);
            })
    }, [])


    return (
        <div className="home-container">
            
            <Row>
                {
                    location.map(venue => <Slider venue={venue}></Slider>)
                }
            </Row>
        </div>
    );
};

export default Home;