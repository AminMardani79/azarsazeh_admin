import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { CompanyArticle } from '../../../../types/company.types';

export const useCompanyTableColumn = (
  handleDeleteModalOpen: (id: string) => void
) => {
  const COLUMNS = [
    {
      title: 'عنوان مطلب',
      dataIndex: 'title',
      key: 'title',
      render: (_: any, { title }: CompanyArticle) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {title}
        </Typography.Paragraph>
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (_: any, { id }: CompanyArticle) => {
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
