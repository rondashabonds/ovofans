import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import AddProjectModal from "../components/AddProjectModal.jsx";

import d5 from "../images/d5.webp";
import d6 from "../images/d6.jpg";
import d7 from "../images/d7.jpg";
import d8 from "../images/d8.jpg";

const initialStatic = [
  { _id: "local-1", img: d5, title: "Project 01", category: "Web", year: "2025", blurb: "OVO vibe demo" },
  { _id: "local-2", img: d6, title: "Project 02", category: "Design", year: "2025", blurb: "Cover concepts" },
  { _id: "local-3", img: d7, title: "Project 03", category: "Data", year: "2025", blurb: "Streaming stats" },
  { _id: "local-4", img: d8, title: "Project 04", category: "Other", year: "2025", blurb: "Brand ephemera" },
];

export default function Projects() {
  const [staticProjects, setStaticProjects] = useState(initialStatic);
  const [dbProjects, setDbProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  // Load DB projects
  const loadProjects = async () => {
    try {
      const res = await fetch("https://ovofansserver.onrender.com/api/projects");
      if (!res.ok) throw new Error("Failed to fetch");

      const data = await res.json();
      setDbProjects(data);
    } catch (err) {
      setDbProjects([]); // fail-safe
    }
  };

  // Delete a project
  const deleteProject = async (id) => {
    if (!window.confirm("Delete this project?")) return;

    // Static projects
    if (id.startsWith("local-")) {
      setStaticProjects(staticProjects.filter((p) => p._id !== id));
      return;
    }

    // DB projects
    try {
      await fetch(`https://ovofansserver.onrender.com/api/projects/${id}`, {
        method: "DELETE",
      });

      loadProjects();
    } catch (err) {
      console.log("Delete error", err);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  const allProjects = [...staticProjects, ...dbProjects];

  const saveStaticEdit = (updatedProject) => {
    // Replace the static project with the edited one
    setStaticProjects((prev) =>
      prev.map((p) => (p._id === updatedProject._id ? updatedProject : p))
    );
  };

  return (
    <section id="projects">
      <div className="container">

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

      {showModal && (
        <AddProjectModal
          close={() => setShowModal(false)}
          refreshProjects={loadProjects}
          project={editingProject}
          saveStaticEdit={saveStaticEdit}  // ⭐ Add this so modal can save static projects
        />
      )}
    </section>
  );
}
