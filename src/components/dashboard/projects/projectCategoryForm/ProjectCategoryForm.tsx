import { Form, Input } from 'antd';

const ProjectCategoriesForm = () => {

  return (
      <Form.Item
        label="نام دسته بندی"
        name="name"
        rules={[{ required: true, message: 'لطفا نام دسته بندی را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
  );
};

export default ProjectCategoriesForm;
