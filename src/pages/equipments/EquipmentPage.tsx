import { Col, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from '../../hooks';
import CreateButton from '../../components/CreateButton/CreateButton';
import EquipmentForm from '../../components/dashboard/equipments/equipmentsForm/EquipmentForm';
import { EquipmentsTable } from '../../components/dashboard/equipments/equipmentsTable/EquipmentsTable';

export const EquipmentPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  return (
    <div>
      <Helmet>
        <title>تجهیزات ها</title>
      </Helmet>
      <PageHeader
        title="تجهیزات"
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
            title: 'تجهیزات',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت تجهیزات"
            renderForm={() => <EquipmentForm />}
          />
        )}
      />
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col span={24}>
          <Card title="تجهیزات">
            <EquipmentsTable key="all-equipment-categories-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
