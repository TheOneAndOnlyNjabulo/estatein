import React from "react";
import Header from "../Header";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bath, DollarSign, Home, LocateIcon, MapPin } from "lucide-react";

const schema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().min(1, "Phone number is required"),
  message: z.string().min(1, "Message is required"),
});

interface Proppsy {
  name: string;
  location: string;
}

const InquiryForm = ({ name, location }: Proppsy) => {
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
    <div id="features" className="max-w-[1440px] m-auto mt-2 px-3 py-4 mb-2">
      <div>
        <div className="p-5 border border-white/10 rounded-md mt-5 ">
          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-3 "
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
              <label className="font-semibold text-lg">Selected Property</label>
              <div className="  lg:max-w-full  h-[40px] rounded-md border border-white/15 p-2 flex justify-between items-center">
                <div className="flex">
                  {name}, {location}
                </div>
                <MapPin className="size-5" />
              </div>
              {/* {errors.phone && <p>{errors.phone.message}</p>} */}
            </div>

            <div className="flex flex-col">
              <label className="font-semibold text-lg">Message</label>
              <textarea
                rows={4}
                placeholder="Enter your message.."
                className="p-3 border border-white/20  bg-bgsecondary flex-grow focus:outline-none rounded-md"
                {...register("message")}
              />
              {/* {errors?.message && <p>{errors.message?.message}</p>} */}
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
export default InquiryForm;
