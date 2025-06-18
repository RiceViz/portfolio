/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { Code, Wrench, Briefcase, Sparkles } from "lucide-react";
import { JSX } from "react";

export const tagCategoryMap: Record<string, string> = {
  // Coding Languages
  "Python": "language",
  "C#": "language",
  "C/C++": "language",
  "Java": "language",
  "JavaScript": "language",
  "TypeScript": "language",
  "HTML": "language",
  "CSS": "language",
  "R": "language",

  // Libraries/Frameworks/Tools
  "React": "tool",
  "Angular": "tool",
  "Tkinter": "tool",
  "Next.js": "tool",
  "Unity": "tool",
  "RStudio": "tool",
  "Firebase": "tool",
  "Phaser": "tool",
  "OpenAI": "tool",
  "Shell": "tool",
  "CUDA": "tool",
  "PyTorch": "tool",

  // Work Type
  "Internship": "role",
  "Freelance": "role",
  "Full-time": "role",

  // Specialty domains
  "SEO": "specialty",
  "Full-stack": "specialty",
  "Machine Learning": "specialty",
  "Data Analysis": "specialty",
  "LLM": "specialty",
};

export const tagColors: Record<string, string> = {
    language: "bg-yellow-200 text-yellow-800",
    tool: "bg-blue-200 text-blue-800",
    role: "bg-green-200 text-green-800",
      specialty: "bg-purple-200 text-purple-800",
    default: "bg-gray-200 text-gray-800",
};

export const tagIcons: Record<string, JSX.Element> = {
    language: <Code className="w-3 h-3 mr-1" />,
    tool: <Wrench className="w-3 h-3 mr-1" />,
    role: <Briefcase className="w-3 h-3 mr-1" />,
    specialty: <Sparkles className="w-3 h-3 mr-1" />, 
};
