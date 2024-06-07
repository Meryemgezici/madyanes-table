"use client";
import { sortOptions, transactionOptions } from "@/utils/filterValues";
import { useState } from "react";
import Dropdown from "../Dropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

// Filtreleme
export function Filters({ onFilterChange }) {
  const [sortOption, setSortOption] = useState(null);
  const [transactionOption, setTransactionOption] = useState(null);

  const handleSortChange = (option) => {
    const [field, order] = option.value.split("|");
    setSortOption(option);
    onFilterChange({
      sortField: field,
      sortOrder: order,
      transactionType: transactionOption?.value || "",
    });
  };

  const handleTransactionTypeChange = (option) => {
    setTransactionOption(option);
    onFilterChange({
      sortField: sortOption?.value.split("|")[0] || "",
      sortOrder: sortOption?.value.split("|")[1] || "",
      transactionType: option.value,
    });
  };

  const handleClearFilters = () => {
    setSortOption(null);
    setTransactionOption(null);
    onFilterChange({ sortField: "", sortOrder: "", transactionType: "" });
  };

  return (
    <div className="flex items-center mb-2 mt-4 gap-4">
      <Dropdown
        options={sortOptions}
        selectedOption={sortOption}
        onOptionSelect={handleSortChange}
        placeholder="Bakiye Sırala"
      />
      <Dropdown
        options={transactionOptions}
        selectedOption={transactionOption}
        onOptionSelect={handleTransactionTypeChange}
        placeholder="Tüm İşlem Türleri"
      />
      <button
        onClick={handleClearFilters}
        className="px-4 py-2 bg-LightRed text-white rounded transition-all duration-500 ease-in-out transform hover:scale-105 hidden md:block"
      >
        Filtreleri Temizle
      </button>
      <div className="flex justify-center items-center w-12 h-10 rounded cursor-pointer bg-LightRed transition-all duration-500 ease-in-out transform hover:scale-105 md:hidden">
        <FontAwesomeIcon
          onClick={handleClearFilters}
          icon={faTrash}
          className="text-white text-xl "
        />
      </div>
    </div>
  );
}
