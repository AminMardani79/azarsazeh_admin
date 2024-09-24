import { CreateAcademy, EditAcademyArticle } from '../types/academy.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAcademyArticles = () => apiService.get('/blogs/academies/');

const getAcademyArticle = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/blogs/academies/${queryKey[1]}`);

const removeAcademyArticle = (data: { id: string }) =>
  apiService.delete(`/blogs/academies/${data.id}/delete`);

const createAcademyArticle = (data: CreateAcademy) =>
  apiService.post('/blogs/academies/create/', data);

const editAcademyArticle = (data: EditAcademyArticle) => {
  return apiService.put(`/blogs/academies/${data.id}/update`, data);
}

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
