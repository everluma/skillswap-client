export default function DashboardSettingsPage() {

  return (

    <div className="p-10">

      <h1 className="text-5xl font-bold">

        Settings

      </h1>

      <p className="mt-4 text-gray-400">

        Update your profile and account settings.

      </p>



      <div className="mt-12 rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Full Name */}

          <div>

            <label className="block mb-3 text-sm text-gray-300">

              Full Name

            </label>

            <input

              type="text"

              defaultValue="Sarah Johnson"

              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                outline-none
                focus:border-violet-500
              "

            />

          </div>



          {/* Email */}

          <div>

            <label className="block mb-3 text-sm text-gray-300">

              Email

            </label>

            <input

              type="email"

              defaultValue="sarah@gmail.com"

              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                outline-none
                focus:border-violet-500
              "

            />

          </div>

        </div>



        {/* Role */}

        <div className="mt-8">

          <label className="block mb-3 text-sm text-gray-300">

            Role

          </label>

          <input

            type="text"

            defaultValue="Frontend Developer"

            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              outline-none
              focus:border-violet-500
            "

          />

        </div>



        {/* Bio */}

        <div className="mt-8">

          <label className="block mb-3 text-sm text-gray-300">

            Bio

          </label>

          <textarea

            rows={5}

            defaultValue="Passionate frontend developer specializing in React and Next.js."

            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              outline-none
              resize-none
              focus:border-violet-500
            "

          />

        </div>



        {/* Skills */}

        <div className="mt-8">

          <label className="block mb-3 text-sm text-gray-300">

            Skills

          </label>

          <input

            type="text"

            defaultValue="React, Next.js, Tailwind CSS"

            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-5
              py-4
              outline-none
              focus:border-violet-500
            "

          />

        </div>



        {/* Button */}

        <button

          className="
            mt-10
            px-10
            py-4
            rounded-2xl
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

          Save Changes

        </button>

      </div>

    </div>

  );

}