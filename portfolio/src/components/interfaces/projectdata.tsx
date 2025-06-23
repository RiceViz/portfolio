import { Experience_Interface } from "./experience_interface";

export const experiences: Experience_Interface[] = [
  {
    id: "1",
    type: "job",
    company: "University of Delaware",
    title: "Residential Assistant",
    start: "02/2023",
    end: "05/2025",
    short_description:
      "Fostered a sense of community and inclusivity, resolved conflicts, and managed administrative tasks for residential students.",
    long_description:
    [
    "● Fostered an inclusive environment and a sense of community for residents living on campus by organizing social, educational, and cultural events.",
    "● Partnered with colleagues to mediate conflicts and disputes among residents, while being available for on-call duty in critical situations.",
    "● Performed administrative tasks, such as maintaining records, room inspections, and managing check-in and check-out procedures."
    ],
    tags: ["Full-time"],
    images: ["/projects/RAJob.jpg"]
  },
  {
    id: "2",
    type: "job",
    company: "Home Mattress Center",
    title: "Website Manager & SEO",
    start: "06/2023",
    end: "08/2023",
    short_description:
      "Improved SEO and analytics integration for enhanced web traffic and media presentation.",
    long_description:
    [
    "● Implemented on-page, off-page, and technical search engine optimization to enhance the website’s visibility, authority and speed.",
    "● Utilized Google Analytics to track and analyze website traffic and performance to provide regular reports and recommendations.",
    "● Oversaw creation of multimedia assets such as images, videos, and infographics for use on websites."
    ],
    tags: ["SEO", "Internship","HTML","CSS"],
    images: ["/projects/HomeMattressCenter.png"]
  },
  {
    id: "3",
    type: "job",
    company: "University Of Delaware Study Abroad",
    title: "Student Teacher",
    start: "01/2023",
    end: "02/2023",
    short_description:
      "Developed and taught a CS curriculum and educational game using Phaser and TypeScript for elementary students in Honolulu, HI.",
    long_description:
    [
    "● Traveled to Hawaii for a month during the winter session to teach elementary school students about basic Computer Science concepts such as sequences, data types, and algorithms.",
    "● Drafted, developed and tested an educational game in a team of 4 using Typescript and Phaser for elementary/middle school students to test and play.",
    "● Utilized Github, Git, and version control. Conducted code reviews, source control management and build/testing processes."
    ],
    tags: ["Internship", "TypeScript", "Phaser", "HTML", "CSS","React"],
    images: ["/projects/TaroMama.png"],
    rating: 1,
  },
  {
    id: "4",
    type: "project",
    company: "Personal Project",
    title: "AI-Adventures",
    start: "12/2024",
    end: "01/2025",
    short_description:
      "Text-based AI adventure game using OpenAI, DALL-E, and Tkinter for an interactive narrative experience.",
    long_description:
    [
    "● A text-based adventure game using OpenAI, DALL-E and Tkinter in Python to guide the user through an unique and immersive experience and story.",
    "● Uses one of OpenAI’s large language models and natural language processes to decipher and generate human language to make an effective and cohesive story for the user with the use of embeddings and image generation."
    ],
    tags: ["Python", "OpenAI", "Tkinter", "Machine Learning"],
    images: ["/projects/AIAdventures1.png","/projects/AIAdventures2.png","/projects/AIAdventures3.png",],
  },
  {
    id: "5",
    type: "project",
    company: "Class Project",
    title: "ESports Arena Scheduler",
    start: "08/2024",
    end: "12/2024",
    short_description:
      "Angular-based site to manage ESports schedules with full-stack features including user auth and API integration.",
    long_description:
    [
    "● Created an Angular website that manages ESports schedules for different teams with user authentication. Implemented both frontend functions and user interfaces as well as database and API calls and optimization for scalability.",
    "● Successfully pitched and launched the website to ESports manager and coordinator of University Of Delaware."
    ],
    tags: ["Angular", "TypeScript", "Full-stack","HTML", "CSS","Firebase"],
    images: ["/projects/Arena1.png","/projects/Arena2.png","/projects/Arena3.png",],
    rating: 2,
  },
  {
    id: "6",
    type: "project",
    company: "Class Project",
    title: "Fractal Movies with CUDA",
    start: "11/2023",
    end: "12/2023",
    short_description:
      "Parallelized fractal video rendering app using CUDA and Shell for performance acceleration.",
    long_description:
    [
    "● Developed a GPU-accelerated application using CUDA to parallelize fractal image generation and create continuous zoom-loop movies.",
    "● Applied C, Shell scripting, and parallel computing techniques to optimize performance and rendering speed."
    ],
    tags: ["CUDA", "C/C++", "Shell"],
    images: ["/projects/fractal.gif"]
  },
  {
    id: "7",
    type: "project",
    company: "Hackathon Project",
    title: "Post-Pandemic Office Space Visualizer",
    start: "05/2025",
    end: "05/2025",
    short_description:
      "Data visualization app for Savillis dataset using charts and external government datasets, awarded Best Use of Resources.",
    long_description:
    [
    "● Created a presentation organizing and analyzing a large dataset given by Savillis for a hackathon hosted by The University Of Delaware and the Data Science Institute.",
    "● Incorporated a concise hypothesis from the given data using data visualization with graphs/charts and the use of outside datasets and resources from The U.S. Bureau Of Labor Statistics.",
    "● Presentation won ‘Best Use Of Outside Resources’ at the event, winning over 15 other different teams of size 3-5."
    ],
    tags: ["Python", "Data Analysis", "RStudio","R"],
    images: ["/projects/DSII1.png","/projects/DSII2.png","/projects/DSII3.png","/projects/DSII4.png",],
    rating: 2,
  },
  {
    id: "8",
    type: "project",
    company: "Class Project",
    title: "Custom LLM with PyTorch",
    start: "02/2025",
    end: "05/2025",
    short_description:
      "Created a GPT-2-like LLM focused on common sense reasoning, outperforming GPT-2 on HellaSwag with fewer tokens.",
    long_description:
    [
    "● Replicated GPT-2 using PyTorch, training a generative language model focused on common sense reasoning. Achieved higher accuracy than GPT-2 on HellaSwag evaluation while using 10x fewer tokens.",
    "● Pretrained text with educational texts from the web, only using 10B tokes (~20 GB)."
    ],
    tags: ["LLM", "PyTorch", "Machine Learning"],
    images: ["/projects/LLM1.png","/projects/LLM2.png","/projects/LLM3.png","/projects/LLM4.png",],
    rating: 3,
  },
    {
    id: "9",
    type: "game",
    company: "Gamejam Project",
    title: "Climate Chantey",
    start: "03/2024",
    end: "04/2024",
    short_description:
      "Developed a game for a game jam hosted by the University Of Delaware and funded by the National Science Foundation, awared Best Women Leadership Game.",
    long_description:
    [
    "● Developed a nautical-themed game focused on ocean conservation, incorporating original voice acting to enhance humor and immersion.",
    "● Assigned tasks, coordinated team roles, and finalized game polish to ensure a smooth submission under a tight deadline.",
    "● Project earned recognition for leadership, creativity, and collaborative storytelling."
    ],
    tags: ["C#", "Unity", "Game Development"],
    images: ["/projects/ClimateChantey.png"]
  },
  {
    id: "10",
    type: "project",
    company: "Hackathon Project",
    title: "U-GO",
    start: "03/2023",
    end: "03/2023",
    short_description:
      "A custom local GPS application for students at The University Of Delaware, awarded first place in its category winning $1,600 hosted by The University Of Delaware.",
    long_description:
    [
    "● Built a campus-focused GPS prototype to provide accurate building-level navigation, outperforming generic map tools.",
    "● Collaborated and led in a 3-person team to ideate, develop, and present the project within 24 hours.",
    "● Secured 1st place among 30+ teams for user-centered design, innovation, and clear problem-solving."
    ],
      tags: ["Java"],
    images: ["/projects/UGO.png"],
    rating: 3,
  }
];

