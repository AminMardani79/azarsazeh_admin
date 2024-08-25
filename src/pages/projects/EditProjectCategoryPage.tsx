import { Tabs, TabsProps } from 'antd';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined, PieChartOutlined } from '@ant-design/icons';
import { DASHBOARD_ITEMS } from '../../constants';
import { Link } from 'react-router-dom';
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
        title="projects dashboard"
        breadcrumbs={[
          {
            title: (
              <>
                <HomeOutlined />
                <span>home</span>
              </>
            ),
            path: '/',
          },
          {
            title: (
              <>
                <PieChartOutlined />
                <span>dashboards</span>
              </>
            ),
            menu: {
              items: DASHBOARD_ITEMS.map((d) => ({
                key: d.title,
                title: <Link to={d.path}>{d.title}</Link>,
              })),
            },
          },
          {
            title: 'projects',
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
