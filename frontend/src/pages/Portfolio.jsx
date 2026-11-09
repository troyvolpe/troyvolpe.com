import { Link } from "react-router-dom";
import "./Portfolio.css";

const sections = [
  { path: "/projects", title: "Projects", description: "Explore what I've built." },
  { path: "/skills", title: "Skills", description: "See the tools and technologies I work with." },
  { path: "/certifications", title: "Certifications", description: "Browse my certifications." },
];

export default function Portfolio() {
  return (
    <div className="portfolio-home">
      <section aria-labelledby="portfolio-title">
        <h1 id="portfolio-title">Troy Volpe</h1>
        <p>Software development, cybersecurity, and infrastructure.</p>
        <Link to="/about">About me</Link>
        <Link to="/">Open the terminal home</Link>
      </section>

      <section aria-labelledby="portfolio-sections">
        <h2 id="portfolio-sections">Explore the portfolio</h2>
        <ul className="portfolio-sections">
          {sections.map(({ path, title, description }) => (
            <li key={path}>
              <Link to={path}>
                <h3>{title}</h3>
                <p>{description}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}