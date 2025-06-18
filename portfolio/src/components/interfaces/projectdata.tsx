import { Experience_Interface } from "./experience_interface";

export const experiences: Experience_Interface[] = [
  {
    id: "1",
    type: "job",
    company: "University of Delaware",
    title: "Residential Assistant",
    start: "02-2023",
    end: "05-2025",
    short_description:
      "Fostered a sense of community and inclusivity, resolved conflicts, and managed administrative tasks for residential students.",
    tags: ["Full-time"],
    images: ["/screenshots/ud-ra-1.png", "/screenshots/ud-ra-2.png"]
  },
  {
    id: "2",
    type: "job",
    company: "Home Mattress Center",
    title: "Website Manager & SEO",
    start: "06-2023",
    end: "08-2023",
    short_description:
      "Improved SEO and analytics integration for enhanced web traffic and media presentation.",
    tags: ["SEO", "Internship","HTML","CSS"],
    images: ["/screenshots/hmc-1.png"]
  },
  {
    id: "3",
    type: "job",
    company: "University Of Delaware Study Abroad",
    title: "Student Teacher",
    start: "01-2023",
    end: "02-2023",
    short_description:
      "Developed and taught a CS curriculum and educational game using Phaser and TypeScript for elementary students in Honolulu, HI.",
    tags: ["Internship", "TypeScript", "Phaser", "HTML", "CSS","React"],
    images: ["/screenshots/honolulu-1.png"]
  },
  {
    id: "4",
    type: "project",
    company: "Personal Project",
    title: "AIdventures",
    start: "12-2024",
    end: "01-2025",
    short_description:
      "Text-based AI adventure game using OpenAI, DALL-E, and Tkinter for an interactive narrative experience.",
    tags: ["Python", "OpenAI", "Tkinter", "Machine Learning"],
    images: ["/screenshots/aidventures-1.png", "/screenshots/aidventures-2.png"]
  },
  {
    id: "5",
    type: "project",
    company: "Class Project",
    title: "ESports Arena Scheduler",
    start: "08-2024",
    end: "12-2024",
    short_description:
      "Angular-based site to manage ESports schedules with full-stack features including user auth and API integration.",
    tags: ["Angular", "TypeScript", "Full-stack","HTML", "CSS","Firebase"],
    images: ["/screenshots/esports-1.png"]
  },
  {
    id: "6",
    type: "project",
    company: "Class Project",
    title: "Fractal Movies with CUDA",
    start: "11-2023",
    end: "12-2023",
    short_description:
      "Parallelized fractal video rendering app using CUDA and Shell for performance acceleration.",
    tags: ["CUDA", "C/C++", "Shell"],
    images: ["/screenshots/fractal-1.png"]
  },
  {
    id: "7",
    type: "project",
    company: "Hackathon Project",
    title: "Post-Pandemic Office Space Visualizer",
    start: "05-2025",
    end: "05-2025",
    short_description:
      "Data visualization app for Savillis dataset using charts and external government datasets, awarded Best Use of Resources.",
    tags: ["Python", "Data Analysis", "RStudio","R"],
    images: ["/screenshots/office-space-1.png"]
  },
  {
    id: "8",
    type: "project",
    company: "Class Project",
    title: "Custom LLM with PyTorch",
    start: "02-2025",
    end: "05-2025",
    short_description:
      "Created a GPT-2-like LLM focused on common sense reasoning, outperforming GPT-2 on HellaSwag with fewer tokens.",
    tags: ["LLM", "PyTorch", "Machine Learning"],
    images: ["/screenshots/llm-1.png"]
  },
    {
    id: "9",
    type: "game",
    company: "Gamejam Project",
    title: "Climate Chantey",
    start: "03-2024",
    end: "04-2024",
    short_description:
      "Developed a game for a game jam hosted by the University Of Delaware and funded by the National Science Foundation, awared Best Women Leadership Game.",
    tags: ["C#", "Unity", "Game Development"],
    images: ["/projects/ClimateChantey.png"]
  },
  {
    id: "10",
    type: "project",
    company: "Hackathon Project",
    title: "U-GO",
    start: "03-2023",
    end: "03-2023",
    short_description:
      "A custom local GPS application for students at The University Of Delaware, awared first place in its category winning $1,600.",
    tags: ["Java"],
    images: ["/projects/UGO.png"]
  }
];

