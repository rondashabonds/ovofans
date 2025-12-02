import React, { useState, useEffect } from "react";
import AlbumCard from "../components/AlbumCard.jsx";

import "../styles/album-card.css";

const API_BASE = "https://ovofansserver.onrender.com";

export default function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetchAlbums() {
      try {
        const res = await fetch(`${API_BASE}/api/albums`);
        if (!res.ok) throw new Error("Failed to fetch albums");

        const data = await res.json();
        console.log("Albums from server:", data); // DEBUG
        setAlbums(data);
      } catch (err) {
        console.error("Failed to fetch albums:", err);
      }
    }

    fetchAlbums();
  }, []);

  return (
    <section id="home">

      <section className="hero">
        <div className="container">
          <h1>OVO Edition</h1>
          <p>
            Drake is one of the most streamed artists in the world,
            with billions of plays across platforms.
          </p>
        </div>
      </section>

      <section className="album-section container">
        <h2>Featured Albums</h2>

        <div className="album-grid">
          {albums.map((album) => (
            <AlbumCard
              key={album._id}
              img={API_BASE + album.cover}   // ⭐ FIXED ⭐
              name={album.title}
              meta={`${album.year} • ${album.type}`}
              href={`/album/${album._id}`}
            />
          ))}
        </div>
      </section>

    </section>
  );
}
