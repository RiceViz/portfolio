import { SearchBar_Interface } from "./interfaces/searchbar_interface";

export const SearchBar = ({ value, onChange }: SearchBar_Interface) => (
  <input
    type="text"
    placeholder="Search by title, company, or tag..."
    className="w-full p-2 rounded text-black"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);