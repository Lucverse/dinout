import React from "react";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="container">
      <div className="main">
        <div className="top">
          <h1>Hotel Name</h1>
          <h3>some address for the hotel mentioned above</h3>
        </div>
        <hr />
        <div className="middle">
          <div className="upper">
            <h2>Guest Details</h2>
          </div>
          <div className="lower">
            <div className="left">
              <h5>Guest Name:</h5>
              <h5>Phone no.:</h5>
            </div>
            <div className="right">
              <h5>The guest name ..</h5>
              <h5>1234567890</h5>
            </div>
          </div>
        </div>
        <hr />

        <div className="bottom">
          <div className="upper">
            <h2>Booking Summary</h2>
          </div>
          <div className="lower">
            <div className="left">
              <h5>
                Table Status - <span className="tableStatus">checking</span>
              </h5>
              <h5>Date & Time</h5>
              <h5>Guests</h5>
              <h5>Name</h5>
              <h5>ID</h5>
            </div>
            <div className="right">
              <h5>Checking table status</h5>
              <h5>.......</h5>
              <h5>...........</h5>
              <h5>........</h5>
              <h5>..........</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
