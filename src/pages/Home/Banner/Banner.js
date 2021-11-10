import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import banner from '../../../images/home/banner.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row>
                    <Col xs={12} sm={6} className="d-flex flex-column justify-content-center">
                        <h1>Take A New Look <br /> New Collections Of Bikes!</h1>
                        <button className="btn btn-danger w-25 mt-4">Explore Here</button>
                    </Col>
                    <Col xs={12} sm={6}>
                        <img className="banner-img" src={banner} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;