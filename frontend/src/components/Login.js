import React, {useEffect, useState} from 'react';
import {Link, Redirect, useHistory} from "react-router-dom";
import Axios from 'axios';

function Login(props) {
    let [formData, setFormData] = useState({
        "email": "",
        "password" : ""
    });

    let [isAuth, setIsAuth] = useState(false)
    let [formError, setFormError] = useState({
        isError: false,
        errorMessage : ""
    })

    const handleLoginFormSubmit = (e) => {
        e.preventDefault()
        Axios
        .post('/user/login/', formData)
        .then((response) => {
            if (response.status == 200){
                setIsAuth(true)
                props.setIsLoggedIn(true)
                localStorage.setItem('auth-token', response.headers['auth-token'])
            }
        })
        .catch((err) => {
            setFormError({
                isError: true,
                errorMessage : err.response.data
            })
            // reset login form and state
            document.getElementById("login-form").reset()
            setFormData({
                "email": "",
                "password" : ""
            })
        })
    }
    const handleInputChange = (e) => {
        let e_name = e.target.name
        let e_value = e.target.value
        setFormData((formData) => {
            formData[e_name] = e_value
            return formData
        })
    }
    return (
        <div>
            {isAuth && <Redirect to="/dashboard"/>}
            <h2>Login Form</h2>
            <form onSubmit={handleLoginFormSubmit} id="login-form">
                <input type="text" placeholder="email" name="email" onChange={handleInputChange}/><br/>
                <input type="password" placeholder="password" name="password" onChange={handleInputChange}/><br/>
                {formError.isError && <p>{formError.errorMessage}</p>}
                <input type="submit"/>
            </form>
            <Link to="/register">Create Account</Link>
        </div>
  );
}

export default Login;