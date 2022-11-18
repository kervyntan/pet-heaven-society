import React from 'react';

const DogPic = (props) => {
    return (
        <div className="d-flex dog-pic">
        <h2> Tracy </h2>
        <img src={props.src} />
        </div>
    )
}

export default DogPic;