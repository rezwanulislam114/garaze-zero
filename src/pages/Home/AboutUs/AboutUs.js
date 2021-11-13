import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import aboutUs from '../../../images/home/about-us.jpg'

const AboutUs = () => {
    return (
        <Container className="my-5">
            <h1 className="text-center">About Us</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>YOU CAN KNOW ABOUT US FROM HERE. VISIT TO USE FOR LEARN MORE</i></p>
            <Row>
                <Col xs={12} sm={6}>
                    <img src={aboutUs} className="img-fluid d-block mx-auto rounded" alt="" />
                </Col>
                <Col xs={12} sm={6}>
                    <h3>Why Choose Us?</h3>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;