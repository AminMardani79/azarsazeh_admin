import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin, message } from 'antd';
import EditEquipmentForm from '../../components/dashboard/equipments/equipmentsForm/EditEquipmentForm';
import { useParams } from 'react-router-dom';
import {
  useEditEquipment,
  useEquipment,
  useEquipmentCategories,
} from '../../services/equipment.api';
import { generateResponseFormData } from '../../utils';

export const EditEquipmentPage = () => {
  const [form] = useForm();
  const { id } = useParams();
  const { data, isFetching } = useEquipment(id!);
  const { data: categories } = useEquipmentCategories();
  const { mutate, isPending } = useEditEquipment();

  const onSuccess = () => message.success('ویرایش فرم با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id }, { onSuccess });
  };

  return (
    <div>
      <Helmet>
        <title>تجهیزات</title>
      </Helmet>
      <PageHeader
        title="ویرایش تجهیزات"
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
            title: 'ویرایش تجهیزات',
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditEquipmentForm
            form={form}
            data={data?.data}
            categories={categories?.data.results}
            confirmLoading={isPending}
          />
        </Form>
      </Spin>
    </div>
  );
};
