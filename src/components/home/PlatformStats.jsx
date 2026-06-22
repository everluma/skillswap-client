"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import {
  Users,
  BriefcaseBusiness,
  DollarSign,
  ShieldCheck,
} from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10K+",
    label: "Active Freelancers",
  },

  {
    icon: BriefcaseBusiness,
    value: "25K+",
    label: "Completed Projects",
  },

  {
    icon: DollarSign,
    value: "$2M+",
    label: "Payments Processed",
  },

  {
    icon: ShieldCheck,
    value: "99.9%",
    label: "Secure Transactions",
  },
];

export default function PlatformStats() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Background */}

      <div className="absolute top-0 left-0 w-[450px] h-[450px] bg-violet-600/10 blur-[170px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[170px]" />


      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300">

            Platform Growth

          </div>


          <h2 className="mt-8 text-5xl font-bold">

            Trusted By

            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              Thousands Worldwide

            </span>

          </h2>


          <p className="mt-6 text-gray-400 text-lg">

            Join a growing community of clients and freelancers
            building successful careers together.

          </p>

        </div>


        {/* Stats */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div

                key={item.label}

                initial={{ opacity: 0, y: 40 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{

                  duration: 0.5,

                  delay: index * 0.15,

                }}

                whileHover={{

                  y: -10,

                  scale: 1.03,

                }}

                className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 text-center relative overflow-hidden"

              >

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />



                <div className="relative z-10">

                  <div className="mx-auto w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">

                    <Icon size={34} />

                  </div>


                  <h3 className="text-5xl font-bold mt-8">

                    {item.value}

                  </h3>


                  <p className="text-gray-400 mt-4">

                    {item.label}

                  </p>

                </div>

              </motion.div>

            );

          })}

        </div>

      </Container>

    </section>
  );
}