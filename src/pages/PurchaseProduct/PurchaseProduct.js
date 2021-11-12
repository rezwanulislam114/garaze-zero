import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './PurchaseProduct.css'
import useAuth from '../../hooks/useAuth';

const PurchaseProduct = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const { register, handleSubmit, reset } = useForm();
    const { user } = useAuth();

    useEffect(() => {
        const url = `https://frozen-anchorage-72328.herokuapp.com/products/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    const onSubmit = data => {
        data['productName'] = product.name;
        console.log(data)
        axios.post('https://frozen-anchorage-72328.herokuapp.com/orders', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Added to order list successfully.');
                    reset();
                };
            })
            .catch(err => {
                console.log(err);
            });
    };

    return (
        <Container className="my-5">
            <Row>
                <Col xs={12} sm={6}>
                    <div className="purchase-product-info">
                        <img src={product.img} alt="" />
                        <h2>{product.name}</h2>
                        <p>{product.description}</p>
                        <h3>$ {product.price}</h3>
                    </div>
                </Col>
                <Col xs={12} sm={6}>
                    <div className="purchase-product-form">
                        <h1 className="text-center mt-5 mb-4">Customer Information</h1>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <i className="text-danger">Product Name:</i>
                            <input value={product.name} />
                            <i className="text-danger">Customer's Name:</i>
                            <input value={user.displayName} {...register("customerName")} />
                            <i className="text-danger">Customer's Email Address:</i>
                            <input value={user.email} {...register("email")} />
                            <i className="text-danger">Customer's Phone Number:</i>
                            <input type="number" {...register("phone")} />
                            <i className="text-danger">Customer's Address:</i>
                            <textarea placeholder="Write down your address" {...register("address")} />
                            <input className="btn btn-danger" type="submit" value="Place Order" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default PurchaseProduct;