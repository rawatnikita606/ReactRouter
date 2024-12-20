import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Resume = () => {
  return (
    <div>
      <Header />
      <div className="container mt-4">
        <h2 className="text-center">Resume</h2>
        <hr />
        <div className="mb-4">
          <h3>Personal Information</h3>
          <p>
            <strong>Name:</strong> Nikita rawat
          </p>
          <p>
            <strong>Profession:</strong> Web Designer
          </p>
          <p>
            <strong>Email:</strong> nikitarwt606@gmail.com
          </p>
          <p>
            <strong>Phone:</strong> (+91) 9962719351
          </p>
        </div>
        <div className="mb-4">
          <h3>Skills</h3>
          <ul>
            <li>HTML, CSS, JavaScript</li>
            <li>Responsive Web Design</li>
            <li>UI Design</li>
            <li>REACT </li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3>Experience</h3>
          <p>
            <strong>Web Designer</strong> - INTERN IN TGC WEB DESIGN (2024 - Present)
          </p>
          <ul>
            <li>Designed responsive websites for clients across various industries.</li>
            <li>Collaborated with developers to ensure seamless implementation of designs.</li>
            <li>Improved user engagement through creative and user-friendly interfaces.</li>
          </ul>
        </div>
        <div className="mb-4">
          <h3>Education</h3>
          <p>
            <strong>Bachelor of SCIENCE IN INFORMATION TECHNOLOGY </strong> - HNBGU University (2017 - 2020)
          </p>
        </div>
        <div className="mb-4">
          <h3>Contact</h3>
          <p>
            Feel free to get in touch via email or phone for any inquiries or opportunities.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Resume;
