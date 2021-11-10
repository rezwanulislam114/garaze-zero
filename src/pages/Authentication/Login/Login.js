import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const handleLogin = e => {
        e.preventDefault();
    }

    // take data from input field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    return (
        <div className="login-form">
            <h1 className="my-5">Login</h1>
            <form onSubmit={handleLogin}>
                <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email" />
                <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" />
                <button className="w-100 btn btn-danger d-block mx-auto my-4">Login</button>
            </form>
            <p>Haven't any account? <Link to="/register">Register here</Link></p>
        </div>
    );
};

export default Login;