import React, {useEffect, useState} from 'react';
import {Redirect} from "react-router-dom";
import Axios from 'axios';

function Register(props) {
    let [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "password" : ""
    });
    let [regSuccess, setRegSuccess] = useState(false)
    let [formError, setFormError] = useState({
        isError: false,
        errorMessage : ""
    })
    let handleInputChange = (e) => {
        let e_name = e.target.name
        let e_value = e.target.value
        setFormData((formData) => {
            formData[e_name] = e_value
            return formData
        })
    }
    let handleFormSubmit = (e) => {
        e.preventDefault()
        Axios
            .post('/user/register/', formData)
            .then((response) => {
                if (response.status == 200){
                    setRegSuccess(true)
                }
            })
            .catch((err) => {
                setFormError({
                    isError: true,
                    errorMessage : err.response.data
                })
                document.getElementById("register-form").reset()
                setFormData({
                    "name": "",
                    "email": "",
                    "password" : ""
                })
            }) 
    }
    return (
        <div>
            <h2>Register Form</h2>
            <form onSubmit={handleFormSubmit} id="register-form">
                <input type="text" name="name" placeholder="Name" onChange={handleInputChange}/><br/>
                <input type="email" name="email" placeholder="Email" onChange={handleInputChange}/><br/>
                <input type="password" name="password" placeholder="Password" onChange={handleInputChange}/><br/>
                {formError.isError && <p>{formError.errorMessage}</p>}
                <input type="submit"/>
            </form>
            {/* {regSuccess && <Redirect to="/login" /> */}
        </div>
  );
}

export default Register;