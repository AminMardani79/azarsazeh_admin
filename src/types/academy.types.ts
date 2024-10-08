export interface AcademyArticle {
  title: string;
  content: string;
  image: File;
  id: string;
}

export interface EditAcademyArticle {
  title: string;
  title_en: string;
  content: string;
  content_en: string;
  image: string;
}

export interface CreateAcademy {
  title: string;
  images: File[];
}
