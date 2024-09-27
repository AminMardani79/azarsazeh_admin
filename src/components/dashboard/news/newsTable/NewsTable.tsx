import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useNewsTableColumn } from './News.column';
import { PATH_NEWS } from '../../../../constants/routes';
import { News } from '../../../../types/news.types';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';
import { useRemoveNews } from '../../../../services/news.api';

type Props = {
  data: News[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const NewsTable = ({ data, columns, refetch, ...others }: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveNews();

    const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);


  const column = useNewsTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_NEWS.root}/${record.id}`);
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
        <Typography.Text>آیا از حذف این خبر اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
