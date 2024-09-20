import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import EditProjectCategoryForm from '../../components/dashboard/projects/projectCategoryForm/EditProjectCategoryForm';

export const EditProjecCategoryPage = () => {
  const [form] = useForm();

  return (
    <div>
      <Helmet>
        <title>پروژه ها</title>
      </Helmet>
      <PageHeader
        title="ویرایش دسته بندی پروژه"
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
            title: 'دسته بندی پروژه',
          },
        ]}
      />
      <Form form={form}>
        <EditProjectCategoryForm form={form} />
      </Form>
    </div>
  );
};
