import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import EditProjectForm from '../../components/dashboard/projects/ProjectsForm/EditProjectForm';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin, message } from 'antd';
import {
  useEditProject,
  useProject,
  useProjectCategories,
} from '../../services/project.api';
import { useParams } from 'react-router-dom';
import { generateResponseFormData } from '../../utils';

export const EditProjectPage = () => {
  const [form] = useForm();
  const { id } = useParams();
  const { data, isFetching } = useProject(id!);
  const { data: categories } = useProjectCategories();
  const { mutate, isPending } = useEditProject();

  const onSuccess = () => message.success('ویرایش فرم با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id }, { onSuccess });
  };

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
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditProjectForm
            form={form}
            data={data?.data}
            confirmLoading={isPending}
            categories={categories?.data.results}
          />
        </Form>
      </Spin>
    </div>
  );
};
