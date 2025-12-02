import "../styles/dialog.css";
import React, { useState, useEffect } from "react";

const API_BASE = "https://ovofansserver.onrender.com";

export default function AddProjectModal({
  close,
  refreshProjects,
  project,
  saveStaticEdit,   // ⭐ NEW PROP
}) {
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState("");

  // Prefill fields when editing
  useEffect(() => {
    if (project) {
      setPreview(project.img || "");
    }
  }, [project]);

  const uploadImage = (e) => {
    if (e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]));
    }
  };

  const submitProject = async (e) => {
    e.preventDefault();
    setResult("Submitting...");

    const formData = new FormData(e.target);

    const updatedProject = {
      ...project,
      title: formData.get("title"),
      category: formData.get("category"),
      year: formData.get("year"),
      blurb: formData.get("blurb"),
      img: project?.img, // keep existing image unless new file uploaded
    };

    const newFile = formData.get("img")?.name;

    // ---------------------------------------
    // 1️⃣ STATIC PROJECT EDIT
    // ---------------------------------------
    if (project && project._id.startsWith("local-")) {
      if (newFile) {
        updatedProject.img = preview;
      }

      saveStaticEdit(updatedProject);
      setResult("Updated local project!");
      setTimeout(close, 500);
      return;
    }

    // ---------------------------------------
    // 2️⃣ DATABASE PROJECT EDIT / ADD
    // ---------------------------------------

    // If no new image uploaded → remove field
    if (!newFile) {
      formData.delete("img");
    }

    try {
      let url = `${API_BASE}/api/projects`;
      let method = "POST";

      if (project) {
        url = `${API_BASE}/api/projects/${project._id}`;
        method = "PUT";
      }

      const response = await fetch(url, {
        method,
        body: formData,
      });

      const raw = await response.text();
      console.log("RAW RESPONSE:", raw);

      if (response.ok) {
        setResult(project ? "Project updated!" : "Project added!");
        refreshProjects();
        setTimeout(close, 500);
      } else {
        setResult("Error: " + raw);
      }
    } catch (error) {
      console.error("SUBMIT ERROR:", error);
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
            <input
              type="text"
              name="title"
              defaultValue={project?.title}
              required
            />

            <label>Category:</label>
            <input
              type="text"
              name="category"
              defaultValue={project?.category}
              required
            />

            <label>Year:</label>
            <input
              type="number"
              name="year"
              defaultValue={project?.year}
              required
            />

            <label>Description:</label>
            <textarea
              name="blurb"
              defaultValue={project?.blurb}
              required
            />

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

            <p>{result}</p>
          </form>
        </div>
      </div>
    </div>
  );
}
