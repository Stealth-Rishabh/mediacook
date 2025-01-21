import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For redirection

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    service: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // Hook for redirection

  // Function to validate form fields
  const validateForm = () => {
    let formErrors = {};

    // Name validation (no numbers or special characters allowed)
    if (!formData.name) {
      formErrors.name = "Enter a valid name";
    } else if (!/^[a-zA-Z\s]*$/.test(formData.name)) {
      formErrors.name = "Name should contain only letters and spaces";
    }

    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Valid email is required";
    }

    // Phone number validation (must be 10 digits, start with 6-9)
    if (!formData.phoneNumber) {
      formErrors.phoneNumber = "Phone number is required";
    } else if (!/^[6-9][0-9]{9}$/.test(formData.phoneNumber)) {
      formErrors.phoneNumber =
        "Phone number must be 10 digits and start with a digit between 6 and 9";
    }

    // Company name validation
    if (!formData.companyName) {
      formErrors.companyName = "Company name is required";
    }

    // Service selection validation
    if (!formData.service) {
      formErrors.service = "Please choose a service";
    }

    // Subject validation
    if (!formData.subject) {
      formErrors.subject = "Subject is required";
    }

    // Message validation
    if (!formData.message) {
      formErrors.message = "Message is required";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const postData = new FormData();

      // Add all form fields
      postData.append("contact-name", formData.name);
      postData.append("contact-email", formData.email);
      postData.append("contact-phone", formData.phoneNumber);
      postData.append("contact-company", formData.companyName);
      postData.append("contact-subject", formData.subject);
      postData.append("contact-message", formData.message);
      postData.append("contact-service", formData.service);
      postData.append("referrer_name", document.referrer);
      postData.append("orderid", "1043");
      postData.append("sitename", "Mediacook2024");
      postData.append("source", "website");

      // Debug log
      console.log("Form Data being sent:", Object.fromEntries(postData));

      try {
        const response = await fetch(
          "https://www.bfis.in/BFIS/mediacook_crm_api.php",
          {
            method: "POST",
            body: postData,
            headers: {
              Accept: "application/json",
            },
          }
        );

        // Debug log
        console.log("Response status:", response.status);
        const responseText = await response.text();
        console.log("Raw response:", responseText);

        const result = JSON.parse(responseText);

        if (result.success) {
          navigate("/thank-you");
        } else {
          alert(`Submission failed: ${result.message}`);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert(
          "An error occurred while submitting the form. Please try again later."
        );
      }
    }
  };

  // Handle input change and remove error when input becomes valid
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };

      // Name validation
      if (name === "name" && /^[a-zA-Z\s]*$/.test(value)) {
        delete newErrors.name;
      }

      // Email validation
      if (name === "email" && /\S+@\S+\.\S+/.test(value)) {
        delete newErrors.email;
      }

      // Phone number validation
      if (name === "phoneNumber" && /^[6-9][0-9]{0,9}$/.test(value)) {
        delete newErrors.phoneNumber;
      }

      if (value.trim() !== "") {
        delete newErrors[name];
      }

      return newErrors;
    });
  };

  // Restrict numbers and special characters in the name field
  const handleNameKeyPress = (e) => {
    const char = String.fromCharCode(e.which);
    if (!/^[a-zA-Z\s]*$/.test(char)) {
      e.preventDefault();
    }
  };

  // Restrict non-digit characters in the phone field and ensure first digit is valid
  const handlePhoneKeyPress = (e) => {
    const char = String.fromCharCode(e.which);
    const value = e.target.value;

    if (!/^\d$/.test(char) || (value.length === 0 && !/[6-9]/.test(char))) {
      e.preventDefault();
    }
  };

  return (
    <form
      style={{ border: "1px solid #D5D5D5" }}
      onSubmit={handleSubmit}
      className="cs_contact_form cs_style_1 cs_white_bg cs_radius_30"
    >
      <div className="row">
        {/* Name */}
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Name</label>
          <input
            type="text"
            name="name"
            className={`cs_form_field ${errors.name ? "is-invalid" : ""}`}
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            onKeyPress={handleNameKeyPress}
          />
          {errors.name && <div className="text-danger">{errors.name}</div>}
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        {/* Email */}
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Email</label>
          <input
            type="email"
            name="email"
            className={`cs_form_field ${errors.email ? "is-invalid" : ""}`}
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        {/* Phone Number */}
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Phone Number
          </label>
          <input
            type="text"
            name="phoneNumber"
            className={`cs_form_field ${
              errors.phoneNumber ? "is-invalid" : ""
            }`}
            placeholder="Enter your phone number"
            value={formData.phoneNumber}
            onChange={handleChange}
            maxLength="10"
            onKeyPress={handlePhoneKeyPress}
          />
          {errors.phoneNumber && (
            <div className="text-danger">{errors.phoneNumber}</div>
          )}
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        {/* Company Name */}
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            className={`cs_form_field ${
              errors.companyName ? "is-invalid" : ""
            }`}
            placeholder="Enter your company name"
            value={formData.companyName}
            onChange={handleChange}
          />
          {errors.companyName && (
            <div className="text-danger">{errors.companyName}</div>
          )}
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        {/* Service */}
        <div className="col-lg-6">
          <label className="cs_input_label cs_heading_color">Service</label>
          <select
            name="service"
            className={`cs_form_field ${errors.service ? "is-invalid" : ""}`}
            value={formData.service}
            onChange={handleChange}
          >
            <option value="">Choose a Service</option>
            <option value="sem">Search Engine Marketing (SEM)</option>
            <option value="seo">Search Engine Optimization (SEO)</option>
            <option value="smm">Social Media Marketing (SMM)</option>
          </select>
          {errors.service && (
            <div className="text-danger">{errors.service}</div>
          )}
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        {/* Subject */}
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Subject</label>
          <input
            type="text"
            name="subject"
            className={`cs_form_field ${errors.subject ? "is-invalid" : ""}`}
            placeholder="Your subject"
            value={formData.subject}
            onChange={handleChange}
          />
          {errors.subject && (
            <div className="text-danger">{errors.subject}</div>
          )}
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        {/* Message */}
        <div className="col-lg-12">
          <label className="cs_input_label cs_heading_color">Message</label>
          <textarea
            cols={30}
            rows={10}
            name="message"
            className={`cs_form_field ${errors.message ? "is-invalid" : ""}`}
            placeholder="Write something..."
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && (
            <div className="text-danger">{errors.message}</div>
          )}
          <div className="cs_height_42 cs_height_xl_25" />
        </div>

        {/* Submit Button */}
        <div className="col-lg-12">
          <div className="cs_height_18" />
          <button className="cs_btn cs_style_1" type="submit">
            <span>Submit</span>
            <i>
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
              <img src="/images/icons/arrow_white.svg" alt="Icon" />
            </i>
          </button>
        </div>
      </div>
    </form>
  );
}
