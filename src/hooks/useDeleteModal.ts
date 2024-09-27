import { UseMutateFunction } from '@tanstack/react-query';
import { message } from 'antd';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

export const useDeleteModal = (
  mutate: UseMutateFunction<AxiosResponse<any, any>, Error, string, unknown>,
  refetch: any
) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [itemId, setItemId] = useState('');

  const handleDeleteModalOpen = (id: string) => {
    setItemId(id);
    setDeleteModalOpen(true);
  };

  const handleDeleteModalClose = () => {
    setItemId('');
    setDeleteModalOpen(false);
  };

  const onSuccess = () => {
    message.success('آیتم با موفقیت حذف شد');
    handleDeleteModalClose();
    refetch();
  };

  const onError = () => message.error('حذف با مشکل مواجه شد.');

  const handleRemoveItem = () => mutate(itemId, { onSuccess, onError });

  return {
    handleDeleteModalOpen,
    handleDeleteModalClose,
    isDeleteModalOpen,
    handleRemoveItem
  };
};
