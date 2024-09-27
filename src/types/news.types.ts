export interface News {
  title: string;
  content: string;
  image: File;
  id: string;
}

export interface EditNews extends News {
  id: string;
}

export interface CreateNews {
  title: string;
  meta_title: string;
  content: string;
  images: File[];
}
