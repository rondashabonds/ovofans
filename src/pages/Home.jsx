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
      <section className="hero">
        <div className="container">
          <h1>OVO Edition</h1>
          <p>Drake is one of the most streamed artists in the world.</p>
        </div>
      </section>

      <section className="album-section container">
  <h2>Featured Albums</h2>

  <div className="album-grid">

    <AlbumCard
      img={require("../images/d11.jpg")}
      name="Thank Me Later"
      meta="2010 • Album"
      href="#"
    />

    <AlbumCard
      img={require("../images/albums/take-care.jpg")}
      name="Take Care"
      meta="2011 • Album"
      href="#"
    />

    <AlbumCard
      img={require("../images/albums/nothing-was-the-same.jpg")}
      name="Nothing Was the Same"
      meta="2013 • Album"
      href="#"
    />

    <AlbumCard
      img={require("../images/albums/views.jpg")}
      name="Views"
      meta="2016 • Album"
      href="#"
    />

    <AlbumCard
      img={require("../images/albums/scorpion.jpg")}
      name="Scorpion"
      meta="2018 • Double Album"
      href="#"
    />

    <AlbumCard
      img={require("../images/albums/certified-lover-boy.jpg")}
      name="Certified Lover Boy"
      meta="2021 • Album"
      href="#"
    />

    <AlbumCard
      img={require("../images/drake-new-songs.webp")}
      name="Honestly, Nevermind"
      meta="2022 • Album"
      href="#"
    />

    <AlbumCard
      img={require("../images/Drake-mixtape.jpg")}
      name="For All The Dogs"
      meta="2023 • Album"
      href="#"
    />

  </div>
</section>
</section> )};
