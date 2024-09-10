export interface News {
  name: string;
  description: string;
  image: File;
}

export interface EditNews extends News {
  id: string;
}
