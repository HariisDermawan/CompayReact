function About() {
  return (
    <section className="bg-white text-slate-900 py-28 px-8">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-blue-500 uppercase text-sm">
            About Me
          </p>

          <h2 className="text-5xl font-black mt-4">
            Who Am I
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="p-8 border rounded-3xl">
            🎯 Focus
            <p className="text-slate-500 mt-2">
              UI/UX modern & responsive
            </p>
          </div>

          <div className="p-8 border rounded-3xl">
            ⚡ Tech
            <p className="text-slate-500 mt-2">
              React, Tailwind, Vite
            </p>
          </div>

          <div className="p-8 border rounded-3xl">
            🚀 Goal
            <p className="text-slate-500 mt-2">
              Frontend Developer Profesional
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;