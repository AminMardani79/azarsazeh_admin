import { Form } from 'antd';
import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import EditEquipmentCategoryForm from '../../components/dashboard/equipments/equipmentCategoryForm/EditEquipmentCategoryForm';

export const EditEquipmentCategorytPage = () => {
  const [form] = useForm();

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
      <Form form={form}>
        <EditEquipmentCategoryForm form={form}/>
      </Form>
    </div>
  );
};
