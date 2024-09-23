export interface AcademyArticle {
  title: string;
  content: string;
  image: File;
}

export interface EditAcademyArticle extends AcademyArticle {
  id: string;
}
