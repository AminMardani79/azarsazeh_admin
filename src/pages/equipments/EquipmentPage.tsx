import { Col, FormInstance, Row } from 'antd';
import { Card, PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { Helmet } from 'react-helmet-async';
import CreateButton from '../../components/CreateButton/CreateButton';
import EquipmentForm from '../../components/dashboard/equipments/equipmentsForm/EquipmentForm';
import { EquipmentsTable } from '../../components/dashboard/equipments/equipmentsTable/EquipmentsTable';
import {
  useCreateEquipment,
  useEquipmentCategories,
  useEquipments,
} from '../../services/equipment.api';
import { useEffect } from 'react';

export const EquipmentPage = () => {
  const { data, isFetching, refetch: refetchEquipments } = useEquipments();
  const { data: categories, refetch } = useEquipmentCategories(false);
  const { mutate, isSuccess, isPending } = useCreateEquipment();

  useEffect(() => {
    if (isSuccess) {
      refetchEquipments();
    }
  }, [isSuccess]);

  return (
    <div>
      <Helmet>
        <title>تجهیزات ها</title>
      </Helmet>
      <PageHeader
        title="تجهیزات"
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
            title: 'تجهیزات',
          },
        ]}
        renderButtons={() => (
          <CreateButton
            title="ساخت تجهیزات"
            renderForm={(form: FormInstance) => (
              <EquipmentForm
                form={form}
                categories={categories?.data.results}
              />
            )}
            refetch={refetch}
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
          <Card title="تجهیزات">
            <EquipmentsTable
              key="all-equipment-categories-table"
              data={data?.data.results}
              loading={isFetching}
              refetch={refetchEquipments}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};
