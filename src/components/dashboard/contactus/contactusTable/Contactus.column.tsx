import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ContactUs } from '../../../../types/contactUs.types';

export const useContactusTableColumn = (
  handleDeleteModalOpen: (id: string) => void
) => {
  const COLUMNS = [
    {
      title: 'نام',
      dataIndex: 'first_name',
      key: 'first_name',
      render: (_: any, { first_name }: ContactUs) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {first_name}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'last_name',
      key: 'last_name',
      render: (_: any, { last_name }: ContactUs) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {last_name}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'ایمیل',
      dataIndex: 'email',
      key: 'email',
      render: (_: any, { email }: ContactUs) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {email}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'شماره تلفن',
      dataIndex: 'phone',
      key: 'phone',
      render: (_: any, { phone }: ContactUs) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {phone}
        </Typography.Paragraph>
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (_: any, { id }: ContactUs) => {
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
