import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { createUser, error, setError, loading } = useAuth();
    const [registerData, setRegisterData] = useState({});
    const history = useHistory();

    const handleRegister = e => {
        e.preventDefault();
        if (registerData.password !== registerData.password2) {
            setError('Password didnt match')
            return;
        }
        createUser(registerData.email, registerData.password, registerData.name, history);
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
        <Container>
            <div className="login-form">
                <h1 className="my-5">Register</h1>
                {
                    loading && <Spinner className="mb-4" animation="border" variant="danger" />
                }
                {
                    !loading && <form onSubmit={handleRegister}>
                        <input onBlur={handleOnBlur} type="text" name="name" placeholder="Name" />
                        <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email" />
                        <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" />
                        <input onBlur={handleOnBlur} type="password" name="password2" placeholder="Confirm Password" />
                        <button className="w-100 btn btn-danger d-block mx-auto my-4">Login</button>
                    </form>
                }
                {
                    error && <div className="alert alert-danger" role="alert">{error}</div>
                }

                <p>Already have an account? <Link to="/login">Login here</Link></p>
            </div>
        </Container>
    );
};

export default Register;