"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bath, Bed, Home, LocateIcon, MapPin } from "lucide-react";

const fromSchema = z.object({
  name: z.string().min(1, "Name is Required!!"),
  description: z.string().min(1, "Description is required!!"),
  location: z.string().min(1, "Location is Required🤷‍♂️"),
  type: z.string().min(1, "Guess What... Type is required!!!"),
  //   image: z.string().min(1),
  //   imagesMany: z.string().min(1),
  bathrooms: z
    .string()
    .min(1, "Required")
    .transform((value) => parseInt(value)),
  bedrooms: z
    .string()
    .min(1, "Required")
    .transform((value) => parseInt(value)),
  active: z.enum(["true", "false"]).transform((value) => value === "true"),
  //   area: z.number(),
  //   listingPrice: z.number(),
  // keyFeatures

  // additionalFees
  // monthlyCosts
  // totalInitialCost
  // monthlyExpenses
});

const PropertyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      name: "Prperty 24",
      description: "This is a property",
      location: "Cape Town",
      image: "",
      // imagesMany
      type: "villa",
      bathrooms: "1",
      bedrooms: "1",

      listingPrice: 1,
      active: "true",
    },
  });

  const onSubmit = async (data: any) => {
    // const newForm = new FormData();
    // newForm.append("name", data.name);
    // newForm.append("description", data.description);
    // newForm.append("location", data.location);
    // newForm.append("bedrooms", data.bedrooms);
    // newForm.append("type", data.type);
    // newForm.append("bathrooms", data.bathrooms);
    // const response = await api route

    // const result = await responsejson()
    // alert result.message
    console.log(data);

    reset();
  };

  return (
    <div className="max-w-[1440px] bg-bgsecondary p-4 rounded-md m-auto mt-10 flex flex-col gap-7">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Part one */}
          <div className="flex-1 flex flex-col gap-5">
            {/* Property name */}
            <div className="flex flex-col">
              {" "}
              <label className="font-semibold text-lg">Property Name</label>
              <input
                type="text"
                placeholder="Enter property name"
                className="lg:max-w-full h-[40px] rounded-md border border-white/15 focus:border-primary focus:outline-none focus:ring-primary bg-bgsecondary p-2"
                {...register("name")}
              />
              {errors && errors?.name && (
                <div className="text-red-600">{`${errors.name?.message}`}</div>
              )}
            </div>

            {/* Property description */}
            <div className="flex flex-col">
              <textarea
                placeholder="Provide details about your property.."
                rows={4}
                className="p-3 border border-white/20 bg-bgsecondary flex-grow focus:outline-none rounded-md"
                {...register("description")}
              />
              {errors && errors?.description && (
                <div className="text-red-600">{`${errors.description?.message}`}</div>
              )}
            </div>

            {/* Property Type */}
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Property Type</label>
              <div className="w-full h-[50px] flex items-center rounded-md border border-white/15 gap-3 p-2 ">
                <Home className="size-5" />{" "}
                <select
                  className="bg-bgsecondary p-2 flex-grow focus:outline-none"
                  {...register("type")}
                >
                  <option value="">Select type</option>
                  <option value="Apartment">Apartment</option>
                  <option value="House">House</option>
                  <option value="Town House">Townhouse</option>
                  <option value="Villa">Villa</option>
                </select>
              </div>
              {errors && errors?.type && (
                <div className="text-red-600">{`${errors.type?.message}`}</div>
              )}
            </div>

            {/* location */}
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Location</label>
              <div className="lg:max-w-full h-[50px] flex items-center rounded-md border border-white/15  gap-3 bg-bgsecondary p-2">
                <MapPin className="size-5" />
                <select
                  className="bg-bgsecondary p-2 flex-grow focus:outline-none"
                  {...register("location")}
                >
                  <option value="">Select Location</option>
                  <option value="Cape Town">Cape Town</option>
                  <option value="Johhanesburg">Johhanessburg</option>
                  <option value="Durban">Durban</option>
                </select>
              </div>
              {errors && errors?.location && (
                <div className="text-red-600">{`${errors.location?.message}`}</div>
              )}
            </div>

            {/* Number of bedrooms */}
            <div className="flex flex-col">
              {" "}
              <label className="font-semibold text-lg">
                Number of Bedrooms
              </label>
              <div className="lg:max-w-full h-[50px] flex items-center rounded-md border gap-3 border-white/15 bg-bgsecondary p-2">
                <Bed className="size-5" />
                <select
                  className="bg-bgsecondary p-2 flex-grow focus:outline-none"
                  {...register("bedrooms")}
                >
                  <option value="">Number of Bedrooms</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              {errors && errors?.bedrooms && (
                <div className="text-red-600">{`${errors.bedrooms?.message}`}</div>
              )}
            </div>

            {/* Number of bathrooms */}
            <div className="flex flex-col">
              <label className="font-semibold text-lg">
                Number of Bathrooms
              </label>{" "}
              <div className="lg:max-w-full gap-3 h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <Bath className="size-5" />
                <select
                  className="bg-bgsecondary p-2 flex-grow focus:outline-none"
                  {...register("bathrooms")}
                >
                  <option value="">Number of Bathrooms</option>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              {errors && errors?.bathrooms && (
                <div className="text-red-600">{`${errors.bathrooms?.message}`}</div>
              )}
            </div>
          </div>
          {/* Part one ends */}

          {/* Part 2 */}
          <div className="flex-1">
            {/* status */}
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Property Status</label>
              <div className="lg:max-w-full gap-3 h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <select
                  className="bg-bgsecondary p-2 flex-grow focus:outline-none"
                  {...register("active")}
                >
                  <option value="">Status</option>
                  <option value="true">Active</option>
                  <option value="false">Inactive</option>
                </select>
              </div>
              {errors && errors?.active && (
                <div className="text-red-500">{`${errors.active?.message}`}</div>
              )}
            </div>
          </div>
          {/* Part 2 */}
        </div>

        <div className="w-full flex justify-end">
          <button
            type="submit"
            className=" px-4 hover:bg-background hover:text-primary py-2 bg-primary rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PropertyForm;
