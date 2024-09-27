import { CreateNews, EditNews } from '../types/news.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAllNews = () => apiService.get('/blogs/news/');

const getNews = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/news/${queryKey[1]}`);

const removeNews = (id: string) =>
  apiService.delete(`/blogs/news/${id}/delete/`);

const createNews = (data: CreateNews) => {
  const formData = new FormData();
  formData.append('title', data.title);
  formData.append('meta_title', data.meta_title);
  formData.append('content', data.content);
  formData.append('image', data.images[0]);
  return apiService.post('/blogs/news/create/', formData);
};

const editNews = (data: EditNews) => apiService.put('/academy/articles', data);

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
