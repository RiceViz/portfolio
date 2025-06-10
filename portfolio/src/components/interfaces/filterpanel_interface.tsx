export interface FilterPanel_Interface {
  filters: { type?: string; tags: string[] };
  setFilters: React.Dispatch<React.SetStateAction<{ type?: string; tags: string[] }>>;
}
