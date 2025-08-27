import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PortfolioNavbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Technologies from "./sections/Technologies";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <PortfolioNavbar />
      <Hero />
      <About />
      <Projects />
      <Technologies />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
