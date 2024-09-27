import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { JobRequest } from '../../../../types/job.types';

export const useJobRequestsTableColumn = (
  handleDeleteModalOpen: (id: string) => void
) => {
  const COLUMNS = [
    {
      title: 'نام و نام خانوادگی',
      dataIndex: 'fullname',
      key: 'fullname',
      render: (_: any, { fullname }: JobRequest) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {fullname.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: 'عنوان شغل',
      dataIndex: 'job',
      key: 'job',
      render: (_: any, { job }: JobRequest) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {job.title.substring(0, 20)}
        </Typography.Paragraph>
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (_: any, { id }: JobRequest) => {
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
