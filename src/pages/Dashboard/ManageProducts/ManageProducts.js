import React, { useEffect, useState } from 'react';
import './ManageProducts.css'

const ManageProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://frozen-anchorage-72328.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleDelete = id => {
        const url = `https://frozen-anchorage-72328.herokuapp.com/products/${id}`
        const confirm = window.confirm('Do you want to delete this?');

        if (confirm) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('This products is deleted successfully.')
                        const remaining = products.filter(product => product._id !== id);
                        setProducts(remaining);
                    }
                })
        }
    }

    return (
        <div>
            <h1 className="text-center">All Products</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>HERE YOU CAN SEE YOUR ALL PRODUCTS. AND YOU CAN DELETE THATS YOU DONT NEED NOW.</i></p>
            <div className="manage-products">
                {
                    products.map(product => <div className="manage-product" key={product._id}>
                        <h3>{product.name}</h3>
                        <button onClick={() => handleDelete(product._id)} className="btn btn-danger">Delete</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageProducts;