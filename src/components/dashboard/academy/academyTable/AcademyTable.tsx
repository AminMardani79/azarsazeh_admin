import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAcademyTableColumn } from './Academy.column';
import { PATH_ACADEMY } from '../../../../constants/routes';
import { AcademyArticle } from '../../../../types/academy.types';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';
import { useRemoveAcademyArticle } from '../../../../services/academy.api';

type Props = {
  data: AcademyArticle[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const AcademyTable = ({ data, columns, refetch, ...others }: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveAcademyArticle();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useAcademyTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_ACADEMY.root}/${record.project_id}`);
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
        title="حذف مقاله"
        open={isDeleteModalOpen}
        onOk={handleRemoveItem}
        onCancel={handleDeleteModalClose}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={isPending}
        centered
      >
        <Typography.Text>آیا از حذف این مقاله اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
