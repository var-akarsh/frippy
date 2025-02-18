"use client";
import React, { useState, useEffect } from "react";
import { Label } from "../aceternity/label";
import { Input } from "../aceternity/input";
import { cn } from "@/lib/utils";
import CryptoJS from "crypto-js";
import { useRouter } from "next/navigation";
import axios from "axios";
import { FaLocationArrow } from "react-icons/fa6";

const SECRET_KEY = "FrippyIsNice";
interface SelectedType {
  [key: string]: string;
}

export function AddressForm({
  selected,
  setSelected,
  handleSubmit,
}: {
  selected: SelectedType;
  setSelected: any;
  handleSubmit: (e: React.FormEvent) => void;
}) {
  // State for validation errors
  const [errors, setErrors] = useState({
    name: "",
    lastname: "",
    email: "",
    contactNumber: "",
    addressLine1: "",
    addressLine2: "",
    pincode: "",
  });
  const router = useRouter();

  const handleCheckout = async () => {
    const productId = localStorage.getItem("selectedProductId");
    const colour = localStorage.getItem("colour");
    const colourHexCode = localStorage.getItem("colourHexCode");
  
    if (!productId) {
      console.error("No product ID found in local storage.");
      return;
    }
    const timestamp = new Date().getTime();
    const id = timestamp.toString().slice(-6); // Generating a unique id
  
    const payload = {
      ...selected,
      productId: parseInt(productId),
      colourName: colour,
      colourHexCode: colourHexCode,
      id: id,
    };
  
    try {
      const response = await axios.post("https://api.frippy.in/order/create", payload);
  
      if (response.status === 200 || response.status === 201) {
        const orderId = response.data;  // Assuming the orderId is in the response body
  
        // Redirect to the order page with the orderId
        router.push(`/order/${orderId}`);
      } else {
        console.error("Error creating order:", response.statusText);
      }
    } catch (error) {
      console.error("Error creating order:", error);
    }
  };
  
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const saveToLocalStorage = (data: any) => {
    const encryptedData = CryptoJS.AES.encrypt(
      JSON.stringify(data),
      SECRET_KEY
    ).toString();
    localStorage.setItem("addressForm", encryptedData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setSelected((prev: any) => ({ ...prev, [id]: value }));
    validateField(id, value);
    saveToLocalStorage(selected);
  };

  

  const handleFetchLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        const apiKey = "fe5fc9b5a3a44eccb4188b47a9623fe2";
        const url = `https://api.opencagedata.com/geocode/v1/json?key=${apiKey}&q=${latitude},${longitude}&pretty=1&no_annotations=1`;

        try {
          const response = await axios.get(url);

          if (response.data.results.length > 0) {
            const result = response.data.results[0].components;

            // Extract address details
            const addressLine1 = result.road || result.neighbourhood || "";
            const pincode = result.postcode || "";
            const addressLine2 = `${result.suburb || ""}, ${result.city || ""}, ${result.state || ""}`;

            // Update selected state
            setSelected((prev: any) => ({
              ...prev,
              addressLine1,
              addressLine2,
              pincode,
            }));
          } else {
            console.error("No results found");
          }
        } catch (error) {
          console.error("Error fetching location details:", error);
        }
      },
      (error) => {
        console.error("Error getting location", error);
      }
    );
  };


  // Validation functions
  const validateField = (field: string, value: string) => {
    let error = "";
    switch (field) {
      case "name":
      case "lastname":
        if (!value.trim()) error = "This field is required";
        break;
      case "email":
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = "Invalid email address";
        }
        break;
      case "contactNumber":
        if (!/^\d{10}$/.test(value)) error = "Contact number must be 10 digits";
        break;
      case "pincode":
        if (!/^\d{6}$/.test(value)) error = "Pincode must be 6 digits";
        break;
      case "addressLine1":
        if (!value.trim()) error = "This field is required";
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

  useEffect(() => {
    const isFormValid =
      Object.entries(selected)
        .filter(([key]) => key !== "email" && key !== "addressLine2")
        .every(([_, value]) => value.trim()) &&
      !Object.values(errors).some((error) => error !== "");

    setIsButtonDisabled(!isFormValid);
  }, [selected, errors]);

  // const handleFetchLocation = () => {
  //   navigator.geolocation.getCurrentPosition(
  //     (position) => {
  //       console.log("Latitude is :", position.coords.latitude);
  //       console.log("Longitude is :", position.coords.longitude);
  //     },
  //     (error) => {
  //       console.log("Error getting location", error);
  //     }
  //   );
  // };

  return (
    <div className=" max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-input bg-white dark:bg-black">
      <div className="flex items-center justify-between">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Your place <span className="font-normal line-through">or mine</span> ?
        </h2>
        <button
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:ring-[#4285F4]/50 font-medium rounded-lg text-xs sm:text-sm px-3.5 py-2 sm:px-4 sm:py-2 text-center inline-flex items-center dark:bg-[#4285F4] dark:hover:bg-[#4285F4]/90 focus:outline-none dark:focus:ring-[#4285F4]/50"
          onClick={handleFetchLocation}
        >
          <FaLocationArrow className="w-5 h-5 sm:w-3 sm:h-3 me-1.5 sm:me-2" />
          Locate Me
        </button>
      </div>

      <p className="text-neutral-600 text-sm max-w-sm mt-1 dark:text-neutral-300">
        We just need your address to send your order! 📦 Do not worry, your info
        is safe with us.
      </p>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-row md:flex-row  md:space-y-0 md:space-x-4 mb-2">
          <LabelInputContainer>
            <Label className="required-label" htmlFor="firstname">
              First Name
            </Label>{" "}
            {/* Required field */}
            <Input
              id="name"
              value={selected.name}
              placeholder="Bruce"
              type="text"
              onChange={handleInputChange}
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="required-label" htmlFor="lastname">
              Last Name
            </Label>{" "}
            {/* Required field */}
            <Input
              id="lastname"
              value={selected.lastname}
              placeholder="Wayne"
              type="text"
              onChange={handleInputChange}
            />
            {errors.lastname && (
              <p className="text-red-500 text-sm">{errors.lastname}</p>
            )}
          </LabelInputContainer>
        </div>
        <div className="flex flex-row md:flex-col  sm:flex-col md:space-y-0 md:space-x-4 mb-2">
          <LabelInputContainer className="mb-2">
            <Label htmlFor="email">Email Address (Optional)</Label>
            <Input
              id="email"
              value={selected.email}
              placeholder="superhero@gotham.com"
              type="email"
              onChange={handleInputChange}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </LabelInputContainer>
          <LabelInputContainer className="mb-2">
            <Label className="required-label" htmlFor="contactNumber">
              Contact Number
            </Label>{" "}
            {/* Required field */}
            <Input
              id="contactNumber"
              value={selected.contactNumber}
              placeholder="9998882222"
              type="number"
              onChange={handleInputChange}
            />
            {errors.contactNumber && (
              <p className="text-red-500 text-sm">{errors.contactNumber}</p>
            )}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-3">
          <Label className="required-label" htmlFor="addressLine1">
            Address Line 1
          </Label>{" "}
          {/* Required field */}
          <Input
            id="addressLine1"
            value={selected.addressLine1}
            placeholder="224 Park Drive"
            type="text"
            onChange={handleInputChange}
          />
          {errors.addressLine1 && (
            <p className="text-red-500 text-sm">{errors.addressLine1}</p>
          )}
        </LabelInputContainer>
        <LabelInputContainer className="mb-3">
          <Label htmlFor="addressLine2">Address Line 2</Label>
          <Input
            id="addressLine2"
            value={selected.addressLine2}
            placeholder="Gotham City"
            type="text"
            onChange={handleInputChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-2">
          <Label className="required-label" htmlFor="pincode">
            Pincode
          </Label>{" "}
          {/* Required field */}
          <Input
            id="pincode"
            value={selected.pincode}
            placeholder="560037"
            type="number"
            onChange={handleInputChange}
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm">{errors.pincode}</p>
          )}
        </LabelInputContainer>

        <button
          className={cn(
            "relative group/btn block w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]",
            isButtonDisabled
              ? "bg-gray-400 cursor-not-allowed" // Light grey button when disabled
              : "bg-gradient-to-br from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600" // Original gradient button
          )}
          type="submit"
          disabled={isButtonDisabled} // Disable button until form is valid
          onClick={handleCheckout}
        >
          Checkout &rarr;
        </button>
      </form>
    </div>
  );
}

// Reusable component for each Label and Input block
const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};