import AlbumCard from "../components/AlbumCard.jsx";
import d9 from "../images/d9.webp";
import d10 from "../images/d10.jpg";
import d11 from "../images/d11.jpg";
import d12 from "../images/d12.webp";

const projects = [
  { img: d9, title: "Project 01", category: "Web", year: "2025", blurb: "OVO vibe demo" },
  { img: d10, title: "Project 02", category: "Design", year: "2025", blurb: "Cover concepts" },
  { img: d11, title: "Project 03", category: "Data", year: "2025", blurb: "Streaming stats" },
  { img: d12, title: "Project 04", category: "Other", year: "2025", blurb: "Brand ephemera" },
];

export default function Discography() {
  return (
    <section id="discography" className="section-pad">
      <div className="container">
        <h2 className="section-title">Discography</h2>
        <div className="album-grid">
          {projects.map((p) => (
            <AlbumCard
              key={p.title}
              img={p.img}
              name={p.title}
              meta={`${p.category} • ${p.year} • ${p.blurb}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

