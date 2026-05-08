import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from "../components/Button";

function Home() {
  const navigate = useNavigate();
  const [showText, setShowText] = useState(false);
  const [count, setCount] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const fullText = "Frontend Developer";

  useEffect(() => {
    const timer = setTimeout(() => setShowText(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (count < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + fullText[count]);
        setCount(count + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [count]);

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Projects Completed" },
    { number: "30+", label: "Happy Clients" },
  ];

  const skills = [
    { name: "React", icon: "fab fa-react" },
    { name: "Laravel", icon: "fab fa-laravel" },
    { name: "JavaScript", icon: "fab fa-js" },
    { name: "TailwindCSS", icon: "fab fa-tailwind" },
    { name: "PHP", icon: "fab fa-php" },
    { name: "MySQL", icon: "fas fa-database" },
    { name: "Git", icon: "fab fa-git-alt" },
    { name: "Figma", icon: "fab fa-figma" },
  ];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      image: "/project1.jpg",
      category: "Web Development",
      description: "Platform belanja online modern dengan fitur lengkap"
    },
    {
      id: 2,
      title: "Portfolio Dashboard",
      image: "/project2.jpg",
      category: "UI/UX Design",
      description: "Dashboard analytics dengan desain minimalis"
    },
    {
      id: 3,
      title: "Mobile App Landing",
      image: "/project3.jpg",
      category: "Frontend",
      description: "Landing page untuk aplikasi mobile modern"
    },
    {
      id: 4,
      title: "Admin Template",
      image: "/project4.jpg",
      category: "React",
      description: "Template admin panel dengan React & Tailwind"
    },
  ];

  return (
    <>
      {/* HERO SECTION */}
      <section className="
        min-h-screen 
        bg-white
        flex items-center 
        px-4 sm:px-6 md:px-8 
        overflow-hidden 
        relative
        py-16 sm:py-0
      ">
        
        <div className="
          max-w-7xl mx-auto 
          grid grid-cols-1 lg:grid-cols-2 
          gap-8 sm:gap-12 md:gap-16 
          items-center 
          w-full 
          relative z-10
        ">
          
          {/* TEXT CONTENT - Kiri */}
          <div className="text-center lg:text-left">
            <div className="
              inline-flex items-center gap-2 
              bg-gray-100 
              px-3 sm:px-4 py-1.5 sm:py-2 
              rounded-full 
              mb-4 sm:mb-6
              mx-auto lg:mx-0
            ">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-900 rounded-full animate-pulse"></div>
              <p className="text-gray-700 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                Portfolio Developer
              </p>
            </div>
            
            <h1 className="
              text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
              font-black 
              leading-tight
            ">
              Hi, I'm 
              <span className="text-gray-900"> Haris Darmawan</span>
              <br />
              <span className="text-gray-800 break-words">{currentText}</span>
              <span className="animate-blink text-gray-900">|</span>
            </h1>

            <p className="
              text-gray-600 
              mt-4 sm:mt-6 
              max-w-xl 
              leading-relaxed 
              text-sm sm:text-base md:text-lg
              mx-auto lg:mx-0
              px-2 sm:px-0
            ">
              Saya membangun website modern, responsive, dan UI yang clean dengan performa tinggi 
              menggunakan React & TailwindCSS. Fokus pada pengalaman pengguna yang luar biasa.
            </p>

            {/* STATS */}
            <div className="
              grid grid-cols-3 
              gap-3 sm:gap-6 
              mt-6 sm:mt-8 md:mt-10
            ">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* BUTTONS */}
            <div className="
              flex 
              flex-col 
              sm:flex-row 
              gap-3 sm:gap-4 
              mt-6 sm:mt-8 md:mt-10
              items-stretch
              sm:items-center
            ">
              <Button 
                title="Contact Me" 
                onClick={() => navigate("/contact")}
              />
              <button
                onClick={() => navigate("/project")}
                className="
                  group 
                  w-full sm:w-auto
                  px-6 sm:px-8 
                  py-2.5 sm:py-3 
                  rounded-xl 
                  border-2 border-gray-300 
                  hover:border-gray-900 
                  text-gray-700 hover:text-gray-900 
                  font-semibold 
                  transition-all duration-300 
                  hover:shadow-lg 
                  flex items-center justify-center 
                  gap-2
                  text-sm sm:text-base
                  min-w-[160px] sm:min-w-[180px]
                  whitespace-nowrap
                  bg-white
                "
              >
                View Project
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>

          {/* IMAGE SECTION */}
          <div className="flex justify-end lg:justify-end">
            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg ml-auto lg:mr-0">
              <div className="absolute -inset-4 sm:-inset-6 bg-gray-100 rounded-3xl"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img 
                  src="/profile.jpg" 
                  alt="Haris Darmawan - Frontend Developer"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "4/5" }}
                />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-gray-600 font-semibold uppercase tracking-wider text-sm mb-3">
              Get to Know Me
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              About Me
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                I'm Haris Darmawan, Frontend Developer
              </h3>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Saya adalah seorang Frontend Developer berpengalaman dengan passion dalam 
                  membangun aplikasi web yang modern, responsif, dan user-friendly. 
                  Dengan pengalaman lebih dari 5 tahun di industri teknologi, saya telah 
                  mengerjakan berbagai proyek dari skala kecil hingga enterprise.
                </p>
                
                <p>
                  Fokus utama saya adalah menciptakan pengalaman pengguna yang luar biasa 
                  melalui kode yang bersih, efisien, dan maintainable.
                </p>
                
                <p>
                  Saat ini saya mendalami ecosystem React dan Laravel untuk membangun 
                  aplikasi full-stack yang scalable.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                <div className="flex items-center gap-3">
                  <i className="fas fa-user text-gray-900 text-lg"></i>
                  <div>
                    <p className="text-xs text-gray-500">Name</p>
                    <p className="text-sm font-semibold text-gray-900">Haris Darmawan</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-gray-900 text-lg"></i>
                  <div>
                    <p className="text-xs text-gray-500">Email</p>
                    <p className="text-sm font-semibold text-gray-900">haris@example.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt text-gray-900 text-lg"></i>
                  <div>
                    <p className="text-xs text-gray-500">Location</p>
                    <p className="text-sm font-semibold text-gray-900">Jakarta, Indonesia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <i className="fas fa-briefcase text-gray-900 text-lg"></i>
                  <div>
                    <p className="text-xs text-gray-500">Experience</p>
                    <p className="text-sm font-semibold text-gray-900">5+ Years</p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => navigate("/contact")}
                className="mt-8 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Contact Me
                <i className="fas fa-arrow-right text-sm"></i>
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-200">
              <i className="fas fa-quote-left text-4xl text-gray-300 mb-4 block"></i>
              <p className="text-gray-700 text-lg leading-relaxed italic mb-6">
                "Membangun website bukan hanya tentang kode, tetapi tentang menciptakan 
                solusi yang membantu orang mencapai tujuan mereka."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                  <i className="fas fa-code text-white text-lg"></i>
                </div>
                <div>
                  <p className="font-bold text-gray-900">Haris Darmawan</p>
                  <p className="text-sm text-gray-500">Frontend Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-gray-600 font-semibold uppercase tracking-wider text-sm mb-3">
              My Skills
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              Technologies & Tools
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group text-center p-3 sm:p-4 rounded-2xl hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100 hover:border-gray-200"
              >
                <div className="text-4xl sm:text-5xl md:text-6xl mb-2 sm:mb-3 text-gray-700 group-hover:text-gray-900 transition-colors">
                  <i className={skill.icon}></i>
                </div>
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT PREVIEW SECTION - CARD BAGUS */}
      <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-gray-600 font-semibold uppercase tracking-wider text-sm mb-3">
              My Work
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900">
              Featured Projects
            </h2>
            <div className="w-20 h-1 bg-gray-900 mx-auto mt-4 rounded-full"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base">
              Beberapa project yang telah saya kerjakan
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => navigate("/project")}
                className="group cursor-pointer"
              >
                <div className="relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  {/* Image Container */}
                  <div className="relative overflow-hidden h-56">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Icon on hover */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                      <div className="bg-white rounded-full p-3 shadow-lg">
                        <i className="fas fa-arrow-right text-gray-900 text-xl"></i>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <p className="text-xs font-semibold text-gray-900">{project.category}</p>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-500 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">React</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">Tailwind</span>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">API</span>
                    </div>
                  </div>
                  
                  {/* Bottom Border Effect */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gray-900 group-hover:w-full transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate("/project")}
              className="group inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>View All Projects</span>
              <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
            </button>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
}

export default Home;