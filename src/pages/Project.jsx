import { useState } from "react";

function Project() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      title: "Corporate Website",
      description:
        "Website company profile modern dengan desain profesional dan responsive.",
    },
    {
      title: "Dashboard UI",
      description:
        "Admin dashboard modern dengan data visualization dan clean UI.",
    },
    {
      title: "Mobile Application",
      description: "UI mobile app modern untuk kebutuhan bisnis digital.",
    },
  ];

  return (
    <section className="bg-white text-slate-900 py-28 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-blue-500 uppercase text-sm">Portfolio</p>

          <h2 className="text-5xl font-black mt-4">My Projects</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelected(item)}
              className="
              cursor-pointer
              bg-white
              border border-slate-200
              rounded-3xl
              overflow-hidden
              hover:-translate-y-2
              hover:shadow-lg
              transition
              "
            >
              <div
                className="
              h-44
              from-blue-100
              to-slate-100
              "
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>

                <p className="text-slate-500 text-sm">
                  Klik untuk lihat detail project
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="
        fixed inset-0
        bg-black/50
        backdrop-blur-sm
        flex items-center justify-center
        z-50
        px-4
        "
        >
          <div
            className="
          bg-white
          w-full max-w-lg
          rounded-3xl
          p-8
          relative
          shadow-2xl
          "
          >
            {/* CLOSE */}
            <button
              onClick={() => setSelected(null)}
              className="
              absolute top-4 right-4
              text-slate-500
              hover:text-black
              text-xl
              "
            >
              ✕
            </button>

            <div
              className="
            h-48
            from-blue-100
            to-slate-100
            rounded-2xl
            mb-6
            "
            />
            <h3 className="text-2xl font-black mb-3">{selected.title}</h3>

            <p className="text-slate-500 leading-7">{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
