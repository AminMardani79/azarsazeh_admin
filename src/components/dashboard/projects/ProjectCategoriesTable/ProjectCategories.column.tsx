import { Button, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { ProjectCategories } from '../../../../types/project.types';

export const useProjectCategoriesTableColumn = (
  handleDeleteModalOpen: (id: string) => void
) => {
  const COLUMNS = [
    {
      title: 'نام دسته بندی',
      dataIndex: 'title',
      key: 'title',
      render: (_: any, { title }: ProjectCategories) => (
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
      key: 'proj_operation',
      render: (_: any, { id }: ProjectCategories) => {
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
