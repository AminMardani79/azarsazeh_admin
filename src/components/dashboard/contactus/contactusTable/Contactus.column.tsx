import { Button, Typography } from 'antd';
import { Projects } from '../../../../types';
import { DeleteOutlined } from '@ant-design/icons';
import { ContactUs } from '../../../../types/contactUs.types';

export const useContactusTableColumn = (toggleDeleteModal: (event: any)=> void) => {
  const COLUMNS = [
    {
      title: 'نام',
      dataIndex: 'name',
      key: 'name',
      render: (_: any, { name }: ContactUs) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {name.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'نام خانوادگی',
      dataIndex: 'family',
      key: 'family',
      render: (_: any, { family }: ContactUs) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {family.substring(0, 20)}
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
          {email.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'شماره تلفن',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
      render: (_: any, { phoneNumber }: ContactUs) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {phoneNumber.substring(0, 20)}
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
