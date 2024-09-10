export interface AcademyArticle {
  name: string;
  description: string;
  image: File;
}

export interface EditAcademyArticle extends AcademyArticle {
  id: string;
}
