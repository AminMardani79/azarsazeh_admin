import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin, message } from 'antd';
import EditAcademyForm from '../../components/dashboard/academy/academyForm/EditAcademyForm';
import { useParams } from 'react-router-dom';
import {
  useAcademyArticle,
  useEditAcademyArticle,
} from '../../services/academy.api';
import { generateResponseFormData } from '../../utils';

export const EditAcademyPage = () => {
  const [form] = useForm();
  const params = useParams();

  const { data, isFetching } = useAcademyArticle(params.id!);
  const { mutate, isPending } = useEditAcademyArticle();

  const onSuccess = () => message.success('ویرایش با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id: params.id! }, { onSuccess });
  };

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
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditAcademyForm
            form={form}
            data={data?.data}
            confirmLoading={isPending}
          />
        </Form>
      </Spin>
    </div>
  );
};
