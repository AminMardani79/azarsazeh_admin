import { apiService } from "./apiService";
import {useMutation} from '@tanstack/react-query'

const login = (values: {username: string, password: string})=> {
  const {username, password} = values;

  const encodedUsername = btoa(username);
  const encodedPassword = btoa(password);

  return apiService.post('/users/login',{}, {
    headers: {
      'Authorization': `Basic ${encodedUsername}:${encodedPassword}`
    }
  });
}

const logout = (values: any)=> apiService.post('/users/logout', values);

// client queries
export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });
  
export const useLogout = () =>
  useMutation({
    mutationFn: logout,
  });

export const useEditEquipment = () =>
  useMutation({
    mutationFn: logout,
  });