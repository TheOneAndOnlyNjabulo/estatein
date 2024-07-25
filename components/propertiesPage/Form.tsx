import React from "react";
import Header from "../Header";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bath, DollarSign, Home, LocateIcon } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().min(1, "Phone number is required"),
  preferredLocation: z.string().min(1, "Preferred location is required"),
  propertyType: z.string().min(1, "Property type is required"),
  numBathrooms: z.number().min(1, "Number of bathrooms is required"),
  numBedrooms: z.number().min(1, "Number of bedrooms is required"),
  budget: z.number().min(1, "Budget is required"),
  preferredContactMethod: z.enum(["phone", "email"]),
  message: z.string().min(1, "Message is required"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <div id="features" className="max-w-[1440px] m-auto mt-10 px-3 py-4 mb-10">
      <div>
        <Header
          title="Let's Make it Happen"
          subtitle="Ready to take the first step toward your dream property? Fill out the form below, and our real estate wizards will work their magic to find your perfect match. Don't wait; let's embark on this exciting journey together."
          hidden
          buttonOnClick={() => {}}
        />
        <div className="p-5 border border-white/10 rounded-md mt-5 ">
          <form
            className="grid grid-cols-1 m-5 md:grid-cols-2 lg:grid-cols-4 gap-2"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col">
              <label className="font-semibold text-lg">First Name</label>
              <input
                placeholder="Enter First Name"
                className="  lg:max-w-full  h-[40px] rounded-md border border-white/15 focus:border-primary focus:outline-none focus:ring-primary bg-bgsecondary p-2"
                type="text"
                {...register("firstName")}
              />
              {/* {errors.firstName && <p>{errors.firstName.message}</p>} */}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Last Name</label>
              <input
                placeholder="Enter your last name"
                className="  lg:max-w-full  h-[40px] rounded-md border border-white/15 focus:border-primary focus:outline-none focus:ring-primary bg-bgsecondary p-2"
                type="text"
                {...register("lastName")}
              />
              {/* {errors.lastName && <p>{errors.lastName.message}</p>} */}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Email</label>
              <input
                placeholder="Enter your email adress"
                className="  lg:max-w-full  h-[40px] rounded-md border border-white/15 focus:border-primary focus:outline-none focus:ring-primary bg-bgsecondary p-2"
                type="email"
                {...register("email")}
              />
              {/* {errors.email && <p>{errors.email.message}</p>} */}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Phone</label>
              <input
                placeholder="Enter your phone number"
                className="  lg:max-w-full  h-[40px] rounded-md border border-white/15 focus:border-primary focus:outline-none focus:ring-primary bg-bgsecondary p-2"
                type="tel"
                {...register("phone")}
              />
              {/* {errors.phone && <p>{errors.phone.message}</p>} */}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg">
                Preferred Location
              </label>
              <div className="  lg:max-w-full  h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <LocateIcon className="size-5" />
                <select className=" p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none">
                  <option value="">Select Location</option>
                  <hr className="stroke-white" />
                  <option value="cape-town">Cape Town</option>
                  <option value="johannesburg">Johannesburg</option>
                  <option value="durban">Durban</option>
                </select>
              </div>
              {/* {errors.preferredLocation && (
                  <p>{errors.preferredLocation.message}</p>
                )} */}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg">Property Type</label>
              <div className="  lg:max-w-full  h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <Home className="size-5" />
                <select className=" p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none">
                  <option value="">Select Property Type</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                  <option value="townhouse">Townhouse</option>
                  <option value="villa">Villa</option>
                  <option value="commercial">Commercial Property</option>
                </select>
              </div>

              {/* {errors.propertyType && <p>{errors.propertyType.message}</p>} */}
            </div>
            <div className="flex flex-col">
              <label className="font-semibold text-lg">
                Number of Bathrooms
              </label>
              <div className="  lg:max-w-full  h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <Bath className="size-5" />
                <select className=" p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none">
                  <option value="">Select No. Of Bathrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              {/* {errors.numBathrooms && <p>{errors.numBathrooms.message}</p>} */}
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg">
                Number of Bedrooms
              </label>
              <div className="  lg:max-w-full h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <Bath className="size-5" />
                <select className=" p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none">
                  <option value="">Select No. Of Bedrooms</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                </select>
              </div>
              {/* {errors.numBathrooms && <p>{errors.numBathrooms.message}</p>} */}
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg">Budget</label>
              <div className="  lg:max-w-full  h-[50px] flex items-center rounded-md border border-white/15 bg-bgsecondary p-2">
                <DollarSign className="size-5" />
                <select className=" p-3 ring-transparent focus:ring-transparent bg-bgsecondary flex-grow focus:outline-none">
                  <option value="">Select Price Range</option>
                  <option value="0-500000">R0 - R500,000</option>
                  <option value="500000-1000000">R500,000 - R1,000,000</option>
                  <option value="1000000-2000000">
                    R1,000,000 - R2,000,000
                  </option>
                  <option value="2000000-5000000">
                    R2,000,000 - R5,000,000
                  </option>
                  <option value="5000000+">R5,000,000+</option>
                </select>
              </div>
              {/* {errors.budget && <p>{errors.budget.message}</p>} */}
            </div>

            <div className="flex flex-col lg:col-span-4">
              <label className="font-semibold text-lg">Message</label>
              <textarea
                rows={4}
                placeholder="Enter your message.."
                className="p-3 border border-white/20  bg-bgsecondary flex-grow focus:outline-none rounded-md"
                {...register("message")}
              />
              {/* {errors.message && <p>{errors.message.message}</p>} */}
            </div>
          </form>
        </div>
        <div className="w-full mt-4  flex justify-end p-2">
          <button
            className="items px-4 text-sm py-2 rounded-md hover:bg-bgsecondary bg-primary"
            type="submit"
          >
            Send Your Message
          </button>
        </div>
      </div>
    </div>
  );
};
export default Form;
