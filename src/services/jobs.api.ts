import { EditJob, Job } from '../types/job.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis

// jobs
const getJobs = () => apiService.get('/company/articles');

const getJob = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeJob = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

const createJob = (data: Job) => apiService.post('/company/articles', data);

const editJob = (data: EditJob) => apiService.put('/company/articles', data);

// job categories
const getJobCategories = () => apiService.get('/company/articles');

const getJobCategory = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeJobCategory = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

const createJobCategory = (data: Job) =>
  apiService.post('/company/articles', data);

const editJobCategory = (data: EditJob) =>
  apiService.put('/company/articles', data);

// client queries
export const useJobs = () =>
  useQuery({ queryKey: ['company-articles'], queryFn: getJobs });

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

export const useJobCategories = () =>
  useQuery({ queryKey: ['company-articles'], queryFn: getJobCategories });

export const useJobCategory = (id: string) =>
  useQuery({ queryKey: ['company-articles', id], queryFn: getJobCategory });

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
