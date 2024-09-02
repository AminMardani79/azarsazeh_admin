import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import EditProjectForm from '../../components/dashboard/projects/ProjectsForm/EditProjectForm';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';

export const EditProjectPage = () => {
  const [form] = useForm();
  return (
    <div>
      <Helmet>
        <title>پروژه ها</title>
      </Helmet>
      <PageHeader
        title="ویرایش پروژه"
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
            title: 'ویرایش پروژه',
          }
        ]}
      />
      <Form form={form}>
        <EditProjectForm form={form}/>
      </Form>
    </div>
  );
};
