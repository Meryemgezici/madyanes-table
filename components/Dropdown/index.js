"use client";
import { useState } from "react";

const Dropdown = ({ options, selectedOption, onOptionSelect, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    onOptionSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block w-64">
      <div
        className="bg-white border rounded px-4 py-2 cursor-pointer flex justify-between items-center transition-all duration-500 ease-in-out transform hover:scale-105"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <span
          className={`transform transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          ▼
        </span>
      </div>
      {isOpen && (
        <div className="absolute left-0 right-0 mt-1 bg-white border rounded shadow-lg z-10">
          {options.map((option) => (
            <div
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="px-4 py-2 hover:bg-gray-100 hover:text-TealishBlue cursor-pointer transition-all duration-500 ease-in-out transform"
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
