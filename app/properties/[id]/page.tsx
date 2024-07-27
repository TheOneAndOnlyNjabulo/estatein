import { getInfoById } from "@/actions/getInfo";
import { getAddionalFees, getPropertyById } from "@/actions/getPropertyById";
import Ending from "@/components/Homepage/Ending";
import Inquiry from "@/components/Inquiry";
import { AreaChart, Bath, Bed, MapPin } from "lucide-react";
import Image from "next/image";

interface PropertyProps {
  params: {
    id: string;
  };
}

export default async function PropertiesId({ params }: PropertyProps) {
  const property = await getPropertyById(params.id);
  const fees = await getInfoById(params.id);

  return (
    <div className="bg-background">
      <div className="flex items-center justify-between max-w-[1440px] m-auto text-white p-4 bg-background ">
        <div className="w-full flex flex-col">
          {/* Image and PRice */}
          <div className=" w-full p-6 bg-bgsecondary rounded-md border border-white/10 ">
            {/* Head */}
            <div className="flex justify-between  w-full items-center">
              {/* Name and LOcation */}
              <div className="flex gap-3">
                <h2 className="text-3xl  font-bold">{property?.name}</h2>
                <div className="flex items gap-2 p-2 bg-background cursor-pointer hover:text-primary border border-transparent hover:border-primary transition rounded-lg">
                  <MapPin className="size-5" />
                  {property?.location}
                </div>
              </div>

              {/* price */}
              <div className="text-2xl font-semibold">
                R {property?.listingPrice}
              </div>
            </div>

            {/* Image */}
            <div className="w-full m-auto">
              <div className="relative flex w-full justify-center items-center max-w-[800px] mt-3 m-auto h-[500px] overflow-hidden rounded-md">
                {property && (
                  <Image
                    className="object-cover hover:scale-105 transition"
                    src={property?.image}
                    quality={100}
                    fill
                    alt="image"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 bg-bgsecondary rounded-md border border-white/10">
            <div className="flex flex-col gap-3">
              <h2 className="text-2xl font-bold">Description</h2>
              <p>{property?.description}</p>
              <hr className="opacity-15" />
              <div className="grid grid-cols-3">
                {/* Item 1 */}
                <div className="flex flex-col gap-2 border border-transparent border-r-white/15">
                  <div className="flex gap-2">
                    <Bed className="size-5" />
                    <span>Bedrooms</span>
                  </div>
                  <p className="text-2xl font-bold">0{property?.bedrooms}</p>
                </div>

                {/* Item 2 */}
                <div className="flex flex-col gap-2 pl-4 border border-transparent border-r-white/15">
                  <div className="flex gap-2">
                    <Bath className="size-5" />
                    <span>Bathrooms</span>
                  </div>
                  <p className="text-2xl font-bold">0{property?.bathrooms}</p>
                </div>
                {/* Item 2 */}
                <div className="flex flex-col gap-2 pl-4  ">
                  <div className="flex gap-2">
                    <AreaChart className="size-5" />
                    <span>Area</span>
                  </div>
                  <p className="text-2xl font-bold">
                    {property?.area} Square Meters
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Inquiry */}
          {property && (
            <Inquiry name={property.name} location={property?.location} />
          )}

          <hr className="opacity-15 mt-10" />
          {/* additional fees */}
          <div className="flex flex-col mt-2">
            <div className="p-4">Additional Fees</div>{" "}
            <div className="p-4 bg-bgsecondary rounded-md border border-white/15  text-white grid grid-cols-1 md:grid-cols-2 gap-2">
              {fees?.map((fee) => (
                <div key={fee.id} className="flex flex-col justify-center">
                  <h2 className="text-md font-semibold">{fee.name}</h2>
                  <div className="flex gap-2 items-center">
                    <p>R{fee.amount}</p>
                    <p className="px-3 py-1 bg-background hover:bg-primary transition rounded-xl cursor-pointer text-sm">
                      {fee.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Ending />
    </div>
  );
}
