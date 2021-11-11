import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">Garage<span className="text-danger">Zero</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={NavLink} to="/home">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/products">Products</Nav.Link>
                        {
                            user.email && <Nav.Link as={NavLink} to="/dashboard">Dashboard</Nav.Link>
                        }
                    </Nav>
                    <Nav>
                        {
                            user.email ?
                                <div className="d-flex align-items-center">
                                    <p className="text-secondary my-0 me-3">{user.displayName}</p>
                                    <button onClick={logOut} className="btn btn-danger">Log Out</button>
                                </div> :
                                <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;