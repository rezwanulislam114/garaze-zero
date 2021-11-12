import React from 'react';
import { useHistory } from 'react-router';
import './Product.css'

const Product = (props) => {
    const { name, img, description, price, _id } = props.product;
    const history = useHistory();
    return (
        <div className="product d-flex flex-column justify-content-between">
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{description.slice(0, 80)}...</p>
            </div>
            <div>
                <h4>$ {price}</h4>
                <button onClick={() => history.replace(`/purchase/${_id}`)} className="btn btn-danger mt-2">Purchase</button>
            </div>
        </div>
    );
};

export default Product;