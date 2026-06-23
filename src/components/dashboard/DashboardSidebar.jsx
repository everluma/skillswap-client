import Link from "next/link";
import { LogOut } from "lucide-react";

const menus = [

  {
    name: "Overview",
    href: "/dashboard",
  },

  {
    name: "My Tasks",
    href: "/dashboard/tasks",
  },

  {
    name: "Proposals",
    href: "/dashboard/proposals",
  },

  {
    name: "Payments",
    href: "/dashboard/payments",
  },

  {
    name: "Settings",
    href: "/dashboard/settings",
  },

];

export default function DashboardSidebar() {

  return (

    <aside className="w-[280px] min-h-screen flex flex-col justify-between border-r border-white/10 bg-white/5 backdrop-blur-2xl p-8">

      <div>

        <h1 className="text-3xl font-bold">

          Skill

          <span className="text-violet-500">

            Swap

          </span>

        </h1>


        <p className="text-gray-400 mt-2 text-sm">

          Freelance Marketplace

        </p>



        <div className="mt-14 flex flex-col gap-4">

          {

            menus.map((item) => (

              <Link

                key={item.name}

                href={item.href}

                className="
                  px-5
                  py-4
                  rounded-2xl
                  text-gray-300
                  hover:bg-white/10
                  hover:text-white
                  transition
                  duration-300
                "

              >

                {item.name}

              </Link>

            ))

          }

        </div>

      </div>



      {/* Logout */}

      <button

        className="
          w-full
          flex
          items-center
          justify-center
          gap-3
          py-4
          rounded-2xl
          border
          border-red-500/20
          bg-red-500/10
          text-red-400
          hover:bg-red-500/20
          transition
          duration-300
          font-semibold
          cursor-pointer
        "

      >

        <LogOut size={18} />

        Logout

      </button>

    </aside>

  );

}