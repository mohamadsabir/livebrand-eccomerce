import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <section style={{ margin: '0px', padding: '0px' }}>
      <div
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/robber-shoplifting-clothes_482257-85172.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          width: "100%",
          margin: "0",
          padding: "0",
          position: "relative",
        }}
      >
        <div
          className="overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          }}
        ></div>
        <div style={{ zIndex: 2 }} className="container">
          <h1 className=" fw-bold">About Us</h1>
          <p className="fs-4">Redefining fashion with premium T-shirts, jeans, and pants. Stylish, comfortable.</p>
        </div>
      </div>
      <div className="container my-2">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mt-4">
            <img
              src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg"
              alt="Mission"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-3 text-left" style={{ color: 'red' }}>Our Mission</h2>
            <p className="text-muted fs-5 text-left">
              Our mission is to provide high-quality, stylish, and affordable T-shirts, jeans, and pants that blend comfort and style. We believe in creating timeless designs that fit seamlessly into your lifestyle.
            </p>
            <p className="text-muted fs-5 text-left">
              With a focus on sustainability and customer satisfaction, we aim to revolutionize the way you shop for casual and formal wear.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 bg-light">
        <div className="container">
          <h2 className="text-center fw-bold mb-5 text-dark ">Our Products</h2>
          <div className="row text-center">
            <div className="col-md-4 mb-4">
              <div className="p-5 shadow-lg rounded bg-white">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFnDwAatPyOjbbPg6M_BXUScp2Yq49gHo7zg&s"
                  alt="T-Shirts"
                  className="img-fluid rounded mb-5 "
                />
                <h5 className="fw-bold mt-4">Premium T-Shirts</h5>
                <p className="text-muted">
                  Soft, breathable, and available in various designs to suit your everyday style.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-5 shadow-lg rounded bg-white">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS468rk41sMm6bth251zuiOvYoynRaL30-pMA&s"
                  alt="Jeans"
                  className="img-fluid rounded mb-3"
                />
                <h5 className="fw-bold">Classic Jeans</h5>
                <p className="text-muted">
                  Durable, stylish, and a perfect fit for any occasion, from casual outings to parties.
                </p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="p-5 shadow-lg rounded bg-white">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtZq9lj4GGHB3rt-gWvPqsTJ5IJIxQlP_lB1ALEOt1UJm1t8waAPEWat5n7ZCcNUC48_8&usqp=CAU" // Formal pants
                  alt="Pants"
                  className="img-fluid rounded mb-3"
                />
                <h5 className="fw-bold">Chic Pants</h5>
                <p className="text-muted">
                  From formal to semi-formal, our pants offer unmatched style, perfect and comfort.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <h2 className="text-center fw-bold mb-5 text-dark">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-4 shadow-lg rounded bg-white">
              <h5 className="fw-bold" style={{ color: 'red' }}>Uncompromising Quality</h5>
              <p className="text-muted">
                We ensure every product meets the highest standards of quality, from fabric selection to stitching.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 shadow-lg rounded bg-white">
              <h5 className="fw-bold" style={{ color: 'red' }}>Affordable Pricing</h5>
              <p className="text-muted">
                High-quality fashion doesn't have to break the bank. We offer the best value for your money.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="call-to-action text-center text-white py-3 mb-5"
        style={{
          backgroundSize: "cover",
          backgroundPosition: "center",
          width: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <div className="container mt-3" style={{ zIndex: 2 }}>
          <h2 className="fw-bold text-dark">Experience Fashion Like Never Before</h2>
          <p className="fs-5 mb-4 text-dark">
            Join thousands of satisfied customers and redefine your wardrobe with our exclusive collection.
          </p>
          <Link
            to="/"
            className="btn btn-lg px-5 py-3  rounded-pill shadow"
            style={{ backgroundColor: 'red', color: 'white' }}
          >
            Back to Home
          </Link>
        </div>
      </div>
    
    </section>
  );
}

export default About;
