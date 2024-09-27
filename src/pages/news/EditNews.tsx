import { Helmet } from 'react-helmet-async';
import { PageHeader } from '../../components';
import { HomeOutlined } from '@ant-design/icons';
import { useForm } from 'antd/es/form/Form';
import { Form, Spin, message } from 'antd';
import EditNewsForm from '../../components/dashboard/news/newsForm/EditNewsForm';
import { useParams } from 'react-router-dom';
import { useEditNews, useNews } from '../../services/news.api';
import { generateResponseFormData } from '../../utils';

export const EditNewsPage = () => {
  const [form] = useForm();

  const params = useParams();

  const { data, isFetching } = useNews(params.id!);
  const { mutate, isPending } = useEditNews();

  const onSuccess = () => message.success('ویرایش با موفقیت انجام شد');

  const handleFormFinish = (values: any) => {
    const formData = generateResponseFormData(values);
    mutate({ data: formData, id: params.id! }, { onSuccess });
  };

  return (
    <div>
      <Helmet>
        <title>اخبار</title>
      </Helmet>
      <PageHeader
        title="ویرایش خبر"
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
            title: 'ویرایش خبر',
          },
        ]}
      />
      <Spin spinning={isFetching}>
        <Form form={form} onFinish={handleFormFinish}>
          <EditNewsForm
            form={form}
            data={data?.data}
            confirmLoading={isPending}
          />
        </Form>
      </Spin>
    </div>
  );
};
