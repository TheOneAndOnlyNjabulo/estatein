"use client";
import Button from "@/components/Button";
import { Property } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

const PropertiesForms = ({ properties }: { properties: Property[] | null }) => {
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="w-full flex  items-center justify-between">
        <h1 className="text-4xl font-bold">Properties</h1>
        <Button
          title="Create Property"
          style="bg-primary"
          onClick={() => router.push(`/admin/properties/new`)}
        />
      </div>
      <div className=" relative">
        {!properties || properties.length === 0 ? (
          <p>
            No properties available. Please add a new property to get started.
          </p>
        ) : (
          <div className="relative overflow-x-auto mt-10 shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-all-search"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                      />
                      <label className="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bedroom
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Bathroom
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Area
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3">
                    status
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {properties.map((item) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <td className="w-4 p-4">
                      <div className="flex items-center">
                        <input
                          id="checkbox-table-search-1"
                          type="checkbox"
                          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                        />
                        <label className="sr-only">checkbox</label>
                      </div>
                    </td>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.location}</td>
                    <td className="px-6 py-4">{item.type}</td>
                    <td className="px-6 py-4">{item.bedrooms}</td>
                    <td className="px-6 py-4">{item.bathrooms}</td>
                    <td className="px-6 py-4">{item.area}</td>
                    <td className="px-6 py-4">{item.listingPrice}</td>
                    <td className="px-6 py-4">
                      {item.active ? "Active" : "Inactive"}
                    </td>

                    <td className="flex items-center px-6 py-4">
                      <a
                        href={`/admin/properties/${item.id}`}
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                      >
                        Edit
                      </a>
                      <a
                        href="#"
                        className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3"
                      >
                        Remove
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesForms;
