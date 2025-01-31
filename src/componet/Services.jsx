import React from "react";

function Services() {
  const scrollToContactForm = () => {
    document.getElementById("contact-form-section").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="services-page" style={{ margin: '0px', padding: '0px' }}>
      <div
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://media.licdn.com/dms/image/C4E12AQHPFlxcDxemBQ/article-cover_image-shrink_600_2000/0/1626448298236?e=2147483647&v=beta&t=OSAfZqdgUrJKnWoqQNv5wJoziuJNwOvDSAXS9i1pll8')",
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
          <h1 className=" fw-bold">  Our Fashion Services</h1>
          <p className="fs-4">   Explore our curated services for T-shirts and pants with premium
            quality, style, and comfort..</p>
        </div>
      </div>
      <div className=" container services-section py-5">
        <div className="row g-4 justify-content-center">
          {/* T-Shirt Service Card */}
          <div className="col-md-4 col-sm-6">
            <div className="service-card shadow-lg rounded p-4 service-card-hover">
              <img
                src="https://m.media-amazon.com/images/I/61Iolls168L._AC_UY1100_.jpg"
                className="service-image"
                alt="T-Shirt Service"
              />
              <h5 className="service-title">Custom T-Shirt Printing</h5>
              <p className="service-description">
                Design your own T-shirt with our custom printing services. Choose
                from a wide range of designs and personalize it to make it yours!
              </p>
              <button
                className="btn service-btn"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={scrollToContactForm}
              >
                Get Started
              </button>
            </div>
          </div>

          {/* Pants Service Card */}
          <div className="col-md-4 col-sm-6">
            <div className="service-card shadow-lg rounded p-4 service-card-hover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOK5YxujkdAy_bRVu3Nu0k0clm2Ny_eYgb0g&s"
                alt="Pants Service"
                className="service-image"
              />
              <h5 className="service-title">Tailored Pants Fitting</h5>
              <p className="service-description">
                Get your pants fitted just the way you like them. We offer
                tailoring services for all sizes and styles. All pants fit.
              </p>
              <button
                className="btn service-btn"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={scrollToContactForm}
              >
                Book a Fitting
              </button>
            </div>
          </div>

          {/* Additional Service Card */}
          <div className="col-md-4 col-sm-6">
            <div className="service-card shadow-lg rounded p-4 service-card-hover">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWH6tIB8BmmBpnQTkwohWo9FqEv8pAGrZnxHQ_YyhraFmy16md0n91PJuuFnEs5NKQ-zc&usqp=CAU"
                alt="Fashion Advice"
                className="service-image"
              />
              <h5 className="service-title">Fashion Consultation</h5>
              <p className="service-description">
                Need help choosing your style? Our experts provide personalized
                fashion advice to make sure you look great in every outfit.
              </p>
              <button
                className="btn service-btn"
                style={{ backgroundColor: "red", color: "white" }}
                onClick={scrollToContactForm}
              >
                Book a Session
              </button>
            </div>
          </div>
        </div>
      </div>
      <section className="container">
        <div className="customer-testimonials text-center py-5" style={{ backgroundColor: "#f8f9fa" }}>
          <h2 className="testimonials-title mb-4" style={{ fontWeight: "bold", fontSize: "2.5rem", color: "#212529" }}>
            What Our Customers Say
          </h2>
          <p className="testimonials-description mb-5" style={{ fontSize: "1.2rem", color: "#6c757d", maxWidth: "700px", margin: "0 auto" }}>
            Hear from our delighted customers about their experiences with our premium services and bespoke designs.
          </p>

          <div className="row g-4 justify-content-center">
            {/* Testimonial 1 */}
            <div className="col-md-4">
              <div
                className="testimonial-card shadow-lg rounded p-4 bg-white position-relative"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src="https://randomuser.me/api/portraits/women/1.jpg"
                  alt="Jane Doe"
                  className="testimonial-photo rounded-circle mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "3px solid white",
                  }}
                />
                <div className="testimonial-icon mb-3" style={{ fontSize: "2.5rem", color: "red" }}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text mb-4" style={{ fontStyle: "italic", color: "#495057" }}>
                  "The custom T-shirts are amazing! I love the quality and the designs."
                </p>
                <footer className="testimonial-footer" style={{ fontWeight: "bold", color: "#343a40" }}>
                  - Jane Doe
                </footer>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-md-4">
              <div
                className="testimonial-card shadow-lg rounded p-4 bg-white position-relative"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src="https://randomuser.me/api/portraits/men/1.jpg"
                  alt="John Smith"
                  className="testimonial-photo rounded-circle mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "3px solid white",
                  }}
                />
                <div className="testimonial-icon mb-3" style={{ fontSize: "2.5rem", color: "red" }}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text mb-4" style={{ fontStyle: "italic", color: "#495057" }}>
                  "Tailoring services are top-notch. Perfect fits every time!"
                </p>
                <footer className="testimonial-footer" style={{ fontWeight: "bold", color: "#343a40" }}>
                  - John Smith
                </footer>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-md-4">
              <div
                className="testimonial-card shadow-lg rounded p-4 bg-white position-relative"
                style={{
                  transition: "transform 0.3s, box-shadow 0.3s",
                  overflow: "hidden",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
                }}
              >
                <img
                  src="https://randomuser.me/api/portraits/women/2.jpg"
                  alt="Emily Clark"
                  className="testimonial-photo rounded-circle mb-3"
                  style={{
                    width: "80px",
                    height: "80px",
                    objectFit: "cover",
                    border: "3px solid white",
                  }}
                />
                <div className="testimonial-icon mb-3" style={{ fontSize: "2.5rem", color: "red" }}>
                  <i className="fas fa-quote-left"></i>
                </div>
                <p className="testimonial-text mb-4" style={{ fontStyle: "italic", color: "#495057" }}>
                  "Fashion consultation changed my style game. Highly recommend!"
                </p>
                <footer className="testimonial-footer" style={{ fontWeight: "bold", color: "#343a40" }}>
                  - Emily Clark
                </footer>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact */}
      <div className="contactus-section" id="contact-form-section">
        <div className="contactus-content">
          <h2 className="contactus-title mb-5">Contact Us</h2>
        </div>

        <div className="contactus-container">
          <div className="contactus-info">
            <div className="contactus-item">
              <div className="contactus-icon"><i className="fas fa-home"></i></div>
              <div className="contactus-text">
                <h5>Address</h5>
                <p>Khavazanagar, Tithva-363621, Wankaner, Morbi</p>
              </div>
            </div>

            <div className="contactus-item">
              <div className="contactus-icon"><i className="fas fa-phone"></i></div>
              <div className="contactus-text">
                <h5>Phone</h5>
                <p>73594 88574</p>
              </div>
            </div>

            <div className="contactus-item">
              <div className="contactus-icon"><i className="fas fa-envelope"></i></div>
              <div className="contactus-text">
                <h5>Email</h5>
                <p>sabirsipai35@gmail.com</p>
              </div>
            </div>
          </div>

          <div className="contactus-form">
            <h4>Send Message</h4>
            <form>
              <input type="text" className="contactus-input" placeholder="Full Name" />
              <input type="email" className="contactus-input" placeholder="Email" />
              <textarea className="contactus-input" rows="3" placeholder="Type your Message..."></textarea>
              <button type="submit" className="contactus-btn">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
<link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
  rel="stylesheet"
/>