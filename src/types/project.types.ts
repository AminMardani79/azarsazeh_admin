export type Projects = {
  id: string;
  title: string;
  categories: any[]
};

export type ProjectCategories = {
  id: string;
  title: string;
}

export type CreateProjectCategory = {
  title: string,
  image: File
}

export type CreateProject = {
  content: string;
  title: string;
  categories: string[];
  images: File[];
}
