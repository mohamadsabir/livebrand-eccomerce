import React from "react";
import { useLocation } from "react-router-dom";

const Oconfirm = () => {

  const { state } = useLocation();
  const cartItems = state?.cartItems || [];
  const totalAmount = state?.totalAmount || 0;

  const handleContinueShopping = () => {
    navigate("/cloth"); // Navigate to the shopping page
  };

  return (

     <div className="order-confirmation-page">
     <div className="order-confirmation-card">
       <div className="order-confirmation-header">
         <i className="bi bi-check-circle order-confirmation-icon"></i> {/* Bootstrap icon */}
         <h2 className="order-confirmation-title">Order Placed Successfully!</h2>
         <p className="order-confirmation-subtitle">Thank you for shopping with us.</p>
       </div>
       <div className="order-confirmation-summary">
         <center className="mb-3"><h3>Order Summary</h3></center>
         <div className="order-confirmation-item">
         <p>Total Items: {cartItems.reduce((total, item) => total + item.quantity, 0)}</p>
         <p>Total Amount: ${totalAmount}</p>
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

export default Oconfirm;
