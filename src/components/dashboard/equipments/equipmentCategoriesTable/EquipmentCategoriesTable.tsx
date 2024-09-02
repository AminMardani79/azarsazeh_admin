import React, { useState } from 'react';
import { Modal, Table, TableProps, Typography } from 'antd';
import { Projects } from '../../../../types';
import { useNavigate } from 'react-router-dom';
import { useEquipmentCategoriesTableColumn } from './EquipmentCategories.column';
import { PATH_EQUIPMENT_CATEGORIES } from '../../../../constants/routes';

type Props = {
  data: Projects[];
  onRowClick?: any;
} & TableProps<any>;

export const EquipmentCategoriesTable = ({ data, columns, ...others }: Props) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleDeleteModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDeleteModalOpen((prev) => !prev);
  }

  const column = useEquipmentCategoriesTableColumn(toggleDeleteModal);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_EQUIPMENT_CATEGORIES.root}/${record.project_id}`)
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
        title="حذف دسته بندی"
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