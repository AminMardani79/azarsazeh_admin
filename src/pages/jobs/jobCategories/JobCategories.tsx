import { Helmet } from "react-helmet-async";
import { useFetchData } from "../../../hooks";
import { PageHeader } from "../../../components";
import { HomeOutlined } from "@ant-design/icons";
import CreateButton from "../../../components/CreateButton/CreateButton";
import { Card, Col, Row } from "antd";
import JobCategoryForm from "../../../components/dashboard/jobs/jobsForm/JobCategoryForm";
import { JobCategoriesTable } from "../../../components/dashboard/jobs/jobsTable/JobCategoriesTable";


export const JobCategoriesPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

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
          <Card title="اخبار">
            <JobCategoriesTable key="all-news-categories-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
