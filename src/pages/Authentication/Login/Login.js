import React, { useState } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Login.css'

const Login = () => {
    const { loginUserWithEmailandPass, error, loading } = useAuth();
    const [loginData, setLoginData] = useState({})
    const location = useLocation();
    const history = useHistory();

    const handleLogin = e => {
        e.preventDefault();
        loginUserWithEmailandPass(loginData.email, loginData.password, location, history)
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
        <Container>
            <div className="login-form">
                <h1 className="my-5">Login</h1>
                {
                    loading && <Spinner className="mb-4" animation="border" variant="danger" />
                }
                {
                    !loading && <form onSubmit={handleLogin}>
                        <input onBlur={handleOnBlur} type="email" name="email" placeholder="Email" />
                        <input onBlur={handleOnBlur} type="password" name="password" placeholder="Password" />
                        <button className="w-100 btn btn-danger d-block mx-auto my-4">Login</button>
                    </form>
                }
                {
                    error && <div className="alert alert-danger" role="alert">{error}</div>
                }
                <p>Haven't any account? <Link to="/register">Register here</Link></p>
            </div>
        </Container>
    );
};

export default Login;