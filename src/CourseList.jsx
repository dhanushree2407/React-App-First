import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Course from "./artco";
import Contact from "./contact.jsx";
import Upload from "./Upload.jsx";
import About from "./About.jsx";

import "./index.css";
import Viewcourses from "./Viewcourses.jsx";


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
    image: "\\journal.jpg",
    description: "Explore mixed-media journaling techniques to develop a personal art practice.",
    duration: "8 weeks",
    level: "Beginner"
  }
];


function CourseList() {
  const [courses, setCourses] = useState([]);
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const [points, setPoints] = useState(0);

 useEffect(() => {
  setCourses(sampleCourses);

  // Clear purchased courses when the page is loaded/reloaded
  localStorage.removeItem("purchasedCourses");

  setPurchasedCourses([]);
}, []);

const handleBuyCourse = (course) => {
  setPurchasedCourses((currentCourses) => {

    // Check whether already purchased
    const alreadyPurchased = currentCourses.some(
      (item) => item.id === course.id
    );

    if (alreadyPurchased) {
      return currentCourses;
    }

    // Add new course
    const updatedCourses = [
      ...currentCourses,
      course
    ];

    // Save while the current session is running
    localStorage.setItem(
      "purchasedCourses",
      JSON.stringify(updatedCourses)
    );

    // Add 10 points for a new course
    setPoints((currentPoints) => currentPoints + 10);

    return updatedCourses;
  });
};


  const handleCourseComplete = () => {
    setPoints((currentPoints) => currentPoints + 10);
  };


  return (
    <>
      
     <div className="journey-header">

  <h1>New Journey 🎨</h1>

  <button onClick={() => {
    document.getElementById("my-courses")?.scrollIntoView({
      behavior: "smooth"
    });
  }}>
    My Courses
  </button>

  <button onClick={() => {
    document.getElementById("upload")?.scrollIntoView({
      behavior: "smooth"
    });
  }}>
    Upload Photos
  </button>

  <button onClick={() => {
    document.getElementById("about")?.scrollIntoView({
      behavior: "smooth"
    });
  }}>
    About Us
  </button>

  <button onClick={() => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  }}>
    Contact Us
  </button>

</div>


      <div className="header">

        <h1>
          Welcome to Your New Journey ✨
        </h1>

        <h3>
          By Dhanu ❤️
        </h3>

      </div>


      <section id="courses">

        <h1 className="section-title">
          Available Courses 🎨
        </h1>

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
                purchased={purchasedCourses.some(
                   (item) => item.id === course.id
    )}
                onBuy={handleBuyCourse}
                onComplete={handleCourseComplete}
              />
            );

          })}

        </div>

      </section>


      <div className="points-display">

        🏆 Total Points:

        <span className="points-value">
          {points}
        </span>

      </div>


      <div id="upload">
        <Upload
          onUpload={(added) =>
            setPoints((p) => p + added)
          }
        />
      </div>
       
      <div id ="viewcourses">
        <Viewcourses/>
      </div>   

      <div id="about">
        <About />
      </div>


      <div id="contact">
        <Contact />
      </div>

    </>
  );
}


export default CourseList;