"use client";

import React, { useState } from "react";

import { FaStar } from "react-icons/fa";

interface StarRatingProps {
  totalStars?: number;
  initialRating?: number | null;
  onRatingChange?: (rating: number) => void;
}

export const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  initialRating = 0,
  onRatingChange,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [hover, setHover] = useState(0);

  const handleClick = (selectedRating: number) => {
    setRating(selectedRating);
    if (onRatingChange) {
      onRatingChange(selectedRating);
    }
  };

  return (
    <div className="flex pt-0.5">
      {Array.from({ length: totalStars }, (_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            size={16}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            color={(hover || rating || 0) >= starValue ? "#ffc107" : "#e4e5e9"}
            style={{ cursor: "pointer" }}
          />
        );
      })}
    </div>
  );
};
