import Ending from "@/components/Homepage/Ending";
import Faq from "@/components/Homepage/FAQ/Faq";
import FeaturedProperties from "@/components/Homepage/featuredProperties/FeaturedProperties";
import Hero from "@/components/Homepage/Hero/Hero";
import Testimonials from "@/components/Homepage/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-background flex flex-col gap-3">
      <Hero />
      <FeaturedProperties />
      <Testimonials />
      <Faq />
      <Ending />
    </main>
  );
}
