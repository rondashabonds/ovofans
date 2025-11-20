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

    const formData = new FormData(e.target);

    try {
      const response = await fetch(`${API_BASE}/api/projects`, {
        method: "POST",
        body: formData,
      });

      const raw = await response.text();
      console.log("RAW RESPONSE:", raw);

      if (response.ok) {
        refreshProjects();
        close();
      } else {
        setResult("Error adding project");
      }
    } catch (error) {
      console.error("POST ERROR:", error);
      setResult("Server error");
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
            <input type="text" name="title" required />

            <label>Category:</label>
            <input type="text" name="category" required />

            <label>Year:</label>
            <input type="number" name="year" required />

            <label>Description:</label>
            <textarea name="blurb" required></textarea>

            <label>Upload Image:</label>
            <input
              type="file"
              name="img"
              accept="image/*"
              onChange={uploadImage}
            />

            {preview && <img id="img-prev" src={preview} alt="preview" />}

            <button type="submit" className="submit-btn">
              Submit
            </button>

            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
