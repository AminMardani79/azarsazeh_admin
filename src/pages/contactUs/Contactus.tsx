import { Col, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from '../../hooks';
import { ContactusTable } from '../../components/dashboard/contactus/contactusTable/ContactusTable';

export const ContactusPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  return (
    <div>
      <Helmet>
        <title>تماس با ما</title>
      </Helmet>
      <PageHeader
        title="تماس با ما"
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
            title: 'تماس با ما',
          },
        ]}
      />
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col span={24}>
          <Card title="تماس با ما">
            <ContactusTable key="contact-us-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
