import React, { useState } from 'react';

const ReviewForm = () => {
  const [safety, setSafety] = useState(5);
  const [communication, setCommunication] = useState(4);
  const [recommended, setRecommended] = useState(true);
  const [praise, setPraise] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      safety,
      communication,
      recommended,
      praise,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Leave a review</h2>
      <div>
        <label htmlFor="safety">Safety</label>
        <div>
          {[1, 2, 3, 4, 5].map((rating) => (
            <span
              key={rating}
              style={{
                color: rating <= safety ? 'gold' : 'gray',
                cursor: 'pointer',
              }}
              onClick={() => setSafety(rating)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="communication">Communication</label>
        <div>
          {[1, 2, 3, 4, 5].map((rating) => (
            <span
              key={rating}
              style={{
                color: rating <= communication ? 'gold' : 'gray',
                cursor: 'pointer',
              }}
              onClick={() => setCommunication(rating)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="recommended">Would you recommend Translt?</label>
        <div>
          <button
            type="button"
            style={{
              backgroundColor: !recommended ? 'lightgray' : 'transparent',
            }}
            onClick={() => setRecommended(false)}
          >
            No
          </button>
          <button
            type="button"
            style={{
              backgroundColor: recommended ? 'lightgreen' : 'transparent',
            }}
            onClick={() => setRecommended(true)}
          >
            Yes
          </button>
        </div>
      </div>
      <div>
        <label htmlFor="praise">Praise</label>
        <textarea
          id="praise"
          value={praise}
          onChange={(e) => setPraise(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewForm;