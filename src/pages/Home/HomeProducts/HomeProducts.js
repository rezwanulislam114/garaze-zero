import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Product from '../../Products/Product/Product';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
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

export default HomeProducts;