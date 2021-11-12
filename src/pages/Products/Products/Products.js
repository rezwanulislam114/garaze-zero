import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://frozen-anchorage-72328.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])

    return (
        <Container className="my-5">
            <h1 className="text-center my-5">Choose Your Bike!</h1>
            <div className="products-container">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </Container>
    );
};

export default Products;