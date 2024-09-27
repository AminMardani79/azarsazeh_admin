import { CreateProject, CreateProjectCategory } from '../types/project.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis

// Projects
const getProjects = () => apiService.get('/blogs/projects/');

const getProject = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeProject = (id: string) =>
  apiService.delete(`/blogs/projects/${id}/delete/`);

const createProject = (data: CreateProject) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('content', data.content);
  formData.append('categories', data.categories.value);
  formData.append('images', data.images[0]);
  formData.append('images', data.images[1]);

  return apiService.post('/blogs/projects/create/', formData);
};

const editProject = (data: any) => apiService.put('/company/articles', data);

// Project categories
const getProjectCategories = () => apiService.get('/blogs/project_categories/');

const getProjectCategory = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeProjectCategory = (id: string) =>
  apiService.delete(`/blogs/project_categories/${id}/delete/`);

const createProjectCategory = (data: CreateProjectCategory) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('image', data.images[0]);

  return apiService.post('/blogs/project_categories/create/', formData);
};

const editProjectCategory = (data: any) =>
  apiService.put('/company/articles', data);

// client queries
export const useProjects = (categoryId?: string) =>
  useQuery({ queryKey: ['projects', categoryId], queryFn: getProjects });

export const useProject = (projectId: string) =>
  useQuery({ queryKey: ['projects', projectId], queryFn: getProject });

export const useCreateProject = () =>
  useMutation({
    mutationFn: createProject,
  });

export const useEditProject = () =>
  useMutation({
    mutationFn: editProject,
  });

export const useRemoveProject = () =>
  useMutation({
    mutationFn: removeProject,
  });

export const useProjectCategories = (enabled: boolean = true) =>
  useQuery({
    queryKey: ['project-categories'],
    queryFn: getProjectCategories,
    enabled: enabled,
  });

export const useProjectCategory = (id: string) =>
  useQuery({
    queryKey: ['project-categories', id],
    queryFn: getProjectCategory,
  });

export const useCreateProjectCategory = () =>
  useMutation({
    mutationFn: createProjectCategory,
  });

export const useEditProjectCategory = () =>
  useMutation({
    mutationFn: editProjectCategory,
  });

export const useRemoveProjectCategory = () =>
  useMutation({
    mutationFn: removeProjectCategory,
  });
