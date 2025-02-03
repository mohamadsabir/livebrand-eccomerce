import React from "react";
const Post3Page = () => {
    return (

        <div className="page-container" style={{ padding: '0px' }}>
            <div
                className="hero-section text-white text-center d-flex align-items-center justify-content-center"
                style={{
                    backgroundImage:
                        "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNTVINjMmxGqrJrNsqizGScfqV2CufENRihnkBDClp8-VZUmPlP3MDcE7cOFkAXfeKag&usqp=CAU')",
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
                    <h2 className="fw-bold">Sustainable Fashion: The Future of Clothing</h2>
                    <p className="fs-4">
                        Sustainable fashion aims to minimize environmental harm while offering
                        stylish, high-quality products.
                    </p>

                </div>
            </div>

            {/* Content Section */}
            <div className="fashion-trends-content"style={{backgroundColor:'#fdf5f6'}}>
                {/* Left Content */}
                <div className="fashion-trends-left">
                    <h2 className="heading-bold">The Rise of Sustainable Fashion in 2025</h2>
                    <p className="text-content">
                        As consumers become more environmentally conscious, sustainable fashion is rapidly gaining ground. The fashion industry is embracing eco-friendly practices that include recycled materials and ethical production methods.
                    </p>
                    <p className="text-content">
                        The key trend of 2025 is how designers are focusing on reducing waste and carbon footprints while continuing to innovate and create stylish, durable clothing that doesn't harm the planet.
                    </p>
                    <button className="btn-main">Read More</button>
                </div>

                {/* Right Image */}
                <div className="fashion-trends-image">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNTVINjMmxGqrJrNsqizGScfqV2CufENRihnkBDClp8-VZUmPlP3MDcE7cOFkAXfeKag&usqp=CAU"
                        alt="Sustainable Fashion"
                        className="fashion-image"
                    />
                </div>
            </div>

            {/* Cards Section */}
            <div className="fashion-trends-cards">
                <h3 className="cards-heading">Top Sustainable Fashion Trends to Watch</h3>
                <div className="cards-wrapper">
                    <div className="trend-card">
                        <h3 className="card-title">Trend 1: Eco-Friendly Fabrics</h3>
                        <p className="card-text">
                            Designers are shifting to sustainable materials like organic cotton, hemp, and recycled fabrics to reduce the industry's environmental impact.
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                    <div className="trend-card">
                        <h3 className="card-title">Trend 2: Circular Fashion</h3>
                        <p className="card-text">
                            The future of fashion lies in circularity, where clothing is designed for longevity and recycling, reducing waste and encouraging reuse.
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                    <div className="trend-card">
                        <h3 className="card-title">Trend 3: Transparent Supply</h3>
                        <p className="card-text">
                            Consumers demand transparency in how their clothes are made, and brands are increasingly sharing information about sourcing .
                        </p>
                        <button className="card-btn">Learn More →</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Post3Page;
