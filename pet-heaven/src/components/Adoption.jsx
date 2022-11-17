// Lists the pets available for adoption
// at the bottom create a form to allow for pet owners to adopt the pet
// Form will be redirected to admins using emailjs

import React from 'react';
import AdoptForm from './AdoptForm';

const Adoption = () => {
    return (
        <div className="container">
            <AdoptForm />
        </div>
    )
}

export default Adoption;