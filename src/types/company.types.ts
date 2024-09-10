export interface CompanyArticle {
  name: string;
  description: string;
  image: File;
}

export interface EditCompanyArticle extends CompanyArticle {
  id: string;
}
