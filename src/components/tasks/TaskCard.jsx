import { ArrowRight } from "lucide-react";

export default function TaskCard({ task }) {
  return (

    <div className="group rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 hover:-translate-y-2 transition duration-300">

      <div className="flex justify-between items-center">

        <span className="px-4 py-2 rounded-full bg-violet-500/20 text-violet-300 text-sm">

          {task.category}

        </span>


        <span className="text-cyan-400 font-semibold">

          {task.budget}

        </span>

      </div>


      <h2 className="text-2xl font-bold mt-7">

        {task.title}

      </h2>


      <p className="text-gray-400 mt-5">

        Client: {task.client}

      </p>


      <p className="text-gray-500 mt-2">

        {task.deadline}

      </p>


      <div className="flex flex-wrap gap-3 mt-8">

        {task.skills.map((skill) => (

          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm"
          >

            {skill}

          </span>

        ))}

      </div>



      <button className="mt-8 flex items-center gap-2 text-cyan-400">

        View Details

        <ArrowRight size={18} />

      </button>

    </div>

  );
}