export interface Job {
  title: string;
  location: string;
  category: { id: string; title: string };
  id: string;
}

export interface EditJob extends Job {
  id: string;
}

export interface JobCategory {
  id: string;
  title: string;
}

export interface JobRequest {
  id: string;
  fullname: string;
  job: any;
}

export interface EditJobCategory extends JobCategory {
  id: string;
}

export interface CreateJobCategory {
  title: string;
}

export interface CreateJob {
  title: string;
  location: string;
  category: { value: string; label: string };
}
