import React from "react";
import AlbumCard from "../components/AlbumCard.jsx";
import "../styles/album-card.css";

// ⭐ Import images (instead of require)
import d11 from "../images/d11.jpg";
import takeCare from "../images/take-care.jpg";
import d12 from "../images/d12.webp";
import d3 from "../images/d3.jpg";
import scorpion from "../images/drakescorp.webp";
import d9 from "../images/d9.webp";
import hnm from "../images/drake-new-songs.webp";
import fatd from "../images/Drake-mixtape.jpg";

export default function Home() {
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

          <AlbumCard img={d11} name="Thank Me Later" meta="2010 • Album" />
          <AlbumCard img={takeCare} name="Take Care" meta="2011 • Album" />
          <AlbumCard img={d12} name="Nothing Was the Same" meta="2013 • Album" />
          <AlbumCard img={d3} name="Views" meta="2016 • Album" />
          <AlbumCard img={scorpion} name="Scorpion" meta="2018 • Double Album" />
          <AlbumCard img={d9} name="Certified Lover Boy" meta="2021 • Album" />
          <AlbumCard img={hnm} name="Honestly, Nevermind" meta="2022 • Album" />
          <AlbumCard img={fatd} name="For All The Dogs" meta="2023 • Album" />

        </div>
      </section>
    </section>
  );
}
