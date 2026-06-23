const proposals = [

  {
    id: 1,
    title: "Frontend Developer",
    company: "TechNova",
    budget: "$500",
    status: "Accepted",
  },

  {
    id: 2,
    title: "React Dashboard Project",
    company: "Softify",
    budget: "$350",
    status: "Pending",
  },

  {
    id: 3,
    title: "Next.js Landing Page",
    company: "CreativeHub",
    budget: "$400",
    status: "Rejected",
  },

];


const getStatusStyle = (status) => {

  if (status === "Accepted") {

    return "bg-green-500/15 text-green-400 border-green-500/20";

  }

  if (status === "Pending") {

    return "bg-yellow-500/15 text-yellow-400 border-yellow-500/20";

  }

  return "bg-red-500/15 text-red-400 border-red-500/20";

};



export default function DashboardProposalsPage() {

  return (

    <div className="p-10">

      <h1 className="text-5xl font-bold">

        Proposals

      </h1>


      <p className="mt-4 text-gray-400">

        Track all your submitted proposals.

      </p>



      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

        {

          proposals.map((item) => (

            <div

              key={item.id}

              className="
                rounded-[32px]
                border
                border-white/10
                bg-white/5
                backdrop-blur-2xl
                p-8
                hover:-translate-y-2
                transition
                duration-300
              "

            >

              <h2 className="text-2xl font-bold">

                {item.title}

              </h2>


              <p className="text-gray-400 mt-3">

                {item.company}

              </p>


              <h3 className="text-3xl font-bold mt-8">

                {item.budget}

              </h3>


              <span

                className={`

                  inline-block
                  mt-6
                  px-4
                  py-2
                  rounded-full
                  border
                  text-sm

                  ${getStatusStyle(item.status)}

                `}

              >

                {item.status}

              </span>


              <button

                className="
                  mt-8
                  w-full
                  py-4
                  rounded-2xl
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  font-semibold
                  hover:scale-[1.02]
                  transition
                "

              >

                View Details

              </button>

            </div>

          ))

        }

      </div>

    </div>

  );

}