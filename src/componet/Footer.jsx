import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
      <footer
        className="text-light py-5 position-relative d-flex flex-column"
        style={{
          backgroundColor: '#0b0d17',
          backgroundImage: 'radial-gradient(circle,rgb(10, 10, 10), #000)',
          minHeight: '300px',
        }}
      >
        <div className="container mb-auto">
          <div className="text-center mb-4">
          <h1
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '1px',
              color: 'white',
            }}
          >
            <b>Live<span style={{ color: 'red' }}>B</span>rand</b>
          </h1>
            <p
              className="fs-6 mx-auto"
              style={{
                maxWidth: '800px',
                lineHeight: '1.6',
                fontWeight: '400',
              }}
            >
              Experience the perfect blend of elegance and comfort. Your style, your way—curated just for you.
            </p>
          </div>
          <div
            className="mx-auto mb-4"
            style={{
              width: '100px',
              height: '4px',
              backgroundColor: 'red',
              borderRadius: '8px',
            }}
          ></div>

          {/* Main Content */}
          <div className="row text-center text-md-start justify-content-center mb-4">
            {/* Contact Section */}
            <div className="col-12 col-md-6 mb-4">
              <h5 className="text-uppercase fw-bold mb-3">Contact Us</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a
                    href="tel:+917359488574"
                    className="text-decoration-none text-light d-flex align-items-center justify-content-center justify-content-md-start"
                  >
                    <i className="bi bi-telephone-fill me-2"></i>+91 73594 88574
                  </a>
                </li>
                <li className="mb-2">
                  <Link
                    to="mailto:sabirsipai35@gmail.com"
                    className="text-decoration-none text-light d-flex align-items-center justify-content-center justify-content-md-start"
                  >
                    <i className="bi bi-envelope-fill me-2"></i>sabirsipai35@gmail.com
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Tithva-363621,+Wankaner,+Morbi"
                    className="text-decoration-none text-light d-flex align-items-center justify-content-center justify-content-md-start"
                  >
                    <i className="bi bi-geo-alt-fill me-2"></i>Tithva-363621, Wankaner , morbi
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="col-12 col-md-6">
              <h5 className="text-uppercase fw-bold mb-3">Stay Updated</h5>
              <p className="mb-3">
                Subscribe to our newsletter for exclusive deals and the latest updates.
              </p>
              <form>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                    style={{
                      borderRadius: '20px 0 0 20px',
                      border: 'none',
                      padding: '10px',
                      background: 'white',
                      color: 'black',
                      outline: 'none',
                    }}
                  />
                  <button
                    className="btn"
                    type="submit"
                    style={{
                      backgroundColor: 'red',
                      color: '#fff',
                      borderRadius: '0 20px 20px 0',
                      padding: '10px 20px',
                      border: 'none',
                      transition: 'background-color 0.3s',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <center><div className='mt-0'>

          <iframe width="100%"
            height="315"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7366.6294168758495!2d70.86133354685157!3d22.604720256767102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39599599e7547263%3A0xe720536bb2f45cd3!2sTithava%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1737105276743!5m2!1sen!2sin"
            title="tithva map" >
          </iframe>
        </div></center>

        {/* Social Media Links (Fixed at the bottom) */}
        <div
          className="d-flex justify-content-center gap-3 py-3"
          style={{
            backgroundColor: '#0e0c0c',
            borderTop: '1px solid rgba(0, 0, 0, 0.2)',
          }}
        >
          <a
            href="https://www.facebook.com/"
            className="text-decoration-none text-light fs-4"
            style={{ transition: 'color 0.3s' }}
          >
            <i className="bi bi-facebook" style={{ transition: 'color 0.3s', color: '' }}></i>
          </a>

          <a
            href="https://www.instagram.com/"
            className="text-decoration-none text-light fs-4"
            style={{ transition: 'color 0.3s' }}
          >
            <i className="bi bi-instagram" style={{ transition: 'color 0.3s' }}></i>
          </a>
          <a
            href="https://twitter.com/"
            className="text-decoration-none text-light fs-4"
            style={{ transition: 'color 0.3s' }}
          >
            <i className="bi bi-twitter" style={{ transition: 'color 0.3s' }}></i>
          </a>
          <a
            href="https://in.linkedin.com/"
            className="text-decoration-none text-light fs-4"
            style={{ transition: 'color 0.3s' }}
          >
            <i className="bi bi-linkedin" style={{ transition: 'color 0.3s' }}></i>
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-5">
          <p className="mb-0 text-light fs-6">
            <b>&copy; 2024 LiveBrand. All rights reserved.</b>
          </p>
        </div>
      </footer>
    </>
  );
}
export default Footer;
