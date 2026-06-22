"use client";

import { motion } from "framer-motion";
import Container from "../shared/Container";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Emily Carter",
    role: "Startup Founder",
    review:
      "SkillSwap completely changed how we hire freelancers. The platform is fast, secure and filled with talented professionals.",
  },

  {
    id: 2,
    name: "Michael Brown",
    role: "Frontend Developer",
    review:
      "I landed multiple high-paying projects within weeks. The experience feels premium and very professional.",
  },

  {
    id: 3,
    name: "Sophia Wilson",
    role: "Product Designer",
    review:
      "The proposal system and secure payments gave me confidence from day one. Absolutely love the experience.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-violet-600/10 blur-[180px]" />

      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-cyan-500/10 blur-[180px]" />


      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300">

            Testimonials

          </div>


          <h2 className="mt-8 text-5xl font-bold">

            What Our

            <span className="block bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              Clients Say

            </span>

          </h2>


          <p className="mt-6 text-gray-400 text-lg">

            Thousands of freelancers and businesses trust SkillSwap
            to collaborate and grow together.

          </p>

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {testimonials.map((item, index) => (

            <motion.div

              key={item.id}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              viewport={{ once: true }}

              transition={{

                duration: 0.5,

                delay: index * 0.2,

              }}

              whileHover={{

                y: -10,

                scale: 1.02,

              }}

              className="group relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 overflow-hidden"

            >

              {/* Hover Glow */}

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-violet-500/10 to-cyan-500/10" />


              <div className="relative z-10">

                {/* Stars */}

                <div className="flex gap-1">

                  {[...Array(5)].map((_, i) => (

                    <Star

                      key={i}

                      className="fill-yellow-400 text-yellow-400"

                      size={18}

                    />

                  ))}

                </div>



                <p className="text-gray-300 leading-relaxed mt-8">

                  "{item.review}"

                </p>



                <div className="flex items-center gap-4 mt-10">

                  <div className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 p-[2px]">

                    <div className="w-full h-full rounded-full bg-[#0f172a]" />

                  </div>


                  <div>

                    <h4 className="font-bold text-lg">

                      {item.name}

                    </h4>

                    <p className="text-gray-400">

                      {item.role}

                    </p>

                  </div>

                </div>

              </div>

            </motion.div>

          ))}

        </div>



        {/* Bottom CTA */}

        <div className="mt-24 text-center">

          <h3 className="text-4xl font-bold">

            Ready to Start Your Journey?

          </h3>

          <p className="text-gray-400 mt-5 text-lg">

            Join SkillSwap today and connect with amazing opportunities.

          </p>


          <button className="mt-10 rounded-full px-8 py-4 bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-105 transition duration-300">

            Get Started Now

          </button>

        </div>

      </Container>

    </section>
  );
}