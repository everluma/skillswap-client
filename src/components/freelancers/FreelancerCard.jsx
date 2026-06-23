import Link from "next/link";

export default function FreelancerCard({ freelancer }) {

  return (

    <div className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-2 transition duration-500">

      {/* Glow */}

      <div className="absolute -top-20 -right-20 w-52 h-52 bg-violet-600/10 blur-[100px]" />


      {/* Avatar */}

      <div className="relative w-20 h-20 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-2xl font-bold">

        {freelancer.name.charAt(0)}

      </div>


      {/* Status */}

      <div className="mt-5 inline-flex px-4 py-1 rounded-full text-xs bg-green-500/15 text-green-400 border border-green-500/20">

        Available

      </div>


      <h2 className="mt-5 text-2xl font-bold">

        {freelancer.name}

      </h2>


      <p className="text-violet-400 mt-2">

        {freelancer.role}

      </p>


      <div className="flex justify-between mt-7 text-gray-300">

        <span>

          ⭐ {freelancer.rating}

        </span>

        <span>

          {freelancer.rate}

        </span>

      </div>



      <div className="flex flex-wrap gap-3 mt-8">

        {

          freelancer.skills.map((skill) => (

            <span

              key={skill}

              className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm"

            >

              {skill}

            </span>

          ))

        }

      </div>



      <Link href={`/freelancers/${freelancer.id}`}>

        <button

          className="mt-8 w-full py-4 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 font-semibold hover:scale-[1.02] transition duration-300 cursor-pointer"

        >

          View Profile

        </button>

      </Link>

    </div>

  );

}