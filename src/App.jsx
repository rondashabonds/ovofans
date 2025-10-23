import { Routes, Route } from "react-router-dom";
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

export default function App() {
  return (
    <>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/biography" element={<Biography />} />
          <Route path="/discography" element={<Discography />} />
          <Route path="/media" element={<Media />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project" element={<ProjectPreview />} />
          <Route path="/community" element={<Community />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <footer className="site-footer">
        <div className="container"></div>
      </footer>
    </>
  );
}
