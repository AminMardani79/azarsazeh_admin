import { CreateJob, CreateJobCategory, EditJob } from '../types/job.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis

// jobs
const getJobs = () => apiService.get('/contact/jobs');

const getJob = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeJob = (id: string) =>
  apiService.delete(`/contact/jobs/${id}/delete/`);

const createJob = (data: CreateJob) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('location', data.location);
  formData.append('category', data.category.value);
  return apiService.post('/contact/jobs/create/', formData);
};

const editJob = (data: EditJob) => apiService.put('/company/articles', data);

// job categories
const getJobCategories = () => apiService.get('/contact/job_categories/');

const getJobRequests = () => apiService.get('/contact/cooperation_requests/');

const removeJobRequest = (id: string) =>
  apiService.delete(`/contact/cooperation_requests/${id}/delete/`);

const getJobCategory = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeJobCategory = (id: string) =>
  apiService.delete(`/contact/job_categories/${id}/delete/`);

const createJobCategory = (data: CreateJobCategory) => {
  const formData = new FormData();
  formData.append('title', data.title);
  return apiService.post('/contact/job_categories/create/', formData);
};

const editJobCategory = (data: EditJob) =>
  apiService.put('/company/articles', data);

// client queries
export const useJobs = () => useQuery({ queryKey: ['jobs'], queryFn: getJobs });

export const useJob = (id: string) =>
  useQuery({ queryKey: ['company-articles', id], queryFn: getJob });

export const useCreateJob = () =>
  useMutation({
    mutationFn: createJob,
  });

export const useEditJob = () =>
  useMutation({
    mutationFn: editJob,
  });

export const useRemoveJob = () =>
  useMutation({
    mutationFn: removeJob,
  });

export const useJobCategories = (enabled: boolean = true) =>
  useQuery({
    queryKey: ['job-categories'],
    queryFn: getJobCategories,
    enabled,
  });

export const useJobCategory = (id: string) =>
  useQuery({ queryKey: ['company-articles', id], queryFn: getJobCategory });

export const useJobRequests = () =>
  useQuery({ queryKey: ['job-requests'], queryFn: getJobRequests });

export const useCreateJobCategory = () =>
  useMutation({
    mutationFn: createJobCategory,
  });

export const useEditJobCategory = () =>
  useMutation({
    mutationFn: editJobCategory,
  });

export const useRemoveJobCategory = () =>
  useMutation({
    mutationFn: removeJobCategory,
  });

export const useRemoveJobRequest = () =>
  useMutation({
    mutationFn: removeJobRequest,
  });
