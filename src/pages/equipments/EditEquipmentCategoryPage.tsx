import { Tabs, TabsProps } from 'antd';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useState } from 'react';
import EquipmentDetailTab from './EquipmentCategoryDetailTab';
import EquipmentsTab from './EquipmentsTab';
import CreateButton from '../../components/CreateButton/CreateButton';
import ProjectsForm from '../../components/dashboard/projects/ProjectsForm/ProjectsForm';
import EquipmentForm from '../../components/dashboard/equipments/equipmentsForm/EquipmentForm';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'ویرایش دسته بندی',
    children: <EquipmentDetailTab />,
  },
  {
    key: '2',
    label: 'تجهیزات',
    children: <EquipmentsTab />,
  },
];

export const EditEquipmentCategorytPage = () => {
  const [activeKey, setActiveKey] = useState('1');

  const handleTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <div>
      <Helmet>
        <title>تجهیزات</title>
      </Helmet>
      <PageHeader
        title="ویرایش دسته بندی تجهیزات"
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
            title: 'دسته بندی تجهیزات',
          },
        ]}
        renderButtons={() =>
          activeKey === '2' && (
            <CreateButton
              title="ساخت تجهیزات"
              renderForm={() => <EquipmentForm />}
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
