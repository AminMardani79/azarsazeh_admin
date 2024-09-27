import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin, message } from 'antd';
import EditCompanyForm from '../../components/dashboard/company/companyForm/EditCompanyForm';
import { useParams } from 'react-router-dom';
import {
  useCompanyArticle,
  useEditCompanyArticle,
} from '../../services/company.api';
import { generateResponseFormData } from '../../utils';

export const EditCompanyPage = () => {
  const [form] = useForm();
  const params = useParams();

  const { data, isFetching } = useCompanyArticle(params.id!);
  const { mutate, isPending } = useEditCompanyArticle();

  const onSuccess = () => message.success('ویرایش با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id: params.id! }, { onSuccess });
  };

  return (
    <div>
      <Helmet>
        <title>مطلب</title>
      </Helmet>
      <PageHeader
        title="ویرایش مطلب"
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
            title: 'ویرایش مطلب',
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditCompanyForm
            form={form}
            data={data?.data}
            confirmLoading={isPending}
          />
        </Form>
      </Spin>
    </div>
  );
};
