import React, { useEffect, useRef, useState } from "react";

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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const dropdownRef = useRef<HTMLDivElement>(null); // Create a reference for the dropdown

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={toggleDropdown}
        className="flex justify-between items-center w-full  md:w-[100%] lg:w-[250%] border-b border-gray-400 pb-1 text-gray-700 focus:outline-none"
        style={{ minWidth: '200px' }} 
      >
        <span className="select-none text-gray-500">
          {selectedOption || label}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`${
          dropdownOpen ? "block" : "hidden"
        } absolute z-10 w-full md:w-[100%] lg:w-[250%] mt-2 bg-white shadow-lg rounded-md max-h-60 overflow-auto`}
      >
        {options.map((option) => (
          <a
            key={option.value}
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-[#e07b39] hover:text-white"
            onClick={() => {
              onSelect(option);
              setDropdownOpen(false);
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
