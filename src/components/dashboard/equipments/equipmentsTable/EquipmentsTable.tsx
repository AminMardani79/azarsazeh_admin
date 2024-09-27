import { Modal, Table, TableProps, Typography } from 'antd';
import { useEquipmentsTableColumn } from './EquipmentsTable.column';
import { useNavigate } from 'react-router-dom';
import { PATH_EQUIPMENTS } from '../../../../constants/routes';
import { Equipments } from '../../../../types/equipment.types';
import { useDeleteModal } from '../../../../hooks/useDeleteModal';
import { useRemoveEquipment } from '../../../../services/equipment.api';

type Props = {
  data: Equipments[];
  onRowClick?: any;
  refetch: any;
} & TableProps<any>;

export const EquipmentsTable = ({
  data,
  columns,
  refetch,
  ...others
}: Props) => {
  const navigate = useNavigate();
  const { mutate, isPending } = useRemoveEquipment();

  const {
    isDeleteModalOpen,
    handleDeleteModalClose,
    handleDeleteModalOpen,
    handleRemoveItem,
  } = useDeleteModal(mutate, refetch);

  const column = useEquipmentsTableColumn(handleDeleteModalOpen);

  const handleRowClick = (record: any) => {
    navigate(`${PATH_EQUIPMENTS.equipments}/${record.id}`);
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
        title="حذف تجهیزات"
        open={isDeleteModalOpen}
        onOk={handleRemoveItem}
        onCancel={handleDeleteModalClose}
        cancelText="لغو"
        okText="حذف"
        okType="danger"
        confirmLoading={isPending}
        centered
      >
        <Typography.Text>آیا از حذف این تجهیزات اطمینان دارید؟</Typography.Text>
      </Modal>
    </>
  );
};
