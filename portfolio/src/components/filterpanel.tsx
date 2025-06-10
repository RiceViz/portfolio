import { FilterPanel_Interface } from "./interfaces/filterpanel_interface";

export const FilterPanel = ({ filters, setFilters }: FilterPanel_Interface) => {
  const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setFilters((prev) => ({ ...prev, type: val === "all" ? undefined : val }));
  };

  const handleTagToggle = (tag: string) => {
    setFilters((prev) => {
      const tags = prev.tags.includes(tag)
        ? prev.tags.filter((t) => t !== tag)
        : [...prev.tags, tag];
      return { ...prev, tags };
    });
  };

  const allTags = ["React", "Next.js", "Unity", "Python", "Internship", "Freelance"];

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4">
      <select
        onChange={handleTypeChange}
        value={filters.type || "all"}
        className="p-2 text-black rounded"
      >
        <option value="all">All</option>
        <option value="job">Jobs</option>
        <option value="project">Projects</option>
      </select>
      <div className="flex flex-wrap gap-2">
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => handleTagToggle(tag)}
            className={`px-3 py-1 text-xs rounded border ${
              filters.tags.includes(tag)
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-white text-black border-gray-300"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};
