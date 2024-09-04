import { Helmet } from "react-helmet-async";
import { useFetchData } from "../../../hooks";
import { PageHeader } from "../../../components";
import { HomeOutlined } from "@ant-design/icons";
import CreateButton from "../../../components/CreateButton/CreateButton";
import { Card, Col, Row } from "antd";
import { JobsTable } from "../../../components/dashboard/jobs/jobsTable/JobsTable";
import JobForm from "../../../components/dashboard/jobs/jobsForm/JobForm";


export const JobsPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

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
            renderForm={() => <JobForm />}
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
            <JobsTable key="jobs-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
