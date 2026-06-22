"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { ArrowRight, Clock3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const tasks = [
  {
    id: 1,
    title: "Build Modern Next.js Website",
    budget: "$500",
    category: "Web Development",
    proposals: 18,
    deadline: "5 Days Left",
  },

  {
    id: 2,
    title: "Create Mobile App UI Design",
    budget: "$350",
    category: "UI/UX Design",
    proposals: 12,
    deadline: "3 Days Left",
  },

  {
    id: 3,
    title: "MERN Stack E-commerce Platform",
    budget: "$900",
    category: "Full Stack",
    proposals: 24,
    deadline: "7 Days Left",
  },
];
export default function FeaturedTasks() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-700/10 blur-[130px]" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[120px]" />

      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300">

            Featured Opportunities

          </div>

          <h2 className="mt-8 text-5xl font-bold">

            Discover High Paying

            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              Featured Tasks

            </span>

          </h2>

          <p className="mt-6 text-gray-400 text-lg">

            Explore premium projects posted by clients
            and start earning from your skills.

          </p>

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {tasks.map((task, index) => (

            <motion.div

              key={task.id}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{

                duration: 0.5,

                delay: index * 0.2,

              }}

              viewport={{ once: true }}

              whileHover={{

                y: -10,

                scale: 1.02,

              }}

              className="group relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden"

            >

              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />



              <div className="relative z-10">

                <span className="inline-flex rounded-full bg-violet-500/15 text-violet-300 px-4 py-2 text-sm">

                  {task.category}

                </span>


                <h3 className="text-2xl font-bold mt-7 leading-snug">

                  {task.title}

                </h3>


                <div className="flex justify-between mt-10">

                  <div>

                    <p className="text-gray-500 text-sm">

                      Budget

                    </p>

                    <h4 className="text-3xl font-bold text-cyan-400 mt-2">

                      {task.budget}

                    </h4>

                  </div>


                  <div className="text-right">

                    <p className="text-gray-500 text-sm">

                      Proposals

                    </p>

                    <h4 className="text-2xl font-semibold mt-2">

                      {task.proposals}

                    </h4>

                  </div>

                </div>



                <div className="flex items-center gap-2 text-gray-400 mt-8">

                  <Clock3 size={18} />

                  <span>{task.deadline}</span>

                </div>


                <Button

                  className="mt-10 w-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 hover:scale-[1.02] transition"

                >

                  View Details

                  <ArrowRight className="ml-2 h-4 w-4" />

                </Button>

              </div>

            </motion.div>

          ))}

        </div>


        {/* Bottom Button */}

        <div className="text-center mt-16">

          <Button

            variant="outline"

            className="rounded-full px-8 py-6 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white"

          >

            Browse All Tasks

          </Button>

        </div>

      </Container>

    </section>
  );
}