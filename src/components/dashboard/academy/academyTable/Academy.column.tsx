import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { AcademyArticle } from '../../../../types/academy.types';

export const useAcademyTableColumn = (toggleDeleteModal: (event: any)=> void) => {
  const COLUMNS = [
    {
      title: 'عنوان مقاله',
      dataIndex: 'title',
      key: 'title',
      render: (_: any, { title }: AcademyArticle) => (
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
