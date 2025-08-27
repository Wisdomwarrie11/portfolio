import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section py-16 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        About <span className="text-blue-600">Me</span>
      </h2>
      <div className="about-container">
        {/* Profile Image */}
        <div className="about-image">
          <img style={{marginTop: '15px'}} src="wisdom.jpg" alt="My Profile" />
        </div>

        {/* About Content */}
        <div className="about-content">
          <h3 className="text-2xl font-semibold mb-4">Hi, I’m Wisdom Warrie</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            I’m a <span style={{fontSize: "20px"}} className="font-semibold">Frontend web developer </span>
            and a health professional passionate about merging healthcare and technology. I create modern, 
            responsive, and engaging websites and applications using 
            <span style={{fontSize: "20px"}} className="text-blue-600"> React, JavaScript, Bootstrap, and CSS</span>. 
            I believe in building digital tools that improve both businesses and lives.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Beyond coding, I enjoy teaching, mentoring, problem-solving, learning emerging technologies, 
            and designing user-friendly experiences.
          </p>

          <div className="about-buttons">
            <a href="/contact" className="btn-primary">Contact Me</a>
            <a href="/cv.pdf" className="btn-secondary" download>Download CV</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
