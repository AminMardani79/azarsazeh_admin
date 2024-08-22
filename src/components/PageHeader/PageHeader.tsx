import React from 'react';
import {
  Breadcrumb,
  BreadcrumbProps,
  Divider,
  Flex,
  Space,
  Typography,
} from 'antd';

import './styles.css';

type Props = {
  title: string;
  breadcrumbs: BreadcrumbProps['items'];
  renderButtons?: () => React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageHeader = ({
  breadcrumbs,
  title,
  renderButtons,
  ...others
}: Props) => {
  return (
    <div {...others}>
      <Flex align="center">
        <Space
          direction="vertical"
          size="small"
          style={{ direction: 'rtl', width: '100%' }}
        >
          <Typography.Title
            level={4}
            style={{ padding: 0, margin: 0, textTransform: 'capitalize' }}
          >
            {title}
          </Typography.Title>
          <Breadcrumb items={breadcrumbs} className="page-header-breadcrumbs" />
        </Space>
        {renderButtons && renderButtons()}
      </Flex>
      <Divider orientation="left" plain>
        <span style={{ textTransform: 'capitalize' }}>{title}</span>
      </Divider>
    </div>
  );
};
