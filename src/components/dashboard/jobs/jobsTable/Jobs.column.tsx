import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Job } from '../../../../types/job.types';

export const useNewsTableColumn = (toggleDeleteModal: (event: any)=> void) => {
  const COLUMNS = [
    {
      title: 'عنوان شغل',
      dataIndex: 'title',
      key: 'title',
      render: (_: any, { title }: Job) => (
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
      title: 'موقعیت مکانی',
      dataIndex: 'location',
      key: 'location',
      render: (_: any, { location }: Job) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {location.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'دسته بندی',
      dataIndex: 'category',
      key: 'category',
      render: (_: any, { category }: Job) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {category.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: '',
      dataIndex: 'operation',
      key: 'job_operation',
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
