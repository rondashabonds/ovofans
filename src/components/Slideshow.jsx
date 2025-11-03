
import { useState, useEffect } from "react";
import "../styles/slideshoww.css";
import d1 from "../images/d1.jpg";
import d2 from "../images/d2.jpg";
import d3 from "../images/d3.jpg";

const slides = [
  {
    img: d1,
    caption: "OVO Sound Era",
  },
  {
    img: d2,
    caption: "Nothing Was the Same",
  },
  {
   img: d3,
    caption: "Scorpion Tour Visuals",
  },
];

export default function Slideshow() {
  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  function next() {
    setIndex((prev) => (prev + 1) % slides.length);
  }

  function prev() {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }

  const current = slides[index];

  return (
    <section className="slideshow">
      <div className="slide-frame">
        <img
          src={current.img}
          alt={current.caption}
          className="slide-image"
        />
        <div className="slide-caption">{current.caption}</div>

        <button className="slide-btn prev" onClick={prev} aria-label="Previous slide">
          ‹
        </button>
        <button className="slide-btn next" onClick={next} aria-label="Next slide">
          ›
        </button>

        <div className="slide-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
