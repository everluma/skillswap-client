"use client";

export default function FreelancerFilter({
  search,
  setSearch,
  category,
  setCategory,
}) {
  return (

    <div className="rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6">

      <div className="grid md:grid-cols-2 gap-5">

        <input
          type="text"
          placeholder="Search freelancer..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 outline-none"
        />



        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="bg-[#0f172a] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none"
        >

          <option>All Categories</option>

          <option>Frontend</option>

          <option>Backend</option>

          <option>UI/UX</option>

          <option>Full Stack</option>

        </select>

      </div>

    </div>

  );
}