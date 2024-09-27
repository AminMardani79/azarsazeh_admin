import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAcademyArticles = () => apiService.get('/blogs/academies/');

const getAcademyArticle = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/blogs/academies/${queryKey[1]}`);

const removeAcademyArticle = (id: string) =>
  apiService.delete(`/blogs/academies/${id}/delete`);

const createAcademyArticle = (data: FormData) =>
  apiService.post('/blogs/academies/create/', data);

const editAcademyArticle = ({
  data,
  id,
}: {
  data: FormData;
  id: string | undefined;
}) => {
  return apiService.patch(`/blogs/academies/${id}/update`, data);
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
