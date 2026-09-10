import React, { useState, useEffect } from "react";
import Course from "./artco";
import Contact from "./contact.jsx";
import Upload from "./Upload.jsx";
import About from "./About.jsx";
import Viewcourses from "./Viewcourses.jsx"
import { Link } from "react-router-dom";
import "./index.css";

const sampleCourses = [
  {
    id: 1,
    name: "Cartoon Art",
    price: 49,
    rating: "4.8 ⭐",
    image: "/cartoon.jpg",
    description: "Learn bold cartoon characters, expressions.",
    duration: "4 weeks",
    level: "Beginner"
  },
  {
    id: 2,
    name: "Figure Art",
    price: 79,
    rating: "4.9 ⭐",
    image: "/figure.jpg",
    description: "Master human anatomy, pose drawing.",
    duration: "6 weeks",
    level: "Intermediate"
  },
  {
    id: 3,
    name: "Portrait Art",
    price: 39,
    rating: "4.7 ⭐",
    image: "/portrait.jpg",
    description: "Explore facial features, shading.",
    duration: "3 weeks",
    level: "Beginner"
  },
  {
    id: 4,
    name: "Landscape Art",
    price: 49,
    rating: "4.6 ⭐",
    image: "/landscape.jpg",
    description: "Create scenic compositions with depth, texture.",
    duration: "5 weeks",
    level: "Intermediate"
  },
  {
    id: 5,
    name: "Watercolor Art",
    price: 59,
    rating: "4.8 ⭐",
    image: "/watercolor.jpg",
    description: "Discover watercolor techniques and color theory.",
    duration: "4 weeks",
    level: "Beginner"
  },
  {
    id: 6,
    name: "Oil Painting",
    price: 69,
    rating: "4.9 ⭐",
    image: "/oilpainting.webp",
    description: "Learn oil painting, blending, and layering techniques.",
    duration: "6 weeks",
    level: "Intermediate"
  },
  {
    id: 7,
    name: "Digital Art",
    price: 70,
    rating: "4.6 ⭐",
    image: "\\digital.jpg",
    description: "Master digital art tools, digital painting, and design",
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    id: 8,
    name: "Art Journal",
    price: 75,
    rating: "4.6 ⭐",
    duration: "8 weeks",
    image: "\\journal.jpg",
    description: "Explore mixed-media journaling techniques to develop a personal art practice.",
    level: "Beginner"
  }

];

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [points, setPoints] = useState(0);

  useEffect(() => {
  setCourses(sampleCourses);

  const savedCourses = JSON.parse(
    localStorage.getItem("purchasedCourses") || "[]"
  );

  setPurchasedCourses(savedCourses);
}, []);
  // BUY COURSE
  const handleBuyCourse = (course) => {
  setPurchasedCourses((currentCourses) => {

    const alreadyPurchased = currentCourses.some(
      (item) => item.id === course.id
    );

    if (alreadyPurchased) {
      return currentCourses;
    }

    const updatedCourses = [...currentCourses, course];

    localStorage.setItem(
      "purchasedCourses",
      JSON.stringify(updatedCourses)
    );

    return updatedCourses;
  });
};

  // COMPLETE COURSE
  const handleCourseComplete = () => {
    setPoints((currentPoints) => currentPoints + 10);
  };

  return (
    <>
      {/* NAVIGATION */}
      <div className="journey-header">

      <h1>New Journey</h1>

      <Link to="/viewcourses">
          View Courses
      </Link>

      <Link to="/upload">
          Upload Photos
      </Link>

      <Link to="/about">
          About Us
      </Link>

      <Link to="/contact">
          Contact Us
      </Link>

    </div> 


      {/* WELCOME */}
      <div className="header">

        <h1>
          Welcome to Your New Journey ✨
        </h1>

        <h3>
          By Dhanu ❤️
        </h3>

      </div>


      {/* ALL COURSES */}
      <section id="courses">

        <h2 className="section-title">Available Courses 🎨</h2>

        <div className="course-list">

          {courses.map((course) => {

            const isPurchased =
              purchasedCourses.some(
                (item) => item.id === course.id
              );

            return (
              <Course
                key={course.id}

                course={course}

                name={course.name}
                price={course.price}
                rating={course.rating}
                image={course.image}
                description={course.description}
                duration={course.duration}
                level={course.level}

                purchased={isPurchased}

                onBuy={handleBuyCourse}

                onComplete={handleCourseComplete}
              />
            );
          })}

        </div>

      </section>


      {/* MY COURSES */}
      <section id="my-courses">

        <h1 className="section-title">
          My Courses 📚
        </h1>

        {purchasedCourses.length === 0 ? (

          <div className="empty-courses">
            <p>
              You haven't purchased any courses yet.
            </p>

            <a href="#courses">
              Browse Courses
            </a>
          </div>

        ) : (

          <div className="course-list">

            {purchasedCourses.map((course) => (

              <Course
                key={course.id}

                course={course}

                name={course.name}
                price={course.price}
                rating={course.rating}
                image={course.image}
                description={course.description}
                duration={course.duration}
                level={course.level}

                purchased={true}

                onComplete={handleCourseComplete}
              />

            ))}

          </div>

        )}

      </section>


      {/* POINTS */}
      <div className="points-display">

        🏆 Total Points:

        <span className="points-value">
          {points}
        </span>

      </div>


      {/* UPLOAD */}
      <div id="upload">

        <Upload
          onUpload={(added) =>
            setPoints((p) => p + added)
          }
        />

      </div>


      {/* ABOUT */}
      <div id="about">
        <About />
      </div>


      {/* CONTACT */}
      <div id="contact">
        <Contact />
      </div>

    </>
  );
}

export default CourseList;