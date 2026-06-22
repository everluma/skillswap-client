import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTasks from "@/components/home/FeaturedTasks";
import TopFreelancers from "@/components/home/TopFreelancers";
import HowItWorks from "@/components/home/HowItWorks";

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedTasks />

      <TopFreelancers />

      <HowItWorks />
    </>
  );
}