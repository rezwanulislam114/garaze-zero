import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    const [registerData, setRegisterData] = useState({});
    const handleRegister = e => {
        e.preventDefault();
    }

    // take data from input field
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerData };
        newRegisterData[field] = value;
        setRegisterData(newRegisterData);
    }

    return (
        <div className="login-form">
            <h1 className="my-5">Register</h1>
            <form onSubmit={handleRegister}>
                <input onBlur={handleOnBlur} type="text" name="name" placeholder="Name" />
                <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email" />
                <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" />
                <input onBlur={handleOnBlur} type="password" name="password2" placeholder="Confirm Password" />
                <button className="w-100 btn btn-danger d-block mx-auto my-4">Login</button>
            </form>
            <p>Already have an account? <Link to="/login">Login here</Link></p>
        </div>
    );
};

export default Register;