import React, { useState } from 'react';
import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useNewsTableColumn } from './Jobs.column';
import { PATH_JOBS } from '../../../../constants/routes';
import { Job } from '../../../../types/job.types';
import { useRemoveJob } from '../../../../services/jobs.api';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';

type Props = {
  data: Job[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const JobsTable = ({ data, columns, refetch, ...others }: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveJob();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useNewsTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_JOBS.jobs}/${record.project_id}`);
  };

  return (
    <>
      <Table
        dataSource={data}
        columns={column}
        className="overflow-scroll"
        {...others}
        onRow={(record) => {
          return {
            onClick: () => handleRowClick(record),
          };
        }}
        pagination={{
          showSizeChanger: false,
        }}
      />
      <Modal
        title="حذف خبر"
        open={isDeleteModalOpen}
        onOk={handleRemoveItem}
        onCancel={handleDeleteModalClose}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={isPending}
        centered
      >
        <Typography.Text>آیا از حذف این شغل اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
