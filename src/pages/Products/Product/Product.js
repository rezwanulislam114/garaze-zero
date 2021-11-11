import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, description, price } = props.product;
    return (
        <div className="product d-flex flex-column justify-content-between">
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description.slice(0, 80)}...</p>
            </div>
            <div>
                <h4>$ {price}</h4>
                <button className="btn btn-danger mt-2">Purchase</button>
            </div>
        </div>
    );
};

export default Product;