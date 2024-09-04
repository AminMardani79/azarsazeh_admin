import { Button, Col, Form, FormInstance, Input, Row, Select } from 'antd';

const EditJobForm = ({ form }: { form: FormInstance<any> }) => {
  const handleClick = () => form.submit();

  return (
    <Row gutter={[10, 0]}>
      <Col span={24} md={10}>
        <Form.Item
          label="عنوان شغل"
          name="name"
          rules={[{ required: true, message: 'لطفا عنوان شغل را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={10}>
        <Form.Item
          label="مکان"
          name="location"
          rules={[{ required: true, message: 'لطفا مکان را وارد کنید.' }]}
        >
          <Input />
        </Form.Item>
      </Col>
      <Col span={24} md={10}>
        <Form.Item
          label="دسته بندی"
          name="category"
          rules={[{ required: true, message: 'لطفا دسته بندی را وارد کنید.' }]}
        >
          <Select
            labelInValue
            options={[
              {
                value: 'jack',
                label: 'Jack (100)',
              },
              {
                value: 'lucy',
                label: 'Lucy (101)',
              },
            ]}
          />
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

export default EditJobForm;
