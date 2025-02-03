
import React, { useEffect, useState } from "react";

function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlistItems(storedWishlist);
  }, []);

  const handleRemoveFromWishlist = (index) => {
    const updatedWishlist = wishlistItems.filter((_, i) => i !== index);
    setWishlistItems(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <>
      <div
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/fashion-outfit-woman-beige-background-top-view_93675-104247.jpg')",
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
            background: "rgba(0, 0, 0, 0.47)",
            zIndex: 1,
          }}
        ></div>
        <div style={{ zIndex: 2 }} className="container">
          <h1 className=" fw-bold">Your Wishlist </h1>
          <p className="fs-4"> These are the items you have added to your wishlist.</p>
        </div>
      </div>
      
      <div className="container py-5">
        <div className="row g-4 justify-content-center">
          {wishlistItems.length === 0 ? (
            <p>Wishlist is empty.</p>
          ) : (
            wishlistItems.map((product, index) => (
              <div className="col-md-4 col-sm-6" key={index}>
                <div className="card h-100 shadow-lg border-0 position-relative overflow-hidden card-hover-effect">
                  <div className="card-img-top-container">
                    <img
                      src={product.img}
                      className="card-img-top img-fluid"
                      alt={product.title}
                    />
                  </div>
                  <div className="card-body text-center p-4">
                    <h5 className="card-title fw-bold">{product.title}</h5>
                    <p className="card-text text-muted fs-6">
                      <b>{product.price}</b>
                    </p>
                    <p className="card-text mb-1">
                      <span className="badge bg-dark">{product.quality}</span>
                    </p>
                    <p className="card-text text-secondary">{product.category}</p>
                    <p className="card-text">{product.description}</p>
                    <button
                      className="btn  mt-3"
                      onClick={() => handleRemoveFromWishlist(index)} style={{ backgroundColor: 'red', color: 'white' }}
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
export default Wishlist;
