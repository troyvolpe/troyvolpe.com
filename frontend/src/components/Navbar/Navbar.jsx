import { NavLink } from "react-router-dom";

const links = [
  ["/portfolio", "Portfolio"],
  ["/about", "About"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/certifications", "Certifications"],
];

export default function Navbar() {
  return (
    <nav className="portfolio-nav" aria-label="Portfolio">
      {links.map(([path, label]) => (
        <NavLink key={path} to={path} end>
          {label}
        </NavLink>
      ))}
    </nav>
  );
}