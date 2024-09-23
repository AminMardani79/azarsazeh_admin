import { apiService } from "./apiService";
import {useMutation} from '@tanstack/react-query'

const login = (values: {username: string, password: string})=> {
  const {username, password} = values;

  const encodedAuthentication = btoa(`${username}:${password}`);

  return apiService.post('/users/login/',null, {
    headers: {
      'Authorization': `Basic ${encodedAuthentication}`
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