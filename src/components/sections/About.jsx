import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "Html",
    "CSS",
    "Javascript",
    "React",
    "TypeScript",
    "TailwindCSS",
  ];

  const backendSkills = ["Node.js", "AWS", "MongoDB", "GraphQL"];
  const Pharma = [
    "Regulatory Compliance & Quality",
    "Laboratory & Analytical",
    "Clinical & Development",
    "Software & Systems",
    "Cross-Functional Teamwork",
  ];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              My journey sits at the intersection of pharmaceutical sciences and
              technology. With a study background in pharma and 1+ year of
              experience in React development, I have developed strong technical
              skills while gaining practical experience in building modern
              digital applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Frontend Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">
                  {" "}
                  Backend Technologies
                </h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                  <h3 className="text-xl font-bold mb-4">Pharma Skills</h3>

                  <div className="flex flex-wrap gap-2">
                    {Pharma.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            {/* Education Card */}
            <div className="group relative p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_10px_40px_rgba(59,130,246,0.12)]">
              {/* Top Glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full opacity-70" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 border border-blue-500/20 text-2xl">
                  🎓
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                  <p className="text-sm text-blue-400 mt-1">
                    Academic Background
                  </p>
                </div>
              </div>

              <div className="border-l border-blue-500/30 pl-5">
                <h4 className="text-lg font-semibold text-white">
                  Bachelor of Pharmacy
                </h4>

                <p className="text-gray-400 mt-1">
                  Bherulal Memorial College, Indore
                </p>

                <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  2022 – 2026
                </span>

                <div className="mt-5">
                  <p className="text-sm font-medium text-gray-300 mb-2">
                    Relevant Coursework
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Human Anatomy & Physiology",
                      "Pharmaceutics",
                      "Pharmaceutical Analysis",
                      "Communication Skills",
                    ].map((course) => (
                      <span
                        key={course}
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-gray-400 border border-white/10"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Work Experience Card */}
            <div className="group relative p-7 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:-translate-y-2 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_10px_40px_rgba(6,182,212,0.12)]">
              {/* Top Glow */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-70" />

              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-2xl">
                  💼
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    Work Experience
                  </h3>
                  <p className="text-sm text-cyan-400 mt-1">
                    Professional Experience
                  </p>
                </div>
              </div>

              <div className="border-l border-cyan-500/30 pl-5">
                <h4 className="text-lg font-semibold text-white">
                  React Developer
                </h4>

                <p className="text-gray-400 mt-1">Adixoo Brand Pvt. Ltd.</p>

                <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  1 Year Experience
                </span>

                <p className="text-gray-400 text-sm leading-6 mt-5">
                  Developed responsive React applications, integrated REST APIs,
                  and collaborated with designers and backend developers to
                  build functional and user-focused digital experiences.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["React.js", "JavaScript", "REST APIs", "Git"].map(
                    (skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-gray-400 border border-white/10"
                      >
                        {skill}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
