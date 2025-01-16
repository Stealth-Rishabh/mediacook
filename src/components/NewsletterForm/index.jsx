import React, { useState } from "react";

export default function NewsletterForm({ label, btnText, btnArrowUrl }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false); // To track successful submission

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setError(""); // Clear error if email is valid
      setSuccess(true); // Show success message
      console.log("Form submitted successfully with email: ", email);

      // Simulate form submission
      setTimeout(() => {
        setEmail(""); // Reset email field
        setSuccess(false); // Hide success message after a while
      }, 3000); // Adjust timeout duration as needed
    } else {
      setError("Please enter a valid email address."); // Show error message
      setSuccess(false); // Hide success message if present
    }
  };

  return (
    <>
      {label && <p>Your Email</p>}
      <form action="#" className="cs_newsletter_form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="cs_form_field"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update email state
        />
        <button className="cs_btn cs_style_1" type="submit">
          <span>{btnText}</span>
          <i>
            <img src={btnArrowUrl} alt="Icon" />
            <img src={btnArrowUrl} alt="Icon" />
          </i>
        </button>
        {error && (
          <p style={{ color: "red" }} className="error-message">
            {error}
          </p>
        )}
        {success && (
          <p style={{ color: "green" }} className="success-message">
            Thank you for subscribing!
          </p>
        )}
      </form>
    </>
  );
}
