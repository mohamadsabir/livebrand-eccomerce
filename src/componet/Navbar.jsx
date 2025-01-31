import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg shadow-sm"style={{backgroundColor:'white'}}> 
      <div className="container-fluid mt-2">
        <Link className="navbar-brand ms-5 text-decoration-none" to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <h2
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '1px',
              color: 'black',
            }}
          >
            <b>Live<span style={{ color: 'red' }}>B</span>rand</b>
          </h2>
        </Link>

        <button
          className="navbar-toggler me-4"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-2 mb-2">
              <Link className="nav-link text-uppercase fw-bold px-3 active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-uppercase fw-bold px-3" to="/Cloth">
                Cloth
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-uppercase fw-bold px-3 " to="/Services">
                Services
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-uppercase fw-bold px-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-uppercase fw-bold px-3" to="/Cart">
                Cart
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-uppercase fw-bold px-3" to="/Wishlist">
                Wishlist
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-uppercase fw-bold px-3" to="/Payment">
                Payment
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-uppercase fw-bold px-3" to="/BlogPage">
                Blog
              </Link>
            </li>
          </ul>

          {/* Right-aligned buttons (Log In & Sign Up) */}
          <ul className="navbar-nav ms-lg-auto">
            <li className="nav-item me-3 mb-2">
              <Link to="/login">
                <button className="btn btn-outline-dark text-uppercase fw-bold px-4 py-2">
                  Log In
                </button>
              </Link>
            </li>
            <li className="nav-item me-3">
              <Link to="/signup">
                <button className="btn btn-primary text-uppercase fw-bold px-4 py-2">
                  Sign Up
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
