import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/index.css";

function LogIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/UserProfilePage");
  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
        <div className="shadow-lg p-5 rounded bg-white" style={{ width: "400px" }}>
          <div className="text-center mb-4">
            <h1 className="fw-bold" style={{ color: 'red' }}>Welcome Back!</h1>
            <p className="text-muted">Log in to access your account</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label fw-semibold">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={data.email}
                className="modern-input form-control form-control-lg"
                placeholder="Enter your email"
                onChange={(e) => {
                  setData({ ...data, email: e.target.value });
                }}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="form-label fw-semibold">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={data.password}
                className="modern-input form-control form-control-lg"
                placeholder="Enter your password"
                onChange={(e) => {
                  setData({ ...data, password: e.target.value });
                }}
              />
            </div>

            <button type="submit" className="modern-btn btn btn-lg w-100 mb-3">
              Log In
            </button>

            <div className="text-center">
              <p className="text-muted">
                Forgot your password?{" "}
                <a href="/reset" className="text-decoration-none modern-link">
                  Reset it here
                </a>
              </p>
              <p className="text-muted">
                Don't have an account?{" "}
                <a href="/signup" className="text-decoration-none modern-link">
                  Sign up
                </a>
              </p>
            </div>
          </form>

        </div>
      </div>
      <div className="text-center mt-4">
        <h5 className="fw-semibold">Your Email: {data.email}</h5>
        <h5 className="fw-semibold">Your Password: {data.password}</h5>
      </div>
    </>
  );
}

export default LogIn;
