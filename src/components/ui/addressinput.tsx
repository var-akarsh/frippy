"use client";
import React, { useState, useEffect } from "react";
import { Label } from "../aceternity/label";
import { Input } from "../aceternity/input";
import { cn } from "@/lib/utils";
import CryptoJS from "crypto-js"; 
import { useRouter } from "next/navigation";

const SECRET_KEY = "FrippyIsNice"; 
interface SelectedType {
  [key: string]: string;
}


export function AddressForm({
  selected,
  setSelected,
  handleSubmit
}: {
  selected: SelectedType;
  setSelected: any;
  handleSubmit: (e: React.FormEvent) => void;
}) {

  // State for validation errors
  const [errors, setErrors] = useState({
    name: '',
    lastname: '',
    email: '',
    contactNumber: '',
    addressLine1: '',
    addressLine2: '',

    pincode: ''
  });
  const router = useRouter()
  const handleCheckout = ()=>{
    router.push('/order')
  }
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

  // Validation functions
  const validateField = (field: string, value: string) => {
    let error = '';
    switch (field) {
      case 'name':
      case 'lastname':
        if (!value.trim()) error = 'This field is required';
        break;
      case 'email':
        if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          error = 'Invalid email address';
        }
        break;
      case 'contactNumber':
        if (!/^\d{10}$/.test(value)) error = 'Contact number must be 10 digits';
        break;
      case 'pincode':
        if (!/^\d{6}$/.test(value)) error = 'Pincode must be 6 digits';
        break;
      case 'addressLine1':
        if (!value.trim()) error = 'This field is required';
        break;
      default:
        break;
    }
    setErrors((prevErrors) => ({ ...prevErrors, [field]: error }));
  };

useEffect(() => {
  const isFormValid = Object.entries(selected)
    .filter(([key]) => key !== 'email' && key!=="addressLine2")
    .every(([_, value]) => value.trim()) &&
    !Object.values(errors).some(error => error !== '');

  setIsButtonDisabled(!isFormValid);
}, [selected, errors]);


  return (
    <div className=" max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-input bg-white dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Your place <span className="font-normal line-through">or mine</span> ?
      </h2>

      <p className="text-neutral-600 text-sm max-w-sm mt-1 dark:text-neutral-300">
        We just need your address to send your order! 📦 Don’t worry, your info is safe with us.
      </p>

      <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-2">
          <LabelInputContainer>
            <Label className="required-label" htmlFor="firstname" >First Name</Label> {/* Required field */}
            <Input
              id="name"
              value={selected.name}
              placeholder="Bruce"
              type="text"
              onChange={handleInputChange}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
          </LabelInputContainer>
          <LabelInputContainer>
            <Label className="required-label" htmlFor="lastname" >Last Name</Label> {/* Required field */}
            <Input
              id="lastname"
              value={selected.lastname}
              placeholder="Wayne"
              type="text"
              onChange={handleInputChange}
            />
            {errors.lastname && <p className="text-red-500 text-sm">{errors.lastname}</p>}
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-2">
          <Label  htmlFor="email">Email Address (Optional)</Label>
          <Input
            id="email"
            value={selected.email}
            placeholder="superhero@gotham.com"
            type="email"
            onChange={handleInputChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-2">
          <Label className="required-label" htmlFor="contactNumber" >Contact Number</Label> {/* Required field */}
          <Input
            id="contactNumber"
            value={selected.contactNumber}
            placeholder="9998882222"
            type="number"
            onChange={handleInputChange}
          />
          {errors.contactNumber && <p className="text-red-500 text-sm">{errors.contactNumber}</p>}
        </LabelInputContainer>
        <LabelInputContainer className="mb-3">
          <Label className="required-label" htmlFor="addressLine1" >Address Line 1</Label> {/* Required field */}
          <Input
            id="addressLine1"
            value={selected.addressLine1}
            placeholder="224 Park Drive"
            type="text"
            onChange={handleInputChange}
          />
          {errors.addressLine1 && <p className="text-red-500 text-sm">{errors.addressLine1}</p>}
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
          <Label className="required-label" htmlFor="pincode" >Pincode</Label> {/* Required field */}
          <Input
            id="pincode"
            value={selected.pincode}
            placeholder="560037"
            type="number"
            onChange={handleInputChange}
          />
          {errors.pincode && <p className="text-red-500 text-sm">{errors.pincode}</p>}
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
