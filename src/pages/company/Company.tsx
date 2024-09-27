import { Col, FormInstance, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import CreateButton from '../../components/CreateButton/CreateButton';
import { CompanyTable } from '../../components/dashboard/company/companyTable/CompanyTable';
import CompanyForm from '../../components/dashboard/company/companyForm/CompanyForm';
import {
  useCompanyArticles,
  useCreateCompanyArticle,
} from '../../services/company.api';
import { useEffect } from 'react';

export const CompanyPage = () => {
  const { refetch, data, isSuccess } = useCompanyArticles();
  const { mutate, isPending } = useCreateCompanyArticle();

  useEffect(() => {
    if (isSuccess) {
      refetch();
    }
  }, [isSuccess]);

  return (
    <div>
      <Helmet>
        <title>شرکت ما</title>
      </Helmet>
      <PageHeader
        title="لیست مطالب"
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
            title: 'شرکت ما',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت مطلب"
            mutate={mutate}
            confirmLoading={isPending}
            renderForm={(form: FormInstance) => <CompanyForm form={form} />}
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
          <Card title="مطالب">
            <CompanyTable
              key="artcles-table"
              data={data?.data.results}
              refetch={refetch}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
