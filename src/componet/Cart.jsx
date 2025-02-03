import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState("COD");
    const [otpGenerated, setOtpGenerated] = useState(false);
    const [otp, setOtp] = useState("");
    const [generatedOtp, setGeneratedOtp] = useState("");  
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = storedCart.map((item) => {
            const price = typeof item.price === "string"
                ? parseFloat(item.price.replace(/^\$/, ""))
                : item.price || 0;
            return {
                ...item,
                price,
                discount: 30, 
            };
        });
        setCartItems(updatedCart);
    }, []);

    const handleIncrement = (index) => {
        const updatedCartItems = [...cartItems];
        updatedCartItems[index].quantity += 1;
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };
    
    const handleDecrement = (index) => {
        const updatedCartItems = [...cartItems];
        if (updatedCartItems[index].quantity > 1) {
            updatedCartItems[index].quantity -= 1;
            setCartItems(updatedCartItems);
            localStorage.setItem("cart", JSON.stringify(updatedCartItems));
        }
    };

    const handleRemoveItem = (index) => {
        const updatedCartItems = cartItems.filter((_, i) => i !== index);
        setCartItems(updatedCartItems);
        localStorage.setItem("cart", JSON.stringify(updatedCartItems));
    };

    const calculateTotal = () => {
        return cartItems
            .reduce(
                (total, item) =>
                    total +
                    item.price *
                    (1 - item.discount / 100) *
                    item.quantity,
                0
            )
            .toFixed(2);
    };

    const handlePaymentMethodChange = (method) => {
        setPaymentMethod(method);
        if (method === "COD") {
            setOtpGenerated(false); 
        }
    };

    const generateRandomOtp = () => {
        const otp = Math.floor(1000 + Math.random() * 9000);
        return otp.toString();
    };

    const handleOtpGenerate = () => {
        const otp = generateRandomOtp();
        setGeneratedOtp(otp); 
        setOtp("");
        setOtpGenerated(true); 
        alert(`Your OTP is: ${otp}`); 
    };

    const handleOtpSubmit = () => {
        if (otp === generatedOtp) { 
            setIsOtpVerified(true);
            alert("Order Placed Successfully!"); 
            
            // Navigate to the order confirmation page with the total items and total price
            navigate("/order-confirmation", {
                state: {
                    totalItems: cartItems.reduce((total, item) => total + item.quantity, 0),
                    totalPrice: calculateTotal(),
                }
            });
        } else {
            alert("Invalid OTP, please try again.");
        }
    };
    
    const handleCheckout = () => {
        if (paymentMethod === "Online") {
            navigate("/payment", { state: { cartItems, paymentMethod } });
        }
    };

    return (
        <div className="container">
            <div className="container mt-5 text-center mb-5">
                <h1 className="fw-bold text-dark">Your Cart</h1>
                <p className="text-muted fs-5">
                    These are the items you have added to your Cart.
                </p>
            </div>
            {cartItems.length > 0 ? (
                <div className="row">
                    <div className="col-md-7">
                        {cartItems.map((item, index) => (
                            <div key={index} className="card mb-4 shadow-sm">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            className="img-fluid rounded"
                                        />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text mb-4">
                                                <strong>Price: </strong>
                                                <span className="text-muted text-decoration-line-through">
                                                    ${item.price.toFixed(2)}
                                                </span>
                                                <span className="ms-2 text-success">
                                                    $ {(
                                                        item.price *
                                                        (1 - 30 / 100)
                                                    ).toFixed(2)}
                                                </span>
                                                <span className="ms-2 text-danger">
                                                    (30% OFF)
                                                </span>
                                            </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        onClick={() => handleDecrement(index)}
                                                    >
                                                        -
                                                    </button>
                                                    <span className="mx-3">{item.quantity}</span>
                                                    <button
                                                        className="btn btn-outline-secondary"
                                                        onClick={() => handleIncrement(index)}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <button
                                                    className="btn text-light fw-bold"
                                                    onClick={() => handleRemoveItem(index)}
                                                    style={{ backgroundColor: "red" }}
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Continue Shopping Card */}
                        <div className="card shadow-sm mb-4">
                            <div className="card-body text-center">
                                <h5 className="card-title">Looking for more items?</h5>
                                <p className="card-text text-muted">
                                    Explore more and add items to your cart.
                                </p>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => navigate("/cloth")}
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">Cart Summary</h5>
                                <hr />
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Total Items:</span>
                                    <span>
                                        {cartItems.reduce((total, item) => total + item.quantity, 0)}
                                    </span>
                                </div>
                                <div className="d-flex justify-content-between mb-3">
                                    <span>Total Price:</span>
                                    <span>${calculateTotal()}</span>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Payment Method:</label>
                                    <select
                                        className="form-select custom-payment-select"
                                        value={paymentMethod}
                                        onChange={(e) => handlePaymentMethodChange(e.target.value)}
                                    >
                                        <option value="COD">Cash on Delivery</option>
                                        <option value="Online">Online Payment</option>
                                    </select>
                                </div>

                                {paymentMethod === "COD" && (
                                    <div className="mb-3">
                                        <button
                                            className="btn btn-primary mt-3 fw-bold w-100"
                                            onClick={handleOtpGenerate}
                                        >
                                            Generate OTP
                                        </button>

                                        {/* Show OTP form if OTP is generated */}
                                        {otpGenerated && !isOtpVerified && (
                                            <div className="mt-3">
                                                <label className="form-label">Enter OTP:</label>
                                                <input
                                                    type="text"
                                                    className="form-control custom-focus-input"
                                                    value={otp}
                                                    onChange={(e) => setOtp(e.target.value)}
                                                    placeholder="Enter OTP"
                                                />
                                                <button
                                                    className="btn btn-primary mt-3 fw-bold w-100"
                                                    onClick={handleOtpSubmit}
                                                    disabled={isOtpVerified}
                                                >
                                                    Submit OTP
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {paymentMethod === "Online" && (
                                    <button
                                        className="btn btn-success w-100 fw-bold"
                                        onClick={handleCheckout}
                                    >
                                        Proceed to Online Payment
                                    </button>
                                )}

                                <button
                                    className="btn btn-outline-secondary w-100 mt-3 text-dark fw-bold"
                                    onClick={() => navigate("/cloth")}
                                >
                                    Continue Shopping
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="text-center">
                    <p>Your cart is empty!</p>
                </div>
            )}
        </div>
    );
}

export default Cart;
