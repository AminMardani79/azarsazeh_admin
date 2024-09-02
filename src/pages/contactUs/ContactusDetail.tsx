import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import ContactUsDetailForm from '../../components/dashboard/contactus/contactusForm/ContactusDetailForm';

export const ContactusDetailPage = () => {
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
      <ContactUsDetailForm />
    </div>
  );
};
