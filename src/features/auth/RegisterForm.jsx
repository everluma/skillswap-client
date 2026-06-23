"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";

export default function RegisterForm() {
  return (
    <section className="min-h-screen grid lg:grid-cols-2">

      {/* LEFT */}

      <div className="hidden lg:flex relative overflow-hidden items-center justify-center">

        <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/20 blur-[150px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/20 blur-[150px]" />


        <div className="relative z-10 max-w-lg">

          <h1 className="text-7xl font-bold leading-tight">

            Join

            <span className="block bg-gradient-to-r from-cyan-400 to-violet-400 text-transparent bg-clip-text">

              SkillSwap

            </span>

          </h1>


          <p className="text-gray-400 text-xl mt-8 leading-relaxed">

            Connect with clients, showcase your skills,
            earn money and grow your freelance career.

          </p>


          <div className="mt-12 space-y-5">

            <div className="flex gap-3 items-center">

              <div className="w-3 h-3 rounded-full bg-cyan-400" />

              <p>Create your professional profile</p>

            </div>


            <div className="flex gap-3 items-center">

              <div className="w-3 h-3 rounded-full bg-violet-400" />

              <p>Find premium projects</p>

            </div>


            <div className="flex gap-3 items-center">

              <div className="w-3 h-3 rounded-full bg-cyan-400" />

              <p>Secure payments worldwide</p>

            </div>

          </div>

        </div>

      </div>



      {/* RIGHT */}

      <div className="flex items-center justify-center px-6 py-12">

        <div className="w-full max-w-md p-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl">

          <h2 className="text-4xl font-bold">

            Create Account

          </h2>


          <p className="text-gray-400 mt-3">

            Start your journey with SkillSwap

          </p>


          {/* Social */}

          <div className="grid grid-cols-2 gap-4 mt-8">

            <Button
              variant="outline"
              className="h-12 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white"
            >
              <FaGoogle />

            </Button>


            <Button
              variant="outline"
              className="h-12 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white"
            >
              <FaGithub />

            </Button>

          </div>



          <div className="relative my-8">

            <div className="border-t border-white/10" />

            <span className="absolute left-1/2 -translate-x-1/2 -top-3 bg-[#020617] px-4 text-gray-500 text-sm">

              OR

            </span>

          </div>



          {/* Name */}

          <div>

            <label className="text-sm text-gray-300">

              Full Name

            </label>

            <input
              type="text"
              placeholder="John Doe"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
            />

          </div>



          {/* Email */}

          <div className="mt-5">

            <label className="text-sm text-gray-300">

              Email

            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
            />

          </div>



          {/* Password */}

          <div className="mt-5">

            <label className="text-sm text-gray-300">

              Password

            </label>

            <input
              type="password"
              placeholder="********"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
            />

          </div>



          {/* Confirm Password */}

          <div className="mt-5">

            <label className="text-sm text-gray-300">

              Confirm Password

            </label>

            <input
              type="password"
              placeholder="********"
              className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 outline-none"
            />

          </div>



          {/* Role */}

          <div className="mt-5">

            <label className="text-sm text-gray-300">

              Join As

            </label>

           <select
  className="
  mt-3
  w-full
  rounded-2xl
  border
  border-white/10
           bg-[#0f172a]
          text-white
          px-5
          py-4
         outline-none
         "
>
  <option value="freelancer" className="bg-[#0f172a] text-white">
    Freelancer
  </option>

  <option value="client" className="bg-[#0f172a] text-white">
    Client
  </option>
</select>

          </div>



          <Button className="w-full h-14 mt-8 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600">

            Create Account

          </Button>



          <p className="text-center mt-8 text-gray-400">

            Already have an account?

            <Link
              href="/login"
              className="text-cyan-400 ml-2"
            >

              Login

            </Link>

          </p>

        </div>

      </div>

    </section>
  );
}