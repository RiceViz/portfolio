"use client";

import { useState } from "react";
import { ProjectCard } from "./projectcard";
import { FilterPanel } from "../filterpanel";
import { SearchBar } from "../searchbar";
import { experiences } from "./projectdata";
import { Experience_Interface } from "../interfaces/experience_interface";
import { motion, AnimatePresence } from "framer-motion";

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
      className="fixed inset-0 z-[9999] bg-black bg-opacity-90 text-white p-6 overflow-y-auto"
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-6 text-2xl hover:text-red-400"
      >
        ✕
      </button>
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-4xl font-bold mb-6"
      >
        Experience & Projects
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
              <ProjectCard experience={exp} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};