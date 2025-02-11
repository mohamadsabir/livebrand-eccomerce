import React from "react";


const Post1Page = () => {
    return (

        <div className="page-container" style={{ padding: '0px' }}>
            <div
                className="hero-section text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://cdnimpuls.com/tiranapost.al/media3/-640-0-67063a68476a4.png')",
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
                    <h2 className="fw-bold">The Top 10 Fashion Trends of 2025</h2>
                    <p className="fs-4">
                        Fashion in 2025 is all about sustainability, technology and
                        inclusivity.
                    </p>
                    <p className="fs-4">

                    </p>
                </div>
            </div>

            {/* Content Section */}
            <div className="fashion-trends-content" style={{backgroundColor:'#fdf5f6'}}>
                {/* Left Content */}
                <div className="fashion-trends-left">
                    <h2 className="heading-bold">Exploring the Fashion Trends of 2025</h2>
                    <p className="text-content">
                        Fashion is evolving faster than ever. The trends of 2025 showcase a
                        perfect blend of modern technology and timeless style. Key elements
                        include 3D-printed accessories, biodegradable fabrics, and
                        gender-neutral designs.
                    </p>
                    <p className="text-content">
                        Designers are focusing on reducing their carbon footprint while
                        pushing creative boundaries to create inclusive and accessible
                        fashion for all.
                    </p>
                    <button className="btn-main">Read More</button>
                </div>

                {/* Right Image */}
                <div className="fashion-trends-image">
                    <img
                        src="https://cdnimpuls.com/tiranapost.al/media3/-640-0-67063a68476a4.png"
                        alt="Fashion Trends 2025"
                        className="fashion-image"
                    />
                </div>
            </div>

            {/* Cards Section */}
            <div className="fashion-trends-cards">
                <h3 className="cards-heading">Key Fashion Trends</h3>
                <div className="cards-wrapper">
                    <div className="trend-card">
                        <h3 className="card-title">Trend 1: Sustainability</h3>
                        <p className="card-text">
                            Eco-friendly fabrics & practices are at the forefront of modern
                            fashion.
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                    <div className="trend-card">
                        <h3 className="card-title">Trend 2: Tech Integration</h3>
                        <p className="card-text">
                            Wearable tech meets high fashion for innovative designs.
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                    <div className="trend-card">
                        <h3 className="card-title">Trend 3: Inclusivity</h3>
                        <p className="card-text">
                            Gender-neutral clothing is reshaping traditional fashion.
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Post1Page;
