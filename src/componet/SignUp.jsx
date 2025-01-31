import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/index.css";

function SignUp() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();

        if (data.password === data.confirmPassword) {
            navigate("/UserProfilePage", { state: { userData: data } });
        } else {
            alert("Passwords do not match!");
        }
    };

    return (
        <>
            <div className="d-flex justify-content-center align-items-center vh-40 bg-light">
                <div
                    className="shadow-lg p-5 rounded bg-white w-100"
                    style={{
                        maxWidth: "450px",
                        width: "90%",
                        marginTop: "50px",
                        marginBottom: "50px",
                    }}
                >
                    <div className="text-center mb-4">
                        <h1 className="fw-bold" style={{ color: "red" }}>
                            Create an Account
                        </h1>
                        <p className="text-muted">Sign up to access your account</p>
                    </div>
                    <form onSubmit={handleSignUp}>
                        {/* Name Input */}
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label fw-semibold">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                value={data.name}
                                className="form-control form-control-lg shadow-sm input-focus-black"
                                placeholder="Enter your full name"
                                onChange={(e) => setData({ ...data, name: e.target.value })}
                            />
                        </div>
                        {/* Email Input */}
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-semibold">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={data.email}
                                className="form-control form-control-lg shadow-sm input-focus-black"
                                placeholder="Enter your email"
                                onChange={(e) => setData({ ...data, email: e.target.value })}
                            />
                        </div>
                        {/* Password Input */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-semibold">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={data.password}
                                className="form-control form-control-lg shadow-sm input-focus-black"
                                placeholder="Enter your password"
                                onChange={(e) => setData({ ...data, password: e.target.value })}
                            />
                        </div>
                        {/* Confirm Password Input */}
                        <div className="mb-4">
                            <label htmlFor="confirmPassword" className="form-label fw-semibold">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="confirmPassword"
                                value={data.confirmPassword}
                                className="form-control form-control-lg shadow-sm input-focus-black"
                                placeholder="Confirm your password"
                                onChange={(e) => setData({ ...data, confirmPassword: e.target.value })}
                            />
                        </div>
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="btn btn-lg w-100 mb-3"
                            style={{
                                backgroundColor: "red",
                                color: "white",
                                borderRadius: "30px",
                                padding: "15px",
                                fontWeight: "bold",
                                transition: "background-color 0.3s ease-in-out",
                            }}
                            onMouseOver={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
                            onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
                        >
                            Sign Up
                        </button>
                        <div className="text-center">
                            <p className="text-muted">
                                Already have an account?{" "}
                                <a
                                    href="/login"
                                    className="text-decoration-none"
                                    style={{ color: "red", fontWeight: "600" }}
                                >
                                    Log in here
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default SignUp;
