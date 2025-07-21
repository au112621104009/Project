import React, { useState } from "react";

const CustomerSupport = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    // You can add validation here
    setSubmitted(true);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#f1fff1ff",
          minHeight: "100vh",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1200px",
            margin: "0 auto",
            backgroundColor: "#fff",
            borderRadius: "16px",
            padding: "40px",
          }}
        >
          {/* Left section */}
          <div style={{ flex: 1, paddingRight: "30px" }}>
            <h1
              style={{
                fontSize: "36px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Customer Support
            </h1>
            <p style={{ fontSize: "18px" }}>
              Email:{" "}
              <span style={{ color: "green", fontWeight: "bold" }}>
                support@swiggy.in
              </span>
            </p>

            <h3
              style={{
                marginTop: "30px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Find us on
            </h3>
            <div
              style={{
                marginTop: "10px",
                display: "flex",
                gap: "15px",
                fontSize: "24px",
                color: "green",
              }}
            >
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-facebook"></i>
              <i className="fab fa-pinterest"></i>
              <i className="fas fa-times"></i>
            </div>

            <h3
              style={{
                marginTop: "30px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Corporate Office
            </h3>
            <p
              style={{
                marginTop: "10px",
                fontSize: "16px",
                lineHeight: "1.6",
              }}
            >
              No. 55, Sy No. 8–14, Ground Floor, I&J Block, Embassy TechVillage,
              Outer Ring Road, Devarbisanhalli, Bengaluru 560 103, Karnataka,
              India
            </p>

            <button
              className="reviewbutton"
              style={{
                marginTop: "25px",
                padding: "12px 24px",
                backgroundColor: "#c2e5c2",
                border: "none",
                borderRadius: "10px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Get Directions
            </button>
          </div>

          <div className="vertical-line"></div>

          {/* Right section */}
          <div
            style={{
              flex: 1,
              paddingLeft: "30px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              Get in touch
            </h2>

            {!submitted ? (
              <>
                <input
                  type="text"
                  placeholder="Enter Name"
                  style={inputStyle}

                />
                <input
                  type="email"
                  placeholder="Enter Email Address"
                  style={inputStyle}
                />
                <textarea
                  placeholder="Enter Message"
                  rows="5"
                  style={inputStyle}
                ></textarea>
                <button
                  onClick={handleSubmit}
                  className="review-button"
                  style={{
                    marginTop: "15px",
                    padding: "10px 20px",
                    backgroundColor: "#c2e5c2",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Submit
                </button>
                <p style={{ fontSize: "14px", marginTop: "20px" }}>
                  By contacting us you agree to the{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Terms and Conditions
                  </span>{" "}
                  and{" "}
                  <span style={{ color: "green", fontWeight: "bold" }}>
                    Privacy Policy
                  </span>
                  .
                </p>
              </>
            ) : (
              <div
                style={{
                  marginTop: "50px",
                  padding: "20px",
                  backgroundColor: "#c2e5c2",
                  borderStyle: "hidden",
                  borderRadius: "30px 0px ",
                  textAlign: "center",
                  fontSize: "18px",
                  color: "green",
                  fontWeight: "bold",
                  animation: "fadeIn 1.5s ease-in-out",
                  opacity: 0,
                  animationFillMode: "forwards",
                }}
              >
                Thank you! We will contact you shortly.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const inputStyle = {
  padding: "12px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginBottom: "15px",
  fontSize: "16px",
};

export default CustomerSupport;
