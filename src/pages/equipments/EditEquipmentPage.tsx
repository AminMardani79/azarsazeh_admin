import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import EditEquipmentForm from '../../components/dashboard/equipments/equipmentsForm/EditEquipmentForm';

export const EditEquipmentPage = () => {
  const [form] = useForm();
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
          }
        ]}
      />
      <Form form={form}>
        <EditEquipmentForm form={form}/>
      </Form>
    </div>
  );
};
