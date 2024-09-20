import { Button, Typography } from 'antd';
import { Projects } from '../../../../types';
import { DeleteOutlined } from '@ant-design/icons';

export const useAcademyTableColumn = (toggleDeleteModal: (event: any)=> void) => {
  const COLUMNS = [
    {
      title: 'عنوان مقاله',
      dataIndex: 'article_name',
      key: 'article_name',
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
      key: 'article_operation',
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
