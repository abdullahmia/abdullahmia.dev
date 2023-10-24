/**
 * DataTable Component
 *
 * This component is used to display tabular data with search and pagination functionality.
 *
 * @param {string[]} columns - An array of strings representing the column headers.
 * @param {DataItem[]} rows - An array of data items, where each item is an object with keys matching the columns.
 * @param {number} itemsPerPage - The number of items to display per page, defaults to 2.
 * @param {string} searchPlaceholder - The placeholder text for the search input, defaults to "Start typing to search".
 *
 * Usage Example:
 *
 * import { DataTable } from './DataTable'; // Import the DataTable component
 *
 * const columns = ["Name", "Age", "Location"]; // Define column headers
 * const data = [ // Define data rows
 *   { Name: "John Doe", Age: 30, Location: "New York" },
 *   { Name: "Jane Smith", Age: 25, Location: "Los Angeles" },
 *   // Add more data items as needed
 * ];
 *
 * // Render the DataTable component with the specified props
 * <DataTable columns={columns} rows={data} itemsPerPage={5} searchPlaceholder="Search data" />
 */

"use client";

import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

type DataItem = {
  [key: string]: string | number | boolean | null | undefined | JSX.Element;
};

interface TableProps {
  columns: string[];
  rows: DataItem[];
  itemsPerPage?: number;
  searchPlaceholder?: string;
}

export const DataTable = ({
  columns,
  rows,
  itemsPerPage = 2,
  searchPlaceholder = "Start typing to search",
}: TableProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState<DataItem[]>(rows);
  const [currentItems, setCurrentItems] = useState<DataItem[]>([]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);

    const filteredData = rows.filter((item) => {
      return Object.values(item)
        .join(" ")
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
    });

    setFilteredData(filteredData);
    setCurrentPage(1);
  };

  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(rows);
    } else {
      const filteredData = rows.filter((item) => {
        return Object.values(item)
          .join(" ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });

      setFilteredData(filteredData);
      setCurrentPage(1);
    }
  }, [searchTerm, rows]);

  useEffect(() => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    setCurrentItems(currentItems);
  }, [currentPage, filteredData, itemsPerPage]);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="p-4">
      <div className="">
        <div className="flex items-center gap-1 border border-zeroGray px-3 bg-gray-50 dark:border-gray-700 dark:bg-transparent">
          <AiOutlineSearch className="text-[#666]" size={20} />
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder={searchPlaceholder}
            className="flex-1 w-full bg-white text-xs focus:outline-none focus:border-none py-4 dark:bg-transparent"
          />
        </div>
      </div>

      <table className="w-full border border-zeroGray mt-6 dark:border-gray-700">
        <thead>
          <tr>
            {columns?.map((column, index) => (
              <th
                key={index}
                className="text-left py-4 border-b border-zeroGray px-4 text-[14px] text-[#111827] font-[700] uppercase dark:text-gray-200 dark:border-gray-600"
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentItems?.length === 0 && (
            <tr>
              <td
                colSpan={columns.length}
                className="text-center py-4 border-b border-zeroGray px-4 text-[14px] text-[#111827] font-[700] uppercase dark:text-gray-300"
              >
                No Data Fou\nd
              </td>
            </tr>
          )}
          {currentItems?.map((item, index) => (
            <tr key={index}>
              {columns.map((column, index) => (
                <td
                  key={index}
                  className="border-b border-zeroGray px-4 py-4 text-[14px] text-[#111827] dark:text-gray-300 dark:border-gray-700"
                >
                  {item[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      {rows?.length > itemsPerPage && (
        <div className="mt-4">
          <ul className="flex space-x-2">
            {currentPage > 1 && (
              <li>
                <button
                  onClick={() => paginate(currentPage - 1)}
                  className="px-4 py-1 text-[12px] bg-[#4595D0] text-white"
                >
                  Previous
                </button>
              </li>
            )}

            {Array.from(
              Array(Math.ceil(filteredData.length / itemsPerPage)).keys()
            )?.map((pageNumber) => (
              <li key={pageNumber}>
                <button
                  onClick={() => paginate(pageNumber + 1)}
                  className={`px-3 py-1 text-[12px] ${
                    currentPage === pageNumber + 1
                      ? "bg-blue-300 text-zeroGray"
                      : "text-gray bg-zeroGray"
                  }`}
                >
                  {pageNumber + 1}
                </button>
              </li>
            ))}

            {currentPage < Math.ceil(filteredData.length / itemsPerPage) && (
              <li>
                <button
                  onClick={() => paginate(currentPage + 1)}
                  className="px-4 py-1 text-[12px] bg-[#4595D0] text-white"
                >
                  Next
                </button>
              </li>
            )}
          </ul>
        </div>
      )}
    </div>
  );
};
