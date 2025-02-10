import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingConfirmation() {
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);

  // Handle rating click
  const handleRating = (star) => {
    setRating(star);
  };

  return (
    <div className="container text-center mt-5">
      {/* Booking Confirmation Message */}
      <div className="card shadow-lg p-4" style={{ backgroundColor: "#f0f8ff", borderRadius: "12px" }}>
        <h2 className="text-success">🎉 Booking Confirmed! 🎉</h2>
        <h4 className="mt-3">Happy Journey! 🚖</h4>
        
        {/* Rating UI */}
        <div className="mt-4">
          <p className="fw-bold">Rate Your Experience:</p>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRating(star)}
              style={{
                fontSize: "32px",
                cursor: "pointer",
                color: star <= rating ? "#FFD700" : "#ccc",
              }}
            >
              ★
            </span>
          ))}
        </div>

        {/* Back to Home Button */}
        <button
          className="btn btn-primary mt-4"
          onClick={() => navigate("/Home")}
        >
          ⬅ Back to Home
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmation;
