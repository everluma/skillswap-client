const tasks = [
  {
    id: 1,
    title: "Build React Landing Page",
    status: "In Progress",
    budget: "$300",
  },

  {
    id: 2,
    title: "Design SaaS Dashboard",
    status: "Completed",
    budget: "$450",
  },

  {
    id: 3,
    title: "Node.js REST API",
    status: "Pending",
    budget: "$550",
  },
];

export default function RecentTasks() {
  return (

    <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

      <h2 className="text-3xl font-bold">

        Recent Tasks

      </h2>


      <div className="mt-8 space-y-5">

        {

          tasks.map((task) => (

            <div

              key={task.id}

              className="flex justify-between items-center border border-white/10 rounded-2xl px-6 py-5 hover:bg-white/5 transition"

            >

              <div>

                <h3 className="font-semibold text-lg">

                  {task.title}

                </h3>

                <p className="text-gray-400 mt-1">

                  {task.status}

                </p>

              </div>


              <h3 className="font-bold text-xl">

                {task.budget}

              </h3>

            </div>

          ))

        }

      </div>

    </div>

  );
}