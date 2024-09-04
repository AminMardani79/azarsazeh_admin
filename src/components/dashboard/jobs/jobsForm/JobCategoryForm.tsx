import { Form, Input } from 'antd';

const JobCategoryForm = () => {

  return (
    <>
      <Form.Item
        label="عنوان دسته بندی"
        name="name"
        rules={[{ required: true, message: 'لطفا عنوان دسته بندی را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default JobCategoryForm;
