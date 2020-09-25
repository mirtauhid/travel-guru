import React from 'react';
import { Link, useHistory, } from 'react-router-dom';
import './Slider.css';


const Slider = (props) => {


    const { title, url } = props.venue;
    console.log(title);


    


    const history = useHistory()
    const handleBook = (title) => {
        history.push(`/booking/${title}`);
    }


    return (
        <div className="products fill  justify-content">
            <div class="cards" >
                <img class="card-img-top" src={url} alt="Card cap" />
                <div class="card-body">
                    <h3 class="card-title">{title}</h3>
                    <button onClick={() => handleBook(title)} variant="warning"><Link style={{ textDecoration: 'none', color: 'black' }} >Booking</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Slider;