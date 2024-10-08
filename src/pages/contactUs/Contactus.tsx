import { Col, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { ContactusTable } from '../../components/dashboard/contactus/contactusTable/ContactusTable';
import { useContactUs } from '../../services/contactUs.api';

export const ContactusPage = () => {
  const { data, isFetching, refetch } = useContactUs();

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
            <ContactusTable
              key="contact-us-table"
              data={data?.data.results}
              loading={isFetching}
              refetch={refetch}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
