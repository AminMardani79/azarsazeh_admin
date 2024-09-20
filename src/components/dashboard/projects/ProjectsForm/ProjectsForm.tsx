import { Form, Input } from 'antd';

const ProjectsForm = () => {
  return (
    <>
      <Form.Item
        label="نام پروژه"
        name="name"
        rules={[{ required: true, message: 'لطفا نام پروژه را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>

    </>
  );
};

export default ProjectsForm;
