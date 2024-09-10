import { AcademyArticle, EditAcademyArticle } from '../types/academy.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAcademyArticles = () => apiService.get('/academy/articles');

const getAcademyArticle = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/academy/articles/${queryKey[1]}`);

const removeAcademyArticle = (data: { id: string }) =>
  apiService.delete(`/academy/articles/${data.id}`);

const createAcademyArticle = (data: AcademyArticle) =>
  apiService.post('/academy/articles', data);

const editAcademyArticle = (data: EditAcademyArticle) =>
  apiService.put('/academy/articles', data);

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
