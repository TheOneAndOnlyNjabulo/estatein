"use client";
import React, { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Home, LocateIcon, Bath } from "lucide-react";
import { useRouter } from "next/navigation";
import { Property } from "@prisma/client";
import ImageUpload from "@/components/imageUpload";
import axios from "axios";
import Button from "@/components/Button";
import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  location: z.string().min(1, "Location is required"),
  image: z.string().optional(),
  images: z.array(z.string()).optional(),
  type: z.string().min(1, "Type is required"),
  bedrooms: z
    .string()
    .min(1)
    .transform((val) => parseInt(val, 10))
    .refine((val) => val >= 1, {
      message: "Number of bedrooms must be at least 1",
    }),
  bathrooms: z
    .string()
    .min(1)
    .transform((val) => parseInt(val, 10))
    .refine((val) => val >= 1, {
      message: "Number of bathrooms must be at least 1",
    }),
  area: z.number().min(1, "Area is required"),
  listingPrice: z
    .string()
    .min(1)
    .transform((val) => parseFloat(val))
    .refine((val) => val >= 1, {
      message: "Listing price must be at least 1",
    }),
  // status: z.string().min(1, "Status is required"),
});

interface AddPropertyFormProps {
  property: Property | null;
}

const NewPropertyForm = ({ property }: AddPropertyFormProps) => {
  const [image, setImage] = useState<string | undefined>(property?.image);
  const [imageIsDeleting, setImageIsDeleting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: property || {
      name: "",
      description: "",
      location: "",
      image: "",
      // images: [],
      type: "",
      bedrooms: 1,
      bathrooms: 1,
      area: 0,
      listingPrice: 1,
      // status: "",
    },
  });

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

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted", values);

    setIsLoading(true);
    console.log(values);

    const submitFunction = property
      ? axios.patch(`/api/property/${property.id}`, values)
      : axios.post("/api/property", values);

    submitFunction
      .then((res) => {
        console.log("Form submitted successfully", res);
        setIsLoading(false);
        router.push("/admin/properties");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        setIsLoading(false);
      });
  };

  return (
    <div id="features">
      <div>
        <form
          className="grid grid-cols-1 m-5 md:grid-cols-2 gap-2"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col">
            <label className="font-semibold text-lg">Property Name</label>
            <input
              placeholder="Enter property name"
              className="lg:max-w-full h-[40px] rounded-md border border-white/15 focus:border-primary focus:outline-none focus:ring-primary bg-bgsecondary p-2"
              type="text"
              {...register("name")}
            />
            <div className="text-red-600">
              {errors.name && <p>{errors.name.message as string}</p>}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg">Description</label>
            <textarea
              rows={4}
              placeholder="Provide details about your property.."
              className="p-3 border border-white/20 bg-bgsecondary flex-grow focus:outline-none rounded-md"
              {...register("description")}
            />
            <div className="text-red-600">
              {errors.description && (
                <p>{errors.description.message as string}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg">Location</label>
            <div className="lg:max-w-full h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
              <LocateIcon className="size-5" />
              <select
                className="p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none"
                {...register("location")}
              >
                <option value="">Select Location</option>
                <option value="cape-town">Cape Town</option>
                <option value="johannesburg">Johannesburg</option>
                <option value="durban">Durban</option>
              </select>
            </div>
            <div className="text-red-600">
              {errors.location && <p>{errors.location.message as string}</p>}
            </div>
          </div>

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

          <div className="flex flex-col">
            <label className="font-semibold text-lg">Property Type</label>
            <div className="lg:max-w-full h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
              <Home className="size-5" />
              <select
                className="p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none"
                {...register("type")}
              >
                <option value="">Select type</option>
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="townhouse">Townhouse</option>
                <option value="villa">Villa</option>
              </select>
            </div>
            <div className="text-red-600">
              {errors.type && <p>{errors.type.message as string}</p>}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg">Number of Bedrooms</label>
            <div className="lg:max-w-full h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
              <Bath className="size-5" />
              <select
                className="p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none"
                {...register("bedrooms")}
              >
                <option value="">Select No. Of Bedrooms</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
              </select>
            </div>
            <div className="text-red-600">
              {errors.bedrooms && <p>{errors.bedrooms.message as string}</p>}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="font-semibold text-lg">Number of Bathrooms</label>
            <div className="lg:max-w-full h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
              <Bath className="size-5" />
              <select
                className="p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none"
                {...register("bathrooms")}
              >
                <option value="">Select No. Of Bathrooms</option>
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>
            </div>
            <div className="text-red-600">
              {errors.bathrooms && <p>{errors.bathrooms.message as string}</p>}
            </div>
          </div>

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

          {/* <div className="flex flex-col">
            <label className="font-semibold text-lg">Status</label>
            <div className="lg:max-w-full h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
              <select
                className="p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none"
                {...register("status")}
              >
                <option value="">Select status</option>
                <option value="true">Active</option>
                <option value="false">Inactive</option>
              </select>
            </div>
            <div className="text-red-600">
              {errors.status && <p>{errors.status.message as string}</p>}
            </div>
          </div> */}

          <div className="w-full mt-4 flex justify-end p-2">
            <button
              className="items px-4 text-sm py-2 rounded-md hover:bg-bgsecondary bg-primary"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPropertyForm;
