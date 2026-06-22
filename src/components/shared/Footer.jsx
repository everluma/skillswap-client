import Link from "next/link";
import Container from "./Container";
import { Send } from "lucide-react";

import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const quickLinks = [
  {
    name: "Browse Tasks",
    href: "/browse-tasks",
  },

  {
    name: "Freelancers",
    href: "/browse-freelancers",
  },

  {
    name: "Dashboard",
    href: "/dashboard",
  },

  {
    name: "Login",
    href: "/login",
  },
];

const resources = [
  "Help Center",
  "Privacy Policy",
  "Terms & Conditions",
  "Support",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10">

      {/* Glow */}

      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-violet-600/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[150px]" />


      <Container>

        <div className="py-24 grid lg:grid-cols-4 gap-12">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              SkillSwap

            </h2>


            <p className="text-gray-400 mt-6 leading-relaxed">

              SkillSwap connects talented freelancers with clients worldwide.
              Build your career, hire experts and collaborate securely.

            </p>



            <div className="flex gap-4 mt-8">

              <button className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition">

                <FaFacebookF size={18} />

              </button>


              <button className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition">

                <FaLinkedinIn size={18} />

              </button>


              <button className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition">

                <FaGithub size={18} />

              </button>


              <button className="w-11 h-11 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-white/10 transition">

                <FaInstagram size={18} />

              </button>

            </div>

          </div>



          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">

              Quick Links

            </h3>


            <div className="mt-7 flex flex-col gap-4">

              {quickLinks.map((link) => (

                <Link

                  key={link.name}

                  href={link.href}

                  className="text-gray-400 hover:text-white transition"

                >

                  {link.name}

                </Link>

              ))}

            </div>

          </div>



          {/* Resources */}

          <div>

            <h3 className="text-xl font-semibold">

              Resources

            </h3>


            <div className="mt-7 flex flex-col gap-4">

              {resources.map((item) => (

                <p

                  key={item}

                  className="text-gray-400 hover:text-white transition cursor-pointer"

                >

                  {item}

                </p>

              ))}

            </div>

          </div>



          {/* Newsletter */}

          <div>

            <h3 className="text-xl font-semibold">

              Stay Updated

            </h3>


            <p className="text-gray-400 mt-6">

              Subscribe to receive the latest projects and platform updates.

            </p>


            <div className="mt-8 flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">

              <input

                type="email"

                placeholder="Enter your email"

                className="flex-1 bg-transparent px-6 py-4 outline-none"

              />

              <button className="mr-2 w-12 h-12 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center">

                <Send size={18} />

              </button>

            </div>

          </div>

        </div>



        {/* Bottom */}

        <div className="border-t border-white/10 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-gray-500">

            © 2026 SkillSwap. All rights reserved.

          </p>


          <div className="flex gap-8 text-gray-500">

            <p className="hover:text-white cursor-pointer transition">

              Privacy

            </p>

            <p className="hover:text-white cursor-pointer transition">

              Terms

            </p>

            <p className="hover:text-white cursor-pointer transition">

              Cookies

            </p>

          </div>

        </div>

      </Container>

    </footer>
  );
}