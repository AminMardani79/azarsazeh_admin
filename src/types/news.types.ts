export interface News {
  title: string;
  content: string;
  image: File;
}

export interface EditNews extends News {
  id: string;
}
