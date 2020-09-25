import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import './Booking.css';

const Booking = () => {
    const history = useHistory();
    const { name } = useParams();
    const [selectedLocation, setSelectedLocation] = useState({});

    useEffect(() => {
        fetch('https://www.json-generator.com/api/json/get/bVBYKhhueW?indent=2')
            .then(res => res.json())
            .then(data => {
                const singleLocation = data.map(singleData => singleData);
                const locationInfo = singleLocation.find(data => data.title === name);
                console.log(locationInfo);
                setSelectedLocation(locationInfo);
            })

    }, [])


    const proceedSubmit = (event) => {
        history.push('/destination');
        console.log(event.target.fromDate);
    }



    return (
        <Container>
            <Row style={{ marginTop: '50px' }}>
                <Col md={6}>
                    <h1 className="title">{selectedLocation.title}</h1>
                    <p>{selectedLocation.article}</p>
                    <br />
                    
                </Col>
                <Col md={6}>
                    <div>
                        <form onSubmit={proceedSubmit} className="bookingForm" >
                            <label for="cityFrom">Origin</label>
                            <select name="cityFrom" id="CityFrom" required >
                                <option value="Dhaka">Dhaka</option>
                                <option value="Chittagong">Chittagong</option>
                                <option value="Khulna">Khulna</option>
                                <option value="Sylhet">Sylhet</option>
                                <option value="Barisal">Barisal</option>
                                <option value="Rajshahi">Rajshahi</option>
                                <option value="Mymensingh">Mymensingh</option>
                                <option value="Rangpur">Rangpur</option>
                            </select>
                            <br />
                            <label for="cityTo">Destination</label>
                            <select name="cityTo" id="city-to" required >
                                <option value="COX'S BAZAR">COX'S BAZAR</option>
                                <option value="SAJEK">SAJEK</option>
                                <option value="SREEMANGAL">SREEMANGAL</option>
                                <option value="SUNDARBAN">SUNDARBAN</option>
                            </select>
                            <br />
                            <div style={{display: 'flex', justifyContent: 'space-between', width: '200px', marginTop: '-5px'}}>
                                <label for="from-date">From</label>
                                <label for="to-date" >To</label>
                            </div>
                            <div className="form-group">
                                <input id="fromDate" type="date" name="fromDate" id="" required />
                                <input id="toDate" type="date" name="toDate" id="" required />
                            </div>
                            <br />
                            <input type="submit" value="Start Booking" id="submit" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Booking;