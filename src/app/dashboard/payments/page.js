const payments = [

  {
    id: 1,
    client: "TechNova",
    amount: "$500",
    date: "Jun 20, 2026",
    status: "Paid",
  },

  {
    id: 2,
    client: "Softify",
    amount: "$350",
    date: "Jun 15, 2026",
    status: "Pending",
  },

  {
    id: 3,
    client: "CreativeHub",
    amount: "$400",
    date: "Jun 10, 2026",
    status: "Paid",
  },

];


export default function DashboardPaymentsPage() {

  return (

    <div className="p-10">

      <h1 className="text-5xl font-bold">

        Payments

      </h1>

      <p className="mt-4 text-gray-400">

        Track your earnings and transactions.

      </p>



      {/* Stats */}

      <div className="grid md:grid-cols-3 gap-8 mt-12">

        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

          <p className="text-gray-400">

            Total Earnings

          </p>

          <h2 className="text-5xl font-bold mt-6">

            $12,450

          </h2>

        </div>



        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

          <p className="text-gray-400">

            Pending

          </p>

          <h2 className="text-5xl font-bold mt-6">

            $850

          </h2>

        </div>



        <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

          <p className="text-gray-400">

            Withdrawn

          </p>

          <h2 className="text-5xl font-bold mt-6">

            $11,600

          </h2>

        </div>

      </div>



      {/* Payment History */}

      <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left px-8 py-6">

                Client

              </th>

              <th className="text-left">

                Amount

              </th>

              <th className="text-left">

                Date

              </th>

              <th className="text-left">

                Status

              </th>

            </tr>

          </thead>



          <tbody>

            {

              payments.map((item) => (

                <tr

                  key={item.id}

                  className="border-b border-white/5 hover:bg-white/5 transition"

                >

                  <td className="px-8 py-6 font-semibold">

                    {item.client}

                  </td>


                  <td>

                    {item.amount}

                  </td>


                  <td className="text-gray-400">

                    {item.date}

                  </td>


                  <td>

                    <span

                      className={`

                        px-4

                        py-2

                        rounded-full

                        text-sm

                        border

                        ${

                          item.status === "Paid"

                            ? "bg-green-500/15 text-green-400 border-green-500/20"

                            : "bg-yellow-500/15 text-yellow-400 border-yellow-500/20"

                        }

                      `}

                    >

                      {item.status}

                    </span>

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