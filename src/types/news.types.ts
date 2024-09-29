export interface News {
  title: string;
  content: string;
  image: File;
  id: string;
}

export interface EditNews{
  title: string;
  title_en: string;
  meta_title: string;
  meta_title_en: string;
  content: string;
  content_en: string;
  image: string;
}

export interface CreateNews {
  title: string;
  meta_title: string;
  content: string;
  images: File[];
}
