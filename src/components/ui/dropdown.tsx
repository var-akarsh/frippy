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
  disabled?: boolean; // ✅ Added disabled prop
}

const Dropdown: React.FC<DropdownProps> = ({
  label,
  options,
  selectedOption,
  onSelect,
  disabled = false, // Default is false
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setDropdownOpen(!dropdownOpen);
    }
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

  return (
    <div ref={dropdownRef} className="relative w-full">
      <button
        onClick={toggleDropdown}
        className={`flex justify-between items-center w-full md:w-[140%] lg:w-[250%] border-b border-gray-400 pb-1 text-gray-700 focus:outline-none ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        style={{ minWidth: "200px" }}
        disabled={disabled} // ✅ Disables button when needed
      >
        <span className="select-none text-gray-500">
          {selectedOption || label}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`${
          dropdownOpen ? "block" : "hidden"
        } absolute z-10 w-full md:w-[140%] lg:w-[250%] mt-2 bg-white shadow-lg rounded-md max-h-60 overflow-auto`}
      >
        {options.map((option) => (
          <a
            key={option.value}
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-[#e07b39] hover:text-white"
            onClick={(e) => {
              e.preventDefault(); // Prevents navigation
              if (!disabled) {
                onSelect(option);
                setDropdownOpen(false);
              }
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
