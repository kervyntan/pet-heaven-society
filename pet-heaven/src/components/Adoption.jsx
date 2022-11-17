// Lists the pets available for adoption
// at the bottom create a form to allow for pet owners to adopt the pet
// Form will be redirected to admins using emailjs

import React, { useEffect } from 'react';
import { useState } from 'react';
import AdoptForm from './AdoptForm';
import {useRef} from 'react';
import emailjs from '@emailjs/browser'
// need to fetch the data

const Adoption = () => {
    let counter = 10;
    const [dogs, setDogs] = useState('')
    const [loading, setLoading] = useState(true);
useEffect( () => {
    // while(counter !== 0) {
    //     fetch("https://dog.ceo/api/breeds/image/random")
    //     .then( (res) => res.json() )
    //     .then( (data) => setDogs({...dogs, "url" : data.message}));
    //     // setDogs({...dogs, "url" : data.message})
    //     counter--;
    // }
    fetch("https://dog.ceo/api/breeds/image/random")
    .then( (res) => res.json() )
    .then( (data) => setDogs(data.message));
    setLoading(false);
}, [])


    return (
        <div className="container">
            <h2> Pets available for Adoption! </h2>
            <div className="adopt">
            {!loading &&
            <>
                <img width="300" src={dogs} />
                <h2>Tracy</h2>
            </>
            }
            </div>
            <AdoptForm />
        </div>
    )
}

export default Adoption;