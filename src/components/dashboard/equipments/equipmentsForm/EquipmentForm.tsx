import { Form, Input } from 'antd';

const EquipmentForm = () => {

  return (
    <>
      <Form.Item
        label="نام تجهیزات"
        name="name"
        rules={[{ required: true, message: 'لطفا نام تجهیزات را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default EquipmentForm;
