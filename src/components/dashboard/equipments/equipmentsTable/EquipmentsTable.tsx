import React, { useState } from 'react';
import { Modal, Table, TableProps, Typography } from 'antd';
import { Projects } from '../../../../types';
import { useEquipmentsTableColumn } from './EquipmentsTable.column';
import { useNavigate } from 'react-router-dom';
import { PATH_EQUIPMENTS } from '../../../../constants/routes';

type Props = {
  data: Projects[];
  onRowClick?: any;
} & TableProps<any>;

export const EquipmentsTable = ({ data, columns, ...others }: Props) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleDeleteModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDeleteModalOpen((prev) => !prev);
  }

  const column = useEquipmentsTableColumn(toggleDeleteModal);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_EQUIPMENTS.equipments}/${record.project_id}`)
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
        title="حذف تجهیزات"
        open={isDeleteModalOpen}
        onOk={toggleDeleteModal}
        onCancel={toggleDeleteModal}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={false}
        centered
      >
        <Typography.Text >آیا از حذف این تجهیزات اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
