import React from "react";
const Post2Page = () => {
    return (

        <div className="page-container" style={{ padding: '0px' }}>
            <div
                className="hero-section text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SJNsTKjEL5vekO8Gx_vMFkmj_6_sJ4zIpw&s')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    height: "40vh",
                    width: "100%",
                    margin: "0",
                    padding: "0",
                    position: "relative"
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
                        zIndex: 1
                    }}
                ></div>
                <div style={{ zIndex: 2 }} className="container">
                    <h2 className="fw-bold">How to Style Your Outfit for Every Occasion</h2>
                    <p className="fs-4">
                        Styling your outfit can make all the difference. Whether you're heading
                        to a formal event elevate your fashion game.
                    </p>

                </div>
            </div>

            {/* Content Section */}
            <div className="fashion-trends-content"style={{backgroundColor:'#fdf5f6'}}>
                {/* Left Content */}
                <div className="fashion-trends-left">
                    <h2 className="heading-bold">Exploring the Fashion Trends for the Upcoming Year</h2>
                    <p className="text-content">
                        The fashion industry is ever-changing, and 2025 brings with it exciting developments. We're seeing the fusion of technology and traditional craftsmanship in ways that redefine style.
                    </p>
                    <p className="text-content">
                        From smart fabrics to sustainable fashion innovations, the key trends of 2025 will change the way we think about clothing.
                    </p>
                    <button className="btn-main">Read More</button>
                </div>

                {/* Right Image */}
                <div className="fashion-trends-image">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3SJNsTKjEL5vekO8Gx_vMFkmj_6_sJ4zIpw&s"
                        alt="Fashion Trends 2025"
                        className="fashion-image"
                    />
                </div>
            </div>

            {/* Cards Section */}
            <div className="fashion-trends-cards">
                <h3 className="cards-heading">Emerging Fashion Trends in 2025</h3>
                <div className="cards-wrapper">
                    <div className="trend-card">
                        <h3 className="card-title">Trend 1: Sustainable Fashion</h3>
                        <p className="card-text">
                            The future of fashion is green andsustainable practices leading charge.
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                    <div className="trend-card">
                        <h3 className="card-title">Trend 2: Digital Couture</h3>
                        <p className="card-text">
                            High-tech meets haute couture with digital fashion and 3D-printed designs.
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                    <div className="trend-card">
                        <h3 className="card-title">Trend 3: Unisex Clothing</h3>
                        <p className="card-text">
                            The fashion world embraces inclusivity with clothing lines that cater to all genders.
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post2Page;
