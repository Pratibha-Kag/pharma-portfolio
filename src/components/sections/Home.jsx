import { RevealOnScroll } from "../RevealOnScroll";
import ProfileImage1 from "../../assets/ProfileImage1.png";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20 pt-24 md:pt-28"
    >
      <RevealOnScroll>
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              Hi, I'm a React Developer specializing in Pharmaceutical
              Technology.
            </h1>

            <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl">
              Pharmaceutical professional with hands-on experience in React
              development, focused on bridging pharmaceutical science and
              information technology. Aspiring to pursue M.Pharm IT and build
              technology-driven solutions across the pharmaceutical and
              healthcare industry.
            </p>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative">
              {/* Profile Image */}
              <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-blue-500/50 shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                <img
                  src={ProfileImage1}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute bottom-0 right-0 translate-y-1/2 translate-x-1/4 glass rounded-xl px-4 py-3 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse" />

                  <span className="text-sm font-medium whitespace-nowrap">
                    I'm Open to work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
