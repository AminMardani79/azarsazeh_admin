import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useCompanyTableColumn } from './Company.column';
import { PATH_COMPANY } from '../../../../constants/routes';
import { CompanyArticle } from '../../../../types/company.types';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';
import { useRemoveCompanyArticle } from '../../../../services/company.api';

type Props = {
  data: CompanyArticle[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const CompanyTable = ({ data, columns, refetch, ...others }: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveCompanyArticle();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useCompanyTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_COMPANY.root}/${record.id}`);
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
        <Typography.Text>آیا از حذف این مطلب اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
