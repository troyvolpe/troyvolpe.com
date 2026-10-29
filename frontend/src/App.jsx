import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import FloatingTerminal from "./components/Terminal/FloatingTerminal";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
      <FloatingTerminal />
    </>
  );
}

export default App;