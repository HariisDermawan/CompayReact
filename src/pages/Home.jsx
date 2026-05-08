import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowText(true);
    }, 1000);
  }, []);
  const services = [
    {
      title: "Web Development",
      description: "Website modern dan responsive dengan performa tinggi.",
    },

    {
      title: "UI/UX Design",
      description:
        "Desain interface modern dengan pengalaman pengguna terbaik.",
    },

    {
      title: "Mobile App",
      description: "Aplikasi mobile Android dan iOS dengan teknologi terbaru.",
    },
  ];
  const projects = [
    {
      title: "Corporate Website",
      description: "Website company profile modern dengan desain profesional.",
    },

    {
      title: "Dashboard UI",
      description: "Admin dashboard modern dengan clean interface.",
    },

    {
      title: "Mobile Application",
      description: "Aplikasi mobile modern untuk kebutuhan bisnis.",
    },
  ];

  return (
    <>
      <section className=" min-h-screen bg-slate-950 text-white relative overflow-hidden ">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 blur-3xl rounded-full "></div>
        <div className=" max-w-7xl mx-auto px-8 py-40 grid lg:grid-cols-2 gap-16 items-center relative z-10 ">
          <div>
            {showText && (
              <p className=" text-blue-400 mb-6 uppercase tracking-[5px] animate-pulse text-sm ">
                Welcome To DevCount
              </p>
            )}

            <h1
              className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
            >
              We Build <br />
              <span className="text-blue-500">Modern Digital</span>
              <br />
              Experiences
            </h1>

            <p
              className="
            text-slate-400
            mt-8
            max-w-2xl
            leading-8
            text-lg
            "
            >
              Kami membantu bisnis berkembang melalui website modern, UI
              profesional, dan teknologi terbaru dengan performa tinggi.
            </p>

            {/* BUTTON */}
            <div className="flex flex-wrap gap-4 mt-10">
              <Button
                title="Get Started"
                onClick={() => navigate("/contact")}
              />

              <button
                onClick={() => navigate("/project")}
                className="
                border
                border-slate-700
                px-6
                py-3
                rounded-xl
                hover:bg-slate-800
                transition
                duration-300
                cursor-pointer
                "
              >
                Our Project
              </button>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="relative">
            {/* MAIN GLASS CARD */}
            <div
              className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-8
            shadow-2xl
            "
            >
              <div className="space-y-6">
                <div className="bg-slate-800 h-16 rounded-2xl"></div>

                <div className="bg-slate-800 h-52 rounded-2xl"></div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-800 h-24 rounded-2xl"></div>

                  <div className="bg-slate-800 h-24 rounded-2xl"></div>
                </div>
              </div>
            </div>

            {/* FLOATING CARD */}
            <div
              className="
            absolute
            -bottom-10
            -left-10
            bg-blue-500
            px-6
            py-4
            rounded-2xl
            shadow-2xl
            "
            >
              <h3 className="text-3xl font-bold">250+</h3>

              <p className="text-blue-100">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-slate-900 text-white py-28 px-8">
        <div
          className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-2
        gap-20
        items-center
        "
        >
          {/* LEFT */}
          <div>
            <p className="text-blue-400 mb-4 uppercase tracking-[4px]">
              About Us
            </p>

            <h2
              className="
            text-4xl
            md:text-6xl
            font-black
            leading-tight
            mb-8
            "
            >
              We Create <br />
              Digital Innovation
            </h2>

            <p
              className="
            text-slate-400
            leading-8
            max-w-xl
            text-lg
            "
            >
              Kami membantu bisnis berkembang dengan website modern, desain
              profesional, dan teknologi terbaru untuk meningkatkan branding
              serta performa digital perusahaan.
            </p>
          </div>

          {/* RIGHT */}
          <div className="grid gap-6">
            <div
              className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            p-8
            rounded-3xl
            hover:border-blue-500/40
            transition
            duration-300
            "
            >
              <h3 className="text-3xl font-bold mb-4">5+ Years Experience</h3>

              <p className="text-slate-400 leading-7">
                Pengalaman membuat website modern dan scalable untuk berbagai
                bisnis.
              </p>
            </div>

            <div
              className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            p-8
            rounded-3xl
            hover:border-blue-500/40
            transition
            duration-300
            "
            >
              <h3 className="text-3xl font-bold mb-4">Professional Team</h3>

              <p className="text-slate-400 leading-7">
                Tim kreatif dan developer profesional dengan teknologi modern.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="bg-slate-950 text-white py-28 px-8">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-20">
            <p className="text-blue-400 mb-4 uppercase tracking-[4px]">
              Our Services
            </p>

            <h2
              className="
            text-4xl
            md:text-6xl
            font-black
            "
            >
              What We Provide
            </h2>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  hover:-translate-y-3
                  hover:border-blue-500/40
                  transition
                  duration-300
                  "
              >
                <div
                  className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-500/20
                  flex
                  items-center
                  justify-center
                  mb-6
                  "
                >
                  <div
                    className="
                    w-8
                    h-8
                    rounded-full
                    bg-blue-500
                    "
                  ></div>
                </div>

                <h3 className="text-3xl font-bold mb-4">{service.title}</h3>

                <p className="text-slate-400 leading-8">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT SECTION */}
      <section className="bg-slate-900 text-white py-28 px-8">
        <div className="max-w-7xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-20">
            <p className="text-blue-400 mb-4 uppercase tracking-[4px]">
              Featured Projects
            </p>

            <h2
              className="
            text-4xl
            md:text-6xl
            font-black
            "
            >
              Our Latest Work
            </h2>
          </div>

          {/* PROJECT CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="
                  bg-white/5
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  overflow-hidden
                  hover:-translate-y-3
                  hover:border-blue-500/40
                  transition
                  duration-300
                  "
              >
                {/* IMAGE */}
                <div
                  className="
                  h-60
                  bg-gradient-to-br
                  from-blue-500/20
                  to-cyan-500/20
                  "
                ></div>

                {/* CONTENT */}
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-4">{project.title}</h3>

                  <p className="text-slate-400 leading-8">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        className="
      bg-slate-950
      text-white
      py-32
      px-8
      relative
      overflow-hidden
      "
      >
        {/* GLOW */}
        <div
          className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-blue-500/10
        blur-3xl
        rounded-full
        "
        ></div>

        <div
          className="
        max-w-5xl
        mx-auto
        text-center
        relative
        z-10
        "
        >
          <p
            className="
          text-blue-400
          mb-4
          uppercase
          tracking-[4px]
          "
          >
            Contact Us
          </p>

          <h2
            className="
          text-5xl
          md:text-7xl
          font-black
          leading-tight
          mb-8
          "
          >
            Ready To Build <br />
            Your Next Project?
          </h2>

          <p
            className="
          text-slate-400
          max-w-2xl
          mx-auto
          leading-8
          text-lg
          "
          >
            Kami siap membantu bisnis Anda berkembang dengan website modern dan
            teknologi terbaru.
          </p>

          <div className="mt-12">
            <Button title="Let's Talk" onClick={() => navigate("/contact")} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
