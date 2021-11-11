import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <Container fluid className="bg-dark text-white pb-3">
            <Container>
                <Row>
                    <Col xs={12} md={5}>
                        <h2 className="mb-4 mt-5">Garage<span className="text-danger">Zero</span></h2>
                        <p>This is a website that privide you to buy any knid of motorcycle. Here you can find all kind of bikes. And we also ensure you the most friendly after market services. You are most welcome at GarageZero</p>
                    </Col>
                    <Col xs={12} md={2}>
                        <h4 className="text-secondary mt-5 mb-4">Quick Link</h4>
                        <div className="quick-link">
                            <Link to="/">Home</Link>
                            <Link to="/">About</Link>
                            <Link to="/">New Offers</Link>
                            <Link to="/">Services</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={2}>
                        <h4 className="text-secondary mt-5 mb-4">Features</h4>
                        <div className="quick-link">
                            <Link to="/">News</Link>
                            <Link to="/">New Blogs</Link>
                            <Link to="/">Gallary</Link>
                            <Link to="/">Privacy Policy</Link>
                        </div>
                    </Col>
                    <Col xs={12} md={3} className="newsletter">
                        <h4 className="text-secondary mt-5 mb-4">Newsletter</h4>
                        <input type="text" />
                        <button className="btn btn-danger">Subscribe</button>
                    </Col>
                </Row>
                <p className="text-center text-secondary m-0 mt-4">copyright @GarageZero 2021</p>
            </Container>
        </Container>
    );
};

export default Footer;