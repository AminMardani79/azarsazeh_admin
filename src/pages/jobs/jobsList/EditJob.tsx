import { Helmet } from 'react-helmet-async';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin, message } from 'antd';
import { PageHeader } from '../../../components';
import EditJobForm from '../../../components/dashboard/jobs/jobsForm/EditJobForm';
import { useParams } from 'react-router-dom';
import {
  useEditJob,
  useJob,
  useJobCategories,
} from '../../../services/jobs.api';
import { generateResponseFormData } from '../../../utils';

export const EditJobPage = () => {
  const [form] = useForm();
  const params = useParams();

  const { data, isFetching } = useJob(params.id!);
  const { mutate, isPending } = useEditJob();
  const { data: categories } = useJobCategories();

  const onSuccess = () => message.success('ویرایش با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id: params.id! }, { onSuccess });
  };

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
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditJobForm
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
