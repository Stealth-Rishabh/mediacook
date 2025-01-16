import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ThankYou() {
  const navigate = useNavigate();

  // Automatically redirect to the homepage after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer); // Cleanup the timer if the component is unmounted
  }, [navigate]);

  return (
    <div
      className="thank-you-page"
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Thank You!</h1>
      <p>
        Your form has been submitted successfully. Redirecting to homepage...
      </p>
    </div>
  );
}
