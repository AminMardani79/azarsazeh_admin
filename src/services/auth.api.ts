import { apiService } from "./apiService";
import {useMutation} from '@tanstack/react-query'

const login = ()=> apiService.post('/login',{});

const logout = ()=> apiService.post('/logout',{});

// client queries
export const useLogin = () =>
  useMutation({
    mutationFn: login,
  });

export const useEditEquipment = () =>
  useMutation({
    mutationFn: logout,
  });