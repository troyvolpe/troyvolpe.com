import express from "express";

const app = express();
const host = "127.0.0.1";
const port = 3001;

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

app.get("/api/projects", (_req, res) => {
  res.json(projects);
});

app.listen(port, host, () => {
  console.log(`Projects API running at http://${host}:${port}/api/projects`);
});