import React, { useState } from 'react';
import { Modal, Table, TableProps, Typography } from 'antd';
import { Projects } from '../../../../types';
import { useProjectsTableColumn } from './ProjectsTable.column';
import { useNavigate, useParams } from 'react-router-dom';
import { PATH_PROJECTS, PATH_PROJECT_CATEGORIES } from '../../../../constants';

type Props = {
  data: Projects[];
  onRowClick?: any;
} & TableProps<any>;

export const ProjectsTable = ({ data, columns, ...others }: Props) => {
  const navigate = useNavigate();
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const params = useParams();

  const toggleDeleteModal = (event: React.MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setDeleteModalOpen((prev) => !prev);
  }

  const column = useProjectsTableColumn(toggleDeleteModal);

  const handleRowClick = (record: any) => {
    const categoryId = params.id;
    navigate(`${PATH_PROJECT_CATEGORIES.root}/${categoryId}${PATH_PROJECTS.root}/${record.project_id}`)
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
