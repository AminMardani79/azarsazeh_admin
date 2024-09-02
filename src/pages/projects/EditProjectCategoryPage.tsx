import { Tabs, TabsProps } from 'antd';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import ProjectDetailTab from './ProjectCategoryDetailTab';
import ProjectsTab from './ProjectsTab';
import CreateButton from '../../components/CreateButton/CreateButton';
import ProjectsForm from '../../components/dashboard/projects/ProjectsForm/ProjectsForm';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'ویرایش دسته بندی',
    children: <ProjectDetailTab />,
  },
  {
    key: '2',
    label: 'پروژه ها',
    children: <ProjectsTab />,
  },
];

export const EditProjecCategorytPage = () => {
  const [activeKey, setActiveKey] = useState('1');

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div>
      <Helmet>
        <title>پروژه ها</title>
      </Helmet>
      <PageHeader
        title="ویرایش دسته بندی پروژه"
        breadcrumbs={[
          {
            title: (
              <>
                <HomeOutlined />
                <span>خانه</span>
              </>
            ),
            path: '/',
          },
          {
            title: 'دسته بندی پروژه',
          },
        ]}
        renderButtons={() =>
          activeKey === '2' && (
            <CreateButton
              title="ساخت پروژه"
              renderForm={() => <ProjectsForm />}
            />
          )
        }
      />
      <Tabs
        defaultActiveKey="1"
        activeKey={activeKey}
        items={items}
        onChange={handleTabChange}
      />
    </div>
  );
};
