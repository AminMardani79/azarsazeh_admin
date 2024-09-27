import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis

// Equipments
const getEquipments = () => apiService.get('/blogs/equipments/');

const getEquipment = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeEquipment = (id: string) =>
  apiService.delete(`/blogs/equipments/${id}/delete/`);

const createEquipment = (data: FormData) => apiService.post('/blogs/equipments/create/', data);

const editEquipment = (data: any) => apiService.put('/company/articles', data);

// Equipment categories
const getEquipmentCategories = () =>
  apiService.get('/blogs/equipment_categories/');

const getEquipmentCategory = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeEquipmentCategory = (id: string) =>
  apiService.delete(`/blogs/equipment_categories/${id}/delete/`);

const createEquipmentCategory = (data: FormData) => apiService.post('/blogs/equipment_categories/create/', data);

const editEquipmentCategory = (data: any) =>
  apiService.put('/company/articles', data);

// client queries
export const useEquipments = () =>
  useQuery({ queryKey: ['Equipments'], queryFn: getEquipments });

export const useEquipment = (EquipmentId: string) =>
  useQuery({ queryKey: ['Equipments', EquipmentId], queryFn: getEquipment });

export const useCreateEquipment = () =>
  useMutation({
    mutationFn: createEquipment,
  });

export const useEditEquipment = () =>
  useMutation({
    mutationFn: editEquipment,
  });

export const useRemoveEquipment = () =>
  useMutation({
    mutationFn: removeEquipment,
  });

export const useEquipmentCategories = (enabled: boolean = true) =>
  useQuery({
    queryKey: ['Equipment-categories'],
    queryFn: getEquipmentCategories,
    enabled,
  });

export const useEquipmentCategory = (id: string) =>
  useQuery({
    queryKey: ['Equipment-categories', id],
    queryFn: getEquipmentCategory,
  });

export const useCreateEquipmentCategory = () =>
  useMutation({
    mutationFn: createEquipmentCategory,
  });

export const useEditEquipmentCategory = () =>
  useMutation({
    mutationFn: editEquipmentCategory,
  });

export const useRemoveEquipmentCategory = () =>
  useMutation({
    mutationFn: removeEquipmentCategory,
  });
