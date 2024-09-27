import { Button, Col, Form, FormInstance, Input, Row } from 'antd';
import { EditJobCategory } from '../../../../types/job.types';
import { useEffect } from 'react';

const EditJobCategoryForm = ({
  form,
  data,
  confirmLoading,
}: {
  form: FormInstance<any>;
  data: EditJobCategory;
  confirmLoading: boolean;
}) => {
  const handleClick = () => form.submit();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        title: data.title,
      });
    }
  }, [data]);

  return (
    <Row>
      <Col span={24} md={10}>
        <Form.Item
          label="عنوان دسته بندی شغل"
          name="title"
          rules={[
            {
              required: true,
              message: 'لطفا عنوان دسته بندی شغل را وارد کنید.',
            },
          ]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Button
          size="middle"
          type="primary"
          onClick={handleClick}
          loading={confirmLoading}
        >
          ویرایش
        </Button>
      </Col>
    </Row>
  );
};

export default EditJobCategoryForm;
