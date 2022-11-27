import React from 'react';
import { useState, useRef } from 'react';
import Button from "./shared/Button";
import {serviceID, templateID, pubKey} from './shared/data';
import { doc, setDoc, updateDoc } from "firebase/firestore";
import {db, auth} from "./shared/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Register = () => {
    const form = useRef();
    // const getAuthentication = getAuth();
    const [userInput, setUserInput] = useState({
        email : "",
        password : ""
    })

    const userInputHandler = (e) => {
        setUserInput({...userInput, [e.target.name] : e.target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
        .then( (userCred)=> {
          const user = userCred.user;
          console.log(user);
          alert("Yay!");
        })
        .catch( (err) => {
          const errorCode = err.code;
          console.log(errorCode);
          alert(errorCode);
        })

        setUserInput({
          email: "",
          password: "",
        });
        
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
        <h2 className="register-form-heading"> Register today to become a supporter! </h2>
      <form ref={form} action="submit" className="register-form d-flex">
        <label htmlFor="email"> Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          onChange={userInputHandler}
          value={userInput.email}
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
        <Button onClickHandler={submitForm} type="submit" className="register-form-btn" text="Register!"/>
      </form>
    </div>
    )

}

export default Register;