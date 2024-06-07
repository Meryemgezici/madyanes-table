"use client";
import { getAPI } from "@/services/fetchAPI";
import { useEffect, useState } from "react";
import Loading from "../Loading";
import { Filters } from "../Filters";

export default function Table({ path, tableColumns }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stockedData = await getAPI(`/${path}`); // API'den veriyi al
      setData(stockedData); // Veriyi güncelle
      setFilteredData(stockedData); // Filtrelenmiş veriyi güncelle
    };
    fetchData();
  }, [path]);

  const handleFilterChange = (filters) => {
    let updatedData = [...data];
    // İşlem türüne göre filtreleme
    if (filters.transactionType) {
      updatedData = updatedData.filter(
        (item) => item.transactionType === filters.transactionType
      );
    }

    if (filters.sortField) {
      updatedData.sort((a, b) => {
        if (filters.sortOrder === "asc") {
          return a[filters.sortField] > b[filters.sortField] ? 1 : -1;
        } else {
          return a[filters.sortField] < b[filters.sortField] ? 1 : -1;
        }
      });
    }
    setFilteredData(updatedData);
  };

  return (
    <div className="flex flex-col min-h-screen p-4">
      {/* Veri gelene kadar loading dön.Veri geldiyse tabloyu göster.*/}
      {data.length === 0 && <Loading />}
      {/* Filtreleme */}
      <Filters onFilterChange={handleFilterChange} />
      <div className="overflow-x-auto w-full mt-4">
        <table className="min-w-full divide-y divide-LightGray">
          <thead>
            <tr>
              {tableColumns.map((col) => (
                <th
                  key={col.key}
                  scope="col"
                  className="px-2 md:px-6 py-3 text-center text-xs font-medium text-white uppercase tracking-wider h-14 bg-DarkBlue"
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-LightGray">
            {filteredData.map((item) => (
              <tr key={item.id} className="h-[4.5rem]">
                {tableColumns.map((col) => (
                  <td
                    key={col.key}
                    className={`px-2 md:px-6 py-4 whitespace-nowrap text-center ${
                      col.key === "date" ? "text-LightBlue" : ""
                    }`}
                  >
                    {item[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
