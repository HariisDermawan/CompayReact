import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="
    bg-white
    border-t border-slate-200
    text-slate-600
    py-16
    px-8
    ">

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* BRAND */}
        <div>

          <h1 className="text-2xl font-black text-slate-900">
            DevCount
          </h1>

          <p className="mt-4 leading-7 text-slate-500">
            Frontend Developer yang fokus membuat UI modern,
            clean, dan responsive menggunakan React & TailwindCSS.
          </p>

        </div>

        {/* LINKS */}
        <div>

          <h3 className="text-slate-900 font-bold mb-4">
            Navigation
          </h3>

          <ul className="space-y-2">

            <li>
              <Link to="/" className="hover:text-blue-500 transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-500 transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/project" className="hover:text-blue-500 transition">
                Project
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-500 transition">
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* CONTACT */}
        <div>

          <h3 className="text-slate-900 font-bold mb-4">
            Contact
          </h3>

          <p className="text-slate-500">
            Email: devcount@email.com
          </p>

          <p className="text-slate-500 mt-2">
            Indonesia
          </p>

        </div>

      </div>

      {/* BOTTOM */}
      <div className="
      max-w-7xl
      mx-auto
      mt-12
      border-t border-slate-200
      pt-6
      text-center
      text-sm
      text-slate-400
      ">

        © {new Date().getFullYear()} DevCount. All rights reserved.

      </div>

    </footer>
  );
}

export default Footer;