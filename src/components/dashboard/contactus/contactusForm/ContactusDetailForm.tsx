import { Col, Form, Input, Row } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const ContactUsDetailForm = () => {
  return (
    <Row gutter={[10,1]}>
      <Col span={24} md={12}>
        <Form.Item
          label="نام"
          name="name"
        >
          <Input disabled/>
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="نام خانوادگی"
          name="family"
        >
          <Input disabled/>
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="ایمیل"
          name="email"
        >
          <Input disabled/>
        </Form.Item>
      </Col>
      <Col span={24} md={12}>
        <Form.Item
          label="شماره تلفن"
          name="phoneNumber"
        >
          <Input disabled/>
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          label="توضیحات"
          name="description"
        >
          <TextArea disabled rows={10}/>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ContactUsDetailForm;
