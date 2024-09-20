import { Col, Row } from 'antd';
import { Card, PageHeader, ProjectsTable } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from '../../hooks';
import CreateButton from '../../components/CreateButton/CreateButton';
import ProjectsForm from '../../components/dashboard/projects/ProjectsForm/ProjectsForm';

export const ProjectPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  return (
    <div>
      <Helmet>
        <title>پروژه ها</title>
      </Helmet>
      <PageHeader
        title="لیست پروژه ها"
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
            title: 'پروژه ها',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت پروژه ها"
            renderForm={() => <ProjectsForm />}
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
          <Card title="Projects">
            <ProjectsTable key="all-project-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
