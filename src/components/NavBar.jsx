import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";
import "../styles/menu.css";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  return (
    <header className="site-header">
      <div className="container inner">
        <a className="logo" href="/" aria-label="Projects home">
          <img
            src="/images/ovothing-removebg-preview.png"
            alt="OVO Logo"
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span>OVO Projects</span>
        </a>

        {/* hamburger button */}
        <button
          className={`hamburger-btn ${open ? "is-open" : ""}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* nav links */}
        <nav
          className={`nav ${open ? "show-nav" : ""}`}
          aria-label="Primary"
        >
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/biography" onClick={() => setOpen(false)}>Biography</NavLink>
          <NavLink to="/discography" onClick={() => setOpen(false)}>Discography</NavLink>
          <NavLink to="/media" onClick={() => setOpen(false)}>Media</NavLink>
          <NavLink to="/projects" onClick={() => setOpen(false)}>All Projects</NavLink>
          <NavLink to="/project" onClick={() => setOpen(false)}>Project Preview</NavLink>
          <NavLink to="/community" onClick={() => setOpen(false)}>Community</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
