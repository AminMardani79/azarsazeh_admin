import React, { useState } from 'react';
import { Modal, Table, TableProps, Typography } from 'antd';
import { Projects } from '../../../../types';
import { useNavigate } from 'react-router-dom';
import { useContactusTableColumn } from './Contactus.column';
import { PATH_CONTACTUS } from '../../../../constants/routes';

type Props = {
  data: Projects[];
  onRowClick?: any;
} & TableProps<any>;

export const ContactusTable = ({ data, columns, ...others }: Props) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleDeleteModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDeleteModalOpen((prev) => !prev);
  }

  const column = useContactusTableColumn(toggleDeleteModal);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_CONTACTUS.root}/${record.project_id}`)
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
      />
      <Modal
        title="حذف"
        open={isDeleteModalOpen}
        onOk={toggleDeleteModal}
        onCancel={toggleDeleteModal}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={false}
        centered
      >
        <Typography.Text >آیا از حذف این مورد اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};