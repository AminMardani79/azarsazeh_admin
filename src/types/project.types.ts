export type Projects = {
  id: string;
  title: string;
  categories: { title: string }[];
};

export type ProjectCategories = {
  id: string;
  title: string;
};

export type CreateProjectCategory = {
  title: string;
  images: File[];
};

export type CreateProject = {
  content: string;
  title: string;
  categories: { value: string; label: string };
  images: any;
};
