import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <Header />
      <div className="container mt-4" style={{ padding: " 5% 10% " }}>
        <h2>Contact Us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
          deleniti expedita autem numquam pariatur.
        </p>

        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control"
              rows="5"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>

        {submitted && (
          <div className="alert alert-success" role="alert">
            Thank you! Your message has been sent successfully.
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
