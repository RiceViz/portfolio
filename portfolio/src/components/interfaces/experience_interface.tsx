export interface Experience_Interface {
  id: string;
  type: string;
  company: string;
  title: string;
  start: string;
  end: string;
  short_description: string;
  long_description?: string[];
  tags: string[];
  image?: string;
  images?: string[];
  rating?: number;
}