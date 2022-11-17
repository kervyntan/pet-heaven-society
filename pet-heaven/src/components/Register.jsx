import React from 'react';
import { useState, useRef } from 'react';
import Button from "./shared/Button";
import {serviceID, templateID, pubKey} from './shared/data';
const Register = () => {
    const form = useRef();
    const [userInput, setUserInput] = useState({
        username : "",
        password : ""
    })

    const userInputHandler = (e) => {
        setUserInput({...userInput, [e.target.name] : e.target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        setUserInput({
          username: "",
          password: "",
        });
    
        emailjs.sendForm(serviceID, templateID, form.current, pubKey)
        .then( (result) => {
            console.log(result.text);
        }), (error) => {
            console.log(error.text);
        };
    }

    const viewPassword = () => {
        const pw = document.querySelector('#password');
        if (pw.type === "password") {
            pw.type = "text";
        } else {
            pw.type = "password";
        }
    }
    return (
    <div className="register">
      <form ref={form} action="submit" className="register-form d-flex">
        <label htmlFor="username"> Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={userInputHandler}
          value={userInput.username}
        />

        <label htmlFor="password"> Password: </label>

        <input
          type="password"
          id="password"
          name="password"
          onChange={userInputHandler}
          value={userInput.reason}
        />

        <Button onClickHandler={viewPassword} type="button" className="view-password-btn" text="See Password"/>
        <Button onClickHandler={submitForm} type="submit" className="adopt-form-btn" text="Register!"/>
      </form>
    </div>
    )

}

export default Register;