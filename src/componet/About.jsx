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
      <section className="container">
      <div className="container my-2 mb-3 mt-3">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mt-4">
            <img
              src="https://images.pexels.com/photos/1488463/pexels-photo-1488463.jpeg"
              alt="Mission"
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-md-6">
            <h2 className="fw-bold mb-2 mt-4 text-left" style={{ color: 'red' }}>Our Mission</h2>
            <p className="fs-5" style={{ textAlign: "justify" }}>
              At Livebrand, our mission is to redefine the way you experience everyday fashion. We are dedicated to offering high-quality, stylish, and affordable T-shirts, jeans, and pants that effortlessly blend comfort and style. Whether you’re dressing for a casual outing or a formal occasion, our collection is designed to keep you looking and feeling your best.
            </p>
            <p className="fs-5" style={{ textAlign: "justify" }}>
              Our philosophy revolves around creating timeless designs that seamlessly integrate into your lifestyle. From versatile wardrobe staples to unique pieces that stand out, we ensure that every item we craft meets the highest standards of quality.
            </p>

          </div>
        </div>
      </div>
      </section>
      <section className="container mb-3">
        <div className="container mt-4">
          <h2 className="text-center mb-4 fw-bold">Our Features</h2>  {/* Heading for the section */}
          <div className="row">
            {/* card 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-patch-check-fill display-4 mb-3" style={{ color: 'red' }}></i> {/* Red icon */}
                  <h5 className="card-title">High-Quality Fabrics</h5>
                  <p className="card-text">
                    We use premium fabrics to ensure our clothing is comfortable, durable, and stylish.
                  </p>
                </div>
              </div>
            </div>
            {/* card 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-gem display-4 mb-3" style={{ color: 'red' }}></i> {/* Red icon */}
                  <h5 className="card-title">Timeless Designs</h5>
                  <p className="card-text">
                    Our designs are crafted to remain trendy and versatile for all occasions.
                  </p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-recycle display-4 mb-3" style={{ color: 'red' }}></i> {/* Red icon */}
                  <h5 className="card-title">Sustainable Practices</h5>
                  <p className="card-text">
                    We are committed to eco-friendly production methods for a better tomorrow.
                  </p>
                </div>
              </div>
            </div>
            {/* card 4 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-people-fill display-4 mb-3" style={{ color: 'red' }}></i> {/* Red icon */}
                  <h5 className="card-title">Inclusive Sizing</h5>
                  <p className="card-text">
                    We believe fashion is for everyone, offering sizes to suit all body types.
                  </p>
                </div>
              </div>
            </div>
            {/* card 5 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-headset display-4 mb-3" style={{ color: 'red' }}></i> {/* Red icon */}
                  <h5 className="card-title">Exceptional Customer Service</h5>
                  <p className="card-text">
                    Your satisfaction is our priority. We're here to help you every step of the way.
                  </p>
                </div>
              </div>
            </div>

            {/* card 6 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm text-center">
                <div className="card-body">
                  <i className="bi bi-truck display-4 mb-3" style={{ color: 'red' }}></i> {/* Red icon */}
                  <h5 className="card-title">Fast Shipping</h5>
                  <p className="card-text">
                    We offer fast and reliable shipping to ensure you receive your order on time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid py-2" style={{ backgroundColor: '#fdf5f6' }}>
        <div className="container" >
          <h2 className="text-center fw-bold mb-4 mt-4 text-dark">Our Products</h2>
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
        <h2 className="text-center fw-bold mb-5 mt-5 text-dark">Why Choose Us?</h2>
        <div className="row">
          <div className="col-md-6 mb-4">
            <div className="p-4 shadow-lg rounded bg-white">
              <i className="bi bi-award display-4 mb-3" style={{ color: 'red' }}></i>
              <h5 className="fw-bold">Uncompromising Quality</h5>
              <p className="text-muted">
                We ensure every product meets the highest standards of quality, from fabric selection to stitching.
              </p>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <div className="p-4 shadow-lg rounded bg-white">
              <i className="bi bi-wallet2 display-4 mb-3" style={{ color: 'red' }}></i>
              <h5 className="fw-bold">Affordable Pricing</h5>
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
