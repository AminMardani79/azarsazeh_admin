import { Col, FormInstance, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import CreateButton from '../../components/CreateButton/CreateButton';
import { ProjectCategoriesTable } from '../../components/dashboard/projects/ProjectCategoriesTable/ProjectCategoriesTable';
import ProjectCategoriesForm from '../../components/dashboard/projects/projectCategoryForm/ProjectCategoryForm';
import {
  useCreateProjectCategory,
  useProjectCategories,
} from '../../services/project.api';
import { useState } from 'react';

export const ProjectCategoriesPage = () => {
  const [images, setImages] = useState<File[]>([]);
  const { data, isFetching } = useProjectCategories();
  const { mutate } = useCreateProjectCategory();

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
            mutate={mutate}
            renderForm={(form: FormInstance) => <ProjectCategoriesForm form={form}/>}
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
          <Card title="دسته بندی ها">
            <ProjectCategoriesTable
              key="all-project-categories-table"
              data={data?.data.results}
              loading={isFetching}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
