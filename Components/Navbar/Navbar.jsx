import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const pageTitles = {
      "/": "Start Framework",
      "/about": "About Us",
      "/portfolio": "Our Portfolio",
      "/contact": "Contact Us",
    };

    const currentPath = location.pathname;
    document.title = pageTitles[currentPath] || "Start Framework";
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""
        } navbar-expand-lg navbar-dark position-fixed top-0 w-100 d-flex justify-content-between z-3`}
    >
      <div className="container">
        <Link to="/" className="text-decoration-none">
          <h1 className="my-0 fw-bold text-uppercase text-white">
            Start Framework
          </h1>
        </Link>

        <ul className="list-unstyled d-flex justify-content-center align-items-center">
          <li className="mx-4 text-uppercase">
            <NavLink
              to="/about"
              id="nav-link"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none fw-semibold rectangle rounded fs-5 activeLink"
                  : "text-decoration-none fw-semibold fs-5"
              }
            >
              About
            </NavLink>
          </li>
          <li className="mx-4 text-uppercase">
            <NavLink
              to="/portfolio"
              id="nav-link"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none fw-semibold fs-5 rectangle rounded activeLink"
                  : "text-decoration-none fw-semibold fs-5"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li className="mx-4 text-uppercase">
            <NavLink
              to="/contact"
              id="nav-link"
              className={({ isActive }) =>
                isActive
                  ? "text-decoration-none fw-semibold fs-5 rectangle rounded activeLink"
                  : "text-decoration-none fw-semibold fs-5"
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
