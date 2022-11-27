import React from 'react';
import Button from './shared/Button';
import { Link, useNavigate } from 'react-router-dom'; 
import { useState, useRef } from 'react';
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import {db, auth} from "./shared/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Login = () => {
    const form = useRef();
    const navigate = useNavigate();
    const [userInput, setUserInput] = useState({
        email : "",
        password : ""
    })

    const userInputHandler = (e) => {
        setUserInput({...userInput, [e.target.name] : e.target.value});
    }

    const submitForm = (e) => {
        e.preventDefault();
        // check if user is in the local list of users
        // see if it's password matches
        signInWithEmailAndPassword(auth, userInput.email, userInput.password)
        .then( (userCred) => {
            console.log(userCred.user);
            alert("Yay!");
            navigate("/");
        })
        .catch( (err) => {
            alert(err.code);
            console.log(err.code);
        })
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
        <div className="login">
            <h2 className="login-form-heading"> Login : </h2>
            <form ref={form} action="submit" className="login-form d-flex">
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
            <Button onClickHandler={submitForm} type="submit" className="login-form-btn" text="Login"/>
      </form>
        </div>
    )
}

export default Login;