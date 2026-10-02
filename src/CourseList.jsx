import React, { useState } from "react";
import Course from "./artco.jsx";
import Upload from "./Upload.jsx";
import About from "./About.jsx";
import Contact from "./contact.jsx";
import "./index.css";

/* =========================
   COURSE DATA
========================= */

const sampleCourses = [
  {
    id: 1,
    name: "Cartoon Art",
    price: 49,
    rating: "4.8 ⭐",
    image: "/cartoon.jpg",
    description:
      "Learn bold cartoon characters, expressions and creative drawing techniques.",
    duration: "4 weeks",
    level: "Beginner",
  },

  {
    id: 2,
    name: "Figure Art",
    price: 79,
    rating: "4.9 ⭐",
    image: "/figure.jpg",
    description:
      "Master human anatomy, body proportions and pose drawing.",
    duration: "6 weeks",
    level: "Intermediate",
  },

  {
    id: 3,
    name: "Portrait Art",
    price: 39,
    rating: "4.7 ⭐",
    image: "/portrait.jpg",
    description:
      "Explore facial features, expressions, shading and portrait techniques.",
    duration: "3 weeks",
    level: "Beginner",
  },

  {
    id: 4,
    name: "Landscape Art",
    price: 49,
    rating: "4.6 ⭐",
    image: "/landscape.jpg",
    description:
      "Create beautiful scenic compositions using depth and texture.",
    duration: "5 weeks",
    level: "Intermediate",
  },

  {
    id: 5,
    name: "Watercolor Art",
    price: 59,
    rating: "4.8 ⭐",
    image: "/watercolor.jpg",
    description:
      "Discover watercolor techniques, blending and color theory.",
    duration: "4 weeks",
    level: "Beginner",
  },

  {
    id: 6,
    name: "Oil Painting",
    price: 69,
    rating: "4.9 ⭐",
    image: "/oilpainting.webp",
    description:
      "Learn oil painting, blending, layering and creative techniques.",
    duration: "6 weeks",
    level: "Intermediate",
  },
];

/* =========================
   MAIN COMPONENT
========================= */

function CourseList() {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [points, setPoints] = useState(0);
  const [message, setMessage] = useState("");

  /* =========================
     SCROLL TO SECTION
  ========================= */

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  /* =========================
     BUY COURSE
  ========================= */

  const handleBuyCourse = (course) => {
    const alreadyPurchased = purchasedCourses.some(
      (item) => item.id === course.id
    );

    if (alreadyPurchased) {
      setMessage(`${course.name} is already purchased ✓`);

      setTimeout(() => {
        setMessage("");
      }, 2500);

      return;
    }

    setPurchasedCourses((currentCourses) => [
      ...currentCourses,
      course,
    ]);

    // Add 10 points for every NEW course
    setPoints((currentPoints) => currentPoints + 10);

    setMessage(`${course.name} added to My Courses 🎉`);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  /* =========================
     DELETE COURSE
  ========================= */

  const handleDeleteCourse = (courseId) => {
    setPurchasedCourses((currentCourses) =>
      currentCourses.filter(
        (course) => course.id !== courseId
      )
    );

    setMessage("Course removed from My Courses 🗑️");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  /* =========================
     RETURN UI
  ========================= */

  return (
    <div className="app">

      {/* =========================
          NAVIGATION BAR
      ========================= */}

      <header className="journey-header">

        <div className="logo">
          <span>🎨</span>

          <div>
            <h1>New Journey</h1>
            <small>
              Learn • Create • Inspire
            </small>
          </div>
        </div>

        <nav className="nav-buttons">

          <button
            type="button"
            onClick={() =>
              scrollToSection("courses")
            }
          >
            Courses
          </button>

          <button
            type="button"
            onClick={() =>
              scrollToSection("my-courses")
            }
          >
            My Courses
          </button>

          <button
            type="button"
            onClick={() =>
              scrollToSection("upload")
            }
          >
            Upload
          </button>

          <button
            type="button"
            onClick={() =>
              scrollToSection("about")
            }
          >
            About
          </button>

          <button
            type="button"
            onClick={() =>
              scrollToSection("contact")
            }
          >
            Contact
          </button>

        </nav>

        {/* POINTS */}

        <div className="points-badge">
          ⭐ {points} Points
        </div>

      </header>

      {/* =========================
          MESSAGE
      ========================= */}

      {message && (
        <div className="purchase-message">
          {message}
        </div>
      )}

      {/* =========================
          HERO SECTION
      ========================= */}

      <section className="hero">

        <div className="hero-content">

          <span className="hero-tag">
            ✨ YOUR CREATIVE JOURNEY
          </span>

          <h2>
            Turn Your{" "}
            <span>Creativity</span>
            <br />
            Into Beautiful Art
          </h2>

          <p>
            Learn drawing, painting and creative
            skills through simple and enjoyable
            art courses.
          </p>

          <button
            type="button"
            className="hero-button"
            onClick={() =>
              scrollToSection("courses")
            }
          >
            Explore Courses →
          </button>

        </div>

        <div className="hero-art">
          🎨
        </div>

      </section>

      {/* =========================
          COURSES SECTION
      ========================= */}

      <section
        id="courses"
        className="section"
      >

        <div className="section-heading">

          <span>
            LEARN SOMETHING NEW
          </span>

          <h2>
            Explore Our Courses
          </h2>

          <p>
            Choose a course and start your
            creative journey.
          </p>

        </div>

        <div className="course-list">

          {sampleCourses.map((course) => (

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

              purchased={purchasedCourses.some(
                (item) =>
                  item.id === course.id
              )}

              onBuy={handleBuyCourse}
            />

          ))}

        </div>

      </section>

      {/* =========================
          MY COURSES SECTION
      ========================= */}

      <section
        id="my-courses"
        className="section alternate-section"
      >

        <div className="section-heading">

          <span>
            YOUR COLLECTION
          </span>

          <h2>
            My Courses 📚
          </h2>

          <p>
            Courses you have purchased
            will appear here.
          </p>

        </div>

        {/* NO PURCHASED COURSES */}

        {purchasedCourses.length === 0 ? (

          <div className="empty-courses">

            <div>
              📚
            </div>

            <h3>
              No Courses Purchased Yet
            </h3>

            <p>
              Choose a course above and
              start learning.
            </p>

            <button
              type="button"
              onClick={() =>
                scrollToSection("courses")
              }
            >
              Browse Courses
            </button>

          </div>

        ) : (

          /* PURCHASED COURSES */

          <div className="course-list">

            {purchasedCourses.map(
              (course) => (

                <div
                  className="my-course-wrapper"
                  key={course.id}
                >

                  {/* COURSE CARD */}

                  <Course
                    course={course}
                    name={course.name}
                    price={course.price}
                    rating={course.rating}
                    image={course.image}
                    description={
                      course.description
                    }
                    duration={
                      course.duration
                    }
                    level={course.level}
                    purchased={true}
                  />

                  {/* DELETE BUTTON */}

                  <button
                    type="button"
                    className="delete-course-button"
                    onClick={() =>
                      handleDeleteCourse(
                        course.id
                      )
                    }
                  >
                    🗑️ Remove Course
                  </button>

                </div>

              )
            )}

          </div>

        )}

      </section>

      {/* =========================
          UPLOAD SECTION
      ========================= */}

      <section
        id="upload"
        className="section"
      >

        <div className="section-heading">

          <span>
            SHARE YOUR CREATIVITY
          </span>

          <h2>
            Upload Your Art 🖼️
          </h2>

          <p>
            Build your own personal art
            gallery.
          </p>

        </div>

        <Upload />

      </section>

      {/* =========================
          ABOUT SECTION
      ========================= */}

      <section
        id="about"
        className="section alternate-section"
      >

        <About />

      </section>

      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section
        id="contact"
        className="section"
      >

        <Contact />

      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer>

        <h3>
          🎨 New Journey
        </h3>

        <p>
          Keep creating. Keep learning.
          Keep growing. ✨
        </p>

      </footer>

    </div>
  );
}

export default CourseList;