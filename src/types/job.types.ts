export interface Job {
  title: string;
  location: string;
  category: File;
}

export interface EditJob extends Job {
  id: string;
}

export interface JobCategory {
  title: string;
  location: string;
  category: File;
}

export interface EditJobCategory extends JobCategory {
  id: string;
}
