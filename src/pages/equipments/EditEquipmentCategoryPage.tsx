import { Form, Spin, message } from 'antd';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import EditEquipmentCategoryForm from '../../components/dashboard/equipments/equipmentCategoryForm/EditEquipmentCategoryForm';
import { useParams } from 'react-router-dom';
import {
  useEditEquipmentCategory,
  useEquipmentCategory,
} from '../../services/equipment.api';
import { generateResponseFormData } from '../../utils';

export const EditEquipmentCategorytPage = () => {
  const [form] = useForm();

  const params = useParams();

  const { data, isFetching } = useEquipmentCategory(params.id!);
  const { mutate, isPending } = useEditEquipmentCategory();

  const onSuccess = () => message.success('ویرایش با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id: params.id! }, { onSuccess });
  };

  return (
    <div>
      <Helmet>
        <title>تجهیزات</title>
      </Helmet>
      <PageHeader
        title="ویرایش دسته بندی تجهیزات"
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
            title: 'دسته بندی تجهیزات',
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditEquipmentCategoryForm
            form={form}
            data={data?.data}
            confirmLoading={isPending}
          />
        </Form>
      </Spin>
    </div>
  );
};
