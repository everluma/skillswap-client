export default function StatsCard({

  title,

  value,

}) {

  return (

    <div className="rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-8">

      <p className="text-gray-400">

        {title}

      </p>


      <h2 className="text-5xl font-bold mt-6">

        {value}

      </h2>

    </div>

  );

}