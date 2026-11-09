const skillGroups = [
  {
    id: "portfolio-tools",
    title: "Tools used in this portfolio",
    items: [
      "React for building page components",
      "React Router for navigation between pages",
      "Vite for local development and production builds",
    ],
  },
  {
    id: "backend-learning",
    title: "Current learning focus",
    items: [
      "Designing HTTP endpoints and JSON responses",
      "Validating incoming requests and handling errors",
      "Reading and writing data through an API",
    ],
  },
];

export default function Skills() {
  return (
    <>
      <h1>Skills</h1>

      {skillGroups.map(({ id, title, items }) => (
        <section key={id} aria-labelledby={id}>
          <h2 id={id}>{title}</h2>
          <ul>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}