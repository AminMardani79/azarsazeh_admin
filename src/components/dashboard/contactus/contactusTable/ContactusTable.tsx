import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useContactusTableColumn } from './Contactus.column';
import { PATH_CONTACTUS } from '../../../../constants/routes';
import { ContactUs } from '../../../../types/contactUs.types';
import { useRemoveContactUs } from '../../../../services/contactUs.api';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';

type Props = {
  data: ContactUs[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const ContactusTable = ({
  data,
  columns,
  refetch,
  ...others
}: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveContactUs();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useContactusTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_CONTACTUS.root}/${record.project_id}`);
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
        title="حذف"
        open={isDeleteModalOpen}
        onOk={handleRemoveItem}
        onCancel={handleDeleteModalClose}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={isPending}
        centered
      >
        <Typography.Text>آیا از حذف این مورد اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
