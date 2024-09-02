import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form } from 'antd';
import EditAcademyForm from '../../components/dashboard/academy/academyForm/EditAcademyForm';

export const EditAcademyPage = () => {
  const [form] = useForm();
  return (
    <div>
      <Helmet>
        <title>آکادمی</title>
      </Helmet>
      <PageHeader
        title="ویرایش مقاله"
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
            title: 'ویرایش مقاله',
          }
        ]}
      />
      <Form form={form}>
        <EditAcademyForm form={form}/>
      </Form>
    </div>
  );
};
