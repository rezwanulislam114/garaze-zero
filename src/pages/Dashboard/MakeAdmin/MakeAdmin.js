import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import './MakeAdmin.css'

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const user = { email: email }
        console.log(user)
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert(`${email} is added as a admin.`)
                    setEmail('')
                }
            })
    }

    return (
        <Container>
            <h1 className="text-center">Make Admin</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>HERE YOU CAN MAKE USER ADMIN WHO CAN DO SOME SPECIAL THINGS THAT A NORMAL USER CANT.</i></p>
            <div className="make-admin">
                <form onSubmit={handleSubmit}>
                    <input onBlur={handleOnBlur} type="email" placeholder="Enter Email" />
                    <button type="submit" className="btn btn-danger my-3 w-100 ">Make Admin</button>
                </form>
            </div>
        </Container>
    );
};

export default MakeAdmin;