const activities = [

  {
    id: 1,
    title: "You submitted a proposal",
    time: "2 hours ago",
  },

  {
    id: 2,
    title: "Payment received",
    time: "Yesterday",
  },

  {
    id: 3,
    title: "Task completed successfully",
    time: "2 days ago",
  },

  {
    id: 4,
    title: "New client message",
    time: "3 days ago",
  },

];

export default function ActivityTimeline() {

  return (

    <div className="mt-10 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

      <h2 className="text-3xl font-bold">

        Recent Activity

      </h2>


      <div className="mt-10 space-y-8">

        {

          activities.map((item) => (

            <div

              key={item.id}

              className="flex gap-5"

            >

              <div className="flex flex-col items-center">

                <div className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" />

                <div className="w-[2px] h-16 bg-white/10 mt-2" />

              </div>


              <div>

                <h3 className="font-semibold text-lg">

                  {item.title}

                </h3>

                <p className="text-gray-400 mt-2">

                  {item.time}

                </p>

              </div>

            </div>

          ))

        }

      </div>

    </div>

  );

}