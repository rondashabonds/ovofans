import "../styles/album-card.css";

export default function AlbumCard({ img, name, meta, href = "#" }) {
  return (
    <a className="album-card" href={href} aria-label={`Open ${name} details`}>
      <div className="album-art" aria-hidden="true">
        <img src={img} alt={`${name} album cover`} />
      </div>
      <div className="album-info">
        <h3>{name}</h3>
        <p>{meta}</p>
      </div>
    </a>
  );
}
