import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/project", label: "Project" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="
        fixed top-0 w-full z-50
        bg-white
        border-b border-gray-100
        rounded-b-3xl
        shadow-sm
      ">
        <div className="w-full px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 lg:h-20">
            
            {/* LOGO - KIRI */}
            <Link to="/" className="flex items-center gap-2 group">
              <img 
                src="/logo.png" 
                alt="Logo"
                className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
              />
              <img 
                src="/logo-text.png" 
                alt="DevCount"
                className="h-5 lg:h-6 object-contain"
              />
            </Link>

            {/* DESKTOP MENU - KANAN */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    px-5 py-2 rounded-full text-sm font-medium
                    transition-all duration-200
                    ${location.pathname === item.path 
                      ? "bg-gray-900 text-white" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* BUTTON HIRE ME - KANAN */}
              <button
                onClick={() => navigate("/contact")}
                className="ml-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105"
              >
                Hire Me
              </button>
            </div>

            {/* MOBILE TOGGLE - KANAN */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden relative w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200"
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="flex flex-col gap-1.5 w-4">
                  <span className={`w-4 h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`}></span>
                  <span className={`w-4 h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${open ? 'opacity-0' : ''}`}></span>
                  <span className={`w-4 h-0.5 bg-gray-900 rounded-full transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        <div className={`
          lg:hidden overflow-hidden transition-all duration-300 ease-in-out
          ${open ? 'max-h-[400px]' : 'max-h-0'}
        `}>
          <div className="bg-white border-t border-gray-100 px-8 py-6">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`
                    px-4 py-3 rounded-xl text-base font-medium
                    transition-all duration-200
                    ${location.pathname === item.path 
                      ? "bg-gray-900 text-white" 
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Mobile Hire Me Button */}
              <button
                onClick={() => {
                  navigate("/contact");
                  setOpen(false);
                }}
                className="mt-4 w-full bg-gray-900 hover:bg-gray-800 text-white px-4 py-3 rounded-xl text-base font-medium transition-all duration-200"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
}

export default Navbar;