import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const ManageOrders = () => {
    const [products, setProducts] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://frozen-anchorage-72328.herokuapp.com/all-orders`)
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
        <Container>
            <h1 className="text-center">All Orders</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>PRODUCT THAT ORDERD. HERE YOU CAN WHICH CUSTOMER ORDERED WHICH PRODUCT.</i></p>
            <div className="orders">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Product Name</th>
                            <th>User Account</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products.map(product => <tr key={product._id}>
                                <td>{product.productName}</td>
                                <td>{product.email}</td>
                                <td><button onClick={() => handleDelete(product._id)} className="btn btn-danger w-100">Remove</button></td>
                            </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </Container>
    );
};

export default ManageOrders;