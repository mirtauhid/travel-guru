import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Booking = () => {
    const history = useHistory();

    const proceedSubmit = () => {
        history.push('/destination');
    }

    return (
        <div>
            <Button onClick={proceedSubmit} variant="warning">Submit</Button>
        </div>
    );
};

export default Booking;