import AlbumCard from "../components/AlbumCard.jsx";

const albums = [
  { img: "/images/draketakecare.webp", name: "Take Care", meta: "2011 • Studio Album" },
  { img: "/images/Drake_-_Nothing_Was_the_Same_cover.png", name: "Nothing Was the Same", meta: "2013 • Studio Album" },
  { img: "/images/drakescorp.webp", name: "Scorpion", meta: "2018 • Double Album" }
];

export default function Discography() {
  return (
    <section id="discography" className="section-pad">
      <div className="container">
        <h2 className="section-title">Discography</h2>
        <div className="album-grid">
          {albums.map((a) => (
            <AlbumCard key={a.name} img={a.img} name={a.name} meta={a.meta} />
          ))}
        </div>
      </div>
    </section>
  );
}
