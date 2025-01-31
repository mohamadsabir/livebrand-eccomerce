import React from "react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Top 10 Fashion Trends of 2025 today",
      excerpt:
        "Explore the most exciting trends of the year that are taking the fashion world by storm.",
      img: "https://cdnimpuls.com/tiranapost.al/media3/-640-0-67063a68476a4.png"
    },
    {
      id: 2,
      title: "How to Style Your Outfit for Every Occasion",
      excerpt:
        "Learn the art of styling and how to choose the right outfit for different occasions.",
      img: "https://lh3.googleusercontent.com/proxy/q5zs6fWZvJMVEe1CdGEQVlBaoT2ns64DQO_khO_IF6IaGF17eOaxE8l2ufy9JBx4DnFcMOmCypzzpx1gRM7IW0wedbSqOtFE-XUaxF3pa8AsE5IYLjOS1KeMdoPkwMlhD_IdnrDL8xuEmoBbVw9oxR0wEZadGMNX4DY"
    },
    {
      id: 3,
      title: "Sustainable Fashion: The Future of Clothing",
      excerpt:
        "Read about the growing importance of sustainability in the fashion industry.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFNTVINjMmxGqrJrNsqizGScfqV2CufENRihnkBDClp8-VZUmPlP3MDcE7cOFkAXfeKag&usqp=CAU"
    }
  ];

  return (
    <div style={{ padding: "0px" }}>
      {/* Hero Section */}
      <div
        className="hero-section text-white text-center d-flex align-items-center justify-content-center"
        style={{
          backgroundImage:
            "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX8Y-tljygfXHJ5cz912rLf2qXv63J5wP8DGbXvvI12optF4rMLj_tS55dSe2c35NV5Q&usqp=CAU')",
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
          <h1 className="fw-bold">Welcome to Our Fashion Blog</h1>
          <p className="fs-4">
            Stay updated with the latest fashion trends, tips, and advice.
          </p>
        </div>
      </div>

      {/* Blog Posts Section */}
      <div className="container my-5">
        <h2 className="text-center mb-5 fw-bold">Latest Blog Posts</h2>
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-md-4 mb-4" key={post.id}>
              <div className="card">
                <img
                  src={post.img}
                  className="card-img-top"
                  alt={post.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.excerpt}</p>
                  <Link
                    to={`/post${post.id}`}
                    className="btn text-light"
                    style={{ backgroundColor: "red" }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
