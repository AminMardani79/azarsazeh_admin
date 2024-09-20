import { Button, Typography } from 'antd';
import { Projects } from '../../../../types';
import { DeleteOutlined } from '@ant-design/icons';

export const useContactusTableColumn = (toggleDeleteModal: (event: any)=> void) => {
  const COLUMNS = [
    {
      title: 'نام',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (_: any, { project_name }: Projects) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {project_name.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'last_name',
      key: 'last_name',
      render: (_: any, { project_name }: Projects) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {project_name.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'ایمیل',
      dataIndex: 'email',
      key: 'email',
      render: (_: any, { project_name }: Projects) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {project_name.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'شماره تلفن',
      dataIndex: 'phone_number',
      key: 'phone_number',
      render: (_: any, { project_name }: Projects) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {project_name.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: '',
      dataIndex: 'operation',
      key: 'contact_us_operation',
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
