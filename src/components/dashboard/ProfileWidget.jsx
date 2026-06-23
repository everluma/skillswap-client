export default function ProfileWidget() {

  return (

    <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

      <div className="flex flex-col items-center">

        <div className="w-28 h-28 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 flex items-center justify-center text-4xl font-bold">

          S

        </div>


        <h2 className="mt-6 text-2xl font-bold">

          Sarah Johnson

        </h2>


        <p className="text-violet-400 mt-2">

          Frontend Developer

        </p>


        <div className="flex gap-10 mt-8">

          <div className="text-center">

            <h3 className="text-2xl font-bold">

              48

            </h3>

            <p className="text-gray-400 text-sm">

              Projects

            </p>

          </div>


          <div className="text-center">

            <h3 className="text-2xl font-bold">

              4.9

            </h3>

            <p className="text-gray-400 text-sm">

              Rating

            </p>

          </div>


          <div className="text-center">

            <h3 className="text-2xl font-bold">

              $12K

            </h3>

            <p className="text-gray-400 text-sm">

              Earnings

            </p>

          </div>

        </div>


        <button

          className="
            mt-10
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

          Edit Profile

        </button>

      </div>

    </div>

  );

}