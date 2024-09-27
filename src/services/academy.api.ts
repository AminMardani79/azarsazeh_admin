import { CreateAcademy, EditAcademyArticle } from '../types/academy.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAcademyArticles = () => apiService.get('/blogs/academies/');

const getAcademyArticle = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/blogs/academies/${queryKey[1]}`);

const removeAcademyArticle = (id: string) =>
  apiService.delete(`/blogs/academies/${id}/delete`);

const createAcademyArticle = (data: CreateAcademy) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('image', data.images[0]);
  return apiService.post('/blogs/academies/create/', formData);
};

const editAcademyArticle = (data: EditAcademyArticle) => {
  return apiService.put(`/blogs/academies/${data.id}/update`, data);
};

// client queries
export const useAcademyArticles = () =>
  useQuery({ queryKey: ['academy-articles'], queryFn: getAcademyArticles });

export const useAcademyArticle = (id: string) =>
  useQuery({ queryKey: ['academy-articles', id], queryFn: getAcademyArticle });

export const useCreateAcademyArticle = () =>
  useMutation({
    mutationFn: createAcademyArticle,
  });

export const useEditAcademyArticle = () =>
  useMutation({
    mutationFn: editAcademyArticle,
  });

export const useRemoveAcademyArticle = () =>
  useMutation({
    mutationFn: removeAcademyArticle,
  });
