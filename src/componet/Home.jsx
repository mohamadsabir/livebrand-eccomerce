import React from 'react';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <>
      {/* first section*/}
      <div
        id="carouselExampleAutoplaying"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{
          margin: '0',
          padding: '0',
          overflow: 'hidden',
        }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
            style={{
              backgroundColor: 'red',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{
              backgroundColor: 'red',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            style={{
              backgroundColor: 'red',
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              transition: 'all 0.3s ease-in-out',
            }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.2)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM-JXTWblcmeL1hALOuN0T_3L9Qx6aFUrZuauJ0yXTfm-qAW_4n3gKtpG9zVooKptQD_tbnuUbRdt_mApgkJggKC_eNU8CO9PDsswY_p8kbwcfidCM56z8-KD-01bJ0i7wd5QM99ZnYMk/s1600/band+tshirts.jpg"
              className="d-block w-100"
              alt="Paint Collection"
              style={{
                objectFit: 'cover',
                height: '60vh',
                filter: 'brightness(80%)',
                transition: 'all 0.5s ease',
              }}
              onMouseEnter={(e) => (e.target.style.filter = 'brightness(100%)')}
              onMouseLeave={(e) => (e.target.style.filter = 'brightness(80%)')}
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                animation: 'fadeIn 2s',
                textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <h3
                className="display-6 fw-bold text-shadow"
                style={{ color: '#ffffff', transition: 'all 0.3s ease' }}
              >
                Discover Vibrant T-Shirts Collections
              </h3>
              <p
                className="fs-5 text-shadow"
                style={{ color: '#ffffff', transition: 'all 0.3s ease' }}
              >
                Unleash your creativity with premium color palettes.
              </p>
              <Link to="/cloth">
                <button
                  className="btn btn-lg shadow-sm"
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '30px',
                    padding: '10px 30px',
                    transition: 'all 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlmIS1Tlb3aiubYqWR7sC0GHLPZASb-ACCg&s"
              className="d-block w-100"
              alt="T-Shirt Styles"
              style={{
                objectFit: 'cover',
                height: '60vh',
                filter: 'brightness(80%)',
                transition: 'all 0.5s ease',
              }}
              onMouseEnter={(e) => (e.target.style.filter = 'brightness(100%)')}
              onMouseLeave={(e) => (e.target.style.filter = 'brightness(80%)')}
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                animation: 'fadeIn 2s',
                textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <h3
                className="display-6 fw-bold text-shadow"
                style={{ color: '#ffffff', transition: 'all 0.3s ease' }}
              >
                Elevate Your Wardrobe
              </h3>
              <p
                className="fs-5 text-shadow"
                style={{ color: '#ffffff', transition: 'all 0.3s ease' }}
              >
                Trendy and comfortable T-shirts for every occasion.
              </p>
              <Link to="/cloth">
                <button
                  className="btn btn-lg shadow-sm"
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '30px',
                    padding: '10px 30px',
                    transition: 'all 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                  Explore Styles
                </button>
              </Link>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvMMZWIltq7w26Aa7pj_TZOuBtPVxoxQFvRw&s"
              className="d-block w-100"
              alt="Custom Paint & Apparel"
              style={{
                objectFit: 'cover',
                height: '60vh',
                filter: 'brightness(80%)',
                transition: 'all 0.5s ease',
              }}
              onMouseEnter={(e) => (e.target.style.filter = 'brightness(100%)')}
              onMouseLeave={(e) => (e.target.style.filter = 'brightness(80%)')}
            />
            <div
              className="carousel-caption d-flex flex-column justify-content-center align-items-center"
              style={{
                animation: 'fadeIn 2s',
                textShadow: '2px 2px 10px rgba(0,0,0,0.7)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                borderRadius: '10px',
                padding: '20px',
                boxShadow: '0 5px 20px rgba(0, 0, 0, 0.3)',
              }}
            >
              <h3
                className="display-6 fw-bold text-shadow"
                style={{ color: '#ffffff', transition: 'all 0.3s ease' }}
              >
                Custom Paint & Apparel
              </h3>
              <p
                className="fs-5 text-shadow"
                style={{ color: '#ffffff', transition: 'all 0.3s ease' }}
              >
                Design your unique look with us.
              </p>
              <Link to="/cloth">
                <button
                  className="btn btn-lg shadow-sm"
                  style={{
                    backgroundColor: 'red',
                    color: 'white',
                    borderRadius: '30px',
                    padding: '10px 30px',
                    transition: 'all 0.3s ease-in-out',
                  }}
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
                >
                  Customize Now
                </button>
              </Link>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="prev"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '50%',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleAutoplaying"
          data-bs-slide="next"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            borderRadius: '50%',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.5)',
          }}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* second section*/}
      <section className='container'>
        <div className="section-container">
          {/* Text Section */}
          <div className="text-section">
            < h4 className="title text-left">New Collection 2025</ h4>
            <h1 className="main-heading text-left">Discover the Latest Trends in Fashion</h1>
            <p className="description text-left">
              Step into the future of fashion with our exclusive 2025 collection. From everyday essentials to runway-ready pieces, find the perfect outfit for every occasion.
            </p>

          </div>

          {/* Image Section */}
          <div className="image-section">
            <img
              className="main-image"
              src="https://elements-resized.envatousercontent.com/elements-video-cover-images/99c934bd-c9f0-4f86-916c-924ac3a25cd3/video_preview/video_preview_0000.jpg?w=1200&h=630&cf_fit=crop&q=85&format=jpeg&s=6f20027961c5823889775436bff3cf36d9047f888eb7d396af0b2fee961c4119"
              alt="Clothing Store Display"
            />
            <div className="accent-circle"></div>
          </div>
        </div>
      </section>

      <div className="video-container">
        <video autoPlay muted loop>
          <source src="src/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


      {/* third section*/}
      <div className="wrapper">
        {/* Heading */}
        <h2 className="main-title mt-3">Explore Our Trendy Collections</h2>
        <p className="sub-title">
          Discover the perfect outfits for every occasion with unmatched quality and style.
        </p>

        {/* Categories */}
        <div className="category-list">
          <div className="category-item">
            <img src="https://5.imimg.com/data5/RB/CN/MY-39077357/mens-fashion-shirt-500x500.jpg" alt="Men's Fashion" />
            <h3>Men's Collection</h3>
            <p>Stylish and comfortable outfits for every modern man.</p>
            < Link to="/cloth"> <button className="cta-btn">Shop Men's</button></Link>
          </div>
          <div className="category-item">
            <img src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTtcuBqerej9SslADOBnrzd0sFTAQ_Rkx5x_UA6uv7EVmIsKU-LNPakDiFfEi7rbJBjWdpsLbiAOzW_BbNvj2X-o6O94JhkcNuC23ao4F1bIErTJCUlayiB3w" alt="Women's Fashion" />
            <h3>Women's Collection</h3>
            <p>Elegant and chic designs that define timeless beauty.</p>
            <Link to="/cloth"><button className="cta-btn">Shop Women's</button></Link>
          </div>
          <div className="category-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEmH7hwJkv4nBfeVEm0t5fkkXFn5R4Q9JCYA&s" alt="Kids' Fashion" />
            <h3>Kids' Collection</h3>
            <p>Adorable and playful clothing for your little ones.</p>
            <Link to="/cloth"><button className="cta-btn">Shop Kids'</button></Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="choose-us-section" style={{ backgroundColor: 'black' }}>
        <h2 className="text-light mb-3 mt-3"><b>Why Choose Us?</b></h2>
        <div className="choose-us-features">
          <div className="choose-us-feature">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2osbMVlpo2VwjlipNChiuVKoFsp-9QSglg&s"
              alt="Premium Quality"
              className="choose-us-icon"
            />
            < h4 className="choose-us-heading text-light">Premium Quality</ h4>
            <p className="choose-us-description text-light">
              Crafted with the finest materials for ultimate comfort and style.
            </p>
          </div>
          <div className="choose-us-feature">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/023/091/583/small_2x/fast-delivery-icon-with-a-watch-or-timer-icon-fast-delivery-express-and-urgent-shipping-services-chronometer-sign-fast-delivery-logo-free-vector.jpg"
              alt="Fast Delivery"
              className="choose-us-icon"
            />
            < h4 className="choose-us-heading text-light">Fast Delivery</ h4>
            <p className="choose-us-description text-light">
              Enjoy quick and reliable shipping for all your orders.
            </p>
          </div>
          <div className="choose-us-feature">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK-Nb-OhEVrEzUlGTeQWKMZP5k8GZbJzPAym-BupVC3WjMOPTjY0uGapUEGTezE2GGaxI&usqp=CAU"
              alt="Customer Support"
              className="choose-us-icon"
            />
            < h4 className="choose-us-heading text-light">24/7 Customer Support</ h4>
            <p className="choose-us-description text-light">
              We’re here to assist you anytime, anywhere, support.
            </p>
          </div>
        </div>
      </div>

      {/* Exclusive Deals Section */}
      <section className='container'>
        <section className="exclusive-deals-section">
          <h2 className="exclusive-deals-title">
            <b>Exclusive Deals</b>
          </h2>
          <div className="exclusive-deals-grid">
            {[
              {
                img: "https://media.istockphoto.com/id/1062317910/vector/buy-2-get-1-free-sign-speech-bubble-megaphone.jpg?s=612x612&w=0&k=20&c=fUN-I3ASQuN2tPlpXApAmLZngXIOwK0_4B_h-gwQ-Ds=",
                title: "Buy 2, Get 1 Free",
                desc: "On select T-shirts.",
              },
              {
                img: "https://media.istockphoto.com/id/1805876664/vector/30-off-sign-flat-color-message-bubbles-30-off-icon-vector-icon.jpg?s=612x612&w=0&k=20&c=AMqNOKdw8zTDi6NAlpNPESTKDgu6qF6zzgpJ_oafiOo=",
                title: "Flat 30% Off",
                desc: "On all pants for first-time buyers.",
              },
              {
                img: "https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/article5600.gif",
                title: "Seasonal Sales",
                desc: "Limited-time discounts.",
              },
            ].map((deal, index) => (
              <div key={index} className="exclusive-deals-card">
                <img src={deal.img} alt={deal.title} className="exclusive-deals-image" />
                <h3 className="exclusive-deals-card-title">{deal.title}</h3>
                <p className="exclusive-deals-card-desc">{deal.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </section>

      <section className="py-16 px-10 lg:px-28 bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-400" style={{ marginBottom: '0px' }}>
        <div className="container mb-5">
          <h2 className="exclusive-heading text-center text-dark tracking-wider leading-tight mb-5
           text-shadow-lg">
            Easy Shopping Experience
          </h2>
          <div className="row gy-4 justify-content-center">
            {/* Feature Item 1 */}
            <div className="col-md-5 mb-4">
              <div className="feature-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="icon text-yellow-300 text-4xl me-3 transform hover:scale-110 transition-transform">⚙️</span>
                <div>
                  < h4 className='text-dark'><strong>Filter Your Search</strong></ h4>
                  <p className='text-dark'>Refine your shopping experience with intuitive, powerful filters to find exactly what you need.</p>
                </div>
              </div>
            </div>
            {/* Feature Item 2 */}
            <div className="col-md-5 mb-4">
              <div className="feature-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="icon text-green-300 text-4xl me-3 transform hover:scale-110 transition-transform">💬</span>
                <div>
                  < h4 className='text-dark'><strong>Customer Reviews</strong></ h4>
                  <p className='text-dark'>Hear from verified customers who’ve experienced the products you’re interested in.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            {/* Feature Item 3 */}
            <div className="col-md-5 mb-4">
              <div className="feature-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="icon text-red-300 text-4xl me-3 transform hover:scale-110 transition-transform">🔒</span>
                <div>
                  < h4 className='text-dark'><strong>Secure Checkout</strong></ h4>
                  <p className='text-dark'>Shop with confidence using our top-tier encrypted payment system for a secure transaction.</p>
                </div>
              </div>
            </div>
            {/* Feature Item 4 */}
            <div className="col-md-5 mb-4">
              <div className="feature-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="icon text-indigo-500 text-4xl me-3 transform hover:scale-110 transition-transform">👗</span>
                <div>
                  < h4 className='text-dark'><strong>Luxury Fabrics</strong></ h4>
                  <p className='text-dark'>Indulge in premium-quality fabrics that combine comfort with durability for an elevated wardrobe.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row gy-4 justify-content-center">
            {/* Feature Item 5 */}
            <div className="col-md-5 mb-4">
              <div className="feature-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="icon text-pink-500 text-4xl me-3 transform hover:scale-110 transition-transform">🌟</span>
                <div>
                  < h4 className='text-dark'><strong>Trendsetting Styles</strong></ h4>
                  <p className='text-dark'>Stay ahead of the fashion curve with designs inspired by global trends and timeless elegance.</p>
                </div>
              </div>
            </div>
            {/* Feature Item 6 */}
            <div className="col-md-5 mb-4">
              <div className="feature-item d-flex align-items-center p-4 bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
                <span className="icon text-green-500 text-4xl me-3 transform hover:scale-110 transition-transform">🌿</span>
                <div>
                  < h4 className='text-dark'><strong>Sustainable Choices</strong></ h4>
                  <p className='text-dark'>Join the movement for eco-friendly fashion with our sustainable collections and practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <div className="contactus-section">
        <div className="contactus-content">
          <h2 className="contactus-title mb-5">Contact Us</h2>
        </div>

        <div className="contactus-container">
          <div className="contactus-info">
            <div className="contactus-item">
              <div className="contactus-icon"><i className="fas fa-home"></i></div>
              <div className="contactus-text mt-3">
                <h5 style={{ fontWeight: '650' }}>Address</h5>
                <p>Khavazanagar, Tithva-363621, Wankaner, Morbi</p>
              </div>
            </div>

            <div className="contactus-item">
              <div className="contactus-icon"><i className="fas fa-phone"></i></div>
              <div className="contactus-text mt-3">
                <h5 style={{ fontWeight: '650' }}>Phone</h5>
                <p>73594 88574</p>
              </div>
            </div>

            <div className="contactus-item">
              <div className="contactus-icon"><i className="fas fa-envelope"></i></div>
              <div className="contactus-text mt-3">
                <h5 style={{ fontWeight: '650' }}>Email</h5>
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
    </>
  );
}

export default Home;
