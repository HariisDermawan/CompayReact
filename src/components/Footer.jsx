import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="
      bg-white
      border-t border-gray-100
      text-gray-600
      pt-16
      pb-8
      px-4 sm:px-6 md:px-8
    "
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-block">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-900 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">H</span>
                </div>
                <span className="text-xl font-bold text-gray-900">
                  Haris Darmawan
                </span>
              </div>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm">
              Frontend Developer yang fokus membuat UI modern, clean, dan
              responsive menggunakan React & TailwindCSS.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <i className="fab fa-github text-gray-700 text-sm"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <i className="fab fa-linkedin-in text-gray-700 text-sm"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <i className="fab fa-twitter text-gray-700 text-sm"></i>
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <i className="fab fa-instagram text-gray-700 text-sm"></i>
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-gray-900 font-bold text-base mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/project"
                  className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-500 hover:text-gray-900 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-base mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-gray-400 text-sm mt-0.5"></i>
                <span className="text-gray-500 text-sm">haris@example.com</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone-alt text-gray-400 text-sm mt-0.5"></i>
                <span className="text-gray-500 text-sm">+62 123 4567 890</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-gray-400 text-sm mt-0.5"></i>
                <span className="text-gray-500 text-sm">
                  Jakarta, Indonesia
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-900 font-bold text-base mb-4">
              Let's Work Together
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Punya proyek menarik? Mari kita diskusikan dan wujudkan ide Anda
              menjadi kenyataan.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              Hire Me
              <i className="fas fa-arrow-right text-xs"></i>
            </Link>
          </div>
        </div>

        <div
          className="
          mt-12
          pt-6
          border-t border-gray-100
          flex flex-col sm:flex-row justify-between items-center gap-4
        "
        >
          <p className="text-gray-400 text-xs">
            © {currentYear} Haris Darmawan. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-gray-400 hover:text-gray-600 text-xs transition-colors"
            >
              Privacy Policy
            </Link>
            <span className="text-gray-300 text-xs">|</span>
            <Link
              to="/terms"
              className="text-gray-400 hover:text-gray-600 text-xs transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
