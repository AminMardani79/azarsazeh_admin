export interface Job {
  title: string;
  location: string;
  category: string;
}

export interface EditJob extends Job {
  id: string;
}

export interface JobCategory {
  title: string;
}

export interface JobRequest {
  fullname: string;
  job: any;
}

export interface EditJobCategory extends JobCategory {
  id: string;
}
