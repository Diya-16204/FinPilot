import { useState } from "react";
import "./contacts.css";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    setShowPopup(true);

    // Hide popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* 👇 Top Heading */}
      <h1 className="contact-heading">Contact Us</h1>

      <h2>If you have any queries, contact us here</h2>
      <p>You can reach us directly at:</p>
      <p><strong>Phone: +91-9876543210</strong></p>
      <p><strong>Email: support@finpilot.com</strong></p>

      <h3>Or submit your questions below:</h3>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Question" required></textarea>
        <button type="submit">Submit</button>
      </form>

      {/* 👇 Popup */}
      {showPopup && (
        <div className="popup">
          <p>Your question is submitted. We'll get back to you as soon as possible.</p>
        </div>
      )}
    </div>
  );
};

export default Contact;
