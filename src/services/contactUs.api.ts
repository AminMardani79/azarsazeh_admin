import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAllContacts = () => apiService.get('/company/articles');

const getContact = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeContact = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

// client queries
export const useContactUss = () =>
  useQuery({ queryKey: ['company-articles'], queryFn: getAllContacts });

export const useContactUs = (id: string) =>
  useQuery({ queryKey: ['company-articles', id], queryFn: getContact });

export const useRemoveContactUs = () =>
  useMutation({
    mutationFn: removeContact,
  });