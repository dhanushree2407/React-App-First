import React, { useState, useEffect } from "react";
import Course from './artco';
import './index.css';

export const about = {
    title: "About Us",
    description: "Easy to learn and Easy to work by using New Journey Art Courses😉",
    benifits: [
        "While you have more than 10 points you can unlock the advanced courses and gain access to exclusive content and resources.✨💫",
        "You can also share your own art images and build a gallery that grows with your creativity.🖼️🎨",
        "We provide a supportive community where you can connect with fellow artists, share your work, and receive feedback and encouragement.🤝💬"]
}

export default function About() {
    return (
        <div className="about-container">
            <h1>{about.title}</h1>
            <p>{about.description}</p>
            <ul>
                {about.benifits.map((benefit, index) => (
                    <li key={index}>{benefit}</li>
                ))}
            </ul>
        </div>
    )
}
