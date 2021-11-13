import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutUs from '../../../images/home/about-us.jpg'
import './AboutUs.css'

const AboutUs = () => {
    return (
        <>
            <Container className="my-5">
                <h1 className="text-center">About Us</h1>
                <p className="text-center text-danger mt-3 mb-5"><i>YOU CAN KNOW ABOUT US FROM HERE. VISIT TO USE FOR LEARN MORE</i></p>
                <Row>
                    <Col xs={12} sm={6}>
                        <img src={aboutUs} className="img-fluid d-block mx-auto rounded mb-4" alt="" />
                    </Col>
                    <Col xs={12} sm={6}>
                        <h3 className="mb-3">Why Choose Us?</h3>
                        <p className="fs-5">We are the best bike provider in the country and also oldest. We started our jurney in 1986. We have many satisfied client who are highly satisfied. And we are working for imporve your services. Here you also get after servies and no one cant say any nagavite word about our after sells service.So, if you want a motorbike and you have already choose it, then dont waste your time, just order it now. We are ensuring you that you will not going to do something wrong.</p>
                    </Col>
                </Row>
            </Container>
            <div className="my-5 statistics">
                <Container className="statistics-container">
                    <div className="text-center m-4">
                        <h1>2550+</h1>
                        <h4>Happy Customers</h4>
                    </div>
                    <div className="text-center m-4">
                        <h1>3650+</h1>
                        <h4>Products Sold</h4>
                    </div>
                    <div className="text-center m-4">
                        <h1>780+</h1>
                        <h4>Products In Stock</h4>
                    </div>
                    <div className="text-center m-4">
                        <h1>8450+</h1>
                        <h4>Website User</h4>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default AboutUs;