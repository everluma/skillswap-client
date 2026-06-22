"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { Button } from "@/components/ui/button";
import { Star, Briefcase } from "lucide-react";

const freelancers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    rating: "4.9",
    jobs: "95",
    rate: "$35/hr",
  },

  {
    id: 2,
    name: "Michael Lee",
    role: "Full Stack Developer",
    rating: "5.0",
    jobs: "132",
    rate: "$45/hr",
  },

  {
    id: 3,
    name: "Emma Wilson",
    role: "Digital Marketer",
    rating: "4.8",
    jobs: "80",
    rate: "$28/hr",
  },
];

export default function TopFreelancers() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Glow */}

      <div className="absolute top-20 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-violet-600/10 blur-[140px]" />


      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300">

            Top Rated Talent

          </div>

          <h2 className="mt-8 text-5xl font-bold">

            Meet Our

            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              Top Freelancers

            </span>

          </h2>

          <p className="mt-6 text-gray-400 text-lg">

            Hire experienced professionals trusted by clients worldwide.

          </p>

        </div>


        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {freelancers.map((freelancer, index) => (

            <motion.div

              key={freelancer.id}

              initial={{ opacity: 0, y: 50 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{

                duration: .5,

                delay: index * .2,

              }}

              whileHover={{

                y: -10,

                scale: 1.02,

              }}

              className="group relative rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden"

            >

              {/* Hover Gradient */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />



              <div className="relative z-10">

                {/* Avatar */}

                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 p-[2px]">

                  <div className="w-full h-full rounded-full bg-[#0f172a]" />

                </div>



                <h3 className="text-2xl font-bold mt-7">

                  {freelancer.name}

                </h3>

                <p className="text-gray-400 mt-2">

                  {freelancer.role}

                </p>



                <div className="flex items-center gap-2 mt-7">

                  <Star className="text-yellow-400 fill-yellow-400" size={18} />

                  <span>

                    {freelancer.rating}

                  </span>

                </div>



                <div className="flex items-center gap-2 mt-4 text-gray-400">

                  <Briefcase size={18} />

                  <span>

                    {freelancer.jobs} Jobs Completed

                  </span>

                </div>



                <h4 className="text-cyan-400 text-3xl font-bold mt-8">

                  {freelancer.rate}

                </h4>



                <Button

                  className="w-full mt-8 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"

                >

                  View Profile

                </Button>

              </div>

            </motion.div>

          ))}

        </div>



        {/* Bottom CTA */}

        <div className="text-center mt-16">

          <Button

            variant="outline"

            className="rounded-full px-8 py-6 bg-white/5 border-white/10 text-white hover:text-white hover:bg-white/10"

          >

            Browse All Freelancers

          </Button>

        </div>

      </Container>

    </section>
  );
}