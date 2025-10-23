import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="container inner">
        <a className="logo" href="/" aria-label="Projects home">
          <img
            src="/images/ovothing-removebg-preview.png"
            alt=""
            onError={(e) => (e.currentTarget.style.display = "none")}
          />
          <span>OVO Projects</span>
        </a>

        {}
        <nav className="nav" aria-label="Primary">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/biography">Biography</NavLink>
          <NavLink to="/discography">Discography</NavLink>
          <NavLink to="/media">Media</NavLink>
          <NavLink to="/projects">All Projects</NavLink>
          <NavLink to="/project">Project Preview</NavLink>
          <NavLink to="/community">Community</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}
