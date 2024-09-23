import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../../components';
import CreateButton from '../../../components/CreateButton/CreateButton';
import { Card, Col, Row } from 'antd';
import JobCategoryForm from '../../../components/dashboard/jobs/jobsForm/JobCategoryForm';
import { useJobRequests } from '../../../services/jobs.api';
import { JobRequestsTable } from '../../../components/dashboard/jobs/jobsTable/JobRequestsTable';

export const JobRequestsPage = () => {
  const { data, isFetching } = useJobRequests();

  return (
    <div>
      <Helmet>
        <title>درخواست های شغلی</title>
      </Helmet>
      <PageHeader
        title="درخواست های شغلی"
        renderButtons={() => (
          <CreateButton
            title="ساخت دسته بندی"
            renderForm={() => <JobCategoryForm />}
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
          <Card title="درخواست های شغلی">
            <JobRequestsTable
              key="all-job-categories-table"
              data={data?.data.results}
              loading={isFetching}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
