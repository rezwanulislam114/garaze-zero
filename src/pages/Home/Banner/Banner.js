import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Banner.css'

const Banner = () => {
    const history = useHistory();
    return (
        <div className="banner">
            <Container className="mb-5 py-5">
                <Row>
                    <Col xs={12} sm={6} className="d-flex flex-column justify-content-center mb-5 text-white">
                        <h1>Take A New Look <br /> New Collections Of Bikes!</h1>
                        <button onClick={() => history.push('/products')} className="btn btn-danger my-4 banner-button">Explore Here</button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;