import React from "react";
import "@/App.css";
import { ThemeProvider } from "./context/ThemeContext";
import { portfolioData } from "./data/mock";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Navbar personalData={portfolioData.personal} />
        <Hero personalData={portfolioData.personal} metrics={portfolioData.metrics} />
        <About aboutData={portfolioData.about} />
        <Experience experiences={portfolioData.experience} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Achievements achievements={portfolioData.achievements} education={portfolioData.education} />
        <Contact personalData={portfolioData.personal} />
        <Footer personalData={portfolioData.personal} />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;
