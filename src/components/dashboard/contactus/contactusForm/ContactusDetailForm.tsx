import {useEffect} from 'react';
import { Col, Form, Input, Row } from 'antd';
import { useForm } from 'antd/es/form/Form';
import TextArea from 'antd/es/input/TextArea';
import { ContactUs } from '../../../../types/contactUs.types';

const ContactUsDetailForm = ({data}: {data: ContactUs}) => {
  const [form] = useForm();

  useEffect(() => {
    if (data) {
      form.setFieldsValue({
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        phone: data.phone,
        message: data.message

      });
    }
  }, [data]);

  return (
    <Form form={form}>
      <Row gutter={[10, 1]}>
        <Col span={24} md={12}>
          <Form.Item label="نام" name="first_name">
            <Input disabled />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <Form.Item label="نام خانوادگی" name="last_name">
            <Input disabled />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <Form.Item label="ایمیل" name="email">
            <Input disabled />
          </Form.Item>
        </Col>
        <Col span={24} md={12}>
          <Form.Item label="شماره تلفن" name="phone">
            <Input disabled />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item label="توضیحات" name="message" className='text-area'>
            <TextArea disabled rows={10} />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default ContactUsDetailForm;
