import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const CompanyForm = () => {

  return (
    <>
      <Form.Item
        label="عنوان مطلب"
        name="name"
        rules={[{ required: true, message: 'لطفا عنوان مطلب را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="توضیحات مطلب"
        name="description"
        rules={[{ required: true, message: 'لطفا توضیحات مطلب را وارد کنید.' }]}
      >
        <TextArea />
      </Form.Item>
    </>
  );
};

export default CompanyForm;
