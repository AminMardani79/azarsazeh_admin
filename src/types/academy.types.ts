export interface AcademyArticle {
  title: string;
  content: string;
  image: File;
  id: string;
}

export interface EditAcademyArticle extends AcademyArticle {
  id: string;
}

export interface CreateAcademy {
  title: string;
  images: File[];
}
