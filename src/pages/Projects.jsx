import "../styles/project-card.css";

export default function ProjectCard({
  _id,
  img,
  title,
  category,
  year,
  blurb,
  onEditClick,
  onDelete
}) {
  return (
    <article className="card">

      <div className="card-media">
        {img ? (
          <img
            src={img}
            alt={`${title} preview`}
            onError={(e) => {
              e.currentTarget.src =
                "https://via.placeholder.com/300?text=Image+Not+Found";
            }}
          />
        ) : (
          <div style={{ aspectRatio: "1/1" }} />
        )}
      </div>

      <div className="card-body">
        <h3 className="card-title">{title}</h3>

        <p className="card-meta">
          {category} {year ? `· ${year}` : ""}
        </p>

        {blurb && (
          <p className="card-meta" style={{ opacity: 0.75, marginTop: 6 }}>
            {blurb}
          </p>
        )}

        <div className="card-actions">
          <button
            className="edit-btn"
            onClick={onEditClick}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => onDelete(_id)}
          >
            Delete
          </button>
        </div>
      </div>
    </article>
  );
}
