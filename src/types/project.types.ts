export interface Project {
  name: string;
  description: string;
  image: File;
}

export interface EditProject extends Project {
  id: string;
}

export interface ProjectCategory {
  name: string;
  description: string;
  image: File;
}

export interface EditProjectCategory extends ProjectCategory {
  id: string;
}
