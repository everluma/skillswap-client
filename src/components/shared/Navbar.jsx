"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Container from "./Container";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">

      <div className="absolute inset-0 backdrop-blur-2xl bg-[#030712]/70 border-b border-white/10" />

      <Container>

        <div className="relative h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Logo />

            <span className="hidden lg:block text-xs text-gray-400 border border-white/10 rounded-full px-3 py-1">

              Freelance Marketplace

            </span>

          </div>

          <nav className="hidden md:flex items-center gap-10">

            <Link
              href="/"
              className="text-gray-300 hover:text-white transition"
            >
              Home
            </Link>

            <Link
              href="/browse-tasks"
              className="text-gray-300 hover:text-white transition"
            >
              Browse Tasks
            </Link>

            <Link
              href="/browse-freelancers"
              className="text-gray-300 hover:text-white transition"
            >
              Freelancers
            </Link>

          </nav>

          <div className="flex items-center gap-4">

            <Button
              variant="ghost"
              className="rounded-full text-white hover:text-white hover:bg-white/10"
            >
              Login
            </Button>

            <Button className="rounded-full px-7 bg-gradient-to-r from-violet-600 to-cyan-500 hover:scale-105 transition duration-300">

              Get Started

            </Button>

          </div>

        </div>

      </Container>

    </header>
  );
}