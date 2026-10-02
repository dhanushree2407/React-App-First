import React, { useState } from "react";
import PropTypes from "prop-types";

function Course(props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="course-card">

      <div
        className="course-image-wrapper"
        onClick={() => setShowDetails(!showDetails)}
      >
        <img
          src={props.image}
          alt={props.name}
          className="course-image"
        />

        <div className="image-overlay">
          Click to view details
        </div>
      </div>

      <div className="course-content">

        <div className="course-top">
          <span className="level-badge">
            {props.level}
          </span>

          <span className="rating">
            {props.rating}
          </span>
        </div>

        <h2>{props.name}</h2>

        {showDetails && (
          <div className="course-details">
            <p>{props.description}</p>

            <div className="details-row">
              <span>⏱️ {props.duration}</span>
              <span>📚 {props.level}</span>
            </div>
          </div>
        )}

        <div className="course-bottom">
          <strong>${props.price}</strong>

          {props.purchased ? (
            <button
              type="button"
              className="already-button"
              disabled
            >
              ✓ Already Purchased
            </button>
          ) : (
            <button
              type="button"
              className="buy-button"
              onClick={() => props.onBuy(props.course)}
            >
              Buy Now →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

Course.propTypes = {
  course: PropTypes.object,
  name: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  image: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  level: PropTypes.string,
  purchased: PropTypes.bool,
  onBuy: PropTypes.func,
};

export default Course;