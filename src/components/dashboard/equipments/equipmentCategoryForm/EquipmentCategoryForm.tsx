import { Form, Input } from 'antd';

const EquipmentCategoryForm = () => {

  return (
    <>
      <Form.Item
        label="نام دسته بندی تجهیزات"
        name="name"
        rules={[{ required: true, message: 'لطفا نام دسته بندی را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default EquipmentCategoryForm;
