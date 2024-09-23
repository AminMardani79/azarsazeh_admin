import { Col, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from '../../hooks';
import CreateButton from '../../components/CreateButton/CreateButton';
import NewsForm from '../../components/dashboard/news/newsForm/NewsForm';
import { NewsTable } from '../../components/dashboard/news/newsTable/NewsTable';
import { useAllNews } from '../../services/news.api';

export const NewsPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  const {data, isFetching} = useAllNews();

  return (
    <div>
      <Helmet>
        <title>اخبار</title>
      </Helmet>
      <PageHeader
        title="لیست اخبار"
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
            title: 'اخبار',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت خبر"
            renderForm={() => <NewsForm />}
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
          <Card title="اخبار">
            <NewsTable key="all-news-categories-table" data={data?.data.results} loading={isFetching} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
