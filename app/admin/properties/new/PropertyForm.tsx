"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bath, Bed, Home, LocateIcon, MapPin } from "lucide-react";
import { AdditionalFees, Property } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createProperty } from "@/actions/createProperty";
import Image from "next/image";
import Button from "@/components/Button";
import { UploadButton } from "@/lib/uploadthing";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import AddtionalInformationForm from "./AddtionalInformationForm";
import AdditionalnfoTable from "../AdditionalnfoTable";

interface AddPropertyFormProps {
  property: Property | null;
  addtionFees?: AdditionalFees[] | null;
}

const fromSchema = z.object({
  name: z.string().min(1, "Name is Required!!"),
  description: z.string().min(1, "Description is required!!"),
  location: z.string().min(1, "Location is Required🤷‍♂️"),
  type: z.string().min(1, "Guess What... Type is required!!!"),
  image: z.string(),
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
  area: z
    .string()
    .min(1, "Required")
    .transform((value) => parseInt(value)),

  listingPrice: z
    .string()
    .min(1, "Required")
    .transform((value) => parseInt(value)),
  // keyFeatures

  // additionalFees
  // monthlyCosts
  // totalInitialCost
  // monthlyExpenses
});

const PropertyForm = ({ property, addtionFees }: AddPropertyFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState<string | undefined>(property?.image);
  const [imageIsDeleting, setImageIsDeleting] = useState(false);
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      name: property?.name || "Prperty 24",
      description: property?.description || "This is a property",
      location: property?.location || "Cape Town",
      image: property?.image || "",
      area: "0",
      // imagesMany
      type: "villa",
      bathrooms: "1",
      bedrooms: "1",

      listingPrice: "1",
      active: "true",
    },
  });

  const handleDialogueOpen = () => {
    setOpen((prev) => !prev);
  };

  const onSubmit = async (data: any) => {
    event?.preventDefault();
    console.log("Form submitted", data);
    setIsLoading(true);

    const formData = { ...data, image: image || data.image };

    try {
      const response = await axios.post("/api/property", formData);
      console.log("Property created successfully:", response.data);
      router.push(`/admin/properties/${response.data.id}`);
      // Handle successful response (e.g., redirect or show success message)
    } catch (error) {
      console.error("Error creating property:", error);
      // setError("Failed to create property");
    } finally {
      setIsLoading(false);
    }

    console.log("created");

    reset();
  };

  const handleImageDelete = (image: string) => {
    setImageIsDeleting(true);
    const imageKey = image.substring(image.lastIndexOf("/") + 1);

    axios
      .post("/api/uploadthing/delete", { imageKey })
      .then((res) => {
        if (res.data.success) {
          setImage("");
        }
      })
      .catch(() => {})
      .finally(() => {
        setImageIsDeleting(false);
      });
  };

  return (
    <div className="max-w-[1440px] bg-bgsecondary p-4 rounded-md m-auto  flex flex-col gap-7">
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
          <div className="flex-1 flex flex-col gap-3">
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

            {/* area */}
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Property Status</label>
              <div className="lg:max-w-full gap-3 h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <input
                  disabled={isLoading}
                  type="number"
                  className="p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none"
                  {...register("area")}
                />
                <span>sqrm</span>
              </div>
              {errors && errors?.area && (
                <div className="text-red-500">{`${errors.area?.message}`}</div>
              )}
            </div>

            {/* Listing Price */}
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Listing Price</label>
              <div className="lg:max-w-full h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <span>R</span>
                <input
                  disabled={isLoading}
                  type="number"
                  className="p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none"
                  {...register("listingPrice")}
                />
              </div>
              <div className="text-red-600">
                {errors.listingPrice && (
                  <p>{errors.listingPrice.message as string}</p>
                )}
              </div>
            </div>

            {/* Image */}
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Image</label>
              <div>
                {image ? (
                  <div className="relative max-w-[400px] max-h-[400px] overflow-hidden rounded-lg min-h-[200px] mt-4">
                    <Image
                      src={image}
                      alt="Hotel Image"
                      className="object-contain"
                      fill
                    />
                    <Button
                      title="delete"
                      style="absolute right-[12px] top-0"
                      onClick={() => handleImageDelete(image)}
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center max-w-[400px] p-12 border-2 border-dashed border-primary">
                    <UploadButton
                      endpoint="imageUploader"
                      onClientUploadComplete={(res: any) => {
                        console.log("Files: ", res);
                        setImage(res[0].url);
                      }}
                      onUploadError={(error: Error) => {
                        console.log(`ERROR! ${error.message}`);
                      }}
                    />
                  </div>
                )}
              </div>
              <div className="text-red-600">
                {errors.image && <p>{errors.image.message as string}</p>}
              </div>
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

      {property && (
        <div>
          <div className="flex justify-between">
            <h2 className="text-3xl front-bold">Add additional information</h2>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger>
                <div
                  onClick={() => console.log("Click")}
                  className=" px-4 hover:bg-background hover:text-primary py-2 bg-primary rounded-md"
                >
                  Add Information
                </div>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Additional Information</DialogTitle>
                  <DialogDescription>
                    You can additional information like fees
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <AddtionalInformationForm
                    handleDialogueOpen={handleDialogueOpen}
                    // additionalFees={addtionFees || null}
                    property={property}
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div>
            <AdditionalnfoTable info={addtionFees} />
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyForm;
