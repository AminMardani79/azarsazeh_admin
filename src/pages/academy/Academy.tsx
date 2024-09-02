import { Col, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from '../../hooks';
import CreateButton from '../../components/CreateButton/CreateButton';
import AcademyForm from '../../components/dashboard/academy/academyForm/AcademyForm';
import { AcademyTable } from '../../components/dashboard/academy/academyTable/AcademyTable';

export const AcademyPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  return (
    <div>
      <Helmet>
        <title>آکادمی</title>
      </Helmet>
      <PageHeader
        title="لیست مقالات"
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
            title: 'مقالات',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت مقاله"
            renderForm={() => <AcademyForm />}
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
          <Card title="مقالات">
            <AcademyTable key="all-academy-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
