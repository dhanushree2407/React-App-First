import { useState, useEffect } from "react";

const usefetch = (url) => {
  const [courses, setCourses] = useState(null);
  const [filteredCourses, setFilteredCourses] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`API error: ${response.status} ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setCourses(data);
        setFilteredCourses(data);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message || "Failed to load courses.");
      });
  }, [url]);

  return [courses, filteredCourses, error];
};

export default usefetch;