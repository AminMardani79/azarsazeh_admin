import { Col, FormInstance, Row } from 'antd';
import { Card, PageHeader, ProjectsTable } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import CreateButton from '../../components/CreateButton/CreateButton';
import ProjectsForm from '../../components/dashboard/projects/ProjectsForm/ProjectsForm';
import {
  useCreateProject,
  useProjectCategories,
  useProjects,
} from '../../services/project.api';
import { useEffect } from 'react';

export const ProjectPage = () => {
  const { data, isFetching, refetch: refetchProjects } = useProjects();
  const { mutate, isSuccess, isPending } = useCreateProject();
  const { refetch: refetchCategories, data: projectCategories } =
    useProjectCategories(false);

  useEffect(()=> {
    if (isSuccess) {
      refetchProjects();
    }
  }, [isSuccess])

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
            renderForm={(form: FormInstance) => (
              <ProjectsForm
                form={form}
                categories={projectCategories?.data.results}
              />
            )}
            mutate={mutate}
            refetch={refetchCategories}
            confirmLoading={isPending}
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
          <Card title="پروژه ها">
            <ProjectsTable
              key="all-project-table"
              data={data?.data.results}
              loading={isFetching}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
