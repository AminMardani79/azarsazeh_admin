import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { JobCategory } from '../../../../types/job.types';

export const useJobCategoriesTableColumn = (toggleDeleteModal: (event: any)=> void) => {
  const COLUMNS = [
    {
      title: 'عنوان دسته بندی',
      dataIndex: 'category_name',
      key: 'category_name',
      render: (_: any, { title }: JobCategory) => (
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
