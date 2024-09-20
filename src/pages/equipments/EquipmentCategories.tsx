import { Col, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from '../../hooks';
import CreateButton from '../../components/CreateButton/CreateButton';
import EquipmentCategoryForm from '../../components/dashboard/equipments/equipmentCategoryForm/EquipmentCategoryForm';
import { EquipmentCategoriesTable } from '../../components/dashboard/equipments/equipmentCategoriesTable/EquipmentCategoriesTable';

export const EquipmentCategoriesPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  return (
    <div>
      <Helmet>
        <title>دسته بندی تجهیزات ها</title>
      </Helmet>
      <PageHeader
        title="دسته بندی های تجهیزات"
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
            title: 'دسته بندی ها',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت دسته بندی"
            renderForm={() => <EquipmentCategoryForm />}
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
          <Card title="دسته بندی تجهیزات">
            <EquipmentCategoriesTable key="all-equipment-categories-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
