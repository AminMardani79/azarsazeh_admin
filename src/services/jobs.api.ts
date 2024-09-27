import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis

// jobs
const getJobs = () => apiService.get('/contact/jobs');

const getJob = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/contact/jobs/${queryKey[1]}/`);

const removeJob = (id: string) =>
  apiService.delete(`/contact/jobs/${id}/delete/`);

const createJob = (data: FormData) =>
  apiService.post('/contact/jobs/create/', data);

const editJob = ({ data, id }: { data: FormData; id: string }) =>
  apiService.patch(`/contact/jobs/${id}/update/`, data);

// job categories
const getJobCategories = () => apiService.get('/contact/job_categories/');

const getJobRequests = () => apiService.get('/contact/cooperation_requests/');

const getJobRequest = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/contact/cooperation_requests/${queryKey[1]}/`);

const removeJobRequest = (id: string) =>
  apiService.delete(`/contact/cooperation_requests/${id}/delete/`);

const getJobCategory = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/contact/job_categories/${queryKey[1]}/`);

const removeJobCategory = (id: string) =>
  apiService.delete(`/contact/job_categories/${id}/delete/`);

const createJobCategory = (data: FormData) =>
  apiService.post('/contact/job_categories/create/', data);

const editJobCategory = ({
  data,
  id,
}: {
  data: FormData;
  id: string | undefined;
}) => apiService.patch(`contact/job_categories/${id}/update/`, data);

// client queries
export const useJobs = () => useQuery({ queryKey: ['jobs'], queryFn: getJobs });

export const useJob = (id: string) =>
  useQuery({ queryKey: ['jobs', id], queryFn: getJob });

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
  useQuery({ queryKey: ['job-categories', id], queryFn: getJobCategory });

export const useJobRequests = () =>
  useQuery({ queryKey: ['job-requests'], queryFn: getJobRequests });

export const useJobRequest = (id: string) =>
  useQuery({ queryKey: ['job-requests', id], queryFn: getJobRequest });

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
