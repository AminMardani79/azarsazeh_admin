import { Button, Col, Form, FormInstance, Input, Row } from 'antd';

const EditJobCategoryForm = ({ form }: { form: FormInstance<any> }) => {
  const handleClick = () => form.submit();

  return (
    <Row>
      <Col span={24} md={10}>
        <Form.Item
          label="عنوان دسته بندی شغل"
          name="name"
          rules={[{ required: true, message: 'لطفا عنوان دسته بندی شغل را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Button size="middle" type="primary" onClick={handleClick}>
          ویرایش
        </Button>
      </Col>
    </Row>
  );
};

export default EditJobCategoryForm;
