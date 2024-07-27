import { createInfo } from "@/actions/createInformation";
import { zodResolver } from "@hookform/resolvers/zod";
import { AdditionalFees, Property } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

interface AdditionalFeesProps {
  additionalFees?: AdditionalFees | null;
  handleDialogueOpen: () => void;
  property?: Property;
}

const fromSchema = z.object({
  name: z.string().min(1, "Name is Required!!"),
  message: z.string().min(1, "Description is required!!").optional(),
  amount: z
    .string()
    .min(1, "Required")
    .transform((value) => parseInt(value)),
});

const AddtionalInformationForm = ({
  additionalFees,
  handleDialogueOpen,
  property,
}: AdditionalFeesProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      name: "Property Transfere Tax",
      amount: "100000",
      message: "Based on the sale price and local regulations",
    },
  });
  const router = useRouter();

  const onSubmit = async (data: any) => {
    event?.preventDefault();
    console.log("Form submitted", data);

    // Ensure `propertyId` is correctly included in the formData
    const formData = { ...data, propertyId: property?.id };

    try {
      const response = await axios.post(
        `/api/property/${property?.id}/info`,
        formData
      );

      if (response.status >= 200 && response.status < 300) {
        console.log("Property created successfully:", response.data);
        // Handle successful response (e.g., redirect or show success message)
      } else {
        console.error("Error creating property:", response.data);
        // setError("Failed to create property");
      }
    } catch (error) {
      console.error("Error creating property:", error);
      // setError("Failed to create property");
    } finally {
      handleDialogueOpen();

      reset();
    }
    router.refresh();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-3">
        <div className="flex flex-col">
          {" "}
          <label className="font-semibold text-lg">Fee Title</label>
          <input
            type="text"
            placeholder="Enter fee title name"
            className="lg:max-w-full h-[40px] rounded-md border border-white/15 focus:border-primary focus:outline-none focus:ring-primary bg-bgsecondary p-2"
            {...register("name")}
          />
          {errors && errors?.name && (
            <div className="text-red-600">{`${errors.name?.message}`}</div>
          )}
        </div>
        <div className="flex flex-col">
          {" "}
          <label className="font-semibold text-lg">Fee Price</label>
          <div className="flex gap-3 items-center">
            <span>R</span>
            <input
              type="text"
              placeholder="Enter fee title name"
              className="lg:max-w-full h-[40px] rounded-md border border-white/15 focus:border-primary focus:outline-none focus:ring-primary bg-bgsecondary p-2"
              {...register("amount")}
            />
          </div>
          {errors && errors?.amount && (
            <div className="text-red-600">{`${errors.amount?.message}`}</div>
          )}
        </div>
        <div className="flex flex-col">
          <label className="font-semibold text-lg">Message</label>
          <textarea
            placeholder="Provide details about your property.."
            rows={4}
            className="p-3 border border-white/20 bg-bgsecondary flex-grow focus:outline-none rounded-md"
            {...register("message")}
          />
          {errors && errors?.message && (
            <div className="text-red-600">{`${errors.message?.message}`}</div>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-primary rounded-md hover:bg-background hover:text-primary"
          >
            Add Info
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddtionalInformationForm;
