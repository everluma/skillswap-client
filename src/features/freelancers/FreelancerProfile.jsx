import Container from "@/components/shared/Container";

const freelancer = {
  name: "Sarah Johnson",
  role: "Senior Frontend Developer",
  rating: "4.9",
  rate: "$35/hr",
  experience: "5+ Years",
  projects: "120+",
  location: "New York, USA",

  skills: [
    "React",
    "Next.js",
    "Tailwind",
    "JavaScript",
    "TypeScript",
    "Figma",
  ],

  bio: `
  Passionate Frontend Developer with 5+ years of experience building
  premium web applications. Specialized in React ecosystem,
  beautiful UI design and performance optimization.
  `,
};

export default function FreelancerProfile() {
  return (
    <section className="min-h-screen py-28">

      <Container>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">

          {/* Left Side */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">

            {/* Avatar */}

            <div className="w-28 h-28 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-4xl font-bold">

              {freelancer.name.charAt(0)}

            </div>


            <div className="mt-8">

              <div className="inline-flex px-4 py-1 rounded-full border border-green-500/20 bg-green-500/10 text-green-400 text-sm">

                ● Available for Work

              </div>


              <h1 className="text-5xl font-bold mt-5">

                {freelancer.name}

              </h1>


              <p className="text-violet-400 text-xl mt-3">

                {freelancer.role}

              </p>


              <div className="flex gap-8 mt-8 text-gray-300">

                <span>

                  ⭐ {freelancer.rating}

                </span>

                <span>

                  📍 {freelancer.location}

                </span>

              </div>

            </div>



            {/* About */}

            <div className="mt-14">

              <h2 className="text-3xl font-bold">

                About Me

              </h2>


              <p className="text-gray-400 leading-8 mt-6">

                {freelancer.bio}

              </p>

            </div>



            {/* Skills */}

            <div className="mt-14">

              <h2 className="text-3xl font-bold">

                Skills

              </h2>


              <div className="flex flex-wrap gap-4 mt-8">

                {

                  freelancer.skills.map((skill) => (

                    <span

                      key={skill}

                      className="px-6 py-3 rounded-full border border-white/10 bg-white/5"

                    >

                      {skill}

                    </span>

                  ))

                }

              </div>

            </div>

          </div>



          {/* Right Side */}

          <div className="rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 h-fit sticky top-28">

            <h2 className="text-3xl font-bold">

              Overview

            </h2>


            <div className="space-y-8 mt-10">

              <div>

                <p className="text-gray-400">

                  Hourly Rate

                </p>

                <h3 className="text-3xl font-bold mt-2">

                  {freelancer.rate}

                </h3>

              </div>


              <div>

                <p className="text-gray-400">

                  Experience

                </p>

                <h3 className="text-3xl font-bold mt-2">

                  {freelancer.experience}

                </h3>

              </div>



              <div>

                <p className="text-gray-400">

                  Completed Projects

                </p>

                <h3 className="text-3xl font-bold mt-2">

                  {freelancer.projects}

                </h3>

              </div>

            </div>



            <button

              className="w-full mt-12 py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-[1.02] transition"

            >

              Hire Now

            </button>



            <button

              className="w-full mt-5 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition"

            >

              Send Message

            </button>

          </div>

        </div>

      </Container>

    </section>
  );
}