import { Link } from "react-router-dom";

const projects = [
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    description:
      "A personal website with an interactive terminal and a traditional portfolio.",
    technologies: ["React", "Vite", "React Router"],
    path: "/portfolio",
  },
];

export default function Projects() {
  return (
    <>
      <h1>Projects</h1>
      <p>Explore what I’m building and the tools I’m using.</p>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <article>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <p>Built with {project.technologies.join(", ")}.</p>
              <Link to={project.path}>Explore the portfolio</Link>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}