import React from 'react';
import Button from './shared/Button';
import { useState, useRef } from 'react';

const Login = () => {
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
        // check if user is in the local list of users
        // see if it's password matches
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
            <Button onClickHandler={submitForm} type="submit" className="login-form-btn" text="Login"/>
      </form>
        </div>
    )
}

export default Login;