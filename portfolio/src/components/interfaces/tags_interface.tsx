/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Code, Wrench, Briefcase } from "lucide-react";
import { JSX } from "react";

export const tagCategoryMap: Record<string, string> = {
  // Coding Languages
  "Python": "python",
  "C#": "language",
  "C/C++": "language",
  "Java": "language",
  "JavaScript": "language",
  "TypeScript": "language",
  "HTML": "language",
  "R": "language",

  // Libraries/Frameworks/Tools
  "React": "tool",
  "Angular": "tool",
  "Tkinter": "tool",
  "Next.js": "tool",
  "Unity": "tool",
  "RStudio": "tool",
  "Firebase": "tool",

  // Work Type
  "Internship": "role",
  "Freelance": "role",
  "Full-time": "role",
};

export const tagColors: Record<string, string> = {
    python: "bg-yellow-200 text-yellow-800",
    language: "bg-yellow-200 text-yellow-800",
    tool: "bg-blue-200 text-blue-800",
    role: "bg-green-200 text-green-800",
    default: "bg-gray-200 text-gray-800",
};

export const tagIcons: Record<string, JSX.Element> = {
    python: <img className="w-5 h-5 mr-1 mt-1" src="./icons/python-logo-only.png"></img>,
    language: <Code className="w-3 h-3 mr-1" />,
    tool: <Wrench className="w-3 h-3 mr-1" />,
    role: <Briefcase className="w-3 h-3 mr-1" />,
};
