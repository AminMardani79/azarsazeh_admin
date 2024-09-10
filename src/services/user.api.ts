import { apiService } from './apiService';
import { useMutation } from '@tanstack/react-query';

const changePassword = () => apiService.put('');

export const useChangePassword = () =>
  useMutation({
    mutationFn: changePassword,
  });
