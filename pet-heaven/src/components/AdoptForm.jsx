import React from "react";
import { useState } from "react";
import Button from "./shared/Button";
import {useRef} from 'react';
import emailjs from '@emailjs/browser'
import {serviceID, templateID, pubKey} from './shared/data';
// need to add form validation
const AdoptForm = () => {
  const form = useRef();
  const [userInput, setUserInput] = useState({
    person_name: "",
    reason: "",
  });

  const userInputHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setUserInput({
      person_name: "",
      reason: "",
    });

    emailjs.sendForm(serviceID, templateID, form.current, pubKey)
    .then( (result) => {
        console.log(result.text);
    }), (error) => {
        console.log(error.text);
    };
  };

  return (
    <>
      <form ref={form} action="submit" className="adopt-form d-flex">
        <label htmlFor="person_name">Your Name:</label>
        <input
          type="text"
          id="person_name"
          name="person_name"
          onChange={userInputHandler}
          value={userInput.person_name}
        />

        <label htmlFor="dog_name">Name of Dog:</label>
        <select name="dog_name" id="dog_name">
          <option value="tracy"> Tracy </option>
          <option value="katie"> Katie </option>
          <option value="milo"> Milo </option>
          <option value="cappucinno"> Cappucinno </option>
        </select>

        <label htmlFor="reason">Reason for Adoption:</label>

        <input
          type="text"
          id="reason"
          name="reason"
          onChange={userInputHandler}
          value={userInput.reason}
        />

        <Button onClickHandler={submitForm} type="submit" className="adopt-form-btn" text="I would like to adopt!"/>
      </form>
    </>
  );
};

export default AdoptForm;
