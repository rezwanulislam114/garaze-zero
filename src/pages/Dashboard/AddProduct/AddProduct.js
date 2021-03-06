import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://frozen-anchorage-72328.herokuapp.com/products', data)
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('This Product Successfully Added');
                    reset();
                };
            })
            .catch(err => {
                console.log(err);
            });
    };
    return (
        <Container className="add-product">
            <h1 className="text-center">Add New Product</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>ADD NEW PRODUCT FOR TO IMPRESS VISITOR AND GROW YOUR BUSINESS</i></p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Product Name" {...register("name")} />
                <textarea placeholder="Product Description" {...register("description")} />
                <input placeholder="Product Price" type="number" {...register("price")} />
                <input placeholder="Image Link" {...register("img")} />
                <input className="btn btn-danger" type="submit" />
            </form>
        </Container>
    );
};

export default AddProduct;