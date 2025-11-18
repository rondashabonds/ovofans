import "../styles/dialog.css";
import React, { useState } from "react";

const API_BASE = "https://ovofansserver.onrender.com";

export default function AddProjectModal({ close, refreshProjects, project }) {
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const submitProject = async (e) => {
    e.preventDefault();
    setResult("Submitting...");

    
    const formData = new FormData();
    formData.append("title", e.target.title.value);
    formData.append("category", e.target.category.value);
    formData.append("year", e.target.year.value);
    formData.append("blurb", e.target.blurb.value);

    
    if (e.target.img.files[0]) {
      formData.append("img", e.target.img.files[0]);
    }

    try {
      const response = await fetch(`${API_BASE}/api/projects`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        refreshProjects();
        close();
      } else {
        setResult("Error adding project");
      }
    } catch (error) {
      console.log(error);
      setResult("Server error");
    }
  };

  const deleteProject = async () => {
    if (!project || !project._id) return;

    if (!window.confirm("Are you sure you want to delete this project?")) return;

    try {
      const response = await fetch(`${API_BASE}/api/projects/${project._id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        refreshProjects();
        close();
      } else {
        alert("Error deleting project");
      }
    } catch (error) {
      alert("Server error deleting project");
    }
  };

  return (
    <div className="w3-modal">
      <div className="w3-modal-content">
        <div className="w3-container">
          <span className="w3-button w3-display-topright" onClick={close}>
            &times;
          </span>

          <form onSubmit={submitProject}>
            <h3>{project ? "Edit Project" : "Add New Project"}</h3>

            <label>Project Title:</label>
            <input
              type="text"
              name="title"
              required
              defaultValue={project?.title || ""}
            />

            <label>Category:</label>
            <input
              type="text"
              name="category"
              required
              defaultValue={project?.category || ""}
            />

            <label>Year:</label>
            <input
              type="number"
              name="year"
              required
              defaultValue={project?.year || ""}
            />

            <label>Description:</label>
            <textarea
              name="blurb"
              required
              defaultValue={project?.blurb || ""}
            ></textarea>

            <label>Upload Image:</label>
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={uploadImage}
            />

            {preview && <img id="img-prev" src={preview} alt="preview" />}

            <button type="submit" className="submit-btn">
              {project ? "Save Changes" : "Submit"}
            </button>

            {project && project._id && (
              <button
                type="button"
                className="delete-project-btn"
                onClick={deleteProject}
              >
                Delete Project
              </button>
            )}

            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
