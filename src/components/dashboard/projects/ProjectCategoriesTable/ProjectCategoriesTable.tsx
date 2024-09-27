import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useProjectCategoriesTableColumn } from './ProjectCategories.column';
import { PATH_PROJECTS } from '../../../../constants';
import { ProjectCategories } from '../../../../types/project.types';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';
import { useRemoveProjectCategory } from '../../../../services/project.api';

type Props = {
  data: ProjectCategories[];
  onRowClick?: any;
  loading?: boolean;
  refetch: any;
} & TableProps<any>;

export const ProjectCategoriesTable = ({
  data,
  columns,
  loading,
  refetch,
  ...others
}: Props) => {
  const navigate = useNavigate();

  const { mutate, isPending } = useRemoveProjectCategory();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useProjectCategoriesTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_PROJECTS.categories}/${record.project_id}`);
  };

  return (
    <>
      <Table
        dataSource={data}
        columns={column}
        loading={loading}
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
        title="حذف دسته بندی"
        open={isDeleteModalOpen}
        onOk={handleRemoveItem}
        onCancel={handleDeleteModalClose}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={isPending}
        centered
      >
        <Typography.Text>
          آیا از حذف این دسته بندی اطمینان دارید؟
        </Typography.Text>
      </Modal>
    </>
  );
};
