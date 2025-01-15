// components/Dropdown.tsx
import React, { useState } from "react";

type Option = {
  value: string;
  label: string;
};

interface DropdownProps {
  label: string;
  options: Option[];
  selectedOption: string;
  onSelect: (option: Option) => void;
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedOption,
  onSelect,
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="relative w-[100%]">
      <button
        onClick={toggleDropdown}
        className="flex flex-row justify-between items-center w-[400%] border-b border-gray-400 pb-1 text-gray-700 focus:outline-none"
      >
        <span className="select-none text-gray-500">
          {selectedOption || label}
        </span>
      </button>

      <div
        className={`${
          dropdownOpen ? "block" : "hidden"
        } absolute z-10 w-[400%] mt-2 bg-white shadow-lg rounded-md`}
      >
        {options.map((option) => (
          <a
            key={option.value}
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
            onClick={() => {
              onSelect(option);
              setDropdownOpen(false); // Close the dropdown after selection
            }}
          >
            {option.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
