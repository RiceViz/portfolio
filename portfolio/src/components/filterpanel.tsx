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

  const clearFilters = () => {setFilters({type: undefined, tags: []})};

  const allTags = Object.keys(tagCategoryMap);
  const categorizedTags: Record<string, string[]> = {};
  allTags.forEach((tag) => {
    const category = tagCategoryMap[tag] || "default";
    if (!categorizedTags[category]) categorizedTags[category] = [];
    categorizedTags[category].push(tag);
  });


  
  return (
    <details className="border-b-2 border-gray-200 p-4 mt-4 text-sm">
      <summary className="flex justify-between cursor-pointer text-white text-lg font-bold items-center">Filter Options
      <button onClick={clearFilters} className="bg-red-500/70 rounded-md p-2 text-sm m-0">
        Clear All Filters
      </button>
      </summary>
      <div className="space-y-4 mt-2">
        <div className="flex items-center">
          <span className="w-16 mt-1.5 text-white font-semibold">Type</span>
          <select
            onChange={handleTypeChange}
            value={filters.type || "all"}
            className="mt-1.5 p-2 text-sm text-white bg-black border border-white/20 rounded"
          >
            <option className="text-white" value="all">All</option>
            <option className="text-white" value="job">Jobs</option>
            <option className="text-white" value="project">Projects</option>
            <option className="text-white" value="game">Games</option>
          </select>
        </div>
        {Object.entries(categorizedTags).map(([category, tags]) => (
          <details key={category} className="bg-white/5 rounded p-2">
            <summary className="cursor-pointer font-semibold text-white capitalize mb-1">
              {category}
            </summary>
            <div className="flex flex-wrap gap-2.5 mt-3">
              {tags.map((tag) => {
                const colorClass = tagColors[category] || tagColors.default;
                const icon = tagIcons[category] || null;
                const isActive = filters.tags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => handleTagToggle(tag)}
                    className={`inline-flex items-center gap-.5 px-2.5 py-1 text-sm rounded-full border hover:scale-110 transition-all duration-150 ease-in-out ${
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
          </details>
        ))}
      </div>
    </details>
  );
};

