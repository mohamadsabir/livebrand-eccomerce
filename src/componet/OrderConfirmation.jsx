import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { totalItems, totalPrice } = location.state || {};
  const handleContinueShopping = () => {
    navigate("/cloth"); 
  };

  return (
    <div className="order-confirmation-page">
      <div className="order-confirmation-card">
        <div className="order-confirmation-header">
          <i className="bi bi-check-circle order-confirmation-icon"></i>
          <h2 className="order-confirmation-title">Order Placed Successfully!</h2>
          <p className="order-confirmation-subtitle">Thank you for shopping with us.</p>
        </div>
        <div className="order-confirmation-summary">
          <center className="mb-3"><h3>Order Summary</h3></center>
          <div className="order-confirmation-item">
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice}</p>
          </div>
        </div>
        <div className="order-confirmation-actions">
          <button className="order-confirmation-btn order-confirmation-btn-primary" onClick={handleContinueShopping}>
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
