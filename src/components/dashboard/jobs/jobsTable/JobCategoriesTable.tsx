import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useJobCategoriesTableColumn } from './JobCategories.column';
import { PATH_JOBS } from '../../../../constants/routes';
import { JobCategory } from '../../../../types/job.types';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';
import { useRemoveJobCategory } from '../../../../services/jobs.api';

type Props = {
  data: JobCategory[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const JobCategoriesTable = ({
  data,
  columns,
  refetch,
  ...others
}: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveJobCategory();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useJobCategoriesTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_JOBS.jobCategories}/${record.project_id}`);
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
        <Typography.Text>
          آیا از حذف این دسته بندی اطمینان دارید؟
        </Typography.Text>
      </Modal>
    </>
  );
};
