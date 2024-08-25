import { Col, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import { useFetchData } from '../../hooks';
import CreateButton from '../../components/CreateButton/CreateButton';
import { ProjectCategoriesTable } from '../../components/dashboard/projects/ProjectCategoriesTable/ProjectCategoriesTable';
import ProjectCategoriesForm from '../../components/dashboard/ProjectCategoryForm/ProjectCategoryForm';

export const ProjectCategoriesPage = () => {
  const { data: projectsData } = useFetchData('../mocks/Projects.json');

  return (
    <div>
      <Helmet>
        <title>دسته بندی پروژه ها</title>
      </Helmet>
      <PageHeader
        title="لیست دسته بندی ها"
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
            title: 'دسته بندی ها',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت دسته بندی"
            renderForm={() => <ProjectCategoriesForm />}
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
            <ProjectCategoriesTable key="all-project-categories-table" data={projectsData} />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
