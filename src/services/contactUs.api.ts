import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis
const getAllContacts = () => apiService.get('/contact/contact_us');

const getContact = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/contact/contact_us/${queryKey[1]}/`);

const removeContact = (id: string) =>
  apiService.delete(`/contact/contact_us/${id}/delete/`);

// client queries
export const useContactUs = () =>
  useQuery({ queryKey: ['contact-us'], queryFn: getAllContacts });

export const useContactUsDetail = (id: string) =>
  useQuery({ queryKey: ['contact-us-detail', id], queryFn: getContact });

export const useRemoveContactUs = () =>
  useMutation({
    mutationFn: removeContact,
  });
