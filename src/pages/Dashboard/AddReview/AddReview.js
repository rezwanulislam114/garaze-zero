import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import './AddReview.css'

const AddReview = () => {
    const [review, setReview] = useState({});
    const { user } = useAuth();

    const handleBlur = e => {
        const feild = e.target.name;
        const value = e.target.value;
        const updateReview = { ...review };
        updateReview[feild] = value;
        setReview(updateReview);
    }

    const handleSubmit = e => {
        const sentReview = { ...review, name: user.displayName };
        e.preventDefault();
        fetch('https://frozen-anchorage-72328.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(sentReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Review posted successfully.');
                    setReview({});
                }
            })
    }
    return (
        <div>
            <h1 className="text-center">Add Review</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>YOU CAN ADD A REVIEW HERE. WHICH HELP OTHERS TO KNOW ABOUT US PROPERELY</i></p>
            <div className="add-review">
                <form onSubmit={handleSubmit}>
                    <textarea onBlur={handleBlur} name="review" placeholder="Write your review here"></textarea>
                    <input onBlur={handleBlur} name="rataing" placeholder="Rating (1 to 5)" type="number" />
                    <button className="btn btn-danger w-100 my-3">Submit Review</button>
                </form>
            </div>
        </div>
    );
};

export default AddReview;