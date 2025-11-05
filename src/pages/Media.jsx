import d4 from "../images/d4.jpg";
import d5 from "../images/d5.webp";
import d6 from "../images/d6.jpg";
import d7 from "../images/d7.jpg";

const featuredMedia = [
  { img: d6, alt: "OVO aesthetic 1" },
  { img: d7, alt: "OVO aesthetic 2" },
  { img: d5, alt: "OVO aesthetic 3" },
  { img: d4, alt: "OVO aesthetic 4" },
];

export default function Media() {
  return (
    <section id="media" className="section-pad">
      <div className="container">
        <h2 className="section-title">Media</h2>
        <div className="media-sections">
          <section className="media-block">
            <h3 className="media-heading">Featured</h3>
            <div className="gallery">
              {featuredMedia.map((item, index) => (
                <img key={index} src={item.img} alt={item.alt} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

