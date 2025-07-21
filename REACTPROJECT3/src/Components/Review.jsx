import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";

function Review() {
  const [reviews, setReviews] = useState([]);
  const [index, setIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [stars, setStars] = useState("5");
  const [image, setImage] = useState("");

  // Fetch reviews from backend 
  useEffect(() => {
    fetch("http://localhost:3001/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data))
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  // Auto cycle through reviews
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (reviews.length ? (prev + 1) % reviews.length : 0));
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews]);

  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <i
        key={i}
        className={"bi " + (i < count ? "bi-star-fill" : "bi-star") + " me-1"}
        style={{ color: "#ffc107" }}
      ></i>
    ));
  };

  const handleLeaveReview = () => {
    setShowForm(!showForm);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newReview = { name, text, stars, image };

    try {
      const res = await fetch("http://localhost:3001/reviews", {
        method: "POST",
        body: JSON.stringify(newReview),
      });
      const saved = await res.json();
      setReviews((prev) => [...prev, saved]);
      setName("");
      setText("");
      setStars("5");
      setImage("");
      setShowForm(false);
    } catch (err) {
      console.error("Failed to submit review:", err);
    }
  };

  const currentReview = reviews[index] || {};

  return (
    <>
      <div className="container" style={{ marginTop: "70px" }}>
        <h4 style={{ textAlign: "center", marginBottom: "30px" }}>
          <i
            className="bi bi-quote"
            style={{ fontSize: "2rem", marginRight: "10px" }}
          ></i>
          WHAT OUR CUSTOMERS SAY
        </h4>

        <div
          className="card mx-auto"
          style={{
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            maxWidth: "500px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
          }}
        >
          {currentReview.name ? (
            <>
                <div className="text-center">
                  <img
                    src={currentReview.image || "https://via.placeholder.com/100"}
                    alt={currentReview.name}
                    className="rounded-circle mb-3"
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                </div>
              <p className="text-center">
                <strong>{currentReview.name}</strong> <br />"
                {currentReview.text}"
              </p>
              <div className="text-center">{renderStars(Number(currentReview.stars))}</div>
            </>
          ) : (
            <p className="text-muted">Loading reviews...</p> 
          )}

          <button onClick={handleLeaveReview} className="review-button mt-3" >
            {showForm ? "Cancel" : "Leave a Review"}
          </button>

          {showForm && (
            <form onSubmit={handleSubmit} className="mt-3">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="form-control mb-2"
              />
              <textarea
                placeholder="Your Review"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
                className="form-control mb-2"
              ></textarea>
              <select
                value={stars}
                onChange={(e) => setStars(e.target.value)}
                className="form-select mb-2"
              >
                <option value="5">5 Stars</option>
                <option value="4">4 Stars</option>
                <option value="3">3 Stars</option>
                <option value="2">2 Stars</option>
                <option value="1">1 Star</option>
              </select>
              <input
                type="text"
                placeholder="Image URL (optional)"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className="form-control mb-3"
              />
              <button
                type="submit"
                className="btn btn-success w-100 rounded-pill"
              >
                Submit Review
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default Review;
