import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAllContacts = () => apiService.get('/contact/contact_us');

const getContact = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeContact = (id: string) =>
  apiService.delete(`/contact/contact_us/${id}/delete/`);

// client queries
export const useContactUs = () =>
  useQuery({ queryKey: ['contact-us'], queryFn: getAllContacts });

export const useContactUsDetail = (id: string) =>
  useQuery({ queryKey: ['company-articles', id], queryFn: getContact });

export const useRemoveContactUs = () =>
  useMutation({
    mutationFn: removeContact,
  });
