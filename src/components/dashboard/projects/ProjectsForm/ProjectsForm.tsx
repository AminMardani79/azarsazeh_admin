import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload } from 'antd';

const ProjectsForm = () => {
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  const beforeUpload = (file: any) => {
    return false;
  };

  return (
    <>
      <Form.Item
        label="نام"
        name="name"
        rules={[{ required: true, message: 'لطفا نام پروژه را وارد کنید.' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="file"
        label="Upload"
        valuePropName="fileList"
        getValueFromEvent={normFile}
      >
        <Upload
          name="file"
          beforeUpload={beforeUpload}
          maxCount={1}
        >
          <Button icon={<UploadOutlined />}>Select File</Button>
        </Upload>
      </Form.Item>
    </>
  );
};

export default ProjectsForm;
