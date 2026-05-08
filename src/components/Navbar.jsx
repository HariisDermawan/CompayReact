import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {

  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;

  const [isOpen, setIsOpen] = useState(false);

  const menus = [

    {
      name: "Home",
      path: "/",
    },

    {
      name: "About",
      path: "/about",
    },

    {
      name: "Project",
      path: "/project",
    },

    {
      name: "Contact",
      path: "/contact",
    },

  ];

  return (

    <nav className="
    fixed
    top-0
    left-0
    w-full
    z-50
    bg-slate-950/70
    backdrop-blur-xl
    border-b
    border-white/10
    ">

      <div className="
      max-w-7xl
      mx-auto
      px-6
      py-4
      flex
      justify-between
      items-center
      ">

        <div
          onClick={() => navigate("/")}
          className="
          flex
          items-center
          gap-3
          cursor-pointer
          "
        >

          <div className="
          w-10
          h-10
          rounded-xl
          bg-gradient-to-br
          from-blue-500
          to-cyan-400
          flex
          items-center
          justify-center
          text-white
          font-bold
          shadow-lg
          shadow-blue-500/30
          ">

            D

          </div>

          <div>

            <h1 className="
            text-2xl
            font-black
            text-white
            ">

              DevCount

            </h1>

            <p className="
            text-xs
            text-slate-400
            -mt-1
            ">

              Digital Agency

            </p>

          </div>

        </div>

        <ul className="
        hidden
        lg:flex
        items-center
        gap-3
        bg-white/5
        border
        border-white/10
        backdrop-blur-xl
        px-3
        py-2
        rounded-2xl
        ">

          {
            menus.map((menu, index) => (

              <li key={index}>

                <Link
                  to={menu.path}
                  className={`
                  px-5
                  py-2
                  rounded-xl
                  transition
                  duration-300
                  font-medium

                  ${currentPath === menu.path
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "text-slate-300 hover:bg-white/10 hover:text-white"}
                  `}
                >

                  {menu.name}

                </Link>

              </li>

            ))
          }

        </ul>

        <button
          onClick={() => navigate("/contact")}
          className="
          hidden
          lg:block
          bg-blue-500
          hover:bg-blue-600
          px-6
          py-3
          rounded-xl
          text-white
          font-semibold
          transition
          duration-300
          shadow-lg
          shadow-blue-500/30
          "
        >

          Start Project

        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
          lg:hidden
          text-white
          text-3xl
          "
        >

          {
            isOpen ? "✕" : "☰"
          }

        </button>

      </div>

      {
        isOpen && (

          <div className="
          lg:hidden
          bg-slate-950/95
          backdrop-blur-xl
          border-t
          border-white/10
          px-6
          py-8
          ">

            <ul className="
            flex
            flex-col
            gap-4
            ">

              {
                menus.map((menu, index) => (

                  <li key={index}>

                    <Link
                      to={menu.path}
                      onClick={() => setIsOpen(false)}
                      className={`
                      block
                      px-5
                      py-4
                      rounded-2xl
                      transition
                      duration-300
                      font-medium
                      text-lg

                      ${currentPath === menu.path
                        ? "bg-blue-500 text-white"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"}
                      `}
                    >

                      {menu.name}

                    </Link>

                  </li>

                ))
              }

            </ul>

            <button
              onClick={() => {
                navigate("/contact");
                setIsOpen(false);
              }}
              className="
              w-full
              mt-6
              bg-blue-500
              hover:bg-blue-600
              py-4
              rounded-2xl
              text-white
              font-semibold
              transition
              duration-300
              shadow-lg
              shadow-blue-500/30
              "
            >

              Start Project

            </button>

          </div>

        )
      }

    </nav>

  );
}

export default Navbar;