"use client";
import { getAPI } from "@/services/fetchAPI";
import { useEffect, useState } from "react";
import Loading from "../Loading";

export default function Table({ path, tableColumns }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const stockedData = await getAPI(`/${path}`); // API'den veriyi al
      setData(stockedData); // Veriyi güncelle
    };
    fetchData();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Veri gelene kadar loading dön.Veri geldiyse tabloyu göster.*/}
      {data.length !== 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-LightGray">
            <thead>
              <tr>
                {tableColumns.map((col) => (
                  <th
                    key={col.key}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider h-14 bg-DarkBlue"
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-LightGray">
              {data.map((item) => (
                <tr key={item.id} className={"h-[4.5rem]"}>
                  {tableColumns.map((col) => (
                    <td
                      key={col.key}
                      className={`px-6 py-4 whitespace-nowrap ${
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
      ) : (
        <Loading />
      )}
    </div>
  );
}
