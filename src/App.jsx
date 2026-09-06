import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import "./index.css";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[#030712] text-gray-100">
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Animated Grid */}
        <div className="animated-grid"></div>

        {/* Big Glowing Orbs */}
        <div className="background-glow glow-one"></div>
        <div className="background-glow glow-two"></div>
        <div className="background-glow glow-three"></div>

        {/* Light Beams */}
        <div className="light-beam beam-one"></div>
        <div className="light-beam beam-two"></div>

        {/* Floating Particles */}
        <span className="particle particle-1"></span>
        <span className="particle particle-2"></span>
        <span className="particle particle-3"></span>
        <span className="particle particle-4"></span>
        <span className="particle particle-5"></span>
        <span className="particle particle-6"></span>
        <span className="particle particle-7"></span>
        <span className="particle particle-8"></span>
        <span className="particle particle-9"></span>
        <span className="particle particle-10"></span>
      </div>

      {/* ================= WEBSITE ================= */}

      <div className="relative z-10">
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
