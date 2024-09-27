export interface Job {
  title: string;
  location: string;
  category: { id: string; title: string };
  id: string;
}

export interface EditJob {
  title: string;
  category: { title: string; id: string };
  location: string;
  work_experiences: string;
  education: string;
  skills: string;
}

export interface JobCategory {
  id: string;
  title: string;
}

export interface JobRequest {
  fullname: string;
  job: { title: string; id: string };
  message: string;
  resume: string;
}

export interface EditJobCategory {
  title: string;
}

export interface CreateJobCategory {
  title: string;
}

export interface CreateJob {
  title: string;
  location: string;
  category: { value: string; label: string };
}
