import React from "react";
import './index.css';

export const content = {
  title: "Contact Us",
  email: "123@example.com",
  Address: "123 Art Street, Creativity City, 45678",
  About: "About Us: We are passionate about art education and dedicated to providing high-quality courses for aspiring artists."
};

export default function Contact() {
  return (
    <div className="contact-container">
      <h1>{content.title}</h1>
      <p>{content.About}</p>
      <p>Email: {content.email}</p>
      <p>Address: {content.Address}</p>
    </div>
  );
}
