import "./App.css";
import { lazy, Suspense } from "react";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const ModelViewer = lazy(() => import("./components/Model"));

function App() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-4xl sm:text-5xl md:text-7xl text-center font-bold mt-20 mb-8">
          Jason Javandel
        </h1>
        <Suspense
          fallback={
            <div className="w-full max-w-4xl h-[600px] flex items-center justify-center">
              Loading model...
            </div>
          }
        >
          <ModelViewer modelPath="/models/finalpc.glb" />
        </Suspense>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 p-6 backdrop-blur-md bg-white/20 rounded-3xl shadow-lg border border-white/30">
          <button
            onClick={() => scrollToSection("about")}
            className="relative inline-block cursor-pointer font-semibold text-[#2b2238] uppercase px-8 py-5 bg-[#f5f0ff] border-2 border-[#8572b1] rounded-xl shadow-[0_0.75em_0_0_#d2c4f9] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_0.5em_0_0_#d2c4f9] active:translate-y-3 active:shadow-none"
          >
            &nbsp;&nbsp;About&nbsp;&nbsp;
          </button>
          <button
            onClick={() => scrollToSection("projects")}
            className="relative inline-block cursor-pointer font-semibold text-[#2b2238] uppercase px-8 py-5 bg-[#f5f0ff] border-2 border-[#8572b1] rounded-xl shadow-[0_0.75em_0_0_#d2c4f9] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_0.5em_0_0_#d2c4f9] active:translate-y-3 active:shadow-none"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="relative inline-block cursor-pointer font-semibold text-[#2b2238] uppercase px-8 py-5 bg-[#f5f0ff] border-2 border-[#8572b1] rounded-xl shadow-[0_0.75em_0_0_#d2c4f9] transition-all duration-150 hover:translate-y-1 hover:shadow-[0_0.5em_0_0_#d2c4f9] active:translate-y-3 active:shadow-none"
          >
            Contact
          </button>
        </div>
      </div>
      <div
        id="about"
        className="bg-[#1e1b30] w-full bg-[radial-gradient(#483a6c_2px,transparent_2px)] bg-[size:30px_30px] py-10 text-white my-8 shadow-xl min-h-screen"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <About />
        </Suspense>
      </div>
      <div
        id="projects"
        className="text-center max-w-6xl mx-auto px-4 min-h-screen flex flex-col justify-center"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Projects />
        </Suspense>
      </div>
      <div
        id="contact"
        className="bg-[#1e1b30] w-full bg-[radial-gradient(#483a6c_2px,transparent_2px)] bg-[size:30px_30px] py-10 text-white my-8 shadow-xl min-h-screen"
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Contact />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
