import About from "./sections/About";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Projects from "./sections/Projects";
import Work from "./sections/Work";
import Home from "./sections/Home";

function App() {
  return (
    <div>
      <Navbar />
      <div
        id="home"
        className="scroll-mt-20 relative h-screen overflow-x-hidden"
      >
        <div className="w-double absolute bg-cover bg-top-70 bg-no-repeat bg-wave h-full"></div>
        <Home />
      </div>
      <div id="about" className="scroll-mt-20 p-4 relative bg-sky-900">
        <About />
      </div>
      <div id="work" className="scroll-mt-20 p-4 relative">
        <Work />
      </div>
      <div id="projects" className="scroll-mt-20 p-4 relative bg-sky-900 flex">
        <Projects />
      </div>
      <div
        id="contact"
        className="scroll-mt-20 relative bg-contact bg-cover bg-center"
      >
        <Contact />
      </div>
    </div>
  );
}

export default App;
