import React, {useEffect, useState} from 'react';
import {Link, Redirect} from "react-router-dom";
import axios from 'axios';

function Login() {
    let [formData, setFormData] = useState({
        "email": "",
        "password" : ""
    });

    let [isAuth, setIsAuth] = useState(false)
    let [formError, setFormError] = useState({
        isError: false,
        errorMessage : ""
    })


    const handleFormSubmit = (e) => {
        e.preventDefault()
        axios
            .post('/user/login/', formData)
            .then((response) => {
                if (response.status == 200){
                    setIsAuth(true)
                }
            })
            .catch((err) => {
                setFormError({
                    isError: true,
                    errorMessage : err.response.data
                })
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
            <form onSubmit={handleFormSubmit} id="login-form">
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