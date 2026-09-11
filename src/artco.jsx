import PropTypes from "prop-types";
import React, { useState } from "react";

function Course(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [message, setMessage] = useState("");

  const handleBuy = () => {
    // If already purchased
    if (props.purchased) {
      setMessage("Already Purchased ✓");

      setTimeout(() => {
        setMessage("");
      }, 2000);

      return;
    }

    // Add course to My Courses
    if (typeof props.onBuy === "function") {
      props.onBuy(props.course);
    }

    setMessage("Course Added to My Courses ✓");

    setTimeout(() => {
      setMessage("");
    }, 2000);
  };

  const handleComplete = () => {
    if (typeof props.onComplete === "function") {
      props.onComplete();
    }
  };

  return (
    <div className="course">

      <h2>{props.name}</h2>

      {props.image && (
        <img
          src={props.image}
          alt={props.name}
          onClick={() => setShowDetails((prev) => !prev)}
        />
      )}

      {showDetails && (
        <div className="course-details">

          <p>
            <strong>Course:</strong> {props.name}
          </p>

          <p>{props.description}</p>

          <p>
            <strong>Price:</strong> ${props.price}
          </p>

          <p>
            <strong>Rating:</strong> {props.rating}
          </p>

          <p>
            <strong>Duration:</strong>{" "}
            {props.duration || "Not specified"}
          </p>

          <p>
            <strong>Level:</strong> {props.level}
          </p>

        </div>
      )}

      <span>{props.rating}</span>

      <p>${props.price}</p>

      {/* Message */}
      {message && (
        <div className="purchase-message">
          {message}
        </div>
      )}

      {/* BUY NOW */}
      {props.purchased ? (
      <button className="completed" disabled>
         Already Purchased ✓
      </button>
      ) : (
      <button
      className="buy-button"
      onClick={() => props.onBuy(props.course)}
      >
        Buy Now
      </button>
    )}


    </div>
  );
}

Course.propTypes = {
  course: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  image: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  level: PropTypes.string,
  purchased: PropTypes.bool,
  onBuy: PropTypes.func,
  onComplete: PropTypes.func
};

export default Course;