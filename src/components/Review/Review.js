import React from 'react';
import './Review.css';

const Review = ({ review }) => {
    const { _id, name, img, comment } = review;


    return (
        <div className='review-container'>
            <img className='w-100 item-img' src={img} alt="" />

            <h2>{name}</h2>
            <p>{comment}</p>
        </div>
    );
};

export default Review;