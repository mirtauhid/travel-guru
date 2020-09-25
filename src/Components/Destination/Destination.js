import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Hotel from '../Hotel/Hotel';
import MapContainer from '../MapContainer/MapContainer';
import './Destination.css';

const Destination = (props) => {

    const [selectedLocation, setSelectedLocation] = useState([]);


    useEffect(() => {
        fetch('https://www.json-generator.com/api/json/get/bTGKMgixyW?indent=2')
            .then(res => res.json())
            .then(data => {
                setSelectedLocation(data);
            })

    }, [])




    return (
        <Container>
            <Row >
                <Col md={6} >
                    {
                        selectedLocation.map(singleLocation => <Hotel singleLocation={singleLocation}></Hotel>)
                    }
                </Col>
                <Col md={6} style={{paddingTop: '25px'}}>
                    <MapContainer></MapContainer>
                </Col>
            </Row>
        </Container>
    );
};

export default Destination;
