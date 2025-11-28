import React from "react";
import NavBar from "./Component/NavBar/NavBar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Services from "./Component/Service/Service";
import Education from "./Component/Education/Education";
import Projects from "./Component/Project/Projects";
import Contact from "./Component/Contact/Contact";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Education />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
