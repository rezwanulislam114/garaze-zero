import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-elastic-carousel';
import Rating from 'react-rating';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://frozen-anchorage-72328.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    console.log(reviews)
    return (
        <Container className="my-5">
            <h1 className="text-center">Testimonial</h1>
            <p className="text-center text-danger mt-3 mb-5"><i>HERE YOU CAN COME TO KNOW ABOUT OUR SITE. IT WILL HELP YOU FOR KNOWING ABOUT US.</i></p>
            <div className="reviews">
                <Carousel>
                    {
                        reviews.map(review => <div className="review" key={review._id}>
                            <p>{review.review}</p>
                            <Rating
                                readonly
                                emptySymbol="far fa-star"
                                fullSymbol="fas fa-star"
                                initialRating={review.rataing}
                            />
                            <h5 className="mt-2">- <i>{review.name}</i></h5>
                        </div>)
                    }
                </Carousel>
            </div>
        </Container>
    );
};

export default Reviews;