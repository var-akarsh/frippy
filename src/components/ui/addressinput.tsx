"use client";
import React from "react";
import { Label } from "../aceternity/label";
import { Input } from "../aceternity/input";

import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

export function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="max-w-2xl w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-6 shadow-input bg-white dark:bg-black">
  <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
  Your place <span className="font-normal line-through">or mine</span> ?
</h2>

  <p className="text-neutral-600 text-sm max-w-sm mt-1 dark:text-neutral-300">
    We just need your address to send your order! 📦 Don’t worry, your info is safe with us.
  </p>

  <form className="my-4" onSubmit={handleSubmit}>
    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-2">
      <LabelInputContainer>
        <Label htmlFor="firstname">First name</Label>
        <Input id="firstname" placeholder="Bruce" type="text" />
      </LabelInputContainer>
      <LabelInputContainer>
        <Label htmlFor="lastname">Last name</Label>
        <Input id="lastname" placeholder="Wayne" type="text" />
      </LabelInputContainer>
    </div>
    <LabelInputContainer className="mb-2">
      <Label htmlFor="email">Email Address (Optional)</Label>
      <Input id="email" placeholder="superhero@gotham.com" type="email" />
    </LabelInputContainer>
    <LabelInputContainer className="mb-2">
      <Label htmlFor="contact">Contact Number</Label>
      <Input id="contact" placeholder="9998882222" type="text" />
    </LabelInputContainer>
    <LabelInputContainer className="mb-3">
      <Label htmlFor="address1">Address Line 1</Label>
      <Input id="address1" placeholder="224 Park Drive" type="text" />
    </LabelInputContainer>
    <LabelInputContainer className="mb-3">
      <Label htmlFor="address2">Address Line 2</Label>
      <Input id="address2" placeholder="Gotham City" type="text" />
    </LabelInputContainer>
    <LabelInputContainer className="mb-2">
      <Label htmlFor="pincode">Pincode</Label>
      <Input id="pincode" placeholder="560037" type="text" />
    </LabelInputContainer>

    <button
      className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
      type="submit"
    >
      Checkout &rarr;
      <BottomGradient />
    </button>
  </form>
</div>

  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

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
