export default function EarningsChart() {

  const data = [30, 55, 40, 80, 65, 95, 75];

  return (

    <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold">

            Earnings Overview

          </h2>

          <p className="text-gray-400 mt-2">

            Last 7 months performance

          </p>

        </div>

        <h3 className="text-3xl font-bold text-violet-400">

          $12.4K

        </h3>

      </div>


      <div className="mt-12 flex items-end justify-between h-72 gap-5">

        {

          data.map((item, index) => (

            <div
              key={index}
              className="flex-1 rounded-t-3xl bg-gradient-to-t from-violet-600 to-cyan-500 hover:scale-y-110 transition duration-300"
              style={{
                height: `${item}%`,
              }}
            />

          ))

        }

      </div>

    </div>

  );
}