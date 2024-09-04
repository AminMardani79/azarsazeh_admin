import { Col, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from '../../hooks';
import CreateButton from '../../components/CreateButton/CreateButton';
import { CompanyTable } from '../../components/dashboard/company/companyTable/CompanyTable';
import CompanyForm from '../../components/dashboard/company/companyForm/CompanyForm';

export const CompanyPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  return (
    <div>
      <Helmet>
        <title>شرکت ما</title>
      </Helmet>
      <PageHeader
        title="لیست مطالب"
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
            title: 'شرکت ما',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت مطلب"
            renderForm={() => <CompanyForm />}
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
          <Card title="مطالب">
            <CompanyTable key="artcles-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
