"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "../shared/Container";

const companies = ["Google", "Stripe", "LinkedIn", "Upwork", "Fiverr"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* GRID */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(to right,#ffffff 1px,transparent 1px),linear-gradient(to bottom,#ffffff 1px,transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* GLOW */}

      <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-violet-600/25 blur-[160px]" />

      <div className="absolute bottom-0 -right-20 w-[450px] h-[450px] bg-cyan-500/20 blur-[150px]" />

      <Container>

        <div className="min-h-screen grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <motion.div

            initial={{ opacity: 0, y: 30 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.7 }}

          >

            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-5 py-2">

              ✨

              <span className="text-sm text-gray-300">

                Trusted by 10K+ Freelancers

              </span>

            </div>


            <h1 className="mt-8 text-6xl lg:text-7xl font-bold leading-tight">

              Find

              <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 text-transparent bg-clip-text">

                Elite Freelancers

              </span>

              Build Faster.

              <br />

              Grow Smarter.

            </h1>


            <p className="mt-8 text-lg text-gray-400 leading-relaxed max-w-xl">

              Connect clients with talented freelancers,
              submit proposals, collaborate efficiently
              and grow your career with secure payments.

            </p>


            <div className="mt-10 flex gap-5">

              <Button

                className="rounded-full px-8 py-6 bg-gradient-to-r from-violet-600 to-cyan-500 hover:scale-105 transition duration-300"

              >

                Get Started

              </Button>


              <Button

                variant="outline"

                className="rounded-full px-8 py-6 border-white/10 bg-white/5 backdrop-blur-xl text-white hover:bg-white/10 hover:text-white"

              >

                Explore Projects

              </Button>

            </div>


            {/* STATS */}

            <div className="flex gap-14 mt-14">

              <div>

                <h2 className="text-4xl font-bold">

                  10K+

                </h2>

                <p className="text-gray-400 mt-2">

                  Freelancers

                </p>

              </div>


              <div>

                <h2 className="text-4xl font-bold">

                  25K+

                </h2>

                <p className="text-gray-400 mt-2">

                  Projects

                </p>

              </div>


              <div>

                <h2 className="text-4xl font-bold">

                  $2M+

                </h2>

                <p className="text-gray-400 mt-2">

                  Payments

                </p>

              </div>

            </div>

          </motion.div>


          {/* RIGHT */}


          <div className="relative h-[600px]">


            {/* PROFILE CARD */}

            <motion.div

              animate={{ y: [0, -18, 0] }}

              transition={{

                duration: 4,

                repeat: Infinity

              }}

              className="absolute top-5 right-0 w-80 p-7 rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10"

            >

              <div className="flex items-center gap-4">

                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />

                <div>

                  <h3 className="font-bold text-xl">

                    Sarah Johnson

                  </h3>

                  <p className="text-gray-400">

                    UI/UX Designer

                  </p>

                </div>

              </div>


              <div className="mt-6 space-y-3">

                <p className="text-cyan-400">

                  ⭐ 4.9 Rating

                </p>

                <p className="text-gray-300">

                  95 Jobs Completed

                </p>

                <p className="text-violet-400">

                  $35/hr

                </p>

              </div>

            </motion.div>


            {/* TASK CARD */}

            <motion.div

              animate={{ y: [0, 15, 0] }}

              transition={{

                duration: 5,

                repeat: Infinity

              }}

              className="absolute left-0 top-64 w-96 p-7 rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10"

            >

              <p className="text-gray-400">

                New Task

              </p>

              <h2 className="text-3xl font-bold mt-4">

                Build Next.js Website

              </h2>

              <p className="text-violet-400 mt-5">

                Budget : $500

              </p>

              <p className="text-cyan-400 mt-3">

                18 Proposals

              </p>

            </motion.div>



            {/* PAYMENT CARD */}

            <motion.div

              animate={{ y: [0, -12, 0] }}

              transition={{

                duration: 3,

                repeat: Infinity

              }}

              className="absolute bottom-0 right-12 w-72 p-7 rounded-[32px] bg-white/5 backdrop-blur-2xl border border-white/10"

            >

              <h2 className="font-bold text-xl">

                Secure Payments

              </h2>

              <p className="text-gray-400 mt-4">

                Stripe Protected

              </p>

              <p className="mt-4 text-green-400">

                ✓ Payment Verified

              </p>

              <p className="text-cyan-400 mt-2">

                99.9% Secure

              </p>

            </motion.div>

          </div>

        </div>


        {/* TRUSTED BY */}

        <div className="pb-20">

          <p className="text-center text-gray-500 uppercase tracking-[5px] text-sm">

            Trusted By

          </p>


          <div className="flex justify-center flex-wrap gap-12 mt-10">

            {companies.map((company) => (

              <h3

                key={company}

                className="text-2xl font-bold text-gray-600 hover:text-white transition"

              >

                {company}

              </h3>

            ))}

          </div>

        </div>

      </Container>

    </section>
  );
}