/* eslint-disable @next/next/no-img-element */
import { tagCategoryMap, tagColors, tagIcons } from "@/components/interfaces/tags_interface";
import { Experience_Interface } from "../../interfaces/experience_interface";
import { useEffect, useState } from "react";

export const ProjectCard = ({ experience }: { experience: Experience_Interface }) => {
  const [imageIndex, setImageIndex] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const images = experience.images && experience.images.length > 0 ? experience.images : experience.image ? [experience.image] : [];

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="bg-white text-black rounded-lg shadow-md p-4 space-y-2 h-full">
      {images.length > 0 && (
        <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden rounded-md bg-black">
          <img
            src={images[imageIndex]}
            alt={`${experience.title} screenshot ${imageIndex + 1}`}
            className="rounded w-full h-full object-cover"
          />
        </div>
      )}

      <h2 className="text-xl font-bold">{experience.title}</h2>
      <p className="text-sm text-gray-600">
        {experience.company} • {experience.start} - {experience.end}
      </p>
      <p className="mb-0">{experience.short_description}</p>
      <small className="text-gray-600 hidden md:inline">{experience.long_description?.map((bulletPoint: string) => {
        return(
          <span key={bulletPoint}>
            {bulletPoint} <br></br>
          </span>
        );
      })}</small>
      <div className="flex flex-wrap gap-2 mt-4">
        {experience.tags.map((tag: string) => {
          const category = tagCategoryMap[tag] || "default";
          const colorClass = tagColors[category] || tagColors.default;
          const icon = tagIcons[category] || null;
          return (
            <span
              key={tag}
              className={`inline-flex items-center ${colorClass} px-4 py-1 text-s rounded-full`}
            >
              {icon} {tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};