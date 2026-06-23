"use client";

import { useState } from "react";

import Container from "@/components/shared/Container";
import FreelancerFilter from "@/components/freelancers/FreelancerFilter";
import FreelancerCard from "@/components/freelancers/FreelancerCard";

const freelancers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer",
    category: "Frontend",
    rate: "$35/hr",
    rating: "4.9",
    skills: ["React", "Next.js", "Tailwind"],
  },

  {
    id: 2,
    name: "David Wilson",
    role: "Backend Developer",
    category: "Backend",
    rate: "$40/hr",
    rating: "4.8",
    skills: ["Node.js", "Express", "MongoDB"],
  },

  {
    id: 3,
    name: "Emma Davis",
    role: "UI/UX Designer",
    category: "UI/UX",
    rate: "$28/hr",
    rating: "5.0",
    skills: ["Figma", "UI", "UX"],
  },
];

export default function FreelancerList() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");


  const filteredFreelancers = freelancers.filter((item) => {

    const matchSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());


    const matchCategory =

      category === "All Categories"

        ? true

        : item.category === category;


    return matchSearch && matchCategory;

  });



  return (

    <section className="min-h-screen py-28">

      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-6 py-2 rounded-full border border-violet-500/20 bg-violet-500/10 text-violet-300 backdrop-blur-xl">

            ✨ Top Freelancers Worldwide

          </div>


          <h1 className="mt-8 text-6xl font-bold">

            Browse

            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              {" "}Freelancers

            </span>

          </h1>


          <p className="mt-6 text-gray-400 text-lg">

            Find highly skilled freelancers worldwide.

          </p>

        </div>



        {/* Filter */}

        <div className="mt-16">

          <FreelancerFilter

            search={search}
            setSearch={setSearch}

            category={category}
            setCategory={setCategory}

          />

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {

            filteredFreelancers.map((item) => (

              <FreelancerCard

                key={item.id}

                freelancer={item}

              />

            ))

          }

        </div>



        {

          filteredFreelancers.length === 0 && (

            <div className="text-center mt-20">

              <h2 className="text-3xl font-bold">

                No Freelancer Found

              </h2>


              <p className="text-gray-400 mt-4">

                Try another search or category.

              </p>

            </div>

          )

        }

      </Container>

    </section>

  );

}