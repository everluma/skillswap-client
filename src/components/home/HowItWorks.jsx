"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";

const steps = [
  {
    number: "01",
    title: "Post Your Task",
    description:
      "Clients post projects with budget, skills and requirements in just a few clicks.",
  },

  {
    number: "02",
    title: "Receive Proposals",
    description:
      "Freelancers submit proposals and clients compare the best talent easily.",
  },

  {
    number: "03",
    title: "Hire & Pay Securely",
    description:
      "Choose the right freelancer and pay securely with protected transactions.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-violet-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px]" />



      <Container>

        {/* Header */}

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300">

            Simple Process

          </div>


          <h2 className="mt-8 text-5xl font-bold">

            How

            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              {" "}SkillSwap{" "}

            </span>

            Works

          </h2>


          <p className="mt-6 text-gray-400 text-lg">

            Get started in minutes and connect with the right people faster than ever.

          </p>

        </div>



        {/* Timeline */}

        <div className="relative mt-24">

          {/* line */}

          <div className="hidden lg:block absolute top-24 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500/30 via-cyan-500/30 to-violet-500/30" />



          <div className="grid lg:grid-cols-3 gap-10">

            {steps.map((step, index) => (

              <motion.div

                key={step.number}

                initial={{ opacity: 0, y: 50 }}

                whileInView={{ opacity: 1, y: 0 }}

                viewport={{ once: true }}

                transition={{

                  duration: .5,

                  delay: index * .2

                }}

                whileHover={{

                  y: -10,

                }}

                className="relative rounded-[34px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10"

              >

                {/* Circle */}

                <div className="absolute -top-7 left-10 w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-xl font-bold">

                  {step.number}

                </div>


                <h3 className="text-3xl font-bold mt-10">

                  {step.title}

                </h3>


                <p className="mt-6 text-gray-400 leading-relaxed">

                  {step.description}

                </p>


                <div className="mt-10 h-1 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 opacity-60" />

              </motion.div>

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}