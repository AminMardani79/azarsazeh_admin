import { Helmet } from 'react-helmet-async';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import { PageHeader } from '../../../components';
import EditJobForm from '../../../components/dashboard/jobs/jobsForm/EditJobForm';

export const EditJobPage = () => {
  const [form] = useForm();
  return (
    <div>
      <Helmet>
        <title>شغل</title>
      </Helmet>
      <PageHeader
        title="ویرایش شغل"
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
            title: 'ویرایش شغل',
          }
        ]}
      />
      <Form form={form}>
        <EditJobForm form={form}/>
      </Form>
    </div>
  );
};
