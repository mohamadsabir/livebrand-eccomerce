import React from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCreditCard,
    faCalendarAlt,
    faUser,
    faLock,
    faShoppingCart,
    faTimes,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
    const { state } = useLocation();
    const cartItems = state?.cartItems || [];

    const calculateTotal = () => {
        return cartItems
            .reduce(
                (total, item) =>
                    total + (typeof item.price === 'string' ? parseFloat(item.price.slice(1)) : item.price) * item.quantity,
                0
            )
            .toFixed(2);
    };

    const payment = () => {
        alert("Payment Successful");
    };

    return (
        <div className="payment-container mt-5 sparkle-card">
            <h1 className="payment-title text-center mb-5">
                Payment
            </h1>
            <div className="payment-row">
                {/* Payment Information */}
                <div className="payment-info-section frosted-container">
                    <div className="payment-card shadow-box">
                        <div className="payment-card-body">
                            <h5 className="payment-card-title mb-4 text-center twilight-header">
                                <FontAwesomeIcon icon={faCreditCard} /> Billing Information
                            </h5>
                            <form>
                                <div className="form-group mb-4">
                                    <label htmlFor="name" className="form-label">
                                        <FontAwesomeIcon icon={faUser} /> Cardholder Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="form-control custom-input"
                                        placeholder="Enter your name"
                                        required
                                    />
                                </div>
                                <div className="form-group mb-4">
                                    <label htmlFor="cardNumber" className="form-label">
                                        <FontAwesomeIcon icon={faCreditCard} /> Card Number
                                    </label>
                                    <input
                                        type="text"
                                        id="cardNumber"
                                        className="form-control custom-input"
                                        placeholder="1234 5678 9012 3456"
                                        required
                                        pattern="\d{4} \d{4} \d{4} \d{4}"
                                    />
                                </div>
                                <div className="payment-row">
                                    <div className="payment-column">
                                        <div className="form-group mb-4">
                                            <label htmlFor="expiry" className="form-label">
                                                <FontAwesomeIcon icon={faCalendarAlt} /> Expiry Date
                                            </label>
                                            <input
                                                type="text"
                                                id="expiry"
                                                className="form-control custom-input"
                                                placeholder="MM/YY"
                                                required
                                                pattern="\d{2}/\d{2}"
                                            />
                                        </div>
                                    </div>
                                    <div className="payment-column">
                                        <div className="form-group mb-4">
                                            <label htmlFor="cvv" className="form-label">
                                                <FontAwesomeIcon icon={faLock} /> CVV
                                            </label>
                                            <input
                                                type="password"
                                                id="cvv"
                                                className="form-control custom-input"
                                                placeholder="123"
                                                required
                                                pattern="\d{3,4}"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary glow-button full-width-btn mt-4"
                                >
                                    <FontAwesomeIcon icon={faCheck} /> Complete Payment
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Cart Summary */}
                <div className="order-summary-section prism-overlay">
                    <div className="payment-card shadow-box">
                        <div className="payment-card-body">
                            <h5 className="payment-card-title mb-4 text-center twilight-header">
                                <FontAwesomeIcon icon={faShoppingCart} /> Order Summary
                            </h5>
                            <hr />
                            <div className="summary-item mb-3">
                                <span>Total Items:</span>
                                <span>{cartItems.reduce((total, item) => total + item.quantity, 0)}</span>
                            </div>
                            <div className="summary-item mb-3">
                                <span>Total Price:</span>
                                <span>${calculateTotal()}</span>
                            </div>

                            <div className="summary-action-buttons mt-3">
                                <button
                                    className="btn btn-outline-secondary full-width-btn b_color"
                                    onClick={() => window.history.back()}
                                >
                                    <FontAwesomeIcon icon={faTimes} /> Cancel
                                </button>
                                <button className="btn btn-success full-width-btn glow-button" onClick={payment}>
                                    <FontAwesomeIcon icon={faCheck} /> Proceed to Payment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
