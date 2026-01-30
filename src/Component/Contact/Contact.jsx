import React, { useState } from "react";
import "./Contact.css";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Contact() {
  const [result, setResult] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setResult("");

    const formData = new FormData(event.target);

    formData.append("access_key", "d6d21852-4c88-4805-aff3-31c6b9d32609");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("success");
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult("error");
        console.log("Error:", data);
      }
    } catch (err) {
      setResult("error");
      console.error("Submission failed:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-container" id="contact">
      <h2 className="contact-title">
        Get in touch
        <div className="blob"></div>
      </h2>

      <div className="contact-wrapper">
        <div className="contact-left">
          <h3 className="lets-talk">
            Let’s <span>talk</span>
          </h3>
          <p className="contact-desc">
            I'm currently available to take on new projects, so feel free to
            send me a message about anything you'd like to work on together. You
            can contact me anytime.
          </p>

          <div className="contact-info">
            <div className="info-item">
              <MdEmail className="icon" />
              <span>abeneendalew@gmail.com</span>
            </div>
            <div className="info-item">
              <MdPhone className="icon" />
              <span>+251 903 730 174</span>
            </div>
            <div className="info-item">
              <MdLocationOn className="icon" />
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={onSubmit}>
            <div className="form-group">
              <label>Your Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Write your message here</label>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>

      {result === "success" && (
        <div className="toast success">
          <span>Your message was sent successfully!</span>
          <p>I'll get back to you as soon as possible.</p>
        </div>
      )}

      {result === "error" && (
        <div className="toast error">
          <span>Oops! Something went wrong.</span>
          <p>Please try again or email me directly.</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
