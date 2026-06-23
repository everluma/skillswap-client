import Link from "next/link";

const menus = [

  "Overview",

  "My Tasks",

  "Proposals",

  "Payments",

  "Settings",

];

export default function DashboardSidebar() {

  return (

    <aside className="w-[280px] border-r border-white/10 bg-white/5 backdrop-blur-2xl p-8">

      <h1 className="text-3xl font-bold">

        Skill

        <span className="text-violet-500">

          Swap

        </span>

      </h1>



      <div className="mt-14 flex flex-col gap-4">

        {

          menus.map((item) => (

            <Link

              key={item}

              href="#"

              className="px-5 py-4 rounded-2xl text-gray-300 hover:bg-white/10 hover:text-white transition"

            >

              {item}

            </Link>

          ))

        }

      </div>

    </aside>

  );

}