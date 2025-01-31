import React, { useState, useEffect } from 'react';


function Header() {
    const [wishlistCount, setWishlistCount] = useState(0);
    const [cartItemCount, setCartItemCount] = useState(0);

    // Update wishlist count on initial load and when storage changes
    useEffect(() => {
        const updateWishlistCount = () => {
            const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
            setWishlistCount(storedWishlist.length);
        };

        updateWishlistCount();
        window.addEventListener("storage", updateWishlistCount);

        return () => {
            window.removeEventListener("storage", updateWishlistCount);
        };
    }, []);

    // Update cart item count on initial load
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemCount = storedCart.reduce((total, item) => total + item.quantity, 0);
        setCartItemCount(itemCount);
    }, []);

    return (
        <header className="header-container">
                <div className="header-wrapper">
                {/* Social Media Links */}
                <div
                    className="d-flex justify-content-center gap-3 py-3 header-social-links"
                    style={{ borderTop: '2px solid rgb(39, 37, 37)' }}
                >
                    <a href="https://www.facebook.com/" className="text-decoration-none text-light fs-4 header-social-icon">
                        <i className="bi bi-facebook" style={{ color: 'black' }}></i>
                    </a>
                    <a href="https://twitter.com/" className="text-decoration-none text-light fs-4 header-social-icon">
                        <i className="bi bi-twitter" style={{ color: 'black' }}></i>
                    </a>
                    <a href="https://www.instagram.com/" className="text-decoration-none text-light fs-4 header-social-icon">
                        <i className="bi bi-instagram" style={{ color: 'black' }}></i>
                    </a>
                    <a href="https://in.linkedin.com/" className="text-decoration-none text-light fs-4 header-social-icon">
                        <i className="bi bi-linkedin" style={{ color: 'black' }}></i>
                    </a>
                </div>

                {/* Search Bar */}
                <div className="header-search">
                    <input
                        type="text"
                        placeholder="Search for cloth..."
                        className="header-search-input"
                        list="product-suggestions" // Connects the input field to the datalist
                    />
                    <a href="/Cloth" className="header-icon">
                        <span className="header-search-icon">🔍</span></a>

                    {/* Datalist with product suggestions */}
                    <datalist id="product-suggestions">
                        <option value="T-shirt" />
                        <option value="Pants" />
                        <option value="Cap" />
                        <option value="Jacket" />
                        <option value="Shoes" />
                        <option value="Sweater" />
                    </datalist>
                </div>


                {/* Header Icons */}
                <div className="header-icons">
                    <a href="/UserProfilePage" className="header-icon">
                        👤
                    </a>
                    <a href="/Cart" className="header-icon" >
                        🛒
                        <span className="header-cart-badge">{cartItemCount}</span>
                    </a>
                    <a href="/Wishlist" className="header-icon" >
                        𖹭
                        <span className="header-cart-badge">{wishlistCount}</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;
