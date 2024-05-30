"use client";
import { useState } from "react";

// Filtreleme
export function Filters({ onFilterChange }) {
  const [sortField, setSortField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc"); // Sıralama düzeni
  const [transactionType, setTransactionType] = useState("");

  // Sıralama değiştiğinde
  const handleSortChange = (field) => {
    const newOrder = sortOrder === "asc" ? "desc" : "asc";
    setSortField(field);
    setSortOrder(newOrder);
    onFilterChange({ sortField: field, sortOrder: newOrder, transactionType });
  };
  // İşlem türüne göre filtrelme
  const handleTransactionTypeChange = (event) => {
    const type = event.target.value;
    setTransactionType(type);
    onFilterChange({ sortField, sortOrder, transactionType: type });
  };

  const handleClearFilters = () => {
    // Yapılan filtreleri sıfırla
    setSortField("");
    setSortOrder("");
    setTransactionType("");
    onFilterChange({ sortField: "", sortOrder: "", transactionType: "" });
  };

  return (
    <div className="flex justify-between mb-4">
      <div>
        <button
          onClick={() => handleSortChange("balance")}
          className="mr-2 px-4 py-2 bg-TealishBlue text-white rounded"
        >
          Bakiye Sırala{" "}
          {sortField === "balance" && (sortOrder === "asc" ? "↑" : "↓")}
        </button>
      </div>
      <div>
        <select
          value={transactionType}
          onChange={handleTransactionTypeChange}
          className="mr-2 px-4 py-2 bg-white border rounded"
        >
          <option value="">Tüm İşlem Türleri</option>
          <option value="devir">Devir</option>
          <option value="fatura">Fatura</option>
        </select>
      </div>
      <div>
        <button
          onClick={handleClearFilters}
          className="px-4 py-2 bg-LightRed text-white rounded"
        >
          Filtreleri Temizle
        </button>
      </div>
    </div>
  );
}
