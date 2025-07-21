import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="text-black pt-4 pb-2 mt-5 center">
      <div className="container text-center">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-3">
            <h4>About Us</h4>
            <p style={{ fontSize: "16px" }}>
              We celebrate the rich heritage of local crafts, chats, and jewels. Our goal is to preserve and promote the artistic spirit of traditional Indian culture.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h4>Quick Links</h4>
            <ul className="list-unstyled" >
              <li><a href="#" className="text-black text-decoration-none">Home</a></li>
              <li><a href="#" className="text-black text-decoration-none">About</a></li>
              <li><a href="#" className="text-black text-decoration-none">Contact</a></li>
              <li><a href="#" className="text-black text-decoration-none">Jewels</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h4>Contact</h4>
            <p style={{ fontSize: "16px" }}>
              Email: support@heritagehub.com <br />
              Phone: +91 98765 43210
            </p>
          </div>
        </div>

        <hr className="bg-white" />

        <p className="text-center mb-0" style={{ fontSize: "16px" }}>
          © {new Date().getFullYear()} HeritageHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
