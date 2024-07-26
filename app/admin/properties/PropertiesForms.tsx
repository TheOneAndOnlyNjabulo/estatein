"use client";
import Button from "@/components/Button";
import { Property } from "@prisma/client";
import { useRouter } from "next/navigation";
import React from "react";

const PropertiesForms = ({ properties }: { properties: Property[] }) => {
  const router = useRouter();
  return (
    <div>
      {" "}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-4xl font-bold">Properties</h1>
        <Button
          title="Create Property"
          style="bg-primary"
          onClick={() => router.push(`/admin/properties/new`)}
        />
      </div>
      <div>
        {!properties || properties.length === 0 ? (
          <p>
            No properties available. Please add a new property to get started.
          </p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Location</th>
                <th>Type</th>
                <th>Bedrooms</th>
                <th>Bathrooms</th>
                <th>Area</th>
                <th>Listing Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {properties.map((property: any) => (
                <tr key={property.id}>
                  <td>{property.id}</td>
                  <td>{property.name}</td>
                  <td>{property.location}</td>
                  <td>{property.type}</td>
                  <td>{property.bedrooms}</td>
                  <td>{property.bathrooms}</td>
                  <td>{property.area}</td>
                  <td>{property.listingPrice}</td>
                  <td>{property.status}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PropertiesForms;
