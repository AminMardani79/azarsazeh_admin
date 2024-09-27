import { Modal, Table, TableProps, Typography } from 'antd';
import { useProjectsTableColumn } from './ProjectsTable.column';
import { PATH_PROJECTS } from '../../../../constants';
import { Projects } from '../../../../types/project.types';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';
import { useNavigate } from 'react-router-dom';
import { useRemoveProject } from '../../../../services/project.api';

type Props = {
  data: Projects[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const ProjectsTable = ({ data, columns, refetch, ...others }: Props) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useRemoveProject();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useProjectsTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_PROJECTS.projects}/${record.project_id}`);
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
        title="حذف پروژه"
        open={isDeleteModalOpen}
        onOk={handleRemoveItem}
        onCancel={handleDeleteModalClose}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={isPending}
        centered
      >
        <Typography.Text>آیا از حذف این پروژه اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
