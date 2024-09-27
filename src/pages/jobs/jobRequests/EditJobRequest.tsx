import { Helmet } from 'react-helmet-async';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin } from 'antd';
import { PageHeader } from '../../../components';
import JobRequestDetail from '../../../components/dashboard/jobs/jobsForm/JobRequestDetail';
import { useParams } from 'react-router-dom';
import { useJobRequest } from '../../../services/jobs.api';

export const EditJobRequestPage = () => {
  const [form] = useForm();
  const params = useParams();

  const { data, isFetching } = useJobRequest(params.id!);

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
        <Form form={form}>
          <JobRequestDetail form={form} data={data?.data} />
        </Form>
      </Spin>
    </div>
  );
};
