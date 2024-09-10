import { CompanyArticle, EditCompanyArticle } from '../types/company.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getCompanyArticles = () => apiService.get('/company/articles');

const getCompanyArticle = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeCompanyArticle = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

const createCompanyArticle = (data: CompanyArticle) =>
  apiService.post('/company/articles', data);

const editCompanyArticle = (data: EditCompanyArticle) =>
  apiService.put('/company/articles', data);

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
