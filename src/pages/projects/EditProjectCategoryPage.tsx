import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin, message } from 'antd';
import EditProjectCategoryForm from '../../components/dashboard/projects/projectCategoryForm/EditProjectCategoryForm';
import { useParams } from 'react-router-dom';
import {
  useEditProjectCategory,
  useProjectCategory,
} from '../../services/project.api';
import { generateResponseFormData } from '../../utils';

export const EditProjecCategoryPage = () => {
  const [form] = useForm();
  const params = useParams();

  const { data, isFetching } = useProjectCategory(params.id!);
  const { mutate, isPending } = useEditProjectCategory();

  const onSuccess = () => message.success('ویرایش با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id: params.id! }, { onSuccess });
  };

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
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditProjectCategoryForm
            form={form}
            data={data?.data}
            confirmLoading={isPending}
          />
        </Form>
      </Spin>
    </div>
  );
};
