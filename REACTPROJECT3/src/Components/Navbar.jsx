import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { NavLink } from "react-router-dom";
import { BsCart2 } from "react-icons/bs";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark px-4">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/">Shop</NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto gap-2">
          {[
            { to: "/", label: "Home", end: true },
            {
              label: "Our Services",
              dropdown: [
                { to: "/jewelry", label: "Jewelry" },
                { to: "/craft", label: "Craft" },
                { to: "/food", label: "Food" },
              ],
            },
            { to: "/review", label: "Review" },
            { to: "/support", label: "Support" },
            { to: "/cart", label: <BsCart2 size={20} /> },
            { to: "/wishlist", label: "💗" },
          ].map((item, idx) =>
            item.dropdown ? (
              <li key={idx} className="nav-item dropdown">
                <span
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  style={{ cursor: "pointer" }}
                >
                  {item.label}
                </span>
                <ul className="dropdown-menu">
                  {item.dropdown.map((d, j) => (
                    <li key={j}>
                      <NavLink to={d.to} className="dropdown-item">
                        {d.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={idx} className="nav-item">
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    "nav-link" + (isActive ? " active" : "")
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
