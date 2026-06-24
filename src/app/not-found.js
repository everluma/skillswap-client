import Link from "next/link";

export default function NotFound() {

  return (

    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-violet-600/15 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/15 blur-[150px]" />


      <div className="relative z-10 text-center max-w-2xl px-6">

        <div className="text-[150px] md:text-[220px] font-extrabold leading-none">

          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 text-transparent bg-clip-text">

            404

          </span>

        </div>


        <h1 className="text-5xl md:text-6xl font-bold mt-2">

          Page Not Found

        </h1>


        <p className="text-gray-400 mt-6 text-lg">

          The page you are looking for doesn't exist or has been moved.

        </p>



        <div className="mt-12">

          <Link href="/">

            <button

              className="
                px-10
                py-4
                rounded-full
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                font-semibold
                hover:scale-105
                transition
                duration-300
                cursor-pointer
              "

            >

              Back To Home

            </button>

          </Link>

        </div>

      </div>

    </section>

  );

}