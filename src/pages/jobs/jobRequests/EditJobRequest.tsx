import { Helmet } from 'react-helmet-async';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import { PageHeader } from '../../../components';
import EditJobCategoryForm from '../../../components/dashboard/jobs/jobsForm/EditJobCategoryForm';

export const EditJobRequestPage = () => {
  const [form] = useForm();
  return (
    <div>
      <Helmet>
        <title>دسته بندی شغل</title>
      </Helmet>
      <PageHeader
        title="ویرایش دسته بندی"
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
            title: 'ویرایش دسته بندی شغل',
          }
        ]}
      />
      <Form form={form}>
        <EditJobCategoryForm form={form}/>
      </Form>
    </div>
  );
};
