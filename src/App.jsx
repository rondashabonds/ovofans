import React from "react";
import NavBar from "./components/NavBar.jsx";
import Home from "./pages/Home.jsx";
import Biography from "./pages/Biography.jsx";
import Discography from "./pages/Discography.jsx";
import Media from "./pages/Media.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectPreview from "./pages/ProjectPreview.jsx";
import Community from "./pages/Community.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <Home />
        <Biography />
        <Discography />
        <Media />
        <Projects />
        <ProjectPreview />
        <Community />
        <About />
        <Contact />
      </main>
    </>
  );
}

export default App;
