import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import AddProjectModal from "../components/AddProjectModal.jsx";

import d5 from "../images/d5.webp";
import d6 from "../images/d6.jpg";
import d7 from "../images/d7.jpg";
import d8 from "../images/d8.jpg";

// Local static projects
const initialStatic = [
  { _id: "local-1", img: d5, title: "Project 01", category: "Web", year: "2025", blurb: "OVO vibe demo" },
  { _id: "local-2", img: d6, title: "Project 02", category: "Design", year: "2025", blurb: "Cover concepts" },
  { _id: "local-3", img: d7, title: "Project 03", category: "Data", year: "2025", blurb: "Streaming stats" },
  { _id: "local-4", img: d8, title: "Project 04", category: "Other", year: "2025", blurb: "Brand ephemera" },
];

const API_BASE = "https://ovofansserver.onrender.com";

export default function Projects() {
  const [staticProjects, setStaticProjects] = useState(initialStatic);
  const [dbProjects, setDbProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Load DB projects
  const loadProjects = async () => {
    try {
      const res = await fetch(`${API_BASE}/api/projects`);
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setDbProjects(data);
    } catch (err) {
      console.log("DB Load Error → fallback to empty list");
      setDbProjects([]);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  // Delete static or DB project
  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    const isLocal = String(id).includes("local");

    // ⭐ FIXED: Local delete does NOT hit the server
    if (isLocal) {
      setStaticProjects((prev) => prev.filter((p) => p._id !== id));
      return;
    }

    // DB delete
    try {
      await fetch(`${API_BASE}/api/projects/${id}`, { method: "DELETE" });
      loadProjects();
    } catch (err) {
      console.error("Delete error:", err);
    }
  };

  // Save static project edits
  const saveStaticEdit = (updated) => {
    setStaticProjects((prev) =>
      prev.map((p) => (p._id === updated._id ? updated : p))
    );
  };

  // Combine static + db projects into one grid
  const allProjects = [...staticProjects, ...dbProjects];

  return (
    <section id="projects">
      <div className="container">

        {/* HEADER */}
        <div className="projects-header">
          <h2>All Projects</h2>

          <button
            className="add-project-top-btn"
            onClick={() => {
              setEditingProject(null);
              setShowModal(true);
            }}
          >
            + Add Project
          </button>
        </div>

        {/* PROJECT GRID */}
        <div className="grid">
          {allProjects.map((p) => (
            <ProjectCard
              key={p._id}
              {...p}
              onDelete={deleteProject}
              onEditClick={() => {
                setEditingProject(p);
                setShowModal(true);
              }}
            />
          ))}
        </div>
      </div>

      {/* ADD/EDIT MODAL */}
      {showModal && (
        <AddProjectModal
          close={() => setShowModal(false)}
          refreshProjects={loadProjects}
          project={editingProject}
          saveStaticEdit={saveStaticEdit}
        />
      )}
    </section>
  );
}
