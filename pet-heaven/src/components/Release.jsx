import React from "react";
import { useState } from "react";
import Button from "./shared/Button";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { serviceID, templateID, pubKey } from "./shared/data";
// breed
// upload photo of dog
// reason for release
// contact number
// email
// name
// google how pet websites look like

const Release = () => {
  const form = useRef();
  const [userInput, setUserInput] = useState({
    person_name: "",
    reason: "",
    email: "",
    number: "",
    breed: "",
  });

  const userInputHandler = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    setUserInput({
      person_name: "",
      reason: "",
      email: "",
      number: "",
      breed: "",
    });

    emailjs
      .sendForm(serviceID, templateID, form.current, pubKey)
      .then((result) => {
        console.log(result.text);
      }),
      (error) => {
        console.log(error.text);
      };
  };
  return (
    <>
      <form ref={form} action="submit" className="release-form d-flex">
        <label htmlFor="person_name">Your Name:</label>
        <input
          type="text"
          id="person_name"
          name="person_name"
          onChange={userInputHandler}
          value={userInput.person_name}
          required
        />

        <label htmlFor="number">Contact Number: </label>
        <input
          type="text"
          id="number"
          name="number"
          onChange={userInputHandler}
          value={userInput.number}
          required
        />

        <label htmlFor="email">Email : </label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={userInputHandler}
          value={userInput.email}
        />

        <label htmlFor="breed"> Breed of Pet:</label>
        <input
          type="text"
          id="breed"
          name="breed"
          onChange={userInputHandler}
          value={userInput.breed}
          required
        />

        {/* upload photo of dog */}
        <label htmlFor="img">Upload photo of your pet:</label>
        <input type="file" id="img" name="img" accept="image/*" />

        <label htmlFor="reason"> Reason for Release: </label>
        <textarea
          id="reason"
          name="reason"
          onChange={userInputHandler}
          value={userInput.reason}
          required
        />

        <Button
          onClickHandler={submitForm}
          type="submit"
          className="adopt-form-btn"
          text="I would like to adopt!"
        />
      </form>
    </>
  );
};

export default Release;
