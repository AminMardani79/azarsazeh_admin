import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAllNews = () => apiService.get('/blogs/news/');

const getNews = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/blogs/news/${queryKey[1]}/`);

const removeNews = (id: string) =>
  apiService.delete(`/blogs/news/${id}/delete/`);

const createNews = (data: FormData) =>
  apiService.post('/blogs/news/create/', data);

const editNews = ({ data, id }: { data: FormData; id: string | undefined }) =>
  apiService.put(`/blogs/news/${id}/update/`, data);

// client queries
export const useAllNews = () =>
  useQuery({ queryKey: ['news'], queryFn: getAllNews });

export const useNews = (id: string) =>
  useQuery({ queryKey: ['news', id], queryFn: getNews });

export const useCreateNews = () =>
  useMutation({
    mutationFn: createNews,
  });

export const useEditNews = () =>
  useMutation({
    mutationFn: editNews,
  });

export const useRemoveNews = () =>
  useMutation({
    mutationFn: removeNews,
  });
