import { Button, Tag, Typography } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { Projects } from '../../../../types/project.types';

export const useProjectsTableColumn = (
  handleDeleteModalOpen: (id: string) => void
) => {
  const COLUMNS = [
    {
      title: 'نام پروژه',
      dataIndex: 'title',
      key: 'title',
      render: (_: any, { title }: Projects) => (
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
      title: 'دسته بندی ها',
      dataIndex: 'categories',
      key: 'categories',
      render: (_: any, { categories }: Projects) => (
        <Typography.Paragraph
          ellipsis={{ rows: 1 }}
          className="text-capitalize"
          style={{ marginBottom: 0 }}
        >
          {categories.map((item) => {
            return (
              <Tag color="blue" key={item.title}>
                {item.title}
              </Tag>
            );
          })}
        </Typography.Paragraph>
      ),
    },
    {
      title: '',
      dataIndex: 'id',
      key: 'id',
      render: (_: any, { id }: Projects) => {
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
