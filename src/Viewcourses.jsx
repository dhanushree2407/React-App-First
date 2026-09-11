import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

function Viewcourses() {
  const purchasedCourses = JSON.parse(
    localStorage.getItem("purchasedCourses") || "[]"
  );

  return (
    <section id="my-courses">
      {/* purchased courses here */}

      {purchasedCourses.length === 0 ? (
        <div className="empty-courses">
          <h2>No Courses Purchased Yet 📚</h2>

          <p>You have not purchased any courses.</p>

          <Link to="/" className="start-button">
            Browse Courses
          </Link>
        </div>
      ) : (
        <div className="course-list">
          {purchasedCourses.map((course) => (
            <div className="course" key={course.id}>
              <h2>{course.name}</h2>

              <img src={course.image} alt={course.name} />

              <span>{course.rating}</span>

              <p>${course.price}</p>

              <p>{course.description}</p>

              <p>
                <strong>Duration:</strong> {course.duration}
              </p>

              <p>
                <strong>Level:</strong> {course.level}
              </p>

              <button className="complete-button">Start Course</button>
              <button className="Delet-button">Delet</button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Viewcourses;