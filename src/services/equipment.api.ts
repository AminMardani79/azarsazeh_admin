import { EditEquipment, EditEquipmentCategory, Equipment, EquipmentCategory } from '../types/equipment.types';
import { apiService } from './apiService';
import { useQuery, useMutation } from '@tanstack/react-query';

// apis

// Equipments
const getEquipments = () => apiService.get('/company/articles');

const getEquipment = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeEquipment = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

const createEquipment = (data: Equipment) => apiService.post('/company/articles', data);

const editEquipment = (data: EditEquipment) => apiService.put('/company/articles', data);

// Equipment categories
const getEquipmentCategories = () => apiService.get('/company/articles');

const getEquipmentCategory = ({ queryKey }: { queryKey: [string, string] }) =>
  apiService.get(`/company/articles/${queryKey[1]}`);

const removeEquipmentCategory = (data: { id: string }) =>
  apiService.delete(`/company/articles/${data.id}`);

const createEquipmentCategory = (data: EquipmentCategory) =>
  apiService.post('/company/articles', data);

const editEquipmentCategory = (data: EditEquipmentCategory) =>
  apiService.put('/company/articles', data);

// client queries
export const useEquipments = (categoryId: string) =>
  useQuery({ queryKey: ['Equipments', categoryId], queryFn: getEquipments });

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

export const useEquipmentCategories = () =>
  useQuery({ queryKey: ['Equipment-categories'], queryFn: getEquipmentCategories });

export const useEquipmentCategory = (id: string) =>
  useQuery({ queryKey: ['Equipment-categories', id], queryFn: getEquipmentCategory });

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
