export interface CompanyArticle {
  title: string;
  id: string;
  image: File;
  content: string;
}

export interface EditCompanyArticle {
  title: string;
  title_en: string;
  image: string;
  content: string;
  content_en: string;
}
