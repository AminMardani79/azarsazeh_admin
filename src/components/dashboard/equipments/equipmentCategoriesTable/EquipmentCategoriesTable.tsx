import { Modal, Table, TableProps, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useEquipmentCategoriesTableColumn } from './EquipmentCategories.column';
import { PATH_EQUIPMENTS } from '../../../../constants/routes';
import { EquipmentCategory } from '../../../../types/equipment.types';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';
import { useRemoveEquipmentCategory } from '../../../../services/equipment.api';

type Props = {
  data: EquipmentCategory[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const EquipmentCategoriesTable = ({
  data,
  columns,
  refetch,
  ...others
}: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveEquipmentCategory();
  
  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useEquipmentCategoriesTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_EQUIPMENTS.categories}/${record.id}`);
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
