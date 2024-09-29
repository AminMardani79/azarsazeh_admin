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

export type EditProject = {
  title: string;
  title_en: string;
  meta_title: string;
  meta_title_en: string;
  content: string;
  content_en: string;
  images: { id: string; image: string }[];
  categories: { title: string; id: string };
};
