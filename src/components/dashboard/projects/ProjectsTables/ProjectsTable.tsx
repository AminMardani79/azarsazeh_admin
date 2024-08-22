import { useState } from 'react';
import { Modal, Table, TableProps, Typography } from 'antd';
import { Projects } from '../../../../types';
import { useProjectsTableColumn } from './ProjectsTable.column';

type Props = {
  data: Projects[];
  onRowClick?: any;
} & TableProps<any>;

export const ProjectsTable = ({ data, ...others }: Props) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);

  const toggleDeleteModal = () => setDeleteModalOpen((prev) => !prev);

  const column = useProjectsTableColumn(toggleDeleteModal);

  const handleRowClick = (record: any) => {
    console.log(record);
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
        title="حذف پروژه"
        open={isDeleteModalOpen}
        onOk={toggleDeleteModal}
        onCancel={toggleDeleteModal}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={false}
        centered
      >
        <Typography.Text >آیا از حذف این پروژه اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
