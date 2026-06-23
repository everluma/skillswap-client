"use client";

import { useMemo, useState } from "react";

import Container from "@/components/shared/Container";
import TaskFilter from "@/components/tasks/TaskFilter";
import TaskCard from "@/components/tasks/TaskCard";

const tasks = [
  {
    id: 1,
    title: "Build Modern React Landing Page",
    budget: "$300",
    deadline: "5 Days Left",
    category: "Frontend",
    client: "Sarah Johnson",
    skills: ["React", "Tailwind", "Next.js"],
  },

  {
    id: 2,
    title: "Design SaaS Dashboard UI",
    budget: "$450",
    deadline: "8 Days Left",
    category: "UI/UX",
    client: "Michael Brown",
    skills: ["Figma", "UI", "Dashboard"],
  },

  {
    id: 3,
    title: "Create Node.js REST API",
    budget: "$550",
    deadline: "4 Days Left",
    category: "Backend",
    client: "David Wilson",
    skills: ["Node", "Express", "MongoDB"],
  },

  {
    id: 4,
    title: "E-commerce Website",
    budget: "$900",
    deadline: "12 Days Left",
    category: "Full Stack",
    client: "Emma Davis",
    skills: ["React", "Node", "MongoDB"],
  },
];

export default function TaskList() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [budget, setBudget] = useState("Budget");


  const filteredTasks = useMemo(() => {

    return tasks.filter((task) => {

      const matchSearch =
        task.title.toLowerCase().includes(search.toLowerCase());


      const matchCategory =
        category === "All Categories"
          ? true
          : task.category === category;


      const amount = Number(
        task.budget.replace("$", "")
      );


      const matchBudget =

        budget === "Budget"

          ? true

          : budget === "$100 - $500"

            ? amount >= 100 && amount <= 500

            : budget === "$500 - $1000"

              ? amount > 500 && amount <= 1000

              : amount > 1000;


      return (
        matchSearch &&
        matchCategory &&
        matchBudget
      );

    });

  }, [search, category, budget]);



  return (

    <section className="min-h-screen py-28">

      <Container>

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <div className="inline-flex px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm text-gray-300">

            Explore Opportunities

          </div>


          <h1 className="mt-8 text-6xl font-bold">

            Browse

            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">

              {" "}Tasks

            </span>

          </h1>


          <p className="mt-6 text-gray-400 text-lg">

            Discover premium freelance projects from clients worldwide.

          </p>

        </div>



        {/* Filter */}

        <div className="mt-16">

          <TaskFilter

            search={search}
            setSearch={setSearch}

            category={category}
            setCategory={setCategory}

            budget={budget}
            setBudget={setBudget}

          />

        </div>



        {/* Cards */}

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          {

            filteredTasks.map((task) => (

              <TaskCard

                key={task.id}

                task={task}

              />

            ))

          }

        </div>



        {

          filteredTasks.length === 0 && (

            <div className="text-center mt-20">

              <h2 className="text-3xl font-bold">

                No Tasks Found

              </h2>


              <p className="text-gray-400 mt-4">

                Try changing filters.

              </p>

            </div>

          )

        }

      </Container>

    </section>

  );

}