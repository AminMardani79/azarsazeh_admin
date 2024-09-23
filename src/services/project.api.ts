import { ProjectCategory } from '../types';
import { EditProject, EditProjectCategory, Project } from '../types/project.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis

// Projects
const getProjects = () => apiService.get('/blogs/projects/');

const getProject = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeProject = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

const createProject = (data: Project) => apiService.post('/company/articles', data);

const editProject = (data: EditProject) => apiService.put('/company/articles', data);

// Project categories
const getProjectCategories = () => apiService.get('/blogs/categories/');

const getProjectCategory = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeProjectCategory = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

const createProjectCategory = (data: ProjectCategory) =>
  apiService.post('/company/articles', data);

const editProjectCategory = (data: EditProjectCategory) =>
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

export const useProjectCategories = () =>
  useQuery({ queryKey: ['project-categories'], queryFn: getProjectCategories });

export const useProjectCategory = (id: string) =>
  useQuery({ queryKey: ['project-categories', id], queryFn: getProjectCategory });

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
