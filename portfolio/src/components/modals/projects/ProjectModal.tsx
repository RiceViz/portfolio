"use client";

import { useState } from "react";
import { ProjectCard } from "./projectcard";
import { FilterPanel } from "../../filterpanel";
import { SearchBar } from "../../searchbar";
import { experiences } from "../../interfaces/projectdata";
import { Experience_Interface } from "../../interfaces/experience_interface";
import { motion, AnimatePresence } from "framer-motion";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { AuroraText } from "@/components/magicui/aurora-text";
//import { Download } from 'lucide-react';
import { tagCategoryMap } from "@/components/interfaces/tags_interface";

export const ProjectModal = ({ onClose }: { onClose: () => void }) => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<{ type?: string; tags: string[] }>({
    type: undefined,
    tags: [],
  });

  const filtered = experiences.filter((exp: Experience_Interface) => {
    const matchesType = !filters.type || exp.type === filters.type;
    const matchesTags =
      filters.tags.length === 0 ||
      filters.tags.every((tag) => exp.tags.includes(tag));
    const matchesSearch =
      exp.company.toLowerCase().includes(search.toLowerCase()) ||
      exp.title.toLowerCase().includes(search.toLowerCase()) ||
      exp.tags.join(" ").toLowerCase().includes(search.toLowerCase());
    return matchesType && matchesTags && matchesSearch;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] bg-black bg-opacity-90 text-white p-6 overflow-y-auto overflow-x-hidden"
    >
      <div className="absolute overflow-hidden h-screen w-full -z-1">
        <Meteors />
        <Particles />
      </div>
      {/*<a href="Should Be In Public Folder" download="" className="absolute top-6 right-28 text-lg font-bold drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)] rounded-lg p-3 text-white hover:scale-110">
        <Download className="absolute -left-5 top-3.5" /> Download Resume
      </a>*/}
      <button onClick={onClose} className="absolute top-6 right-6 text-lg font-bold drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)] rounded-lg p-3 text-white hover:scale-110">
        Back
      </button>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="font-bold mb-2"
      >
        <AuroraText className="text-xl md:text-2xl lg:text-4xl font-black mb-2 drop-shadow-[2px_2px_8px_rgba(255,255,255,0.4)]">Experience & Projects</AuroraText>
      </motion.h1>

      <SearchBar value={search} onChange={setSearch} />
      <FilterPanel filters={filters} setFilters={setFilters} />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
        <AnimatePresence>
          {filtered.map((exp: Experience_Interface) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard experience={{
                ...exp,
                 tags: [...exp.tags].sort((a, b) => {
                  const order = ["role", "specialty", "tool", "language"];
                  const catA = tagCategoryMap[a] || "default";
                  const catB = tagCategoryMap[b] || "default";
                  return order.indexOf(catA) - order.indexOf(catB);
                })
               }} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};