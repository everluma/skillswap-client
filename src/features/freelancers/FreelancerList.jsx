"use client";

import { useState } from "react";

import Container from "@/components/shared/Container";
import FreelancerFilter from "@/components/freelancers/FreelancerFilter";

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

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5">

            Top Freelancers

          </div>


          <h1 className="mt-8 text-6xl font-bold">

            Browse

            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              {" "}Freelancers

            </span>

          </h1>


          <p className="mt-6 text-gray-400">

            Find highly skilled freelancers worldwide.

          </p>

        </div>



        <div className="mt-16">

          <FreelancerFilter

            search={search}
            setSearch={setSearch}

            category={category}
            setCategory={setCategory}

          />

        </div>



        <div className="grid md:grid-cols-3 gap-8 mt-16">

          {

            filteredFreelancers.map((item) => (

              <div

                key={item.id}

                className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8"

              >

                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-bold">

                  {item.name.charAt(0)}

                </div>


                <h2 className="text-2xl font-bold mt-6">

                  {item.name}

                </h2>


                <p className="text-violet-400 mt-2">

                  {item.role}

                </p>


                <div className="flex justify-between mt-6 text-gray-300">

                  <span>

                    ⭐ {item.rating}

                  </span>

                  <span>

                    {item.rate}

                  </span>

                </div>



                <div className="flex flex-wrap gap-3 mt-8">

                  {

                    item.skills.map((skill) => (

                      <span

                        key={skill}

                        className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"

                      >

                        {skill}

                      </span>

                    ))

                  }

                </div>

              </div>

            ))

          }

        </div>

      </Container>

    </section>

  );

}