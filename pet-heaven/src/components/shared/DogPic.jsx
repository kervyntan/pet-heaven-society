import React from 'react';

const DogPic = (props) => {
    return (
        <div key={Math.random()} className="d-flex dog-pic">
        <h2> Tracy </h2>
        <img width="250" height="250" src={props.src} />
        </div>
    )
}

export default DogPic;