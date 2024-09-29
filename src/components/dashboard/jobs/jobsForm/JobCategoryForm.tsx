import { Form, Input } from 'antd';

const JobCategoryForm = () => {

  return (
    <>
      <Form.Item
        label="عنوان دسته بندی"
        name="title"
        rules={[{ required: true, message: 'لطفا عنوان دسته بندی را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="(انگلیسی) عنوان دسته بندی"
        name="title_en"
        rules={[{ required: true, message: 'لطفا عنوان دسته بندی را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
    </>
  );
};

export default JobCategoryForm;
