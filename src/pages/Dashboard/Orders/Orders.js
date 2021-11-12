import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './Orders.css'

const Orders = () => {
    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://frozen-anchorage-72328.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [user.email])

    const handleDelete = id => {
        const url = `https://frozen-anchorage-72328.herokuapp.com/orders/${id}`
        const confirm = window.confirm('Do you want to delete this?');

        if (confirm) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
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
            <h1 className="text-center">My Orders</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>PRODUCT THAT I ORDERD. HERE I CAN DELETE THAT I DONT WANT TO ORDER NOW.</i></p>
            <div className="orders">
                {
                    products.map(product => <div className="order" key={product._id}>
                        <h3>{product.productName}</h3>
                        <button onClick={() => handleDelete(product._id)} className="btn btn-danger">Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Orders;