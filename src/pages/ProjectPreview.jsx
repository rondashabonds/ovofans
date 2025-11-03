import Slideshow from "../components/Slideshow.jsx";
import "../styles/slideshoww.css";

export default function ProjectPreview() {
  return (
    <section id="project">
      <div className="hero">
        <div className="container">
          <h1>Project Preview</h1>
          <p>OVO-inspired projects.</p>
        </div>
      </div>

      {/* Slideshow section */}
      <div className="container section-pad">
        <h2 style={{ color: "#c3a356", textAlign: "center" }}>
          Featured Visuals
        </h2>

        <div className="project-slideshow-wrapper">
          <Slideshow />
        </div>
      </div>

      <div className="container stack section-pad">
        <p>Detail view coming later.</p>
      </div>
    </section>
  );
}
