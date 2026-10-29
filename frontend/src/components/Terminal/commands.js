export const commands = {
  help: {
    description: "Display available commands",
    
    execute: () => {
        const commandList = Object.entries(commands);
        
        const formattedCommands = commandList.map(([name, config]) => {
            return `${name.padEnd(16)} ${config.description}`;
        });

        return {
            output: [
                "Available commands:",
                "",
                ...formattedCommands,
            ],
        };
    },
  },

  home:{
    description: "Return to root page",
    execute: () => ({
        output: ["Returning to root page..."],
        navigate: "/"
    })
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

  skills:{
    description: "View my skills",
    execute: () => ({
        output: ["Opening skills page..."],
        navigate: "/skills",
    }),
  },

  projects:{
    description: "View my projects",
    execute: () => ({
        output: ["Opening projects page..."],
        navigate: "/projects",
    }),
  },

  whoami: {
    description: "Navigate to about",
    execute: () => ({
      output: ["Opening about page..."],
      navigate: "/about",
    }),
  },

  certs: {
    description: "Navigate to certifications",
    execute: () => ({
      output: ["Opening certifications..."],
      navigate: "/certifications",
    }),
  },

  clear: {
    description: "Clear terminal",
    execute: () => ({
      clear: true,
    }),
  },

  portfolio: {
    description: "Navigate to portfolio",
    execute: () => ({
      output: ["Opening portfolio..."],
      navigate: "/portfolio",
    }),
  },

  date: {
    description: "See the current date and time in ET",
    execute: () => {
        const currentDate = new Date();

        const formattedDate = currentDate.toLocaleString("en-US", {
            timeZone: "America/New_York",
            dateStyle: "full",
            timeStyle: "medium",
        });

        return {
            output: [formattedDate],
        };
    },
  },

  cd: {
    description: "Navigate to a portfolio section",

    execute: (args) => {
        const destination = args[0];

        const routes = {
            about: "/about",
            projects: "/projects",
            skills: "/skills",
            certs: "/certifications",
            certifications: "/certifications",
            portfolio: "/portfolio",
        };

        if (!destination){
            return {
                output: ["Usage: cd <section>"],
            };
        }

        if (!routes[destination]){
            return {
                output: [`cd: ${destination}: No such directory`],
            };
        }

        return{
            output: [`Opening ${destination}...`],
            navigate: routes[destination],
        };
    },
  },
};