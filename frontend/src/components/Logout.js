import React, {useEffect, useState} from 'react';
import {Redirect} from 'react-router-dom';

function Logout(props) {
    useEffect(() => {
        localStorage.removeItem('auth-token')
        let logout = async () => {
         await props.setIsLoggedIn(false)   
        }
        logout();

    },[])
    return (
        <Redirect to="/login"></Redirect>
  );
}

export default Logout;