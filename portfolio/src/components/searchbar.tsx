import { SearchBar_Interface } from "./interfaces/searchbar_interface";

export const SearchBar = ({ value, onChange }: SearchBar_Interface) => (
  <input
    type="text"
    placeholder="Search by title, company, or tag..."
    className="w-full mb-2 p-2 rounded text-white hover:border-2 hover:mb-1"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);