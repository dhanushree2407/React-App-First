import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CourseList from "./CourseList.jsx";
import Viewcourses from "./Viewcourses.jsx";
import Upload from "./Upload.jsx";
import About from "./About.jsx";
import Contact from "./contact.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<CourseList />} />

        <Route path="/viewcourses" element={<Viewcourses />} />

        <Route path="/upload" element={<Upload />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;