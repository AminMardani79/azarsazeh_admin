import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAllContacts = () => apiService.get('/contact/contact_us');

const getContact = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeContact = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

// client queries
export const useContactUs = () =>
  useQuery({ queryKey: ['company-articles'], queryFn: getAllContacts });

export const useContactUsDetail = (id: string) =>
  useQuery({ queryKey: ['company-articles', id], queryFn: getContact });

export const useRemoveContactUs = () =>
  useMutation({
    mutationFn: removeContact,
  });