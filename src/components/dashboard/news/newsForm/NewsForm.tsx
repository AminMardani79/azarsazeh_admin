import { Form, Input } from 'antd';
import TextArea from 'antd/es/input/TextArea';

const NewsForm = () => {

  return (
    <>
      <Form.Item
        label="نام خبر"
        name="name"
        rules={[{ required: true, message: 'لطفا نام خبر را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="توضیحات خبر"
        name="description"
        rules={[{ required: true, message: 'لطفا توضیحات خبر را وارد کنید.' }]}
      >
        <TextArea />
      </Form.Item>
    </>
  );
};

export default NewsForm;
