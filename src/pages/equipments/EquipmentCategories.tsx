import { Col, FormInstance, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import CreateButton from '../../components/CreateButton/CreateButton';
import EquipmentCategoryForm from '../../components/dashboard/equipments/equipmentCategoryForm/EquipmentCategoryForm';
import { EquipmentCategoriesTable } from '../../components/dashboard/equipments/equipmentCategoriesTable/EquipmentCategoriesTable';
import { useCreateEquipmentCategory, useEquipmentCategories } from '../../services/equipment.api';
import { useEffect } from 'react';

export const EquipmentCategoriesPage = () => {
  const { data, isFetching, refetch } = useEquipmentCategories();
  const {mutate, isSuccess, isPending} = useCreateEquipmentCategory();

  useEffect(()=> {
    if(isSuccess){
      refetch();
    }
  },[isSuccess]);

  return (
    <div>
      <Helmet>
        <title>دسته بندی تجهیزات ها</title>
      </Helmet>
      <PageHeader
        title="دسته بندی های تجهیزات"
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
            renderForm={(form: FormInstance) => <EquipmentCategoryForm form={form}/>}
            mutate={mutate}
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
          <Card title="دسته بندی تجهیزات">
            <EquipmentCategoriesTable
              key="all-equipment-categories-table"
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
