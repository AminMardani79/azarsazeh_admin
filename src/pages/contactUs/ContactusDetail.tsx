import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import ContactUsDetailForm from '../../components/dashboard/contactus/contactusForm/ContactusDetailForm';
import { useParams } from 'react-router-dom';
import { useContactUsDetail } from '../../services/contactUs.api';
import { Spin } from 'antd';

export const ContactusDetailPage = () => {
  const { id } = useParams();
  const { data, isFetching } = useContactUsDetail(id!);

  return (
    <div>
      <Helmet>
        <title>اخبار</title>
      </Helmet>
      <PageHeader
        title="جزئیات تماس"
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
            title: 'جزئیات تماس',
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <ContactUsDetailForm data={data?.data} />
      </Spin>
    </div>
  );
};
