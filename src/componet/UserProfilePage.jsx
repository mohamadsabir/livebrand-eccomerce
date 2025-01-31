import React, { useState, useEffect } from "react";

const UserProfilePage = () => {
  const [selectedSection, setSelectedSection] = useState("Personal Data");
  const [addresses, setAddresses] = useState([]);
  const [tempAddress, setTempAddress] = useState("");

  const user = {
    name: "sabir sipai",
    email: "sabirsipai35@gmail.com",
  };

  const [personalData, setPersonalData] = useState({
    name: user.name,
    email: user.email,
    address: "",
  });

  const handlePersonalDataChange = (e) => {
    const { name, value } = e.target;
    setPersonalData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addNewAddress = () => {
    setAddresses((prevAddresses) => [...prevAddresses, tempAddress]);
    setTempAddress(''); // Clear the input after adding
  };

  const removeAddress = (index) => {
    setAddresses((prevAddresses) => prevAddresses.filter((_, i) => i !== index));
  };

  const handleSignOut = () => {
    alert("Signed Out Successfully!");
  };

  const handleCancelOrder = () => {
    alert("Your order canceled successfully!");
  };

  const orders = [
    {
      name: "Running Shoes",
      quality: "High-Impact Cushioning",
      description: "Durable running shoes for long-distance comfort.",
      date: "2024-01-15",
      price: "$62.99",
      image: "https://media.azadea.com/i/davinci/54_8488626_000__5401_000__101__01?$prd_large$&fmt=auto",
    },
    {
      name: "Graphic T-Shirt",
      quality: "Soft Cotton",
      description: "Trendy graphic T-shirt with a bold design, perfect for everyday style.",
      date: "2024-02-10",
      price: "$17.49",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQCg4ZjlXXqmp9PzjzDU4F6I5vUlbKeyDnU1J9WQgIc7QXFYdS-6Zm3dbItOzEtfEu4gqo37c7ym8afp6i7EqFOoLAqH_7R_yHP_hiP_yhlF4ZYeM6QMXid&usqp=CAE",
    },
    {
      name: "V-Neck T-Shirt",
      quality: "Casual Wear",
      description: "A classic V-neck T-shirt with a slim fit, perfect for a clean and casual look.",
      date: "2025-02-10",
      price: "$27.99",
      image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQW2NWtmxlfSKGdlVgm2i8VGeuX75e2ZbOUVZ_eYArwNoQ2eheXWZsIqRxHElvG9uRw2AYX_9khUKBkj-XblpbCU6q-aVnHRshKcGFcNFTifa_f61_iEhZp7eE&usqp=CAE",
    },
    {
      name: "Graphic Tee",
      quality: "Soft Cotton Blend",
      description: "A trendy graphic T-shirt with eye-catching prints, perfect for everyday style.",
      date: "2025-02-10",
      price: "$27.99",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE-F3cG4lgaff4vTCqlLjW7UIj0rnboc7vs9gH326Cy8J9-ExmfpIjViIJYQgsJJMkVgY&usqp=CAU",
    },
    {
      name: "Slip-On Sneakers",
      quality: "Easy-to-Wear Design",
      description: "Casual slip-on sneakers designed for ultimate comfort and ease, perfect for everyday use.",
      date: "2025-04-10",
      price: "$27.99",
      image: "https://cdn.staticans.com/image/tr:e-sharpen-01,h-1440,w-1920,cm-pad_resize/data/Regal-Shoes/15nov2023/9741033_2.jpg",
    },
    {
      name: "Jogger Pants",
      quality: "Comfort Fit",
      description: "Lightweight jogger pants, perfect for lounging or casual outings.",
      date: "2025-06-10",
      price: "$27.99",
      image: "https://i.ebayimg.com/images/g/SFoAAOSwv5NkWiy1/s-l1200.jpg",
    },
  ];

  useEffect(() => {
    if (selectedSection !== "Addresses") {
      setTempAddress(''); // Reset the temporary address when user switches to another section
    }
  }, [selectedSection]);

  return (
    <div className="container my-5">
      <h2 className="mb-5 fw-bold text-dark">My Account</h2>
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 mb-4">
          <ul className="list-group fw-bold">
            {["Personal Data", "Orders", "Change Password", "Addresses", "Sign Out"].map((item, index) => (
              <li
                key={index}
                className={`list-group-item list-group-item-action ${selectedSection === item ? "active text-white" : ""}`}
                onClick={() => setSelectedSection(item)}
                style={{ cursor: "pointer" }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Content */}
        <div className="col-md-9">
          <div className="card p-4">
            {selectedSection === "Orders" && (
              <div>
                <h5 className="fw-bold mb-4">Your Orders</h5>
                {orders.map((order, index) => (
                  <div
                    key={index}
                    className="d-flex flex-md-row flex-column align-items-center align-items-md-start mb-4 border rounded p-3 shadow-sm"
                    style={{ backgroundColor: "rgb(255 245 245)" }}
                  >
                    {/* Left-aligned image on larger screens, top on small screens */}
                    <div className="d-flex flex-md-row flex-column align-items-center w-100">
                      <img
                        src={order.image}
                        alt={order.name}
                        className="rounded mb-3 mb-md-0 me-md-4"
                        style={{ width: "100px", height: "100px", objectFit: "cover" }}
                      />
                      <div className="text-center text-md-start w-100">
                        <h6 className="mb-2 fw-bold">{order.name}</h6>
                        <p className="mb-1">
                          <strong>Quality:</strong> {order.quality}
                        </p>
                        <p className="mb-1 text-muted">{order.description}</p>
                        <p className="mb-1 text-muted">
                          <strong>Date:</strong> {order.date}
                        </p>
                        <p className="fw-bold text-primary">{order.price}</p>
                      </div>
                    </div>

                    {/* Cancel button - Right on larger screens, Centered on small screens */}
                    <div
                      className="d-flex justify-content-md-end justify-content-center w-100 mt-3 mt-md-0"
                    >
                      <button
                        className="btn btn-sm text-light fw-bold"
                        style={{ backgroundColor: 'red', marginTop: '80px' }}
                        onClick={() => handleCancelOrder(index)}
                      >
                        Cancel Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {selectedSection === "Personal Data" && (
              <div className="card p-2 shadow-sm border-0">
                <h5 className="fw-bold text-center mb-2">Personal Data</h5>
                <hr className="border-2"></hr>
                <div className="row align-items-stretch">
                  {/* Left Section (Image) */}
                  <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png"
                      alt="Profile"
                      className="rounded-circle border"
                      style={{ width: "150px", height: "150px", objectFit: "cover" }}
                    />
                    
                    <button
                      className="btn btn-sm mt-2 text-dark fw-bold"
                      style={{
                        background: "white",
                        borderRadius: "15px",
                        border: "1px solid #7a7676",
                        padding: "10px 20px",
                        transition: "all 0.3s ease",
                      }}
                    >
                      Change Photo
                    </button>
                    <h5 className="mt-2 fw-bold">Sabir sipai</h5>
                    <p className="text-muted">sabirsipai35@gmail.com</p>
                  </div>

                  {/* Right Section (Form) */}
                  <div className="col-md-6 d-flex flex-column justify-content-center">
                    <form>
                      <div className="mb-3">
                        <label className="form-label fw-semibold mt-3">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={personalData.name}
                          onChange={handlePersonalDataChange}
                          className="custom-input form-control"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label fw-semibold">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={personalData.email}
                          onChange={handlePersonalDataChange}
                          className="custom-input form-control"
                        />
                      </div>
                      <button type="button" className="btn btn-primary w-100 mt-3 fw-bold ">Save Changes</button>
                    </form>
                  </div>
                </div>
              </div>
            )}

            {selectedSection === "Change Password" && (
              <div className="card p-4 shadow-sm border-0">
                <h5 className="fw-bold mb-5 text-center">Change Password</h5>
                <form>
                  {/* Current Password Input */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">Current Password</label>
                    <input
                      type="password"
                      name="currentPassword"
                      value={personalData.currentPassword}
                      onChange={(e) => setPersonalData({ ...personalData, [e.target.name]: e.target.value })}
                      className="custom-input form-control"
                    />
                  </div>

                  {/* New Password Input */}
                  <div className="mb-3">
                    <label className="form-label fw-semibold">New Password</label>
                    <input
                      type="password"
                      name="newPassword"
                      value={personalData.newPassword}
                      onChange={(e) => setPersonalData({ ...personalData, [e.target.name]: e.target.value })}
                      className="custom-input form-control"
                    />
                  </div>

                  {/* Update Password Button */}
                  <button type="button" className="btn btn-primary w-100 fw-bold">Update Password</button>
                </form>
              </div>
            )}

            {selectedSection === "Addresses" && (
              <div className="fw-bold">
                <h5>My Addresses</h5>
                <ul className="list-group mb-3">
                  {addresses.map((address, index) => (
                    <li key={index} className="list-group-item">
                      {address}
                      <button
                        className="btn btn-sm float-end fw-bold text-light"
                        style={{ backgroundColor: 'red' }}
                        onClick={() => removeAddress(index)}
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
                <div className="mb-3">
                  <label className="form-label fw-semibold">Add New Address</label>
                  <input
                    type="text"
                    name="address"
                    value={tempAddress}
                    onChange={(e) => setTempAddress(e.target.value)}
                    className="custom-input form-control"
                  />
                </div>
                <button
                  className="btn btn-primary fw-bold"
                  onClick={() => {
                    if (!tempAddress.trim()) {
                      alert("Please enter your address.");
                    } else {
                      addNewAddress();
                    }
                  }}
                >
                  Add Address
                </button>
              </div>
            )}

            {selectedSection === "Sign Out" && (
              <div className="text-center">
                <h5 className="fw-bold">Sign Out</h5>
                <p>Are you sure you want to sign out?</p>
                <button className="btn fw-bold text-light" onClick={handleSignOut} style={{ backgroundColor: 'red' }}>
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
