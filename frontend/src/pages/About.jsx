import { Link } from "react-router-dom";

export default function About() {
  return (
    <>
      <h1>About Troy Volpe</h1>
      <p>
        My interests span software development, cybersecurity, and
        infrastructure. Right now, I’m focused on learning backend and API
        development.
      </p>

      <section aria-labelledby="current-focus">
        <h2 id="current-focus">What I’m learning</h2>
        <p>
          I’m interested in what happens after a request reaches the server,
          from validating the input to working with a database and returning
          a response.
        </p>
      </section>

      <section aria-labelledby="explore-work">
        <h2 id="explore-work">Explore my work</h2>
        <ul>
          <li><Link to="/projects">View projects</Link></li>
          <li><Link to="/skills">View skills</Link></li>
          <li><Link to="/certifications">View certifications</Link></li>
        </ul>
      </section>
    </>
  );
}