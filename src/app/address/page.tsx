"use client"
import { SignupFormDemo } from '@/components/ui/addressinput';
import React, { useState } from 'react';

const AddressPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [pincode, setPincode] = useState('');
  const [addressLine1, setAddressLine1] = useState('');
  const [addressLine2, setAddressLine2] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      name,
      email,
      contactNumber,
      pincode,
      addressLine1,
      addressLine2,
    });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#F5F5DC] py-8">
      <SignupFormDemo/>
    </div>
  );
};

export default AddressPage;
