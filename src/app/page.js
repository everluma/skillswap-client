import Navbar from "@/components/shared/Navbar";
import Hero from "@/components/home/Hero";
import FeaturedTasks from "@/components/home/FeaturedTasks";
import TopFreelancers from "@/components/home/TopFreelancers";
import HowItWorks from "@/components/home/HowItWorks";
import PlatformStats from "@/components/home/PlatformStats";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/shared/Footer";


export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <FeaturedTasks />

      <TopFreelancers />

      <HowItWorks />
      <PlatformStats />
      <Testimonials />
      <Footer />

      
    </>
  );
}