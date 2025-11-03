import ProjectCard from "../components/ProjectCard.jsx";
import d5 from "../images/d5.webp";
import d6 from "../images/d6.jpg";
import d7 from "../images/d7.jpg";
import d8 from "../images/d8.jpg";

const projects = [
  { img: d5, title: "Project 01", category: "Web", year: "2025", blurb: "OVO vibe demo" },
  { img: d6, title: "Project 02", category: "Design", year: "2025", blurb: "Cover concepts" },
  { img: d7, title: "Project 03", category: "Data", year: "2025", blurb: "Streaming stats" },
  { img: d8, title: "Project 04", category: "Other", year: "2025", blurb: "Brand ephemera" },
];


export default function Projects() {
  return (
    <section id="projects">
      <div className="hero">
        <div className="container">
          <h1>All Projects</h1>
          <p>Browse the full collection. (Later this will load from JSON.)</p>
        </div>
      </div>

      <div className="container">
        <div className="toolbar" role="group" aria-label="Filters and sort">
          <div className="filters" aria-label="Filters">
            <a href="#projects">All</a>
            <a href="#projects">Web</a>
            <a href="#projects">Data</a>
            <a href="#projects">Design</a>
            <a href="#projects">Other</a>
          </div>
          <div className="sort">Sort: Featured · New · A–Z</div>
        </div>

        <div className="grid" aria-label="Projects grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
