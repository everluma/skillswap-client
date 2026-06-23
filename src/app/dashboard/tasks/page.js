const tasks = [

  {
    id: 1,
    title: "Build React Landing Page",
    status: "In Progress",
    budget: "$300",
    deadline: "5 Days Left",
  },

  {
    id: 2,
    title: "Create Node REST API",
    status: "Completed",
    budget: "$500",
    deadline: "Delivered",
  },

  {
    id: 3,
    title: "Design SaaS Dashboard",
    status: "Pending",
    budget: "$450",
    deadline: "8 Days Left",
  },

];


const getStatusStyle = (status) => {

  if (status === "Completed") {

    return "bg-green-500/15 text-green-400 border-green-500/20";

  }

  if (status === "In Progress") {

    return "bg-yellow-500/15 text-yellow-400 border-yellow-500/20";

  }

  return "bg-red-500/15 text-red-400 border-red-500/20";

};



export default function DashboardTasksPage() {

  return (

    <div className="p-10">

      <div>

        <h1 className="text-5xl font-bold">

          My Tasks

        </h1>


        <p className="text-gray-400 mt-4">

          Manage all your projects from one place.

        </p>

      </div>



      <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10 text-left">

              <th className="px-8 py-6">

                Task

              </th>

              <th>

                Status

              </th>

              <th>

                Budget

              </th>

              <th>

                Deadline

              </th>

              <th>

                Action

              </th>

            </tr>

          </thead>



          <tbody>

            {

              tasks.map((task) => (

                <tr

                  key={task.id}

                  className="border-b border-white/5 hover:bg-white/5 transition"

                >

                  <td className="px-8 py-7 font-semibold">

                    {task.title}

                  </td>


                  <td>

                    <span

                      className={`px-4 py-2 rounded-full border text-sm ${getStatusStyle(task.status)}`}

                    >

                      {task.status}

                    </span>

                  </td>


                  <td className="font-semibold">

                    {task.budget}

                  </td>


                  <td className="text-gray-400">

                    {task.deadline}

                  </td>


                  <td>

                    <button

                      className="
                        px-5
                        py-2
                        rounded-xl
                        bg-gradient-to-r
                        from-violet-600
                        to-cyan-500
                        hover:scale-105
                        transition
                      "

                    >

                      View

                    </button>

                  </td>

                </tr>

              ))

            }

          </tbody>

        </table>

      </div>

    </div>

  );

}