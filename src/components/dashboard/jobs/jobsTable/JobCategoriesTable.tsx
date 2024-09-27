import React, { useState } from 'react';
import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useJobCategoriesTableColumn } from './JobCategories.column';
import { PATH_JOBS } from '../../../../constants/routes';
import { JobCategory } from '../../../../types/job.types';

type Props = {
  data: JobCategory[];
  onRowClick?: any;
} & TableProps<any>;

export const JobCategoriesTable = ({ data, columns, ...others }: Props) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleDeleteModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDeleteModalOpen((prev) => !prev);
  }

  const column = useJobCategoriesTableColumn(toggleDeleteModal);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_JOBS.jobCategories}/${record.project_id}`)
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
        onOk={toggleDeleteModal}
        onCancel={toggleDeleteModal}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={false}
        centered
      >
        <Typography.Text >آیا از حذف این دسته بندی اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};