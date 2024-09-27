import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../../components';
import { HomeOutlined } from '@ant-design/icons';
import CreateButton from '../../../components/CreateButton/CreateButton';
import { Card, Col, Row } from 'antd';
import JobCategoryForm from '../../../components/dashboard/jobs/jobsForm/JobCategoryForm';
import { JobCategoriesTable } from '../../../components/dashboard/jobs/jobsTable/JobCategoriesTable';
import {
  useCreateJobCategory,
  useJobCategories,
} from '../../../services/jobs.api';
import { useEffect } from 'react';

export const JobCategoriesPage = () => {
  const { data, isFetching, refetch } = useJobCategories();
  const { mutate, isPending, isSuccess } = useCreateJobCategory();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  return (
    <div>
      <Helmet>
        <title>دسته بندی مشاغل</title>
      </Helmet>
      <PageHeader
        title="دسته بندی مشاغل"
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
            title: 'دسته بندی مشاغل',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت دسته بندی"
            renderForm={() => <JobCategoryForm />}
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
          <Card title="دسته بندی مشاغل">
            <JobCategoriesTable
              key="all-job-categories-table"
              data={data?.data.results}
              loading={isFetching}
              refetch={refetch}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
