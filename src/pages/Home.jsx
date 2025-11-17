import React, { useState, useEffect } from "react";
import AlbumCard from "../components/AlbumCard.jsx";

import "../styles/album-card.css";

const API_BASE = process.env.REACT_APP_API_BASE || "http://localhost:5000";

export default function Home() {
  const [albums, setAlbums] = useState([]);
  const [selected, setSelected] = useState(null); 

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const res = await fetch(`${API_BASE}/api/albums`);
        const data = await res.json();
        setAlbums(data);
      } catch (err) {
        console.error("Failed to fetch albums:", err);
      }
    }
    fetchAlbums();
  }, []);

  return (
    <section id="home">

      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>OVO Edition</h1>
          <p>Drake is one of the most streamed artists in the world, with billions of plays across platforms.</p>
        </div>
      </section>

      {/* Albums */}
      <section className="album-section container">
        <h2>Featured Albums</h2>
        <div className="album-grid">
          {albums.map((album) => (
            <AlbumCard
              key={album._id}
              album={album}
              onSelect={() => setSelected(album)} // ✅ FIX
            />
          ))}
        </div>
      </section>

    </section>
  );
}
