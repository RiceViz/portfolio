/* eslint-disable @next/next/no-img-element */
import { Experience_Interface } from "../interfaces/experience_interface";

export const ProjectCard = ({ experience }: { experience: Experience_Interface}) => (
  <div className="bg-white text-black rounded-lg shadow-md p-4 space-y-2">
    {experience.image && (
      <img
        src={experience.image}
        alt={experience.title}
        className="rounded w-full h-48 object-cover"
      />
    )}
    <h2 className="text-xl font-bold">{experience.title}</h2>
    <p className="text-sm text-gray-600">
      {experience.company} • {experience.start} - {experience.end}
    </p>
    <p>{experience.description}</p>
    <div className="flex flex-wrap gap-2 mt-2">
      {experience.tags.map((tag: string) => (
        <span
          key={tag}
          className="bg-gray-200 px-2 py-1 text-xs rounded"
        >
          {tag}
        </span>
      ))}
    </div>
  </div>
);