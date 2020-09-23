import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link, } from 'react-router-dom';

const Slider = () => {
    // const history = useHistory()
    const handleBooking = (venue) => {
        // history.push(`/booking/${venue}`);
    }
    return (
        <Container style={{display: 'flex', paddingTop: '200px' }}>
            <Button as={Link} to="/booking" onClick={handleBooking('sundarban')} style={{margin: '50px', width: '150px'}} variant="warning">SUNDARBAN</Button>
            <Button as={Link} to="/booking" onClick={handleBooking('sreemangal')} style={{margin: '50px', width: '150px'}}  variant="warning">SREEMANGAL</Button>
            <Button as={Link} to="/booking" onClick={handleBooking('sajek')} style={{margin: '50px', width: '150px'}}  variant="warning">SAJEK</Button>
        </Container>
    );
};

export default Slider;