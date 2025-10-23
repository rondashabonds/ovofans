import "../styles/project-card.css";

export default function ProjectCard({ img, title, category, year, blurb, href = "/project" }) {
  return (
    <article className="card">
      <a href={href}>
        <div className="card-media">
          {img ? (
            <img src={img} alt={`${title} preview`} onError={(e)=> (e.currentTarget.style.display="none")} />
          ) : (
            <div style={{ aspectRatio: "1/1" }} />
          )}
        </div>
        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-meta">
            {category} {year ? `· ${year}` : ""}
          </p>
          {blurb && <p className="card-meta" style={{ opacity:.75, marginTop:6 }}>{blurb}</p>}
        </div>
      </a>
    </article>
  );
}
