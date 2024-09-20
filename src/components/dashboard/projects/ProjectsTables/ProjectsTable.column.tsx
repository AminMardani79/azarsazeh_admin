import { Button, Typography } from 'antd';
import { Projects } from '../../../../types';
import { DeleteOutlined } from '@ant-design/icons';

export const useProjectsTableColumn = (toggleDeleteModal: (event: any)=> void) => {
  const COLUMNS = [
    {
      title: 'نام پروژه',
      dataIndex: 'project_name',
      key: 'proj_name',
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
      key: 'proj_operation',
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
