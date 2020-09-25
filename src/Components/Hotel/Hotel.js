import React from "react";

const Hotel = (props) => {
    const { title, facility, special, others, url } = props.singleLocation;
    return (
        <div className="hotel-card d-flex my-4 align-items-lg-center">
            <div className="img mr-4">
                <img src={url} alt="" style={{ maxWidth: "270px" }} />
            </div>
            <div className="info">
                <h6>{title}</h6>
                <p><small>{facility}</small></p>
                <p><small>{special}</small></p>
                <p><small>{others}</small></p>
                <p className="ratings d-flex">
                    <strong>&#9733;&#9733;&#9733;&#9733; </strong>
                    <span> </span>
                    <strong>$199 </strong>
                    <span> </span>
                    <del>$99 discount</del>
                </p>
            </div>
        </div>
    );
};

export default Hotel;