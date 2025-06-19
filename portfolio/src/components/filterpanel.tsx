import { FilterPanel_Interface } from "./interfaces/filterpanel_interface";
import { tagCategoryMap, tagColors, tagIcons } from "./interfaces/tags_interface";

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

  const allTags = Object.keys(tagCategoryMap);

  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-4 text-sm">
      <select
        onChange={handleTypeChange}
        value={filters.type || "all"}
        className="p-2 text-sm text-white mb-2 rounded hover:border-2 hover:mb-1"
      >
        <option className="text-black" value="all">All</option>
        <option className="text-black" value="job">Jobs</option>
        <option className="text-black" value="project">Projects</option>
        <option className="text-black" value="game">Games</option>
      </select>
      <div className="flex flex-wrap gap-2.5">
        {allTags.map((tag) => {
          const category = tagCategoryMap[tag] || "default";
          const colorClass = tagColors[category] || tagColors.default;
          const icon = tagIcons[category] || null;
          const isActive = filters.tags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => handleTagToggle(tag)}
              className={`inline-flex items-center gap-1 px-4 py-1 text-sm rounded-full border hover:scale-110 ${
                isActive
                  ? `${colorClass} border-transparent`
                  : `bg-gray-200 text-gray-800`
              }`}
            >
              {icon} {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
};
