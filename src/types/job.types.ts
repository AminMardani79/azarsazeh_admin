export interface Job {
  title: string;
  location: string;
  category: { id: string; title: string };
  id: string;
}

export interface EditJob {
  title: string;
  title_en: string;
  category: { title: string; id: string };
  location: string;
  location_en: string;
  work_experiences: string;
  work_experiences_en: string;
  education: string;
  education_en: string;
  skills: string;
  skills_en: string;
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
  title_en: string;
}

export interface CreateJobCategory {
  title: string;
}

export interface CreateJob {
  title: string;
  location: string;
  category: { value: string; label: string };
}
