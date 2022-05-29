import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.scss";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <style jsx>{`
          button[aria-expanded="false"] > .close {
            display: none;
          }
          button[aria-expanded="true"] > .open {
            display: none;
          }˜
        `}</style>
        <button
          className="navbar-toggler border-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="open text-light h1">+</span>
          <span className="close text-light h1">-</span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-start"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5 gap-4">
            <NavLink to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link">
              Episode
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
