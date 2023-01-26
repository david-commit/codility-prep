// Build a "like button" component using React 16. The component should be the default export (use export default).

// Requirements:
// 1. There should be a like button:

// The content of the like button should be in the following format: "Like | 100", where 100 is the total number of likes.
// It should have a "like-button" class.
// Wrap the number of likes in a span with a "likes-counter" class.
// The initial number of likes in the counter should be 100.
// 2. Users can add a like. By clicking the button:

// The number of likes should increase by one.
// Like button should have "liked" class in addition to the "like-button" class (you can use the classnames tool for that).
// 3. Users can undo their like by clicking again on the button:

// The counter should decrease by one.
// "liked" class should be removed.

import React, { useState } from 'react';

const LikeButton = () => {
  const [likes, setLikes] = useState(100);
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    if (isClicked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsClicked(!isClicked);
  };

  return (
    <button
      className={`like-button ${isClicked && 'liked'}`}
      onClick={handleClick}
    >
      <span className='likes-counter'>{`Like | ${likes}`}</span>
    </button>
  );
};

export default LikeButton;