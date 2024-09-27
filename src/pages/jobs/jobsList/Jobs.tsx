import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../../components';
import { HomeOutlined } from '@ant-design/icons';
import CreateButton from '../../../components/CreateButton/CreateButton';
import { Card, Col, Row } from 'antd';
import { JobsTable } from '../../../components/dashboard/jobs/jobsTable/JobsTable';
import JobForm from '../../../components/dashboard/jobs/jobsForm/JobForm';
import {
  useCreateJob,
  useJobCategories,
  useJobs,
} from '../../../services/jobs.api';
import { useEffect } from 'react';

export const JobsPage = () => {
  const { isFetching, data, refetch } = useJobs();
  const { mutate, isSuccess, isPending } = useCreateJob();
  const { refetch: refetchCategories, data: categories } =
    useJobCategories(false);

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  return (
    <div>
      <Helmet>
        <title>مشاغل</title>
      </Helmet>
      <PageHeader
        title="مشاغل"
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
            title: 'مشاغل',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت شغل"
            renderForm={() => (
              <JobForm jobCategories={categories?.data.results} />
            )}
            refetch={refetchCategories}
            confirmLoading={isPending}
            mutate={mutate}
          />
        )}
      />
      <Row
        gutter={[
          { xs: 8, sm: 16, md: 24, lg: 32 },
          { xs: 8, sm: 16, md: 24, lg: 32 },
        ]}
      >
        <Col span={24}>
          <Card title="مشاغل">
            <JobsTable
              key="jobs-table"
              data={data?.data.results}
              loading={isFetching}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
