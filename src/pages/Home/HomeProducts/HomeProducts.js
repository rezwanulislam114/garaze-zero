import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../Products/Product/Product';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://frozen-anchorage-72328.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])

    return (
        <Container className="my-5">
            <h1 className="text-center mt-5">Choose Your Bike!</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>THERE ARE MANY PRODUCTS. YOU CAN CHOOSE ONE ACCOURDING TO YOUR NEED.</i></p>
            <div className="products-container">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>
        </Container>
    );
};

export default HomeProducts;