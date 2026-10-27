export const commands = {
  help: {
    description: "Display available commands",
    execute: () => ({
      output: [
        "Available commands:",
        "",
        "help          Show available commands",
        "whoami        Learn about me!",
        "ls            List portfolio sections",
        "cd projects   Navigate to projects",
        "certs         View certifications",
        "clear         Clear terminal",
      ],
    }),
  },

  whoami: {
    description: "Navigate to About",
    execute: () => ({
      output: ["Opening About page..."],
      navigate: "/about",
    }),
  },

  ls: {
    description: "List portfolio sections",
    execute: () => ({
      output: [
        "about/",
        "projects/",
        "certifications/",
        "skills/",
        "contact/",
      ],
    }),
  },

  "cd projects": {
    description: "Navigate to Projects",
    execute: () => ({
      output: ["Opening Projects..."],
      navigate: "/projects",
    }),
  },

  certs: {
    description: "Navigate to Certifications",
    execute: () => ({
      output: ["Opening Certifications..."],
      navigate: "/certifications",
    }),
  },

  clear: {
    description: "Clear terminal",
    execute: () => ({
      clear: true,
    }),
  },
};