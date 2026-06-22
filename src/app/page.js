import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTasks from "@/components/home/FeaturedTasks";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedTasks />
    </>
  );
}