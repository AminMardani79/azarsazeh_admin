import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import EditNewsForm from '../../components/dashboard/news/newsForm/EditNewsForm';

export const EditNewsPage = () => {
  const [form] = useForm();
  return (
    <div>
      <Helmet>
        <title>اخبار</title>
      </Helmet>
      <PageHeader
        title="ویرایش خبر"
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
            title: 'ویرایش خبر',
          }
        ]}
      />
      <Form form={form}>
        <EditNewsForm form={form}/>
      </Form>
    </div>
  );
};
