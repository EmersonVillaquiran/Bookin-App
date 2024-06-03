import React from 'react'

const HotelReview = ({review}) => {
  return (
    <div>
      <h2>{review.title}</h2>
        <p>{review.comment}</p>
        <p><strong>Rating:</strong> {review.rating}</p>
    </div>
  )
}

export default HotelReview
