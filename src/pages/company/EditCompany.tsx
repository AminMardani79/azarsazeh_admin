import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import EditCompanyForm from '../../components/dashboard/company/companyForm/EditCompanyForm';

export const EditCompanyPage = () => {
  const [form] = useForm();
  return (
    <div>
      <Helmet>
        <title>مطلب</title>
      </Helmet>
      <PageHeader
        title="ویرایش مطلب"
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
            title: 'ویرایش مطلب',
          }
        ]}
      />
      <Form form={form}>
        <EditCompanyForm form={form}/>
      </Form>
    </div>
  );
};
