"use client"
import FooterSection from "@/components/footerSection";
import Navbar from "@/components/navbar";
import React, { useState } from "react";

const Track = () => {
  const [orderId, setOrderId] = useState("");
  const [orderStatus, setOrderStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleTrackOrder = () => {
    if (!orderId.trim()) {
      setErrorMessage("Order ID can't be blank");
      setOrderStatus(""); // Clear previous status
      return;
    }

    setErrorMessage(""); // Clear error message
    setOrderStatus("Out for Delivery");
  };

  return (
    <>
      <div className="min-h-screen flex flex-col items-center bg-gray-100">
        <Navbar />
        {/* Track Order Section */}
        <div className="mt-40 w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-center mb-6">
            Track Your Order
          </h1>

          {/* Order ID Input */}
          <div className="w-full">
            <label className="block text-lg font-semibold mb-2">Order ID</label>
            <input
              type="text"
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              placeholder="Enter your Order ID"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {/* Error Message */}
            {errorMessage && (
              <p className="text-red-600 text-sm mt-2">{errorMessage}</p>
            )}
          </div>

          {/* Track Button */}
          <button
            onClick={handleTrackOrder}
            className="w-full mt-4 bg-[#E07B39] text-white font-semibold py-3 rounded-lg hover:bg-[#c76a30] transition duration-300"
          >
            Track
          </button>

          {/* Order Status (Shown after clicking the button) */}
          {orderStatus && (
            <div className="mt-4 text-lg font-semibold text-center text-black transition-opacity duration-300">
              Status: {orderStatus}
            </div>
          )}
        </div>
      </div>
      <FooterSection />
    </>
  );
};

export default Track;
