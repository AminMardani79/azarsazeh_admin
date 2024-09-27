import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { PATH_JOBS } from '../../../../constants/routes';
import { JobRequest } from '../../../../types/job.types';
import { useJobRequestsTableColumn } from './JobRequests.column';
import { useRemoveJobRequest } from '../../../../services/jobs.api';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';

type Props = {
  data: JobRequest[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const JobRequestsTable = ({
  data,
  columns,
  refetch,
  ...others
}: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveJobRequest();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useJobRequestsTableColumn(handleDeleteModalOpen);

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
        title="حذف درخواست شغلی"
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
          آیا از حذف این درخواست شغلی اطمینان دارید؟
        </Typography.Text>
      </Modal>
    </>
  );
};
