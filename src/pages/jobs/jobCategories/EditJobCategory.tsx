import { Helmet } from 'react-helmet-async';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin, message } from 'antd';
import { PageHeader } from '../../../components';
import EditJobCategoryForm from '../../../components/dashboard/jobs/jobsForm/EditJobCategoryForm';
import { useParams } from 'react-router-dom';
import { useEditJobCategory, useJobCategory } from '../../../services/jobs.api';
import { generateResponseFormData } from '../../../utils';

export const EditJobCategoryPage = () => {
  const [form] = useForm();
  const params = useParams();

  const { data, isFetching } = useJobCategory(params.id!);
  const { mutate, isPending } = useEditJobCategory();

  const onSuccess = () => message.success('ویرایش با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id: params.id! }, { onSuccess });
  };

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
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditJobCategoryForm
            form={form}
            data={data?.data}
            confirmLoading={isPending}
          />
        </Form>
      </Spin>
    </div>
  );
};
