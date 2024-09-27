import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { EquipmentCategory } from '../../../../types/equipment.types';

export const useEquipmentCategoriesTableColumn = (
  handleDeleteModalOpen: (id: string) => void
) => {
  const COLUMNS = [
    {
      title: 'نام دسته بندی',
      dataIndex: 'title',
      key: 'title',
      render: (_: any, { title }: EquipmentCategory) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {title.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (_: any, { id }: EquipmentCategory) => {
        return (
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              event.stopPropagation();
              handleDeleteModalOpen(id);
            }}
          />
        );
      },
    },
  ];

  return COLUMNS;
};
