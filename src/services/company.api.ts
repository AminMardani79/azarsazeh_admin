import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getCompanyArticles = () => apiService.get('/blogs/about_us/');

const getCompanyArticle = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/blogs/about_us/${queryKey[1]}/`);

const removeCompanyArticle = (id: string) =>
  apiService.delete(`/blogs/about_us/${id}/delete/`);

const createCompanyArticle = (data: FormData) =>
  apiService.post('/blogs/about_us/create/', data);

const editCompanyArticle = ({ data, id }: { data: FormData; id: string }) =>
  apiService.put(`/blogs/about_us/${id}/update/`, data);

// client queries
export const useCompanyArticles = () =>
  useQuery({ queryKey: ['company-articles'], queryFn: getCompanyArticles });

export const useCompanyArticle = (id: string) =>
  useQuery({ queryKey: ['company-articles', id], queryFn: getCompanyArticle });

export const useCreateCompanyArticle = () =>
  useMutation({
    mutationFn: createCompanyArticle,
  });

export const useEditCompanyArticle = () =>
  useMutation({
    mutationFn: editCompanyArticle,
  });

export const useRemoveCompanyArticle = () =>
  useMutation({
    mutationFn: removeCompanyArticle,
  });
