import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { EquipmentCategory } from '../../../../types/equipment.types';

export const useEquipmentCategoriesTableColumn = (toggleDeleteModal: (event: any)=> void) => {
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
      dataIndex: 'operation',
      key: 'category_operation',
      render: (_: any) => {
        return (
          <Button
            type="primary"
            danger
            icon={<DeleteOutlined />}
            onClick={toggleDeleteModal}
          />
        );
      },
    },
  ];

  return COLUMNS;
};
