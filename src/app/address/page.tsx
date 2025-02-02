"use client";
import { AddressForm } from "@/components/ui/addressinput";
import React, { useState, useEffect } from "react";
import CryptoJS from "crypto-js";
import Navbar from "@/components/navbar";
import FooterSection from "@/components/footerSection";

const SECRET_KEY = "FrippyIsNice";

const AddressPage = () => {
  const [selected, setSelected] = useState({
    name: "",
    email: "",
    contactNumber: "",
    pincode: "",
    addressLine1: "",
    addressLine2: "",
  });

  useEffect(() => {
    loadFromLocalStorage();
  }, []);

  const loadFromLocalStorage = () => {
    const encryptedData = localStorage.getItem("addressForm");
    if (encryptedData) {
      try {
        const bytes = CryptoJS.AES.decrypt(encryptedData, SECRET_KEY);
        const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
        setSelected(decryptedData);
      } catch (error) {
        console.error("Error decrypting data: ", error);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted with: ", selected);
    localStorage.removeItem("addressForm");
  };

  return (
    <>
      <div className="bg-[#fff] flex justify-center items-center relative">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#F5F5DC] py-24">
        <AddressForm
          selected={selected}
          setSelected={setSelected}
          handleSubmit={handleSubmit}
        />
      </div>
      <FooterSection />
    </>
  );
};

export default AddressPage;
