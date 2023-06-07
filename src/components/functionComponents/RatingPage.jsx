import { useState, useEffect } from 'react';
import axios from 'axios';

const RatingPage = ({ productId }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Fetch the existing rating for this product from the server
    axios.get(`/api/products/${productId}/rating`).then((response) => {
      setRating(response.data.rating);
    });
  }, [productId]);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit the new rating to the server
    axios.post(`/api/products/${productId}/rating`, { rating }).then((response) => {
      setRating(response.data.rating);
    });
  };

  return (
    <div>
      <h3>Product Rating</h3>
      <p>Current rating: {rating} stars</p>
      <form onSubmit={handleSubmit}>
        <label>
          Your rating:
          <select value={rating} onChange={handleRatingChange}>
            <option value="1">1 star</option>
            <option value="2">2 stars</option>
            <option value="3">3 stars</option>
            <option value="4">4 stars</option>
            <option value="5">5 stars</option>
          </select>
        </label>
        <button className='btn btn-primary mx-2 ' type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default RatingPage;